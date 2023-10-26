import { View, Text, Pressable, TextInput, Button } from "react-native";
import { useState, useContext } from "react";
import { UtilsContext } from "./config/context";

export default function Login(props) {
    const [email, setEmail] = useState("")
    const {utils, setUtils} = useContext(UtilsContext)

    function goToCadastro() {
        setUtils({...utils, email: email})
        props.navigation.navigate('Cadastro')
    }

    return (
        <View>
            <Text>Login</Text>
            <TextInput>
                onChangeText={text => setEmail(text)}
                value={email}
                placeHolder={"email"}
            </TextInput>
            <Button
                onPress={() => goToCadastro()}
            >logar</Button>
        </View>
    );
}