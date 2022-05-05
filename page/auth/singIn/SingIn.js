import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import MainSing from '../../../components/mainSing/MainSing'
import styles from './SingIn.scss' 


export default function SingIn() {
  return (
    <MainSing>
        <StatusBar style="light" />
    </MainSing>
  )
}