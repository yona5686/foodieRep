import React, { useState, useEffect } from "react"
import { ScrollView, StyleSheet, Image, View, Text } from "react-native"
import RestaurantCard from "../components/RestaurantCard";
import OrderBlock from "../components/OrderBlock";
import axios from "axios";
import { useResContext } from "../ResContext";

export default function Home({ navigation }){

    const { baseUrl, pastOrders } = useResContext();

    const [topSellers, setTopSellers] = useState([]);
    const [freeDelRest, setFreeDelRest] = useState([]);


    useEffect(() => {
        const getFreeDelivery = async () => {
            const res = await axios.get(`${baseUrl}/rest/freeDelivery`)
            setFreeDelRest(res.data);
        }

        try {
            getFreeDelivery();
        } catch(e) {
            console.error(e);
        }
    }, [])

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../assets/foodTruck.png')} style={styles.image} />

            <View style={styles.dishContainer}><Text style={styles.headerText}>Past orders</Text></View>
            <ScrollView horizontal showsHorizontalScrollIndicator = {false} overScrollMode="never" style={{width: "100%"}}>
                {pastOrders && pastOrders.map((currentOrder, index) => (
                    <OrderBlock key = {index} order = {currentOrder} nav={navigation}/>
                ))}
            </ScrollView>

            <View style={styles.dishContainer}><Text style={styles.headerText}>Top sellers</Text></View>
            <ScrollView horizontal showsHorizontalScrollIndicator = {false} overScrollMode="never" style={{width: "100%"}}>
                {topSellers && topSellers.map((currentRes, index) => (
                    <RestaurantCard currentRes = {currentRes} nav = {navigation} key = {index} fixedSize={1.5}/>
                ))}
            </ScrollView>

            <View style={styles.dishContainer}><Text style={styles.headerText}>Free delivery</Text></View>
            <ScrollView horizontal showsHorizontalScrollIndicator = {false} overScrollMode="never" style={{width: "100%"}}>
                {freeDelRest && freeDelRest.map((currentRes, index) => (
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