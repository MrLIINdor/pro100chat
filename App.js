import React from "react";
import { AppLoading } from "expo-app-loading";
import SingIn from './page/auth/singIn/SingIn';
import { 
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from '@expo-google-fonts/rubik'


export default function App() {

  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });

  // if (!fontsLoaded) {
  //   return <AppLoading onError={console.warn()}/>;
  // } else {
    return (
      <SingIn/>
    );
  // }
}

