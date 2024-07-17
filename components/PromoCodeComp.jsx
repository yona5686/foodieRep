import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native"
import { useState } from "react";

export default function PromoCodeComp() {

    const [promoCode, setPromoCode] = useState('');

    return(
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
    )
}

const styles = StyleSheet.create({

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
}); 