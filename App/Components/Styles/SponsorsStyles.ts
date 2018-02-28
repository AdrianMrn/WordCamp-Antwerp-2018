import { TextStyle, ViewStyle, ImageStyle, ImageStatic } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

interface SponsorStyles {
  sponsors: ViewStyle
  heading: TextStyle
  description: TextStyle
  sponsorTierTitle: TextStyle
  sponsorTier: ViewStyle
  sponsor: ViewStyle
  sponsorLogo: ImageStyle
  lowTier: TextStyle
  diamondSponsorStyle: ImageStyle
  goldSponsorStyle: ImageStyle
  silverSponsorStyle: ImageStyle
  /* bronzeSponsorStyle: TextStyle */
}

const SponsorsStyles: SponsorStyles = {
  sponsors: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 10,
    backgroundColor: Colors.transparent
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
    paddingTop: 15,
  },
  sponsorTierTitle: {
    marginTop: 40,
    marginBottom: Metrics.baseMargin,
    fontFamily: Fonts.type.bold,
    fontSize: 15,
    color: Colors.charcoal,
    letterSpacing: 0.5,
    lineHeight: 23
  },
  sponsorTier: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.screenWidth,
    flexWrap: 'wrap',
  },
  sponsor: {
    height: 50,
    margin: 10,
    marginVertical: 20,
    flexShrink: 0,
    alignItems: 'center',
  },
  sponsorLogo: {
    flex: 1,
    resizeMode: 'contain'
  },
  lowTier: {
    color: Colors.charcoal,
    flex: 1,
    marginHorizontal: 5
  },
  diamondSponsorStyle: {
    width: (Metrics.screenWidth / 2) - 50,
    height: 100,
  },
  goldSponsorStyle: {
    width: (Metrics.screenWidth / 3) - 50,
    height: 100,
  },
  silverSponsorStyle: {
    width: (Metrics.screenWidth / 3) - 40,
    height: 100,
  },/* 
  bronzeSponsorStyle: {

  }, */
}

export default SponsorsStyles
