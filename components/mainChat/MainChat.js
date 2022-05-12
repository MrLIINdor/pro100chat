import { Text, Pressable } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import styles from './MainChat.scss'

import { svg } from '../../assets/images/localSvg';



export default function MainChat(props) {
  return (
    <Pressable onPress={props.onPress} style={styles.block}>
        <SvgXml style={styles.logo} xml={svg.Hashtag} />
        <Text style={styles.title}>{props.title}</Text>
    </Pressable>
  )
}