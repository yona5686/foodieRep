import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useResContext } from "../ResContext";

export default function DisconnectHeader({ nav }) {

    const { setCurUser } = useResContext();

    return (
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 20 }}
            onPress={() => {nav.navigate('GetStarted'); setCurUser({});}}
                    title="Disconnect"
                    color="green">
            <Ionicons name='exit-outline' size={35} color={"green"}/>
        </TouchableOpacity>
    );
}