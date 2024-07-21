import { StyleSheet, Text, ScrollView } from "react-native"
import { useState, useEffect } from "react"
import axios from "axios";
import { useResContext } from "../ResContext";
import ThemeButtons from "../components/ThemeButtons";
import AllRestaurantByTheme from "../components/AllRestaurantByTheme";

export default function Restaurants( {navigation} ){

    const { baseUrl } = useResContext();

    const [themes, setThemes] = useState(["All"]);
    const [restaurants, setRestaurants] = useState([]);
    const [selectedTheme, setSelectedTheme] = useState("All");

    useEffect(() => {
        const getAllThemes = async () => {
            const res = await axios.get(`${baseUrl}/rest/Themes`);
            setThemes([...themes, ...res.data]);    
        }

        try {
            getAllThemes();
        } catch (e) {
            console.error("getAllThemes Failed\n" + e);
        }
    }, [])

    useEffect(() => {
        const getResByTheme = async () => {
            const res = await axios.get(`${baseUrl}/rest/Theme/${selectedTheme}`);
            setRestaurants(res.data);
        }

        try {
            getResByTheme();
        } catch (e) {
            console.error("getResByTheme Failed\n" + e);
        }
    }, [selectedTheme])

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Choose theme</Text>
            <ThemeButtons themesLst = {themes} setTheme = {setSelectedTheme} selectedTheme = {selectedTheme}/>
            <AllRestaurantByTheme nav={navigation} restaurants={restaurants}/>
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
