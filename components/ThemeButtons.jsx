import { TouchableOpacity, StyleSheet, Text, ScrollView, View } from "react-native";

export default function ThemeButtons({themesLst, setTheme, selectedTheme}) {

    return(
        <View style={{height: 60}}>
            <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
                {themesLst.map((theme, index) => (
                    <TouchableOpacity  
                        key={index} style={theme == selectedTheme? {...styles.button, backgroundColor: "#067506"}: styles.button}
                        onPress={() => {setTheme(theme);}}>
                        <Text style={theme == selectedTheme? {...styles.buttonText, color: "#ffffff"}: styles.buttonText}>{theme}</Text>
                    </TouchableOpacity >
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 15,
        backgroundColor: '#90EE90', // Light green button
        borderRadius: 25,
        alignItems: 'center',
        margin: 5,
        display: "flex",
        justifyContent: "center",
        borderWidth: 1
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
});
