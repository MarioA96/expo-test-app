import { ReactNode } from 'react';

import { Text, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

interface Props {
    style?: object;
    children?: ReactNode;
    title?: string | boolean
}

const ThemedText = ({ style, title=false, ...props }: Props) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme!] ?? Colors.light;
    
    const textColor = title ? theme.title : theme.text;

    return (
        <Text
            style={[{color: textColor}, style]}
            {...props}
        />
    )
}

export default ThemedText;