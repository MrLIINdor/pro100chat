import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { LocalContext } from '../../../src/localContext';
import styles from './AllChats.scss'


export default function AllChats({navigation}) {

  const {chatInfo, getAllChat } = useContext(LocalContext)

  function get() {
    getAllChat()
  }

  return (
    <View style={styles.block}>
      <Text onPress={get}>AllChats</Text>
      
      <Text>{chatInfo.content[1].name}</Text>
    </View>
  )
}