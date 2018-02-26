import React from 'react'
import { View, Text } from 'react-native'
import { format } from 'date-fns'
import styles from './Styles/TalkInfoStyle'

interface TalkInfoProps {
  start: Number
  duration: Number
  isFinished: boolean
  showWhenFinished: boolean
  location: string
  room: string
  borderRoomStyle: string
}

const TalkInfo = (props: TalkInfoProps) => {
  const { start, location, room, borderRoomStyle } = props
  const formattedStart = format(start, 'HH:mm')

  return (
    <View style={[styles.container, borderRoomStyle]}>
      <View style={styles.details}>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>
            Start
          </Text>
          <Text style={styles.detailText}>
            {formattedStart}
          </Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>
            Venue
          </Text>
          <Text style={styles.detailText}>
            {`${location}`}
          </Text>
        </View>
        { room != "" && 
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>
            Room
          </Text>
          <Text style={styles.detailText}>
            {`${room}`}
          </Text>
        </View>
        }
      </View>
    </View>
  )
}
export default TalkInfo
