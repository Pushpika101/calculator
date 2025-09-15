import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/utils/Colors'

const Button = ({title ,type}: {title: String, type: 'top' | 'right' | 'middle'}) => {
  return (
    
    <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={{fontSize: 44, color: Colors.light}}>{title}</Text>
    </TouchableOpacity>
    
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        height: 70,
        width: 70,
        borderRadius: 13,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.secondary
    }
})