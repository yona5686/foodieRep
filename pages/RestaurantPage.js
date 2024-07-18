import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image, Text } from 'react-native';
import { useResContext } from '../ResContext';
import CartSummary from '../components/CartSummary';
import Check from '../components/Check';

export default function RestaurantPage() {

    const { restaurant, delCost } = useResContext();

    const [dishes, setDishes] = useState([//example get dishes of restaurant
        { name: 'Humus', price: 12 },
        { name: 'Shnizel', price: 15 },
        { name: 'Hot dog', price: 18 },
        { name: 'Humus Shnizel', price: 15 },
    ]);

    const [quantities, setQuantities] = useState(dishes.reduce((arr, dish) => {
        arr[dish.name] = 0;
        return arr;
    }, {}));

    const calculateTotal = () => {
        return dishes.reduce((total, dish) => total + (dish.price * (quantities[dish.name])), 0) + delCost;
    };

    const [checked, setChecked] = useState(false);


    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: restaurant.img }} style={styles.image}></Image>
            {!checked ? (
                <CartSummary dishes = {dishes} quantities = {quantities} setQuantities = {setQuantities} setChecked = {setChecked} calculateTotal = {calculateTotal}/>
            ) : (
                <Check dishes = {dishes} quantities = {quantities} setChecked = {setChecked} calculateTotal = {calculateTotal}/>
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
