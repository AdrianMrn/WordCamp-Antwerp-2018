import React, { Component } from 'react'
import { BackHandler, AppState, View, Image, FlatList, Text, ScrollView, TouchableOpacity, Linking } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import DayToggle from '../Components/DayToggle'
import Talk from '../Components/Talk'
import TalkInfo from '../Components/TalkInfo'
import BreakInfo from '../Components/BreakInfo'
import Break from '../Components/Break'
import ScheduleActions from '../Redux/ScheduleRedux'
import { connect } from 'react-redux'
import {
  compareAsc,
  isSameDay,
  addMinutes,
  isWithinRange,
  subMilliseconds,
  format,
  getTime,
} from 'date-fns'
import {
  merge,
  groupWith,
  contains,
  assoc,
  map,
  sum,
  findIndex
} from 'ramda'
import Config from '../Config/AppConfig'
import { Images, Colors, Fonts } from '../Themes'
import styles from './Styles/ScheduleScreenStyle'

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Metrics } from '../Themes'
import talkInfoStyles from './Styles/TalkDetailScreenStyle';
import { NavigationActions } from 'react-navigation'

const isActiveCurrentDay = (currentTime, activeDay) =>
  isSameDay(currentTime, new Date(Config.conferenceDates[activeDay]))

class ScheduleCarouselScreen extends Component {
  constructor(props) {
    super(props)

    const { schedule, currentTime } = props
    const eventsByDay = this.getEventsByDayFromSchedule(schedule)
    const activeDay = 0
    const isCurrentDay = isActiveCurrentDay(currentTime, activeDay)
    const appState = AppState.currentState

    this.state = { eventsByDay, isCurrentDay, activeDay, appState }
  }

  static navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ focused }) => (
      <Image
        source={
          focused
            ? Images.activeScheduleIcon
            : Images.inactiveScheduleIcon
        }
      />
    )
  }

  getEventsByDayFromSchedule = (schedule) => {
    const mergeTimes = (e) => {
      const eventDuration = Number(e.duration)
      const eventStart = new Date(e.time * 1000)
      const eventFinal = addMinutes(eventStart, eventDuration)
      // ends 1 millisecond before event
      const eventEnd = subMilliseconds(eventFinal, 1)

      return merge(e, { eventStart, eventEnd, eventDuration, eventFinal })
    }

    const sorted = [...schedule].map(mergeTimes).sort((a, b) => {
      return compareAsc(a.eventStart, b.eventStart)
    })

    return sorted
    /* this.setState({sortedSchedule: sorted}) */

    /* return groupWith((a, b) => isSameDay(a.eventStart, b.eventStart), sorted) */
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.goBack)
    AppState.addEventListener('change', this._handleAppStateChange)
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange)
  }

  _handleAppStateChange = (nextAppState) => {
    const { appState } = this.state
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      this.props.getScheduleUpdates()
    }
    this.setState({ appState: nextAppState })
  }

  componentWillReceiveProps(newProps) {
    const { activeDay, eventsByDay } = this.state
    const { currentTime, schedule } = newProps

    // Update currentTime before updating data
    if (currentTime) {
      this.setState({ currentTime }, () => {
        this.setState({
          eventsByDay: this.getEventsByDayFromSchedule(schedule),
          isCurrentDay: isActiveCurrentDay(currentTime, activeDay),
        })
      })
    }
  }

  // if value exists, create the function calling it, otherwise false
  funcOrFalse = (func, val) => val ? () => func.call(this, val) : false

  renderSpeaker = (speaker) => {
    if (speaker) {
      return (
        <View>
          <Text style={talkInfoStyles.heading}>
            {speaker.name}
          </Text>
          <Text style={talkInfoStyles.description}>
            {speaker.bio}
          </Text>
          {(speaker.company != "") &&
            <TouchableOpacity onPress={() => Linking.openURL(speaker.company)}>
              <Text style={[talkInfoStyles.description, Fonts.underline]}>
                Visit website
              </Text>
            </TouchableOpacity>
          }
        </View>
      )
    }
  }

  renderCarouselItem = ({ item }) => {
    const { isCurrentDay } = this.state
    const { currentTime } = this.props
    const { eventDuration, eventStart, eventEnd, eventFinal } = item
    const isActive = isWithinRange(currentTime, eventStart, eventEnd)
    const isFinished = currentTime > eventEnd

    if (item.type === 'talk') {
      return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: Metrics.screenWidth }}>
          <View style={[talkInfoStyles.container, { marginTop: Metrics.doubleBaseMargin * 3, marginBottom: Metrics.doubleBaseMargin }]}>

            <TouchableOpacity style={talkInfoStyles.backButton} onPress={this.goBack}>
              <Image style={talkInfoStyles.backButtonIcon} source={Images.arrowIcon} />
              <Text style={talkInfoStyles.backButtonText}>Back</Text>
            </TouchableOpacity>

            {item.image != "" &&
              <View style={talkInfoStyles.circle}>
                <Image
                  style={talkInfoStyles.avatar}
                  source={{ uri: item.image }}
                />
              </View>}
            <View style={talkInfoStyles.card}>
              <Text style={talkInfoStyles.sectionHeading}>
                TALK
          </Text>
              <Text style={talkInfoStyles.heading}>
                {item.title}
              </Text>
              <Text style={talkInfoStyles.description}>
                {item.description}
              </Text>
              {this.renderSpeaker(item.speakerInfo[0])}
            </View>
            <TalkInfo
              start={new Date(item.eventStart)}
              duration={Number(item.duration)}
              isFinished={item.currentTime > item.eventStart}
              showWhenFinished={false}
              location={item.location}
              room={item.room}
            />
          </View>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: Metrics.screenWidth }}>
          <View style={[talkInfoStyles.container, { marginTop: Metrics.doubleBaseMargin * 3, marginBottom: Metrics.doubleBaseMargin * 6 }]}>

            <TouchableOpacity style={talkInfoStyles.backButton} onPress={this.goBack}>
              <Image style={talkInfoStyles.backButtonIcon} source={Images.arrowIcon} />
              <Text style={talkInfoStyles.backButtonText}>Back</Text>
            </TouchableOpacity>

            <View style={talkInfoStyles.card}>
              <Text style={talkInfoStyles.heading}>
                {item.title}
              </Text>
              <Text style={talkInfoStyles.description}>
                {item.description}
              </Text>
              {this.renderSpeaker(item.speakerInfo[0])}
            </View>
            <BreakInfo
              start={format(getTime(eventStart - 3600000), 'HH:mm')}
              end={format(getTime(eventFinal - 3600000), 'HH:mm')}
            />

          </View>
        </ScrollView>
      )
    }
  }

  render() {
    const { isCurrentDay, activeDay, sortedSchedule, eventsByDay } = this.state
    const { eventIndex } = this.props
    console.tron.log(eventIndex)

    return (
      <LinearGradient
        colors={Colors.wpBlueGradient}>
        {/* <DayToggle
          activeDay={activeDay}
          onPressIn={this.setActiveDay}
        /> */}

        <Carousel
          ref={'carousel'}
          data={eventsByDay}
          renderItem={this.renderCarouselItem}
          sliderWidth={Metrics.screenWidth}
          itemWidth={Metrics.screenWidth}

          firstItem={eventIndex}

        />

      </LinearGradient>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.schedule.selectedEvent,
    currentTime: new Date(state.schedule.currentTime),
    schedule: state.schedule.speakerSchedule
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getScheduleUpdates: () => dispatch(ScheduleActions.getScheduleUpdates()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleCarouselScreen)
