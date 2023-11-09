import { styles, styleConcat } from '../pages/components/styles'
import { View, Text, FormInput, Button } from './components/newCompo';

export default function Login(props) {
    return (
        <View style={styleConcat(styles.container, {display: "flex", justifyContent: "space-between"})}>
            <View style={{gap: "30px"}}>
                <Text style={{fontSize: "5em", marginTop: "50px", marginBottom: "20px", textAlign: "center"}}>Login</Text>

                <FormInput title="Email:" keyboardType="email-address"/>
                <FormInput title="Senha:" secureTextEntry={true}/>
            </View>
            <View>
                <Button
                    style={styles.large_button}
                    onPress={() => props.navigation.navigate("Usuarios")}
                    clickOpacity = "true"
                >   <Text style={{textAlign: "center"}}>Login</Text>
                </Button>
                
                <Button
                    style={styleConcat(styles.large_button, {borderWidth: 0, background: ""})}
                    onPress={() => props.navigation.navigate("Cadastro")}
                >   <Text style={{textAlign: "center"}}>Cadastrar</Text>
                </Button>
            </View>
        </View>
    );
}