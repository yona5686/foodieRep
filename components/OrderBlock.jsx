import { useResContext } from "../ResContext";
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrderBlock() {

    const { restaurant, delCost  } = useResContext();

    return(
        <View style={styles.cartContainer}>
            <Text style={styles.subHeader}>{restaurant.name} - Cart Summary</Text>
            {dishes.map((item) => (
                <View style={styles.dishContainer} key={item.name}>
                    <Text style={styles.dishName}>{item.name}</Text>
                    <Text style={!err ? styles.quantityText : {...styles.quantityText, color: "#e20606", fontSize: 20, fontWeight: 'bold'}}>x{quantities[item.name]}</Text>
                    <Text style={styles.priceText}>${item.price*quantities[item.name]}</Text>
                </View>
            ))}
            { delCost != 0 ? (
                <Text style={styles.deliveryCostText}>Delivery cost: ${delCost}</Text> 
            ) : (
                <Text style={{...styles.deliveryCostText, color: "green"}}>Free Delivery</Text>
            )}
            <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
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
