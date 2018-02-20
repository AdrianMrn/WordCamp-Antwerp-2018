import React from 'react'
import {
  TouchableOpacity,
  Image,
  Linking,
  ImageStyle
} from 'react-native'
import styles from './Styles/SponsorsStyles'
import { Metrics } from '../Themes'

interface SponsorProps {
  url: string
  image: string
  isLow?: boolean
}

const Sponsor = (props: SponsorProps) => {
  const imageStyle = props.isLow ? styles.lowTier : {}

  return (
    <TouchableOpacity
      style={styles.sponsor}
      onPress={() => Linking.openURL(props.url)}>
      <Image style={[imageStyle, {flex: 1, width: (Metrics.screenWidth/2)-50, height: 50, resizeMode: 'contain'}]} source={props.image} />
      {/* <Image style={[imageStyle, { height:50, width: "auto" }]} source={{ uri: "https://fluxit.be/react/wordcamp18/wp-content/uploads/2018/02/Volta-x-communicatie-in-vorm.png" }} /> */}
    </TouchableOpacity>
  )
}

export default Sponsor
