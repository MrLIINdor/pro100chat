import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LocalContext } from '../../src/localContext.js';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function ReqContext({children}) {

  const [userInfo, setUserInfo] = useState({});
  const [chatInfo, setChatInfo] = useState();
  const [messInfo, setMessInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);


  const register = (email, password) => {
    setIsLoading(true);

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



  const login= (email, password) => {
    setIsLoading(true);

    axios
        .post('https://pro100chat.herokuapp.com/api/v1/auth/signin', {
            "password": password,
            "username": email
        }).then(res => {
          setUserInfo(res.data.result)
          AsyncStorage.setItem('token', JSON.stringify(value));
          console.log(userInfo)
          setIsLoading(false);
        }).catch(err => {
          console.log(`register error ${err}`);
          setIsLoading(false);
        });
  }



  const logout = () => {
    setUserInfo({})
  }
  


  const getAllChat = () => {
    setIsLoading(true)

    axios
        .get('https://pro100chat.herokuapp.com/api/v1/chats', {
          headers: { Authorization: `Bearer ${userInfo.token}` }, 

        }).then(res => {
          setChatInfo(res.data.result)
          console.log(chatInfo)
          setIsLoading(false);
        }).catch(err => {
          console.log(`register error ${err}`);
          setIsLoading(false);
        });
  }


  
  const creactChat = (nameChat) => {
    setIsLoading(true)

    axios
        .post('https://pro100chat.herokuapp.com/api/v1/chats',  {
          name: nameChat,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }).then(res => {
          console.log(`Статус: ${res.data.status}, ${res.data.message}`)
          setIsLoading(false);
        }).catch(err => {
          console.log(`register error ${err}`);
          setIsLoading(false);
        });
  }



  const getAllMess = (id) => {
    setIsLoading(true)
    // console.log(id)
    axios
        .get(`https://pro100chat.herokuapp.com/api/v1/chats/${id}/messages?page=0&size=20`, {
          headers: { Authorization: `Bearer ${userInfo.token}` }, 

        }).then(res => {
          setMessInfo(res.data.result)
          console.log(messInfo)
          setIsLoading(false);
        }).catch(err => {
          console.log(`register error ${err}`);
          setIsLoading(false);
        });
  }



  const creactMess = (mes, chatId) => {
    setIsLoading(true)

    axios
        .post(`https://pro100chat.herokuapp.com/api/v1/chats/${chatId}/send`,  {
          chatId: chatId,
          content: mes,
          id: userInfo.id,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }).then(res => {
          console.log(`Статус: ${res.data.status}, ${res.data.message}`)
          setIsLoading(false);
        }).catch(err => {
          console.log(`register error ${err}`);
          setIsLoading(false);
        });
  }

  // const isLoggedIn = async () => {
  //   try {
  //     let userInfo = await AsyncStorage.getItem('@token');
  //     userInfo = JSON.parse(userInfo);

  //     if (userInfo) {
  //       setUserInfo(userInfo);
  //     }

  //   } catch (e) {
  //     console.log(`is logged in error ${e}`);
  //   }
  // };


  // useEffect(() => {
  //   isLoggedIn();
  // }, []);


  return (
    <LocalContext.Provider 
      value={{
        isLoading,
        userInfo,
        chatInfo,
        messInfo,
        register,
        login,
        logout,
        getAllChat,
        creactChat,
        getAllMess,
        creactMess,
        }}>
      {children}
    </LocalContext.Provider>
  )
}