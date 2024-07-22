import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useResContext } from '../ResContext';
import axios from 'axios';

export default function Register({ navigation }) {

    const { baseUrl, setCurUser } = useResContext();

    const [user, setUser] = useState({email: "", password: "", fullName: "", address: ""});
    const [usersList, setUsersList] = useState([]);
    
    const [errTextFlag, setErrTextFlag] = useState(false);
    const [errText, setErrText] = useState("");

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/;

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

    async function handleSignUp() {
        let flag = false;
        usersList.forEach(curUser => {
            if(user.email == curUser.email){
                flag = true;
            }
        });

        if(flag) {
            alert("Email is in use");
        }
        else if(user.email != "" && user.password != "" && user.fullName != "" && user.address != "") {
            if(user.password.length <= 6 ){
                setErrTextFlag(true);
                setErrText("Password must be longer than 6 characters");
                return;
            } else if(reg.test(user.email) == false){
                setErrTextFlag(true);
                setErrText("Email is not valid");
                return;
            }
            try {
                const res = await axios.post(`${baseUrl}/user/`, {
                name: user.fullName,
                password: user.password,
                email: user.email,
                address: user.address,
            });
                setErrTextFlag(false);                
                setErrText("");
                setCurUser({id: res.data._id,name: res.data.name});
                navigation.navigate('Main');
            } catch (e) {
                console.error("handleSignUp Failed\n" + e);
            }

        } else {
            alert("Must fill all of the fields");
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/turtleCooking.png')} style={styles.image} />
            <Text style={styles.title}>Foodie</Text>
            <Text style={styles.subtitle}>Discover and order from local restaurants</Text>

            <TextInput placeholder="Email" style={styles.input} onChangeText={(emailT) => setUser((obj) => ({...obj, email: emailT}))}/>
            <TextInput placeholder="Password" style={styles.input} secureTextEntry onChangeText={(passwordT) => setUser((obj) => ({...obj, password: passwordT}))}/>
            <TextInput placeholder="Full Name" style={styles.input} onChangeText={(nameT) => setUser((obj) => ({...obj, fullName: nameT}))}/>
            <TextInput placeholder="Delivery Address" style={styles.input} onChangeText={(addressT) => setUser((obj) => ({...obj, address: addressT}))}/>

            <TouchableOpacity
                style={styles.button}
                onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            
            {errTextFlag ? <Text style={styles.errText}>*{errText}</Text> : null}
        </View>
    );
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
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#888',
        marginBottom: 20,
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
    errText: {
        fontSize: 12,
        color: "red"
    }
});
