import React from "react";
import { View, Text, TextInput } from 'react-native'
import  AppLoading  from "expo-app-loading";
import SingIn from './page/auth/singIn/SingIn';
import { 
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_600SemiBold,
  Rubik_500Medium,
  Rubik_700Bold,
} from '@expo-google-fonts/rubik'


export default function App() {

  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_600SemiBold,
    Rubik_500Medium,
    Rubik_700Bold,
  })


  
  if(fontsLoaded) {
    return (
      <SingIn/> 
    )

  } else {
    return (
      <AppLoading onError={console.warn()}/>
    )
  }

}

