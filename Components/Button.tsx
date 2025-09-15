import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/utils/Colors'

const Button = ({title ,type, onPress}: {title: string; 
    type: 'top' | 'right' | 'middle';
    onPress: Function}) => {
  return (
    
    <TouchableOpacity 
        style={[
            styles.button, 
            {
                backgroundColor: 
                type == "top" 
                ? Colors.dark
                : type == "middle"
                ? Colors.secondary
                : type == "right"
                ? Colors.accent
                : Colors.secondary,
                borderRadius: type == "middle" ? 40 : 15,

            }
        ]} 
        onPress={onPress}>
        <Text style={{fontSize: 44, color: type == 'middle' ? Colors.dark : Colors.light}}>{title}</Text>
    </TouchableOpacity>
    
  );
};

export default Button

const styles = StyleSheet.create({
    button: {
        height: 70,
        width: 70,
        //borderRadius: 13,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.secondary
    }
})