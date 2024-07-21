import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PromoCodeComp from '../components/PromoCodeComp';
import { useResContext } from '../ResContext';


export default function CartSummary({ dishes, quantities, setQuantities, setChecked, calculateTotal }) {

    const { restaurant, delCost, setDelCost } = useResContext();

    const handleQuantityChange = (name, amount) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [name]: prevQuantities[name] + amount,
        }));
    };

    return(
        <View style={styles.cartContainer}>
            <Text style={styles.subHeader}>{restaurant.name} - Cart Summary</Text>
            {dishes.length>0 && dishes.map((item) => (
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
            <TouchableOpacity style={styles.checkoutButton} onPress={() => setChecked(true)}>
                <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
});
