import { View, Text } from 'react-native'
import React from 'react'
import {LocalContext} from '../../src/localContext.js';
import axios from 'axios';


export default function ReqContext() {


    const register = (email, password) => {
        axios
            .post('https://pro100chat.herokuapp.com/api/v1/auth/signup', {
                "firstName": "Krytou",
                "lastName": "Ychitel",
                "middleName": "Onidzuko",
                "password": password,
                "username": email
            })
    }

    const login = (email, password) => {
        axios
            .post('https://pro100chat.herokuapp.com/api/v1/auth/signin', {
                "password": password,
                "username": email
            })
    }

  return (
    <LocalContext.Provider value={'ttt'}>
      <Text>ReqContext</Text>
    </LocalContext.Provider>
  )
}