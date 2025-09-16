import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import { Colors } from '@/utils/Colors';

const Button = ({ title, type, onPress }: { title: string; type: 'top' | 'right' | 'middle'; onPress: () => void }) => {
    const scale = useRef(new Animated.Value(1)).current;

    const [bgColor, setBgColor] = useState(
        type === 'top' ? Colors.dark : type === 'middle' ? Colors.secondary : Colors.accent
    );

    const handlePressIn = () => {
        let targetScale = 1.3; // numbers
        
        Animated.spring(scale, { toValue: targetScale, useNativeDriver: true }).start();

        // Optional flash color on press
        if(type === 'middle'){
            setBgColor(Colors.secondary2);
        }else if(type === 'right'){
            setBgColor('yellow');
        }else{
            setBgColor('red');
        }
    };

    const handlePressOut = () => {
        Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
        setBgColor(type === 'top' ? Colors.dark : type === 'middle' ? Colors.secondary : Colors.accent);
    };

    return (
        <Animated.View style={{ transform: [{ scale }] }}>
            <TouchableOpacity
                style={[
                    styles.button,
                    {
                        backgroundColor: bgColor,
                        borderRadius: type === 'middle' ? 40 : 15,
                    },
                ]}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={onPress}
            >
                <Text style={{ fontSize: 44, color: type === 'middle' ? Colors.dark : Colors.light }}>{title}</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        height: 70,
        width: 70,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});