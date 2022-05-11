import React from "react";
import { StatusBar } from 'expo-status-bar';
import  AppLoading  from "expo-app-loading";
import NavigateMenu  from "./router/navigate";
import ReqContext from "./src/context/ReqContext";
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
      <ReqContext>
        <StatusBar style="light" />

        <NavigateMenu/> 
      </ReqContext>
    )

  } else {
    return ( <AppLoading onError={console.warn()}/> )
  }

}

