import { View, Text } from 'react-native'
import React from 'react'
import styles from './Mess.scss'



export default function Mess({route}) {
  return (
    <View style={styles.block_container}>
      <Text  style={styles.title}>{route.params.id}</Text>
    </View>
  )
}