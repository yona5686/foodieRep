import { ScrollView, View, StyleSheet } from "react-native"
import { useState } from "react";
import SearchBar from "../components/SearchBar"
import RestaurantCard from "../components/RestaurantCard"

export default function Discover({ navigation }){

    const [restaurants, setRestaurants] = useState([
        { name: "Libia", address: "Hahalutz", deliveryCost: 5, img: "https://shorturl.at/s79h3", theme: "Israeli" },
        { name: "Lizerria", address: "Eilat", deliveryCost: 3, img: "https://shorturl.at/ommKY", theme: "Pizza" },
        { name: "Liodelia", address: "Maale adumim", deliveryCost: 0, img: "https://shorturl.at/V2Gg9", theme: "Meat" },
        { name: "Liodelia", address: "Maale adumim", deliveryCost: 0, img: "https://shorturl.at/V2Gg9", theme: "Meat" },
        { name: "Liodelia", address: "Maale adumim", deliveryCost: 0, img: "https://shorturl.at/V2Gg9", theme: "Meat" },
        { name: "Liodelia", address: "Maale adumim", deliveryCost: 0, img: "https://shorturl.at/V2Gg9", theme: "Meat" }
    ]);
    //example for get restaurant by name(searched)

    return(
        <View style = {styles.container}>
            <SearchBar/>
            <ScrollView contentContainerStyle={styles.containerScroll} overScrollMode="never" showsVerticalScrollIndicator={false}>
                {restaurants.map((currentRes, index) => (
                    <RestaurantCard currentRes={currentRes} key={index} nav={navigation}/>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0fff0', // Light green background,
    },
    containerScroll: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#f0fff0', // Light green background
    }
})