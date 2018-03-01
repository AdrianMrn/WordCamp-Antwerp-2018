import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'

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
    color: Colors.coal,
  },
  wordCampIcon: {
    width: Metrics.screenWidth -100,
    height: Metrics.screenWidth /2,
    margin: 10,
    padding: 5,
    flex: 1,
    resizeMode: 'contain'
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
    marginHorizontal: Metrics.doubleBaseMargin,
    fontFamily: Fonts.type.base,
    fontSize: 15,
    letterSpacing: 0.5,
    lineHeight: 23,
    backgroundColor: Colors.transparent,
    color: Colors.charcoal,
    textAlign: 'center',
    paddingVertical: 15
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.snow,
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 0.5,
  },
  schedule: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scheduleDay: {
    marginHorizontal: 5,
    width: '45%',
    backgroundColor: Colors.wpBlueGradient[0],
    elevation: 5,
    borderWidth: 1,
    borderColor: Colors.clear,

    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  scheduleText: {
    color: Colors.snow,
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 0.5,
  },
  where: {
    ...Fonts.underline,
    textAlign: 'center',
    marginTop: 5,
    color: Colors.snow,
    opacity: 0.6,
    fontSize: 10,
  },
  linkContainer: {
    marginBottom: 30
  }
})
