import React from 'react'
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Images, Colors, Fonts } from '../Themes'
import styles from './Styles/PoweredByStyles'

const Flux = (props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Powered By WordPress
      </Text>
      <View style={styles.line} />
      <Text style={styles.description}>
        This conference app was made with the WordPress REST API as a back end.
        All conference data can be managed easily through the WordPress CMS.{'\n'}{'\n'}
        The app itself was made in React Native and can be compiled for both Android and iOS.
      </Text>
    </View>
  )
}

export default Flux
