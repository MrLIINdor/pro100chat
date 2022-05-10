import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingUp from '../page/auth/singUp/singUp';
import SingIn from '../page/auth/singIn/SingIn';
import AllChats from '../page/home/allChats/AllChats';
import { LocalContext } from '../src/localContext';

const Stack = createStackNavigator()



export default function navigate() {

    const {userInfo} = useContext(LocalContext)


  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: true}}>
            {userInfo.token ?
            (<Stack.Screen
                name='AllChats'
                component={AllChats}
                options={{
                    title: '',
                    headerShown: false,
                }}/>)

            :

            (<>
                <Stack.Screen
                    name='SingIn'
                    component={SingIn}
                    options={{
                        title: '',
                        headerShown: false,
                    }}/>

                <Stack.Screen
                    name='SingUp'
                    component={SingUp}
                    options={{
                        title: 'Регистрация',
                        headerStyle: {backgroundColor: '#2E303E', shadowColor: '#2E303E'},
                        headerTintColor: '#01CC8E',
                        headerTitleStyle: {fontSize: 17, color: '#01CC8E'},
                    }}/>
            </>)
            }
        </Stack.Navigator>
    </NavigationContainer>
  )
}