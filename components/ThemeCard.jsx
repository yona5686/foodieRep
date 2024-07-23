import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useResContext } from '../ResContext';

export default function ThemeCard({ nav, theme }) {

    const { setSelectedTheme } = useResContext();

    return (
        <TouchableOpacity style={styles.button} onPress={() => {
            setSelectedTheme(theme);
            nav.navigate("Restaurants");
        }}>
            <Text style={styles.text}>{theme}</Text>    
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4caf50',
        borderRadius: 8,
        padding: 15,
        marginHorizontal: 10,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 1,
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
