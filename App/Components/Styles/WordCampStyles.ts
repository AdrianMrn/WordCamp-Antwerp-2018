import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  wordCamp: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: Colors.transparent,
  },
  heading: {
    fontFamily: Fonts.type.description,
    fontSize: 13,
    letterSpacing: 0.2,
    backgroundColor: Colors.transparent,
    color: '#FDE5FF'
  },
  wordCampIcon: {
    marginTop: 15
  },
  line: {
    marginTop: 30,
    marginBottom: 30,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    borderBottomWidth: 1,
    height: 0,
    width: '80%'
  },
  subheading: {
    marginBottom: 30,
    fontFamily: Fonts.type.description,
    fontSize: 15,
    letterSpacing: 0.5,
    backgroundColor: Colors.transparent,
    color: Colors.snow,
    textAlign: 'center'
  },
  schedule: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.snow,
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 0.5,
  },
  scheduleText: {
    color: Colors.snow,
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 0.5,
  },
  scheduleDay: {
    width: '45%',
  }
})
