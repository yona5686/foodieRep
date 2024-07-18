import { StyleSheet, Text, ScrollView } from "react-native"
import { useState } from "react"

import ThemeButtons from "../components/ThemeButtons";
import AllRestaurantByTheme from "../components/AllRestaurantByTheme";

export default function Restaurants( {navigation} ){

    const [themes, setThemes] = useState(["All", "Asian", "Pizza", "Israeli", "Burger", "Meat"]);//examples for get themes
    const [selectedTheme, setSelectedTheme] = useState("All");

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Choose theme</Text>
            <ThemeButtons themesLst = {themes} setTheme = {setSelectedTheme} selectedTheme = {selectedTheme}/>
            <AllRestaurantByTheme theme={selectedTheme} nav={navigation}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
