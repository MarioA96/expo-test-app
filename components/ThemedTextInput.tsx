import { TextInput, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors';

interface Props {
    style?: object;
    
    // any other TextInput props
    [prop: string]: any;
}

const ThemedTextInput = ({style, ...props}: Props) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme!] ?? Colors.light;
    
    return (
        <TextInput 
            style={[
                {
                    backgroundColor: theme.uiBackground,
                    color: theme.text,
                    placeholderTextColor: theme.text,
                    padding: 20,
                    borderRadius: 6
                },
                style
            ]}
            {...props}
        />
    )
}

export default ThemedTextInput;

