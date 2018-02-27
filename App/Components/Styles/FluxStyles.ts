import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  flux: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: Colors.transparent,
  },
  heading: {
    marginTop: Metrics.doubleBaseMargin,
    fontFamily: Fonts.type.bold,
    fontSize: 31,
    letterSpacing: 0.2,
    backgroundColor: Colors.transparent,
    color: Colors.coal,
  },
  description: {
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    fontSize: 15,
    color: Colors.charcoal,
    letterSpacing: 0.47,
    lineHeight: 23,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.snow,
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 0.5,
  },
  image: {
    marginTop: Metrics.doubleBaseMargin,
  },
  bold: {
    fontFamily: Fonts.type.bold
  }
})
