import { View, Text } from 'react-native'
import React from 'react'
import styles from './MainMess.scss'


export default function MainMess(props) {
  return (
    <View style={styles.block}>
        <View style={styles.block_user}>
            <Text style={styles.title_user}>{props.nameUser}</Text>
            <Text style={styles.title}>{props.titleMess}</Text>
        </View>
    </View>
  )
}