import { useState, useContext } from "react";
import { UtilsContext } from "./config/context";
import { Button } from "react-native";

export default function Cadastro(props) {
    const [valor, setValue] = useState("")
    const {utils, setUtils} = useContext(UtilsContext)

    return (
        <View>
            <Text>Cadastro</Text>
            <Text>{valor}</Text>
            <Button>
                onPress={() => props.navigation.navigate("Login")}
            </Button>
        </View>
    );
}