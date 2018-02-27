import React from 'react'
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Images, Colors } from '../Themes'
import styles from './Styles/WordCampStyles'

const Wordcamp = (props) => {
  const gradient = ['#351F41', '#8E2044']

  {/* <LinearGradient colors={ Colors.wpBlueGradient }>
  <LinearGradient colors={['#FFEC94', '#f2d31f']}> */}
  return (
    <View style={styles.wordCamp}>
      <Image style={styles.wordCampIcon} source={Images.wordcamp} />
      <Text style={styles.subheading}>
        WordCamp is a conference that focuses on everything WordPress.
        WordCamps are informal, community-organized events that are put together by WordPress users like you. Everyone from casual users to core developers participate, share ideas, and get to know each other.
        {/* WordPress is almost literally the engine of the web:{'\n'}
        over 25% of all websites on the internet{'\n'}
        are powered by WordPress.{'\n'}{'\n'}

        This app was made using React Native and {'\n'}
        the WordPress API as a back end. {'\n'}
        All conference data can be easily managed {'\n'}
        through the WP admin panel.{'\n'}{'\n'} */}
      </Text>
      <TouchableOpacity style={styles.linkContainer} onPress={() => Linking.openURL("https://2018.antwerp.wordcamp.org/")}>
        <Text style={styles.link}>
          Visit the website
        </Text>
      </TouchableOpacity>

      <View style={styles.schedule}>

        <TouchableOpacity style={styles.scheduleDay} onPress={() => Linking.openURL("https://goo.gl/maps/rTz2NGQefb82")}>
          <View>
            <Text style={styles.title}>Friday</Text>
            <Text style={styles.scheduleText}>
              Contributorday @ ViaVia
            </Text>
            <Text style={styles.where}>
              Where?
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.scheduleDay} onPress={() => Linking.openURL("https://goo.gl/maps/hZmJptnz3un")}>
          <View>
            <Text style={styles.title}>Saturday</Text>
            <Text style={styles.scheduleText}>
              Conference @ KdG
            </Text>
            <Text style={styles.where}>
              Where?
            </Text>
          </View>
        </TouchableOpacity>

      </View>

    </View>
    /* </LinearGradient> */
  )
}

export default Wordcamp
