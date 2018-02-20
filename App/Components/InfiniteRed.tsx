import React from 'react'
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import RoundedButton from './RoundedButton'
import { Images } from '../Themes'
import styles from './Styles/InfiniteRedStyles'

const InfiniteRed = (props) => {
  const gradient = ['#351F41', '#8E2044']

  return (
    <LinearGradient
      colors={gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.infiniteRed}>
      {/* <Text style={styles.heading}>Brought to you by:</Text> */}
      <Image style={styles.infiniteRedIcon} source={Images.wordcamp} />
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

      {/* <Text style={styles.title}>
        Take care!
      </Text>
      <Text style={styles.subheading}>
        WordCamp Antwerp 2018 has 2 seperate locations:
      </Text> */}

      <View style={styles.schedule}>

        <View style={styles.scheduleDay}>
          <TouchableOpacity onPress={() => Linking.openURL("https://goo.gl/maps/rTz2NGQefb82")}>
            <Text style={styles.title}>Friday</Text>
            <Text style={styles.scheduleText}>
              Contributorday @ ViaVia {'\n'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.scheduleDay}>
          <TouchableOpacity onPress={() => Linking.openURL("https://goo.gl/maps/hZmJptnz3un")}>
            <Text style={styles.title}>Saturday</Text>
            <Text style={styles.scheduleText}>
              Conference @ KdG {'\n'}
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </LinearGradient>
  )
}

export default InfiniteRed
