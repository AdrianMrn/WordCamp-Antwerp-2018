import React from 'react'
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Images, Colors, Fonts } from '../Themes'
import styles from './Styles/FluxStyles'

const Flux = (props) => {
  const gradient = ['#351F41', '#8E2044']

  return (
    <View style={styles.flux}>
      <Text style={styles.heading}>
        Powered By WordPress
      </Text>
      <View style={styles.line} />
      <Text style={styles.description}>
        This conference app was made by <Text style={styles.bold}>Flux</Text> using the WordPress REST API as a back end.
        All conference data can be easily managed through the WordPress CMS.{'\n'}{'\n'}
        The app itself was made in React Native and can be compiled for both Android and iOS (we have currently only made the app available for Android).
      </Text>
      <TouchableOpacity style={styles.linkContainer} onPress={() => Linking.openURL("https://2018.antwerp.wordcamp.org/")}>
        <Text style={[styles.description, Fonts.underline]}>
          Visit our website
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL("https://flux.be/")}>
        <Image style={styles.image} source={Images.Flux} />
      </TouchableOpacity>

    </View>
  )
}

export default Flux
