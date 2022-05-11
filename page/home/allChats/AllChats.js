import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { LocalContext } from '../../../src/localContext';
import { SvgXml } from 'react-native-svg';
import MainChat from '../../../components/mainChat/MainChat'
import Spinner from 'react-native-loading-spinner-overlay';
import ChatModal from '../../../components/chatModal/ChatModal';
import { StatusBar } from 'expo-status-bar';
import styles from './AllChats.scss'

import { svg } from '../../../assets/images/localSvg';



export default function AllChats({navigation}) {

  const { chatInfo, getAllChat } = useContext(LocalContext)
  const [modalActive, setModalActive] = useState(false)

  useEffect(() => {
    getAllChat()
  }, [])
  

  if(chatInfo){
    return (
      <View style={styles.block_container}>
        <StatusBar style={ modalActive ? 'black': 'light'} backgroundColor={ modalActive ? '#00000066': ''} />

        <ChatModal 
          mainTitle={'Создать чат'}
          placeholder={'Название'}
          titleButton={'Создать'}
          active={modalActive} 
          setActive={setModalActive}/>


        <View style={styles.block_button}>
            <Pressable onPress={() => setModalActive(true)} style={styles.button}>
              <SvgXml style={styles.logo} xml={svg.Plus} />
            </Pressable>
        </View>
  
        <ScrollView style={styles.block_scroll}>
          {chatInfo.content.map(({ id, name }) => 
            <MainChat 
              title={name}/>
          )}
        </ScrollView>
      </View>
    )
  }else {
    return ( <Spinner visible={true}/> )
  }
 
}


