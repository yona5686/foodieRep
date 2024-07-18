import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useResContext } from '../ResContext';


export default function RestaurantCard({ currentRes, nav, fixedSize }) {

    if(fixedSize == null){
        fixedSize = 1;
    }

    const { setRestaurant } = useResContext();

    return(
        <TouchableOpacity onPress={() => {
            setRestaurant(currentRes);
            nav.navigate("RestaurantPage");

        }}>
            <View style={{...styles.cardContainer, width: 400/fixedSize}}>
                <Image source={{ uri: currentRes.img }} style={{...styles.image, width: 150/fixedSize, height: 150/fixedSize}}></Image>
                <View style={styles.textContainer}>
                    <Text style={styles.restaurantName}>{currentRes.name}</Text>
                    <Text style={styles.restaurantTheme}>{currentRes.theme}</Text>
                    <Text style={styles.addressText}>{currentRes.address}</Text>
                    <View style={styles.deliveryInfo}>
                        <Text style={styles.deliveryCost}>{currentRes.deliveryCost == 0 ? "FREE" : currentRes.deliveryCost + "$"}</Text>
                        <MaterialCommunityIcons
                            name={'truck'}
                            size={24/fixedSize}
                            color="black"
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        padding: 10,
        width: 400,
        borderWidth: 0.5,
        marginHorizontal: 5
    },
    textContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 8,
        marginRight: 10,
    },
    restaurantName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    restaurantTheme: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    addressText: {
        marginLeft: 5,
        marginRight: 15,
        fontSize: 14,
        marginBottom: 5,

    },
    deliveryCost: {
        marginRight: 5,
        fontSize: 14,
    },
    deliveryInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
