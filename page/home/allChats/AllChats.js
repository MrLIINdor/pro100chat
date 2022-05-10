import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { LocalContext } from '../../../src/localContext';
import MainChat from '../../../components/mainChat/MainChat'
import styles from './AllChats.scss'



export default function AllChats({navigation}) {

  const {chatInfo, getAllChat } = useContext(LocalContext)

  useEffect(() => {
    getAllChat()
  }, [])
  

  return (
    <View style={styles.block_container}>
      {chatInfo.content.map(({ id, name }) => (
        <MainChat 
          title={name}/>
      ))}
    </View>
  )
}