import { Image, useColorScheme } from 'react-native';

// Images
const DarkLogo = require('../assets/image/expo_go_logo_dark.png');
const LightLogo = require('../assets/image/expo_go_logo_light.png');

const ThemedLogo = ({ ...props }) => {
    const colorScheme = useColorScheme();
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo;
    
    return (
        <Image source={logo} {...props}/>
    )
}

export default ThemedLogo