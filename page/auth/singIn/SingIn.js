import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import MainSing from '../../../components/mainSing/MainSing'
import styles from './SingIn.scss' 


export default function SingIn(props) {
  return (
    <MainSing>
        <StatusBar style="light" />

        <View style={styles.block_sinup}>
          <Text onPress={props.onPress} style={styles.title_sinup}>Создать АККаунт ?</Text>
        </View>
    </MainSing>
  )
}