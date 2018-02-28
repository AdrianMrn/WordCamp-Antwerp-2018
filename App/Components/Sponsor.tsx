import React from 'react'
import {
  TouchableOpacity,
  Image,
  Linking,
  ImageStyle,
  Text
} from 'react-native'
import styles from './Styles/SponsorsStyles'
import { Metrics } from '../Themes'

interface SponsorProps {
  url: string
  image: string
  isLow?: boolean
  name?: string
  tier?: string
}

const Sponsor = (props: SponsorProps) => {
  return (
    
    <TouchableOpacity
      style={styles.sponsor}
      onPress={() => Linking.openURL(props.url)}>
      {(!props.isLow) &&
        <Image style={[styles.sponsorLogo, styles[props.tier + 'SponsorStyle']]} source={props.image} />
      }
      {(props.isLow) &&
        <Text style={styles.lowTier}>
          {props.name}
        </Text>
      }
    </TouchableOpacity>
  )
}

export default Sponsor
