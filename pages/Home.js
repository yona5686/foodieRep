import React, {useState} from "react"
import { ScrollView, StyleSheet, Image, View, Text } from "react-native"
import RestaurantCard from "../components/RestaurantCard";

export default function Home({ navigation }){

    const [restaurants, setRestaurants] = useState([
        { name: "Libia", address: "Hahalutz", deliveryCost: 5, img: "https://shorturl.at/s79h3", theme: "Israeli" },
        { name: "Pizza moshe", address: "Eilat", deliveryCost: 3, img: "https://shorturl.at/ommKY", theme: "Pizza" },
        { name: "Baladi", address: "Maale adumim", deliveryCost: 0, img: "https://shorturl.at/V2Gg9", theme: "Meat" }
    ]);
    //example for restaurants after aggregation

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../assets/foodTruck.png')} style={styles.image} />

            <View style={styles.dishContainer}><Text style={styles.headerText}>Top sellers</Text></View>
            <ScrollView horizontal showsHorizontalScrollIndicator = {false} overScrollMode="never">
                {restaurants.map((currentRes, index) => (
                    <RestaurantCard currentRes = {currentRes} nav = {navigation} key = {index} fixedSize={1.5}/>
                ))}
            </ScrollView>

            <View style={styles.dishContainer}><Text style={styles.headerText}>Favorites</Text></View>
            <ScrollView horizontal showsHorizontalScrollIndicator = {false} overScrollMode="never">
                {restaurants.map((currentRes, index) => (
                    <RestaurantCard currentRes = {currentRes} nav = {navigation} key = {index} fixedSize={1.5}/>
                ))}
            </ScrollView>

            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f0fff0', // Light green background,
        alignItems: "center"
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    dishContainer: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        borderTopWidth : 1,
        borderTopColor: '#e0e0e0',
        marginBottom: 20,
        width: "100%"
    },
    headerText: {
        marginLeft: 30,
        fontSize: 16,
        fontWeight: "bold"
    }
})