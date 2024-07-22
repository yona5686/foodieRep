import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useResContext } from '../ResContext';
import axios from 'axios';


export default function Check({ dishes, quantities, setChecked, calculateTotal }) {

    const { baseUrl ,restaurant, delCost, curUser } = useResContext();
    const [err, setErr] = useState(false);

    async function sendOrderToDB() {
        let count = 0;
        let foods = [];
        dishes.forEach(dish => {
            foodId = dish.id;
            quantity = quantities[dish.name];
            foods[count] = {foodId, quantity};
            count++;
        });

        const res = await axios.post(`${baseUrl}/order/`, { 
            userId: curUser.id,
            restaurantId: restaurant.id,
            foodOrdered: foods,
        });        

    }

    function finishOrder() {
        if(calculateTotal() <= restaurant.deliveryCost){
            setErr(true);
            setTimeout(() => {
                setErr(false);
            }, 500);
        }
        else {
            try {
                alert("On the way");
                sendOrderToDB();
            } catch(e) {
                console.error("sendOrderToDB Failed\n" + e);
            }
            
        }
    }
    
    const shakeAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (err) {
            Animated.sequence([
                Animated.timing(shakeAnimation, { toValue: 5, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: -5, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: 5, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: -5, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true }),
            ]).start();
        }
    }, [err]);

    return(
        <View style={styles.cartContainer}>
            <Text style={styles.subHeader}>{restaurant.name} - Cart Summary</Text>
            {dishes.map((item) => (
                <View style={styles.dishContainer} key={item.name}>
                    <Text style={styles.dishName}>{item.name}</Text>
                    <Animated.Text 
                        style={
                            !err 
                            ? styles.quantityText 
                            : {...styles.quantityText, color: "#e20606", fontSize: 20, fontWeight: 'bold', transform: [{translateX: shakeAnimation}]}
                        }>
                        x{quantities[item.name]}
                    </Animated.Text>                    
                    <Text style={styles.priceText}>${item.price*quantities[item.name]}</Text>
                </View>
            ))}
            { delCost != 0 ? (
                <Text style={styles.deliveryCostText}>Delivery cost: ${delCost}</Text> 
            ) : (
                <Text style={{...styles.deliveryCostText, color: "green"}}>Free Delivery</Text>
            )}
            <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
            <View style = {styles.buttonsContainer}>
                <TouchableOpacity style={styles.checkoutButton} onPress={() => finishOrder()}>
                    <Text style={styles.checkoutButtonText}>Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editButton} onPress={() => setChecked(false)}>
                    <Text style={styles.checkoutButtonText}>Edit</Text>
                </TouchableOpacity>
            </View>
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
    quantityText: {
        textAlign: "left",
        fontSize: 16,
    },
    priceText: {
        fontSize: 20,
        flex: 1,
        textAlign: 'right',
    },
    deliveryCostText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 15,
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
        width: "70%"
    },
    editButton: {
        backgroundColor: '#4caf50',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        width: "25%"
    },
    checkoutButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
