import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useResContext } from '../ResContext';
import PromoCodeComp from '../components/PromoCodeComp';

export default function RestaurantPage() {
    const { restaurant } = useResContext();

    const [dishes, setDishes] = useState([//example get dishes of restaurant
        { id: '0', name: 'Humus', price: 12 },
        { id: '1', name: 'Shnizel', price: 15 },
        { id: '2', name: 'Hot dog', price: 18 },
        { id: '3', name: 'Humus Shnizel', price: 15 },
    ]);

    const [quantities, setQuantities] = useState(dishes.reduce((arr, dish) => {
        arr[dish.id] = 0;
        return arr;
    }, {}));

    const handleQuantityChange = (id, amount) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + amount,
        }));
    };

    const calculateTotal = () => {
        return dishes.reduce((total, dish) => total + (dish.price * (quantities[dish.id])), 0);
    };

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: restaurant.img }} style={styles.image}></Image>
            <View style={styles.cartContainer}>
                <Text style={styles.subHeader}>{restaurant.name} - Cart Summary</Text>
                {dishes.map((item) => (
                    <View style={styles.dishContainer} key={item.id}>
                        <Text style={styles.dishName}>{item.name}</Text>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity onPress={() => (quantities[item.id]>0)? handleQuantityChange(item.id, -1): {}} style={styles.quantityButton}>
                                <Text style={styles.quantityButtonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{quantities[item.id]}</Text>
                            <TouchableOpacity onPress={() => handleQuantityChange(item.id, 1)} style={styles.quantityButton}>
                                <Text style={styles.quantityButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.priceText}>${item.price}</Text>
                    </View>
                ))}
                <PromoCodeComp/>
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
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'right',
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
