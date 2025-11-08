import { StyleSheet } from 'react-native';

import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';

const Create = () => {

    return (
        <ThemedView style={styles.container}>

            <ThemedText title={true} style={styles.heading}>
                Add a new Book
            </ThemedText>
            <Spacer />

        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    }
})

export default Create;