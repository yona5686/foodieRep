import React from "react"
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native"
import { useResContext } from "../ResContext"

export default function RestaurantPage(){

    const { restaurant } = useResContext();

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: restaurant.img }} style={styles.image}></Image>
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <Text style={styles.restaurantTheme}>{restaurant.theme}</Text>

            <View style={styles.cardContainer}>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#f0fff0', // Light green background
    },
    cardContainer: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 50,
        marginVertical: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 1,
        padding: 10,
        width: 300
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 8,
        marginRight: 10,
    },
    restaurantName: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,
    },
    restaurantTheme: {
        fontSize: 14,
        color: '#666',
    },
});
