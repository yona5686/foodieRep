import React, { useState, useEffect } from "react"
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from 'react-native';
import axios from "axios";
import { useResContext } from "../ResContext";

export default function SignIn( {navigation} ){

    const { baseUrl, setCurUser } = useResContext();

    const [user, setUser] = useState({email: "", password: ""});
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        const getList = async () => {
            const res = await axios.get(`${baseUrl}/user/`);
            setUsersList(res.data);
        }

        try {
            getList();
        } catch(e) {
            console.error("getUsersList Failed\n" + e);
        }
    }, [])

    function handleSignIn() {
        let flag = false;
        usersList.forEach(curUser => {
            if(user.email == curUser.email && user.password == curUser.password) {
                flag = true;
                setCurUser({id: curUser.id, name: curUser.name})
                navigation.navigate('Main'); 
            }
        });
        if(!flag)
            alert("Wrong detailes");
        // navigation.navigate('Main'); //to remove
    }


    return(
        <View style={styles.container}>
            <Image source={require('../assets/frogWave.png')} style={styles.image} />
            <Text style={styles.title}>Welcome back!</Text>

            <TextInput placeholder="Email" style={styles.input} onChangeText={(emailT) => setUser((obj) => ({...obj, email: emailT}))}/>
            <TextInput placeholder="Password" style={styles.input} secureTextEntry onChangeText={(passwordT) => setUser((obj) => ({...obj, password: passwordT}))}/>

            <TouchableOpacity
                style={styles.button}
                onPress={handleSignIn}>
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
