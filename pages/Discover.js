import { ScrollView, View, StyleSheet } from "react-native"
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar"
import RestaurantCard from "../components/RestaurantCard"
import axios from "axios";
import { useResContext } from "../ResContext";

export default function Discover({ navigation }){

    const { baseUrl } = useResContext();

    const [txt, setTxt] = useState("");
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const handleSearch = async () => {
            const res = await axios.get(`${baseUrl}/rest/getRestByName/${txt}`);
            setRestaurants(res.data);
        }

        try {
            if(txt != "")
                handleSearch();
        } catch (e) {
            console.error("handleSearch Failed\n" + e);
        }
    }, [txt])

    return(
        <View style = {styles.container}>
            <SearchBar setTxt={setTxt}/>
            <ScrollView contentContainerStyle={styles.containerScroll} overScrollMode="never" showsVerticalScrollIndicator={false}>
                {restaurants.map((currentRes, index) => (
                    <RestaurantCard currentRes={currentRes} key={index} nav={navigation}/>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0fff0', // Light green background,
    },
    containerScroll: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#f0fff0', // Light green background
    }
})