import { Pressable, Text } from 'react-native'
import React from 'react'

export default function MainButton(props) {
  return (
    <Pressable onPress={props.onPress} style={props.styleBlockButton}>
      <Text style={props.styleTitleButton}>{props.titleButton}</Text>
    </Pressable>
  )
}