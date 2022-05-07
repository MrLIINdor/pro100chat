import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingUp from '../page/auth/singUp/singUp';
import SingIn from '../page/auth/singIn/SingIn';

const Stack = createStackNavigator()

export default function navigate({navigation}) {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: true}}>

        <Stack.Screen
            name='SingIn'
            component={SingIn}
            options={{
                title: '',
                // headerShadowEnabled: false,
                headerStyle: {backgroundColor: '#444757'},
            }} />

        <Stack.Screen
            name='SingUp'
            component={SingUp}
            options={{
                title: 'Регистрация',
                // cardStyle: {backgroundColor: '#fff'},
                // headerShadowEnabled: true,
                headerStyle: {backgroundColor: '#2E303E'},
                headerTintColor: '#01CC8E',
                headerTitleStyle: {fontSize: 17, color: '#01CC8E'},
            }}/> 


        </Stack.Navigator>
    </NavigationContainer>
  )
}