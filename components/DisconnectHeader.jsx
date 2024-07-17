import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DisconnectHeader({ nav }) {

    return (
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 20 }}
            onPress={() => nav.navigate('GetStarted')}
                    title="Disconnect"
                    color="green">
            <Ionicons name='exit-outline' size={35} color={"green"}/>
        </TouchableOpacity>
    );
}