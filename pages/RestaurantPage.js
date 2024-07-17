import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useResContext } from '../ResContext';

export default function RestaurantPage() {
    const { restaurant } = useResContext();

    const [dishes, setDishes] = useState([
        { id: '1', name: 'Mushroom', price: 12 },
        { id: '2', name: 'Spicy Salami', price: 15 },
        { id: '3', name: 'Vegetarian', price: 18 },
        { id: '4', name: 'Spinach Pizza', price: 15 },
    ]);

    const [quantities, setQuantities] = useState(dishes.reduce((acc, dish) => {
        acc[dish.id] = 1;
        return acc;
    }, {}));

    const [promoCode, setPromoCode] = useState('');

    const handleQuantityChange = (id, amount) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max(1, (prevQuantities[id] || 1) + amount),
        }));
    };

    const calculateTotal = () => {
        return dishes.reduce((total, dish) => total + (dish.price * (quantities[dish.id] || 1)), 0);
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
                            <TouchableOpacity onPress={() => handleQuantityChange(item.id, -1)} style={styles.quantityButton}>
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
                <View style={styles.promoContainer}>
                    <TextInput
                        style={styles.promoInput}
                        placeholder="Enter your promo code"
                        value={promoCode}
                        onChangeText={setPromoCode}
                    />
                    <TouchableOpacity style={styles.applyButton}>
                        <Text style={styles.applyButtonText}>Apply</Text>
                    </TouchableOpacity>
                </View>
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
        backgroundColor: '#f5f5f5',
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
    promoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    promoInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginRight: 10,
    },
    applyButton: {
        backgroundColor: '#4caf50',
        padding: 10,
        borderRadius: 8,
    },
    applyButtonText: {
        color: 'white',
        fontWeight: 'bold',
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
