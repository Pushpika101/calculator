import { Colors } from '@/utils/Colors';
import  Button  from './Button';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Calculator = () => {
  return (
    <View style={styles.container}>
        <View style={styles.display}>
            <Text style={{fontSize: 70, fontWeight: '400'}}>123</Text>
        </View>
        <View style={styles.keypad}>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>
            <Button  title='C'/>

        </View>

      
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    }
    ,
    display: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'

    },
    keypad: {
        flex: 2,
        backgroundColor: Colors.light,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20,
        padding: 29

    }
})