import { StyleSheet, Text, ScrollView } from "react-native"
import { useState } from "react"

import ThemeButtons from "../components/ThemeButtons";
import AllRestaurantByTheme from "../components/AllRestaurantByTheme";

export default function Restaurants( {navigation} ){

    const [themes, setThemes] = useState(["Asian", "Pizza", "Fast Food", "Burger", "Mexican"]);//examples
    const [selectedTheme, setSelectedTheme] = useState("");

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Choose theme</Text>
            <ThemeButtons themesLst = {themes} nav = {navigation} setTheme = {setSelectedTheme}/>
            <AllRestaurantByTheme theme={selectedTheme}/>
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
