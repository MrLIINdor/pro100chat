import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import MainSing from '../../../components/mainSing/MainSing'


export default function SingUp() {

    const [email, onChangeEmail] = useState(null);
    const [password, onChangePassword] = useState(null);


    function getLogUp(){
        console.log(`email: ${email} password: ${password}`)
    }


  return (
    <MainSing
      mainTitle={'Регистрация?'}
      subTitle={'Готов погрузится в мир чатинга ? настало время пройти регистрацию'}
      buttonTitle={'Начать чатиться'}
      onPress={getLogUp}
      email={email}
      onChangeEmail={onChangeEmail}
      password={password}
      onChangePassword={onChangePassword}>

        <StatusBar style="light" />

    </MainSing>
  )
}