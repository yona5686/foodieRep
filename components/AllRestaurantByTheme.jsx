import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RestaurantCard from './RestaurantCard';

export default function AllRestaurantByTheme({theme, nav}) {//theme sent to back-end

    const [restaurants, setRestaurants] = useState([
        { name: "Libia", address: "Hahalutz", deliveryCost: 5, img: "https://shorturl.at/s79h3", theme: "Israeli" },
        { name: "Pizza moshe", address: "Eilat", deliveryCost: 3, img: "https://shorturl.at/ommKY", theme: "Pizza" },
        { name: "Baladi", address: "Maale adumim", deliveryCost: 0, img: "https://shorturl.at/V2Gg9", theme: "Meat" }
    ]);
    //example for get restaurants

    useEffect(() => {
        if(theme == "")
            //send request getAllRestaurants
            console.log("all");
        else
            //getAllRestaurantsByTheme(theme)
            console.log(theme);
    }, [theme])
    //example /\


    return (
        <View style={styles.container}>
            {restaurants.map((currentRes, index) => (
                <RestaurantCard currentRes={currentRes} key={index} nav={nav}/>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        padding: 10,
        width: 400,
        borderWidth: 0.5
    },
    textContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 8,
        marginRight: 10,
    },
    restaurantName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    restaurantTheme: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    addressText: {
        marginLeft: 5,
        marginRight: 15,
        fontSize: 14,
        marginBottom: 5,

    },
    deliveryCost: {
        marginRight: 5,
        fontSize: 14,
    },
    deliveryInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
