import React from 'react'
import { BackHandler, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import TalkInfo from '../Components/TalkInfo'
import { NavigationActions } from 'react-navigation'
import ScheduleActions from '../Redux/ScheduleRedux'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images, Colors } from '../Themes'
import styles from './Styles/TalkDetailScreenStyle'
import { contains } from 'ramda'

class TalkDetail extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? Images.activeScheduleIcon : Images.inactiveScheduleIcon} />
    )
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.goBack)
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  renderSpeaker = (speaker, index) => {
    return (
      <View key={index}>
        <Text style={styles.heading}>
          {speaker.name}
        </Text>
        <Text style={styles.description}>
          {speaker.bio}
        </Text>
      </View>
    )
  }

  renderSpeakers = () => {
    const { speakerInfo } = this.props

    if (speakerInfo) {
      return (speakerInfo.map((speaker, index) => this.renderSpeaker(speaker, index)))
    }
  }

  render() {
    const { title, eventStart } = this.props
    return (
      <LinearGradient
        colors={Colors.wpBlueGradient}>
        <ScrollView>
          <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={this.goBack}>
              <Image style={styles.backButtonIcon} source={Images.arrowIcon} />
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            {/* <View style={styles.cardShadow1} />
            <View style={styles.cardShadow2} /> */}
            {this.props.image != "" &&
              <View style={styles.circle}>
                <Image
                  style={styles.avatar}
                  source={{ uri: this.props.image }}
                />
              </View>}
            <View style={styles.card}>
              <Text style={styles.sectionHeading}>
                TALK
              </Text>
              <Text style={styles.heading}>
                {this.props.title}
              </Text>
              <Text style={styles.description}>
                {this.props.description}
              </Text>
              {/* {this.props.speakerInfo != "" &&
                <Text style={styles.sectionHeading}>
                  ABOUT
                </Text>
              } */}
              {this.renderSpeakers()}
            </View>
            <TalkInfo
              start={new Date(this.props.eventStart)}
              duration={Number(this.props.duration)}
              isFinished={this.props.currentTime > this.props.eventStart}
              showWhenFinished={false}
              location={this.props.location}
              room={this.props.room}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.schedule.selectedEvent,
    currentTime: new Date(state.schedule.currentTime)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TalkDetail)
