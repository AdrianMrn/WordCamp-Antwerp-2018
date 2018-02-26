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
    <View style={styles.container}>
      <Image style={styles.background} source={Images.antwerpBg}>
        <View style={styles.twitter}>
          <TouchableOpacity style={styles.twitterHeader} onPress={() => tweetWithHashtag()}>
            <Image source={Images.chatheart} />
            <Text style={styles.heading}>
              &nbsp;&nbsp;#WCANT
          </Text>
          </TouchableOpacity>
          <Text style={styles.description}>
            Stay connected, tweet about your favourite talks at WordCamp with the hashtag&nbsp;
            <Text style={styles.hashtag} onPress={() => tweetWithHashtag()}>
                #WCANT
            </Text>
          </Text>
        </View>
      </Image>
    </View>
  )
}

export default Twitter
