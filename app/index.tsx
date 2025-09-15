import { Text, View } from "react-native";
import { Stack } from "expo-router";
import Calculator from "@/Components/Calculator";
import { Colors } from "@/utils/Colors";

export default function Index() {
  return (
    <>
    <Stack.Screen options={{title: 'Pushpes Calculator', headerTitleStyle: {fontWeight: 900}}} />
    <Calculator />
    </>
    
  );
}
