import { TouchableOpacity, View, StyleSheet, Text } from "react-native";


export default function ThemeButtons({themesLst, nav}) {

    return(
        <>
            {themesLst.map((theme, index) => (
                <TouchableOpacity  
                    key={index} style={styles.button}
                    onPress={() => nav.navigate("RestaurantPage")}>
                    <Text style={styles.buttonText}>{theme}</Text>
                </TouchableOpacity >
            ))}
        </>
    )
}

const styles = StyleSheet.create({

    button: {
        width: '50%',
        padding: 15,
        backgroundColor: '#90EE90', // Light green button
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
