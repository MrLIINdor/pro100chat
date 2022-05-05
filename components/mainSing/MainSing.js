import { View, Text } from 'react-native'
import React from 'react'
import styles from './MainSing.scss' 


export default function MainSing(props) {
  return (
    <View style={styles.block_container}>
        <View></View>
        <View>
            <Text></Text>
        </View>
        <View></View>

      {props.children}
    </View>
  )
}