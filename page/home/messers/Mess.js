import { View, Text, TextInput, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
import { SvgXml } from 'react-native-svg';
import { LocalContext } from '../../../src/localContext';
import Spinner from 'react-native-loading-spinner-overlay';
import MainMess from '../../../components/mainMess/MainMess';
import styles from './Mess.scss'

import { svg } from '../../../assets/images/localSvg';




export default function Mess({route}) {

  const { messInfo, getAllMess, creactMess } = useContext(LocalContext)
  const [message, onMessage] = useState('');


  useEffect(() => {
    getAllMess(route.params.id)
  }, [])



  function getMessage(){
    creactMess(message, route.params.id)
    onMessage('')
  }


  if(messInfo){
    return (
      <View style={styles.block_container}>

        <ScrollView style={styles.block_scroll}>
          {messInfo.content.map(({content, createdBy}) => 
            <MainMess
              nameUser={createdBy.username}
              titleMess={content}/>
          )}
          
        </ScrollView>



        <View style={styles.block_input}>
          <TextInput
            multiline
            style={styles.input_pass}
            placeholder={'Сообщение'}
            placeholderTextColor="#fffc"
            onChangeText={onMessage}
            value={message}/>

            <Pressable onPress={getMessage} style={styles.button}>
              <SvgXml style={styles.logo_press} xml={svg.Sent} />
            </Pressable>
        </View>
      </View>
    )
  }else {
    return ( <Spinner visible={true}/> )
  }

}