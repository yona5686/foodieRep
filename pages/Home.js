import React, { useState, useEffect } from "react"
import { ScrollView, StyleSheet, Image, View, Text, TouchableOpacity } from "react-native"
import RestaurantCard from "../components/RestaurantCard";
import OrderBlock from "../components/OrderBlock";
import ThemeCard from "../components/ThemeCard";
import axios from "axios";
import { useResContext } from "../ResContext";
import Toast from "react-native-toast-message";

export default function Home({ navigation }){

    const { baseUrl, pastOrders, checked, curUser } = useResContext();

    const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);
    const [topSellers, setTopSellers] = useState([]);
    const [freeDelRest, setFreeDelRest] = useState([]);

    const [bestThemes, setBestThemes] = useState([]);


    useEffect(() => {

        const getFavRests = async () => {
            const res = await axios.get(`${baseUrl}/order/favoriteRestaurantsOfUser/${curUser.id}`);
            setFavoriteRestaurants(res.data);
        }

        const getTopSellersRest = async () => {
            const res = await axios.get(`${baseUrl}/order/topRestaurants`);
            setTopSellers(res.data);
        }

        const getFreeDelivery = async () => {
            const res = await axios.get(`${baseUrl}/rest/freeDelivery`);
            setFreeDelRest(res.data);
        }

        const setBestSellerThemes = async () => {
            const res = await axios.get(`${baseUrl}/order/bestThemes`);
            let themes = res.data.map(themeObj => themeObj.theme);
            setBestThemes(themes);
        }


        try {
            getFavRests();
            getTopSellersRest();
            getFreeDelivery();
            setBestSellerThemes();
        } catch(e) {
            console.error(e);
        }
    }, [checked])

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../assets/foodTruck.png')} style={styles.image} />

            <View style={styles.dishContainer}><Text style={styles.headerText}>Past orders</Text></View>
            <ScrollView horizontal showsHorizontalScrollIndicator = {false} overScrollMode="never" style={{width: "100%"}}>
                {pastOrders && pastOrders.map((currentOrder, index) => (
                    <OrderBlock key = {index} order = {currentOrder} nav={navigation}/>
                ))}
            </ScrollView>

            <View style={styles.dishContainer}><Text style={styles.headerText}>Favorites</Text></View>
            <ScrollView horizontal showsHorizontalScrollIndicator = {false} overScrollMode="never" style={{width: "100%"}}>
                {favoriteRestaurants && favoriteRestaurants.map((currentRes, index) => (
                    <RestaurantCard currentRes = {currentRes} nav = {navigation} key = {index} fixedSize={1.5}/>
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
            
            <View style={styles.dishContainer}><Text style={styles.headerText}>Best themes</Text></View>
            <View style={styles.staticHorizontalView}>
                {bestThemes && bestThemes.map((theme, index) => (
                    <ThemeCard nav={navigation} theme={theme} key={index}/>
                ))}
            </View>
           
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
    },
    staticHorizontalView: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row"
    }
})