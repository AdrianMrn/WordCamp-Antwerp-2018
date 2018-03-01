import React from 'react'
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Images, Colors, Fonts } from '../Themes'
import styles from './Styles/FluxStyles'

const Flux = (props) => {

  return (
    <View style={styles.flux}>
      <View style={styles.line} />
      <Text style={styles.description}>
        This app was developed by <Text style={styles.bold} onPress={() => Linking.openURL("https://2018.antwerp.wordcamp.org/")}>Flux</Text>. Want to learn more?
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL("https://2018.antwerp.wordcamp.org/")}>
        <Text style={[styles.description, Fonts.underline]}>
          Visit our website
        </Text>
      </TouchableOpacity>

    </View>
  )
}

export default Flux
