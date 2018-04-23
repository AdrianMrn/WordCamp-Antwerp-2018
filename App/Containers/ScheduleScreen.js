import React, { Component } from 'react'
import { AppState, View, Image, FlatList, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import DayToggle from '../Components/DayToggle'
import Talk from '../Components/Talk'
import Break from '../Components/Break'
import ScheduleActions from '../Redux/ScheduleRedux'
import { connect } from 'react-redux'
import SafeAreaView from 'react-native-safe-area-view'
import {
  compareAsc,
  isSameDay,
  addMinutes,
  isWithinRange,
  subMilliseconds
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
import { Images, Colors } from '../Themes'
import styles from './Styles/ScheduleScreenStyle'

const isActiveCurrentDay = (currentTime, activeDay) =>
  isSameDay(currentTime, new Date(Config.conferenceDates[activeDay]))

class ScheduleScreen extends Component {
  constructor(props) {
    super(props)

    const { schedule, currentTime } = props
    const eventsByDay = this.getEventsByDayFromSchedule(schedule)
    const activeDay = 0
    const data = eventsByDay[activeDay]
    const isCurrentDay = isActiveCurrentDay(currentTime, activeDay)
    const appState = AppState.currentState

    this.state = { eventsByDay, data, isCurrentDay, activeDay, appState }
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
    return groupWith((a, b) => isSameDay(a.eventStart, b.eventStart), sorted)
  }

  onEventPress = (item) => {
    const { navigation, setSelectedEvent } = this.props
    setSelectedEvent(item)

    navigation.navigate('TalkDetail')
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange)

    const { data } = this.state
    const index = this.getActiveIndex(data)
    // fixes https://github.com/facebook/react-native/issues/13202
    const wait = new Promise((resolve) => setTimeout(resolve, 200))
    wait.then(() => {
      this.refs.scheduleList.scrollToIndex({ index, animated: false })
    })
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
          data: eventsByDay[activeDay],
          eventsByDay: this.getEventsByDayFromSchedule(schedule),
          isCurrentDay: isActiveCurrentDay(currentTime, activeDay)
        })
      })
    }
  }

  getActiveIndex = (data) => {
    const { currentTime } = this.props
    const foundIndex = findIndex((i) => isWithinRange(currentTime, i.eventStart, i.eventEnd))(data)

    // handle pre-event and overscroll
    if (foundIndex < 0) {
      return 0
    } else if (foundIndex > data.length - 3) {
      return data.length - 3
    } else {
      return foundIndex
    }
  }

  setActiveDay = (activeDay) => {
    const { eventsByDay } = this.state
    const { currentTime } = this.props
    const data = eventsByDay[activeDay]
    const isCurrentDay = isActiveCurrentDay(currentTime, activeDay)

    this.setState({ data, activeDay, isCurrentDay }, () => {
      /* if (isCurrentDay) {
        // Scroll to active
        const index = this.getActiveIndex(data)
        this.refs.scheduleList.scrollToIndex({ index, animated: false })
      } else { */
      // Scroll to top
      this.refs.scheduleList.scrollToOffset({ y: 0, animated: false })
      /* } */
    })
  }

  getItemLayout = (data, index) => {
    const item = data[index]
    const itemLength = (item, index) => {
      if (item.type === 'talk') {
        // use best guess for variable height rows
        return 138 + (1.002936 * item.title.length + 6.77378)
      } else {
        return 145
      }
    }
    const length = itemLength(item)
    const offset = sum(data.slice(0, index).map(itemLength))
    return { length, offset, index }
  }

  // if value exists, create the function calling it, otherwise false
  funcOrFalse = (func, val) => val ? () => func.call(this, val) : false

  renderItem = ({ item }) => {
    const { isCurrentDay } = this.state
    const { currentTime } = this.props
    const { eventDuration, eventStart, eventEnd, eventFinal } = item
    const isActive = isWithinRange(currentTime, eventStart, eventEnd)
    const isFinished = currentTime > eventEnd

    if (item.type === 'talk') {
      return (
        <Talk
          type={item.type}
          name={item.speaker}
          avatarURL={item.image}
          title={item.title}
          start={eventStart}
          duration={eventDuration}
          onPress={() => this.onEventPress(item)}
          currentTime={currentTime}
          isCurrentDay={isCurrentDay}
          isActive={isActive}
          isFinished={isFinished}
          showWhenFinished
          location={item.location}
          room={item.room}
        />
      )
    } else {
      return (
        <Break
          type={item.type}
          title={item.title}
          start={eventStart}
          end={eventFinal}
          duration={eventDuration}
          currentTime={currentTime}
          isCurrentDay={isCurrentDay}
          isActive={isActive}
          breaktype={item.break_type}
        />
      )
    }
  }

  render() {
    const { isCurrentDay, activeDay, data } = this.state
    return (
      <LinearGradient
        colors={Colors.wpBlueGradient}>
        <SafeAreaView>
          <DayToggle
            activeDay={activeDay}
            onPressIn={this.setActiveDay}
          />
        </SafeAreaView>
        {/* {isCurrentDay && <View style={styles.timeline} />} */}
        <FlatList
          ref='scheduleList'
          data={data}
          extraData={this.props}
          renderItem={this.renderItem}
          keyExtractor={(item, idx) => `${item.title}${item.eventStart}`}
          contentContainerStyle={styles.listContent}
          getItemLayout={this.getItemLayout}
          showsVerticalScrollIndicator={false}
        />
      </LinearGradient>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentTime: new Date(state.schedule.currentTime),
    schedule: state.schedule.speakerSchedule
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getScheduleUpdates: () => dispatch(ScheduleActions.getScheduleUpdates()),
    setSelectedEvent: data => dispatch(ScheduleActions.setSelectedEvent(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleScreen)
