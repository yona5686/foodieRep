import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useResContext } from '../ResContext';
import PromoCodeComp from '../components/PromoCodeComp';

export default function RestaurantPage() {

    const { restaurant } = useResContext();

    const [delCost, setDelCost] = useState(restaurant.deliveryCost);

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

    const handleQuantityChange = (name, amount) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [name]: prevQuantities[name] + amount,
        }));
    };

    const calculateTotal = () => {
        return dishes.reduce((total, dish) => total + (dish.price * (quantities[dish.name])), 0) + restaurant.deliveryCost;
    };

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: restaurant.img }} style={styles.image}></Image>
            <View style={styles.cartContainer}>
                <Text style={styles.subHeader}>{restaurant.name} - Cart Summary</Text>
                {dishes.map((item) => (
                    <View style={styles.dishContainer} key={item.name}>
                        <Text style={styles.dishName}>{item.name}</Text>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity onPress={() => (quantities[item.name]>0)? handleQuantityChange(item.name, -1): {}} style={styles.quantityButton}>
                                <Text style={styles.quantityButtonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{quantities[item.name]}</Text>
                            <TouchableOpacity onPress={() => handleQuantityChange(item.name, 1)} style={styles.quantityButton}>
                                <Text style={styles.quantityButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.priceText}>${item.price}</Text>
                    </View>
                ))}
                <PromoCodeComp setDelCost = {setDelCost}/>
                { delCost != 0 ? (
                    <Text style={styles.deliveryCostText}>Delivery cost: ${delCost}</Text> 
                ) : (
                    <Text style={{...styles.deliveryCostText, color: "green"}}>Free Delivery</Text>
                )}
                <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
                <TouchableOpacity style={styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0fff0', // Light green background,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cartContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 1,
        marginBottom: 40
    },
    subHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dishContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    dishName: {
        fontSize: 16,
        flex: 2,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    quantityButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#4caf50',
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantityButtonText: {
        color: 'white',
        fontSize: 20,
    },
    quantityText: {
        marginHorizontal: 10,
        fontSize: 16,
    },
    priceText: {
        fontSize: 16,
        flex: 1,
        textAlign: 'right',
    },
    deliveryCostText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'left',
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'left',
    },
    checkoutButton: {
        backgroundColor: '#4caf50',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 8,
        marginBottom: 10,
    
    },
});
