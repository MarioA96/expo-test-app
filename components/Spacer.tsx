import { View, DimensionValue } from 'react-native'

const Spacer = ({ width = "100%" as DimensionValue, height = 40 }) => {
    return (
        <View style={{ width, height }} />
    )
}

export default Spacer;