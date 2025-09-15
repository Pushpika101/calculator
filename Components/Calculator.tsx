import { Colors } from '@/utils/Colors';
import  Button  from './Button';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Calculator = () => {
    const [firstvalue, setFirstValue] = useState('');
    const [displayValue, setDisplayValue] = useState('0');
    const [oparator, setOparator] = useState('')

    const handleInput = (num: string) => {
        setDisplayValue(displayValue === '0' ? num : displayValue+ num)
        // if(displayValue == '0'){
        //     setDisplayValue(num);
        // }else{
        //     setDisplayValue(num + displayValue)
        // }
    }
    const handleOparatorInput = (oparator: string) => {
        setOparator(oparator);
        setFirstValue(displayValue);
        setDisplayValue('0');

    }

    const handleEqualOparator = () =>{
        const num1 = parseFloat(firstvalue);
        const num2 = parseFloat(displayValue);

        if(oparator === '+'){
            setDisplayValue((num1 + num2).toString());
        }else if(oparator === '-'){
            setDisplayValue((num1 - num2).toString());
        }else if(oparator === '/'){
            setDisplayValue((num1 / num2).toString());
        }else if(oparator === '*'){
            setDisplayValue((num1 * num2).toString());
        }else if(oparator === '%'){
            setDisplayValue((num1 % num2).toString());
        }

        setOparator('');
        setFirstValue('');
    }

    const handleClear = () => {
        setDisplayValue('0');
        setOparator('');
        setFirstValue('');

    }

    const handleDelelte = () =>{
        if(displayValue.length == 1){
            setDisplayValue('0')
        }else
        {setDisplayValue(displayValue.slice(0, -1));}
    }

  return (
    <View style={styles.container}>
        <View style={styles.display}>
            <Text style={{fontSize: 30, fontWeight: '200'}}>{firstvalue + oparator}</Text>
            <Text style={{fontSize: 70, fontWeight: '400'}}>{displayValue}</Text>
        </View>
        <View style={styles.keypad}>
            <Button  title='C' type='top' onPress={handleClear}/>
            <Button  title='⌫' type='top' onPress={handleDelelte}/>
            <Button  title='%' type='top' onPress={() => handleOparatorInput('%')}/>
            <Button  title='÷' type='right' onPress={() => handleOparatorInput('/')}/>
            <Button  title='1' type='middle' onPress={() => handleInput('1')}/>
            <Button  title='2' type='middle' onPress={() => handleInput('2')}/>
            <Button  title='3' type='middle' onPress={() => handleInput('3')}/>
            <Button  title='x' type='right' onPress={() => handleOparatorInput('*')}/>
            <Button  title='4' type='middle' onPress={() => handleInput('4')}/>
            <Button  title='5' type='middle' onPress={() => handleInput('5')}/>
            <Button  title='6' type='middle' onPress={() => handleInput('6')}/>
            <Button  title='-' type='right' onPress={() => handleOparatorInput('-')}/>
            <Button  title='7' type='middle' onPress={() => handleInput('7')}/>
            <Button  title='8' type='middle' onPress={() => handleInput('8')}/>
            <Button  title='9' type='middle' onPress={() => handleInput('9')}/>
            <Button  title='+' type='right' onPress={() => handleOparatorInput('+')}/>
            <Button  title='0' type='middle' onPress={() => handleInput('0')}/>
            <Button  title='00' type='middle' onPress={() => handleInput('00')}/>
            <Button  title='.' type='middle' onPress={() => handleInput('.')}/>
            <Button  title='=' type='right' onPress={handleEqualOparator}/>

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
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 15,
        padding: 30

    }
})