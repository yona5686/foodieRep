import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { useState } from "react";


export default function ThemeButtons({themesLst, setTheme}) {

    return(
        <View style={styles.container}>
            {themesLst.map((theme, index) => (
                <TouchableOpacity  
                    key={index} style={styles.button}
                    onPress={() => {setTheme(theme);}}>
                    <Text style={styles.buttonText}>{theme}</Text>
                </TouchableOpacity >
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: '#f0fff0', // Light green background
    },
    button: {
        padding: 15,
        backgroundColor: '#90EE90', // Light green button
        borderRadius: 25,
        alignItems: 'center',
        margin: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
