import React from 'react'
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Images, Colors, Fonts } from '../Themes'
import styles from './Styles/WordCampStyles'

const Wordcamp = (props) => {
  const gradient = ['#351F41', '#8E2044']

  {/* <LinearGradient colors={ Colors.wpBlueGradient }>
  <LinearGradient colors={['#FFEC94', '#f2d31f']}> */}
  return (
    <View style={styles.wordCamp}>
      <Image style={styles.wordCampIcon} source={Images.wordcamp} />
      <Text style={styles.subheading}>
      WordCamp is a conference that focuses on everything WordPress-related. 
      WordCamps are informal, community-organized events that are put together by WordPress users, 
      just like you and me. Everyone from casual users to core developers participate, 
      share ideas and get to know each other. Interested in becoming a part of the community? Come visit WordCamp!
      </Text>
      <TouchableOpacity style={styles.linkContainer} onPress={() => Linking.openURL("https://2018.antwerp.wordcamp.org/")}>
        <Text style={[styles.subheading, Fonts.underline]}>
          Visit the website
        </Text>
      </TouchableOpacity>

      <View style={styles.schedule}>

        <TouchableOpacity style={styles.scheduleDay} onPress={() => Linking.openURL("https://goo.gl/maps/rTz2NGQefb82")}>
          <View>
            <Text style={styles.title}>Friday</Text>
            <Text style={styles.scheduleText}>
              @ ViaVia
            </Text>
            <Text style={styles.where}>
              see on Google Maps
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.scheduleDay} onPress={() => Linking.openURL("https://goo.gl/maps/hZmJptnz3un")}>
          <View>
            <Text style={styles.title}>Saturday</Text>
            <Text style={styles.scheduleText}>
              @ KdG
            </Text>
            <Text style={styles.where}>
              see on Google Maps
            </Text>
          </View>
        </TouchableOpacity>

      </View>

    </View>
    /* </LinearGradient> */
  )
}

export default Wordcamp
