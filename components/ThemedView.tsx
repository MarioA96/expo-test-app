import { ReactNode } from 'react';

import { View, useColorScheme } from 'react-native';
import {Colors} from '../constants/Colors'

interface Props {
    style?: object;
    children?: ReactNode;
}

const ThemedView = ({style, ...props}: Props) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme!] ?? Colors.light;
    
    return (
        <View style={[ {backgroundColor: theme.background},style ]}
        {...props}
        />
    )
}

export default ThemedView