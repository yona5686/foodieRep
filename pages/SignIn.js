import React from "react"
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignIn( {navigation} ){

    return(
        <View style={styles.container}>
            <Image source={require('../assets/frogWave.png')} style={styles.image} />
            <Text style={styles.title}>Welcome back!</Text>

            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Password" style={styles.input} secureTextEntry />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Main')}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0fff0', // Light green background
        paddingVertical: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    input: {
        width: '80%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        marginBottom: 15,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    button: {
        width: '80%',
        padding: 15,
        backgroundColor: '#90EE90', // Light green button
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
