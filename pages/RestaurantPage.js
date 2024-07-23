import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { useResContext } from '../ResContext';
import CartSummary from '../components/CartSummary';
import Check from '../components/Check';
import axios from 'axios';

export default function RestaurantPage() {

    const { restaurant, delCost, baseUrl, checked, isPastOrder } = useResContext();

    const [dishes, setDishes] = useState([]);
    const [quantities, setQuantities] = useState([]);

    useEffect(() => {
        const getDishesOfRest = async () => {
            const res = await axios.get(`${baseUrl}/food/restId/${restaurant.id}`)
            setDishes(res.data);

            if(res.data.length > 0 && !isPastOrder)
                setQuantities(res.data.reduce((arr, dish) => {
                    arr[dish.name] = 0;
                    return arr;
                }, {}));
        }

        try {
            getDishesOfRest();
        } catch(e) {
            console.error("getDishesOfRest Failed\n" + e);
        }
    }, [restaurant])
    

    const calculateTotal = () => {
        return (dishes.length>0 ? dishes.reduce((total, dish) => total + (dish.price * (quantities[dish.name])), 0) : 0) + delCost;
    };


    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: restaurant.img }} style={styles.image}></Image>
            {!checked ? (
                <CartSummary dishes = {dishes} quantities = {quantities} setQuantities = {setQuantities} calculateTotal = {calculateTotal}/>
            ) : (
                <Check dishes = {dishes} setDishes={setDishes} quantities = {quantities} setQuantities={setQuantities} calculateTotal = {calculateTotal}/>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0fff0', // Light green background,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 8,
        marginBottom: 10,
    
    },
});
