import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/BreakInfoStyle'
import { Colors, Metrics, Fonts } from '../Themes/'

interface BreakInfoProps {
  start: Number
  end: Number
}

const BreakInfo = (props: BreakInfoProps) => {
  const { start, end } = props

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View style={styles.detail}>
          <Text style={styles.duration}>{start} - {end}</Text>
        </View>
      </View>
    </View>
  )
}

export default BreakInfo
