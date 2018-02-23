import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  heading: {
    marginTop: 30,
    /* marginBottom: 14, */
    fontFamily: Fonts.type.bold,
    fontSize: 31,
    letterSpacing: 0.2,
    backgroundColor: Colors.transparent,
    color: Colors.snow
  },
  description: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    color: Colors.snow,
    letterSpacing: 0.47,
    lineHeight: 23,
    marginHorizontal: 20,
  },
  hashtag: {
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.snow
  },
  twitter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: Colors.transparent,
  },
  twitterHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  container: {
    /* borderTopWidth: 1,
    borderTopColor: Colors.snow, */
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    height: 250,
    width: Metrics.screenWidth
  }
})
