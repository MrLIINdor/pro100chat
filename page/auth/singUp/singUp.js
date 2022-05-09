import { View, Text } from 'react-native'
import React, { useState, useContext } from 'react'
import MainSing from '../../../components/mainSing/MainSing'
import Spinner from 'react-native-loading-spinner-overlay';
import { LocalContext } from '../../../src/localContext';


export default function SingUp({navigation}) {

    const [email, onChangeEmail] = useState(null);
    const [password, onChangePassword] = useState(null);
    const {isLoading, register} = useContext(LocalContext)


    function getLogUp(){
      register(email, password)
      if(!isLoading){
        navigation.navigate('SingIn')
      }
    }

  return (
    <>
      <Spinner visible={isLoading}/>

      <MainSing
        mainTitle={'Регистрация?'}
        subTitle={'Готов погрузится в мир чатинга ? настало время пройти регистрацию'}
        buttonTitle={'Начать чатиться'}
        onPress={getLogUp}
        email={email}
        onChangeEmail={onChangeEmail}
        password={password}
        onChangePassword={onChangePassword}>
        
      </MainSing>
    </>
  )
}