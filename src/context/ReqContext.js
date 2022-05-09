import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { LocalContext } from '../../src/localContext.js';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ReqContext({children}) {

  const [userInfo, setUserInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);


  const register = (email, password) => {
    setIsLoading(true)

    axios
        .post('https://pro100chat.herokuapp.com/api/v1/auth/signup', {
            "firstName": "Krytou",
            "lastName": "Ychitel",
            "middleName": "Onidzuko",
            "password": password,
            "username": email
        }).then(res => {
          console.log(`Статус: ${res.data.status}, ${res.data.message}`)
          setIsLoading(false);
        }).catch(err => {
          console.log(`register error ${err}`);
          setIsLoading(false);
        });
  }



  const login = (email, password) => {
    setIsLoading(true)

    axios
        .post('https://pro100chat.herokuapp.com/api/v1/auth/signin', {
            "password": password,
            "username": email
        }).then(res => {
          setUserInfo(res.data.result.token)
          // AsyncStorage.setItem('@token', userInfo);
          console.log(userInfo)
          // console.log(AsyncStorage.getItem('@token'))
          setIsLoading(false);
        }).catch(err => {
          console.log(`register error ${err}`);
          setIsLoading(false);
        });
  }


  return (
    <LocalContext.Provider 
      value={{
        isLoading,
        register,
        login,
        }}>
      {children}
    </LocalContext.Provider>
  )
}