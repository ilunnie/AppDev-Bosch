import { styles, styleConcat } from './components/styles'
import { View, FormInput, Button, ProfileImage, CheckInput, Text, Submit } from './components/newCompo'
import { useContext } from 'react'
import { UtilsContext } from './config/context'

export default function Login(props) {
    const {utils, setUtils} = useContext(UtilsContext)
    
    function Cadastrar(forms) {
        console.log(forms)
        // console.log({nome, idade, sexo, email, senha, confirm, notificacao})
        // props.navigation.navigate("Usuarios")
    }

    return (
        <View style={styleConcat(styles.container, {display: "flex", justifyContent: "space-between"})}>
            <View style={{gap: "15px"}}>
                <View style={{display: "flex", alignItems: "center", marginBottom: "-15px"}}>
                    <ProfileImage/>
                </View>
                <FormInput title="Nome:" name="name"/>
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <FormInput title="Idade:" name="age" inputMode="numeric" style={{width: "45%"}}/>
                    <FormInput title="Sexo:" name="gender" style={{width: "45%"}}/>
                </View>
                <FormInput title="Email:" name="email" keyboardType="email-address"/>
                <FormInput title="Senha:" name="password" secureTextEntry={true}/>
                <FormInput title="Confirmar senha:" name="confirm_password" secureTextEntry={true}/>
                <CheckInput value={false}/>
            </View>
            <View>
                <Submit
                    action={Cadastrar}
                    style={styles.large_button}
                    clickOpacity = "true"
                >   <Text style={{textAlign: "center"}}>Cadastrar</Text>
                </Submit>

                <Button
                    style={styleConcat(styles.large_button, {borderWidth: 0, background: ""})}
                    onPress={() => props.navigation.navigate("Login")}
                >   <Text style={{textAlign: "center"}}>Cancelar</Text>
                </Button>
            </View>
        </View>
    );
}