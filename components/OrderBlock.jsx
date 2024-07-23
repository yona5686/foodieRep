import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useResContext } from '../ResContext';
import axios from 'axios';

export default function OrderBlock({ order, nav }) {

    const [curRestaurant, setCurRestaurant] = useState({});
    const [dishes, setDishes] = useState({});

    const { baseUrl, setChecked, setRestaurant, setIsPastOrder, setCurOrder } = useResContext();

    useEffect(() => {
        const getRestaurant = async () => {
            const res = await axios.get(`${baseUrl}/rest/restId/${order.restaurantId}`);
            setCurRestaurant(res.data);
        }

        const getDishes = async () => {
            const res = await axios.get(`${baseUrl}/order/getFoods/${order.id}`);
            setDishes(res.data);
        }

        try {
            getRestaurant();
            getDishes();
        } catch(e) {
            console.error(e);
        }
    }, [])

    const calculateTotal = () => {
        return (dishes.length>0 ? dishes.reduce((total, dish) => total + (dish.price * dish.quantity), 0) : 0) + dishes[0].deliveryCost;
    };

    function orderAgain() {
        setCurOrder(order);
        setIsPastOrder(true);
        setChecked(true);
        setRestaurant(curRestaurant);
        nav.navigate("RestaurantPage");
    }


    return(
        (dishes.length>0 && <TouchableOpacity style={styles.cartContainer} onPress={orderAgain}>
            <Text style={styles.subHeader}>{curRestaurant.name}</Text>
            {dishes.map((item) => (
                <View style={styles.dishContainer} key={item.name}>
                    <Text style={styles.dishName}>{item.name}</Text>
                    <Text style={styles.quantityText}>x{item.quantity}</Text>
                    <Text style={styles.priceText}>${item.price*item.quantity}</Text>
                </View>
            ))}
            { dishes[0].deliveryCost != 0 ? (
                <Text style={styles.deliveryCostText}>Delivery cost: ${dishes[0].deliveryCost}</Text> 
            ) : (
                <Text style={{...styles.deliveryCostText, color: "green"}}>Free Delivery</Text>
            )}
            <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
        </TouchableOpacity>)
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
        marginBottom: 40,
        marginHorizontal: 10,
        borderWidth: 0.5,
        width: 250
    },
    subHeader: {
        fontSize: 14,
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
        fontSize: 14, 
        flex: 4, 
    },
    quantityText: {
        fontSize: 14, 
        flex: 1, 
        textAlign: 'center', 
    },
    priceText: {
        fontSize: 14, 
        flex: 2,
        textAlign: 'right',
    },
    deliveryCostText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 15,
        textAlign: 'left',
    },
    totalText: {
        fontSize: 16,
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
        fontSize: 12,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
