import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './Styles/DayToggleStyle'

const DayToggle = props => {
  const { activeDay, onPressIn } = props
  const dayStyle = (day) =>
    activeDay === day ? styles.activeDay : styles.inactiveDay

  return (
    <View style={styles.dayToggle}>
      <TouchableOpacity onPressIn={() => onPressIn(0)}>
        <Text style={dayStyle(0)}>Friday</Text>
      </TouchableOpacity>
      <TouchableOpacity onPressIn={() => onPressIn(1)}>
        <Text style={dayStyle(1)}>Saturday</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DayToggle
