import { View, Text, TextInput } from 'react-native'
import { SvgXml } from 'react-native-svg';
import React from 'react'
import MainButton from '../mainButton/MainButton'
import styles from './MainSing.scss' 

import { svg } from '../../assets/images/localSvg';



export default function MainSing(props) {


  return (
    <View style={styles.block_container}>
        <View style={styles.block_logo}>
          <SvgXml style={styles.logo} xml={svg.Logo} />
        </View>


        <View style={styles.block_title}>
            <Text style={styles.title_main}>{props.mainTitle}</Text>
            <Text style={styles.title_sub}>{props.subTitle}</Text>
        </View>


        <View >
          <TextInput
            style={styles.input_pass}
            placeholder={'Никнейм'}
            placeholderTextColor="#fffc"
            onChangeText={props.onChangeEmail}
            value={props.email}/>

          <TextInput
            style={styles.input_pass}
            placeholder={'Пароль'}
            placeholderTextColor="#fffc"
            onChangeText={props.onChangePassword}
            value={props.password}/>

          {props.children}
        </View>


        <View style={styles.block_button}>
          <MainButton onPress={props.onPress} titleButton={props.buttonTitle} styleBlockButton={styles.button} styleTitleButton={styles.button_title}/>
        </View>
    </View>
  )
}