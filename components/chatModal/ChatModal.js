import { View, Text, TextInput } from 'react-native'
import React from 'react'
import MainModal from '../mainModal/MainModal'
import MainButton from '../mainButton/MainButton'
import styles from './ChatModal.scss'



export default function ChatModal(props) {


  return (
    <MainModal active={props.active} setActive={props.setActive}>
      <View style={styles.block_modal}>
          <Text style={styles.title}>{props.mainTitle}</Text>

          <View style={styles.block_rating}>
            <TextInput 
                multiline 
                placeholder={props.placeholder} 
                onChangeText={props.onChangeText}
                value={props.value}
                placeholderTextColor="#fffc"
                style={styles.input_pass}/>
          </View>

          <View style={styles.block_button}>
            <MainButton 
              onPress={props.onClosePress} 
              titleButton={props.closeButton} 
              styleBlockButton={styles.button_close} 
              styleTitleButton={styles.button_title}/>

            <MainButton 
              onPress={props.onCreactPress} 
              titleButton={props.creactButton} 
              styleBlockButton={styles.button_creact} 
              styleTitleButton={styles.button_title}/>

          </View>
        </View>
    </MainModal>
  )
}