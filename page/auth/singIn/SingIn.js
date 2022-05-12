import { View, Text } from 'react-native'
import React, { useState, useContext } from 'react'
import MainSing from '../../../components/mainSing/MainSing'
import { LocalContext } from '../../../src/localContext';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './SingIn.scss' 


export default function SingIn({navigation}) {

  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
  const {isLoading, login} = useContext(LocalContext)


  function getLogIn(){
    login(email, password)
  }

  const loadSingUp = () => {
    navigation.navigate('SingUp')
  }


  return (
    <>
      <Spinner visible={isLoading}/>
    
      <MainSing
        mainTitle={'Авторизация'}
        subTitle={'Время пройдите авторизацию чтобы снова погрузится в мир чатинга'}
        buttonTitle={'Продолжить чатиться'}
        onPress={getLogIn}
        email={email}
        onChangeEmail={onChangeEmail}
        password={password}
        onChangePassword={onChangePassword}>


          <View style={styles.block_sinup}>
            <Text onPress={loadSingUp} style={styles.title_sinup}>Создать АККаунт ?</Text>
          </View>
      </MainSing>
    </>
  )
}