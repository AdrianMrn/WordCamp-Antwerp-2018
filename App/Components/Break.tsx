import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { Images } from '../Themes'
import TimeIndicator from './TimeIndicator'
import { format, getTime } from 'date-fns'
import styles from './Styles/BreakStyle'

/* import styles from './Styles/TalkStyle' */

interface BreakProps {
  start: Date,
  end: Date,
  currentTime: Date,
  duration: number,
  title: string
  isCurrentDay: boolean
  isActive: boolean
  onPress(): void
}

interface BreakState {
  imageWidth: number
}

export default class Break extends React.Component<BreakProps, BreakState> {
  constructor(props) {
    super(props)

    this.state = {
      imageWidth: 335
    }
  }

  onLayout = (event) => {
    const width = event.nativeEvent.layout.width

  }

  renderContent() {
    const {
      title,
      duration,
      isCurrentDay,
      isActive,
      start,
      end
    } = this.props

    const containerStyles = [
      styles.container,
    ]
    
    const cellTitle = title || `${type.charAt(0).toUpperCase() + type.slice(1)} Break`

    return (
      <View>
        <View style={containerStyles} onLayout={this.onLayout}>
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <Text style={styles.heading}>
                {cellTitle}
              </Text>
              <Text style={styles.duration}>
                {format(getTime(start), 'HH:mm')} - {format(getTime(end), 'HH:mm')}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }



  renderWrapper() {
    if (this.props.onPress) {
      return (
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          {this.renderContent()}
        </TouchableWithoutFeedback>
      )
    } else {
      return this.renderContent()
    }
  }

  render() {
    const { currentTime, duration, start, isActive } = this.props

    return (
      <View>
        {this.renderWrapper()}
        {isActive && <TimeIndicator start={start} duration={duration} time={currentTime} />}
      </View>
    )
  }
}
