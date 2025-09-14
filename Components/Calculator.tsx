import { Colors } from '@/utils/Colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Calculator = () => {
  return (
    <View style={styles.container}>
      <Text>Calculator</Text>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    }
})