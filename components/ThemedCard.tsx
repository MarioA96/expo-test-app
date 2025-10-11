import { ReactNode } from 'react';

import { View, StyleSheet, useColorScheme } from 'react-native';
import {Colors} from '../constants/Colors';


interface Props {
    style?: object;
    children?: ReactNode;
}


const ThemedCard = ({style, ...props}: Props) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme!] ?? Colors.light;

    return (
        <View
            style={[{ backgroundColor: theme.uiBackground }, styles.card, style ]}
            {...props}
        />
    )
}

export default ThemedCard;

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20
    }
})