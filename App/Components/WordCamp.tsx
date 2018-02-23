import React from 'react'
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Images, Colors } from '../Themes'
import styles from './Styles/WordCampStyles'

const InfiniteRed = (props) => {
  const gradient = ['#351F41', '#8E2044']

  {/* <LinearGradient colors={ Colors.wpBlueGradient }>
  <LinearGradient colors={['#FFEC94', '#f2d31f']}> */}
  return (
      <View style={styles.wordCamp}>
        <Image style={styles.wordCampIcon} source={Images.wordcamp} />
        <View style={styles.line} />
        <Text style={styles.subheading}>
          WordPress is almost literally the engine of the web:{'\n'}
          over 25% of all websites on the internet{'\n'}
          are powered by WordPress.{'\n'}{'\n'}

          This app was made using React Native and {'\n'}
          the WordPress API as a back end. {'\n'}
          All conference data can be easily managed {'\n'}
          through the WP admin panel.{'\n'}{'\n'}
        </Text>

        <View style={styles.schedule}>

          <View style={styles.scheduleDay}>
            <TouchableOpacity onPress={() => Linking.openURL("https://goo.gl/maps/rTz2NGQefb82")}>
              <Text style={styles.title}>Friday</Text>
              <Text style={styles.scheduleText}>
                Contributorday @ ViaVia
            </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.scheduleDay}>
            <TouchableOpacity onPress={() => Linking.openURL("https://goo.gl/maps/hZmJptnz3un")}>
              <Text style={styles.title}>Saturday</Text>
              <Text style={styles.scheduleText}>
                Conference @ KdG
            </Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    /* </LinearGradient> */
  )
}

export default InfiniteRed
