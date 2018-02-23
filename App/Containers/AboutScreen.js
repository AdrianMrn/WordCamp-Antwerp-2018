import React from 'react'
import {
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  Text,
  LayoutAnimation
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import WordCamp from '../Components/WordCamp'
import Twitter from '../Components/Twitter'
import Sponsors from '../Components/Sponsors'
import { Images, Colors } from '../Themes'
import { connect } from 'react-redux'
import styles from './Styles/AboutScreenStyle'

class AboutScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'General Info',
    tabBarIcon: ({ focused }) => (
      <Image source={focused ? Images.activeInfoIcon : Images.inactiveInfoIcon} />
    )
  }

  render() {
    return (
      <LinearGradient colors={ Colors.wpBlueGradient }>
        {/* <LinearGradient colors={ ['#FFEC94', '#f2d31f'] }> */}
          <ScrollView>
            <View style={styles.container}>
              <WordCamp />
              <Twitter />
              <Sponsors />
            </View>
          </ScrollView>
      </LinearGradient>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentTime: new Date(state.schedule.currentTime)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen)
