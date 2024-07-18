import { TextInput, View, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function SearchBar() {

    return(
        <View style={styles.container}>
            <TextInput placeholder="Search..." style={styles.input}/>
            <Ionicons name="search" size={40} style={styles.iconContainer}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0fff0', // Light green background,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 20
    },
    iconContainer: {
        marginTop: 10
    },
    input: {
        width: '80%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
})