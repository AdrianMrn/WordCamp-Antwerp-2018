import React from 'react'
import { View, Text } from 'react-native'
import RemindMeButton from './RemindMeButton'
import { format } from 'date-fns'
import styles from './Styles/TalkInfoStyle'

interface TalkInfoProps {
  start: Number
  duration: Number
  remindMe: boolean
  isFinished: boolean
  showWhenFinished: boolean
  location: string
  room: string
  toggleRemindMe (): void
}

const TalkInfo = (props: TalkInfoProps) => {
  const { start, location, room } = props
  const formattedStart = format(start, 'HH:mm')

  return (
    <View style={styles.container}>
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
