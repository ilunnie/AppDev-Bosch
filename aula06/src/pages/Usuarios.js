import { View, Text } from "react-native"
import { styles, styleConcat } from './components/styles'

export default function Cadastro(props) {
    return (
        <View style={styleConcat(styles.container, {gap: "20px"})}>
            <Text style={{fontSize: "5em"}}>Usuarios</Text>

            <View style={styles.user_container}>
                <Text>Nome</Text>
                <Text>Idade</Text>
                <Text>Sexo</Text>
                <Text>Recebe Notificação</Text>
            </View>
        </View>
    );
}