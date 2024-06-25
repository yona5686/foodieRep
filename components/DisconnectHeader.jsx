import { View, Button } from "react-native";

export default function DisconnectHeader({ nav }) {

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 20 }}>
            <Button
                onPress={() => nav.navigate('GetStarted')}
                title="Disconnect"
                color="green"
            />
        </View>
    );
}