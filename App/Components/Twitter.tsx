import React from 'react'
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/TwitterStyles'

const tweetWithHashtag = () => {
  const appURL = 'twitter://post?hashtags=WCANT'
  const webURL = 'https://twitter.com/intent/tweet?hashtags=WCANT'
  Linking.canOpenURL(appURL).then((supported) =>
    Linking.openURL(supported ? appURL : webURL)
  )
}

const Twitter = (props) => {
  return (
    <View style={styles.twitter}>
      <Image style={styles.blowhorn} source={Images.blowhorn} />
      <TouchableOpacity onPress={() => tweetWithHashtag()}>
        <Text style={styles.heading}>
          #WCANT
        </Text>
      </TouchableOpacity>
      <Text style={styles.description}>
        Stay connected, tweet about your favourite talks at WordCamp with the hashtag&nbsp;
        <Text style={styles.hashtag} onPress={() => tweetWithHashtag()}>
          #wcant
        </Text>.
      </Text>
    </View>
  )
}

export default Twitter
