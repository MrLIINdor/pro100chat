import { Modal, Pressable } from 'react-native'
import React from 'react'
import styles from './MainModal.scss'



export default function MainModal({active, setActive, children}) {


  return (
    <Modal style={styles.modal} animationType="fade" transparent={true} visible={active}>
      <Pressable style={styles.modal} onPress={()=> setActive(false)}>
        <Pressable style={styles.modal_content} onPress={e => e.stopPropagation}>
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  )
}