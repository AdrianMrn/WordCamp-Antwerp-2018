import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, LayoutAnimation, Animated } from 'react-native'
import TalkInfo from './TalkInfo'
import TimeIndicator from './TimeIndicator'
import styles from './Styles/TalkStyle'
import FadeIn from 'react-native-fade-in-image'
import { Colors, ApplicationStyles } from '../Themes';

interface TalkProps {
  title: string
  name: string
  avatarURL: string
  start: Number
  duration: number
  currentTime: Date
  location: string
  room: string
  onPress(): void
}

interface TalkState {
  animatedSize: Animated.Value
}

export default class Talk extends React.Component<TalkProps, TalkState> {
  constructor(props) {
    super(props)

    this.state = {
      animatedSize: new Animated.Value(1)
    }
  }

  handlePressIn = () => {
    Animated.spring(this.state.animatedSize, {
      toValue: 1.05,
      useNativeDriver: true
    }).start()
  }

  handlePressOut = () => {
    Animated.spring(this.state.animatedSize, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true
    }).start()
  }

  render() {
    const {
      name,
      title,
      avatarURL,
      start,
      duration,
      currentTime,
      location,
      room
    } = this.props

    const animatedStyle = {
      transform: [{ scale: this.state.animatedSize }]
    }

    let borderRoomStyle;
    if (location === "ViaVia") {
      borderRoomStyle = ApplicationStyles.viaviaStyle
    } else {
      if (room === 'Trappenaula') {
        borderRoomStyle = ApplicationStyles.trappenAulaStyle
      } else {
        borderRoomStyle = ApplicationStyles.auditoriumStyle
      }
    }

    const containerStyles = [
      styles.container,
      animatedStyle,
    ]

    return (
      <View>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
          onPress={this.props.onPress}
        >
          <Animated.View style={containerStyles}>
            <View style={[styles.info, borderRoomStyle]}>
              {avatarURL != "" &&
                <FadeIn>
                  <Image style={styles.avatar} source={{ uri: avatarURL }} />
                </FadeIn>
              }
              <View style={styles.infoText}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.titlename}>{name}</Text>
              </View>
            </View>
            <TalkInfo
              start={start}
              duration={duration}
              room={room}
              location={location}
              borderRoomStyle={borderRoomStyle}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
