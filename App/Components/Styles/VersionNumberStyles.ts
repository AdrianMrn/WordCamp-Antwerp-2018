import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transparent,
  },
  description: {
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    fontSize: 10,
    color: Colors.charcoal,
    letterSpacing: 0.47,
    lineHeight: 23,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
})
