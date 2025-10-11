import { Stack } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout(){
    

    return  (
        <>
            <StatusBar style="auto" />
            <Stack 
                screenOptions={{ headerShown: false, animation: "none"}}
            />
        </>
    )

}
