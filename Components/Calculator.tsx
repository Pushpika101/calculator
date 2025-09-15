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
            <Button  title='C' type='top'/>
            <Button  title='⌫' type='top'/>
            <Button  title='%' type='top'/>
            <Button  title='÷' type='right'/>
            <Button  title='1' type='middle'/>
            <Button  title='2' type='middle'/>
            <Button  title='3' type='middle'/>
            <Button  title='x' type='right'/>
            <Button  title='4' type='middle'/>
            <Button  title='5' type='middle'/>
            <Button  title='6' type='middle'/>
            <Button  title='-' type='right'/>
            <Button  title='7' type='middle'/>
            <Button  title='8' type='middle'/>
            <Button  title='9' type='middle'/>
            <Button  title='+' type='right'/>
            <Button  title='0' type='middle'/>
            <Button  title='00' type='middle'/>
            <Button  title='.' type='middle'/>
            <Button  title='=' type='right'/>

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
        padding: 30

    }
})