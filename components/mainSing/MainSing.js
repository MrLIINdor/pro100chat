import { View, Text, TextInput } from 'react-native'
import React from 'react'
import MainButton from '../mainButton/MainButton'
import styles from './MainSing.scss' 



export default function MainSing(props) {
  return (
    <View style={styles.block_container}>
        <View>
          
        </View>

        <View style={styles.block_title}>
            <Text style={styles.title_main}>Авторизация</Text>
            <Text style={styles.title_sub}>Время пройдите авторизацию что снова погрузится в мир чатинга</Text>
        </View>

        <View >
          <TextInput
            style={styles.input_pass}
            placeholder={'Никнейм'}
            placeholderTextColor="#fffc"
            />

          <TextInput
            style={styles.input_pass}
            placeholder={'Пароль'}
            placeholderTextColor="#fffc"
            />

          {props.children}
        </View>

        <View style={styles.block_button}>
          <MainButton titleButton={'Начать чатиться'} styleBlockButton={styles.button} styleTitleButton={styles.button_title}/>
        </View>
    </View>
  )
}