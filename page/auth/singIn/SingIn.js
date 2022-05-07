import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import MainSing from '../../../components/mainSing/MainSing'
import styles from './SingIn.scss' 


export default function SingIn({navigation}) {

  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);


  function getLogIn(){
    console.log(`email: ${email} password: ${password}`)
  }

  const loadSubAuth = () => {
    navigation.navigate('SingUp')
}


  return (
    <MainSing
      mainTitle={'Авторизация'}
      subTitle={'Время пройдите авторизацию чтобы снова погрузится в мир чатинга'}
      buttonTitle={'Продолжить чатиться'}
      onPress={getLogIn}
      email={email}
      onChangeEmail={onChangeEmail}
      password={password}
      onChangePassword={onChangePassword}>

        <StatusBar style="light" />


        <View style={styles.block_sinup}>
          <Text onPress={loadSubAuth} style={styles.title_sinup}>Создать АККаунт ?</Text>
        </View>
    </MainSing>
  )
}