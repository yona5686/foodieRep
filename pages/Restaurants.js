import { StyleSheet, Text, ScrollView } from "react-native"
import { useState } from "react"

import ThemeButtons from "../components/ThemeButtons";

export default function Restaurants( {navigation} ){

    const [themes, setThemes] = useState(["Asian", "Pizza", "ff"]);//examples

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Choose theme</Text>
            <ThemeButtons themesLst = {themes} nav = {navigation}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0fff0', // Light green background
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});
