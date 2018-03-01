import React from 'react'
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Images, Colors, Fonts } from '../Themes'
import styles from './Styles/VersionNumberStyles'
import VersionNumber from 'react-native-version-number'

const Flux = (props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Current version: {VersionNumber.appVersion}
      </Text>

    </View>
  )
}

export default Flux
