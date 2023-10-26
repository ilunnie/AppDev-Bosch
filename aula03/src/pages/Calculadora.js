import { useState } from 'react';
import { styles, setTheme } from '../components/styles'
import { View, Text, Display, FAIcon } from "../components/myComponents";
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export default function Calculadora(props) {
    const [subValue, setSubValue] = useState("10x10")
    const [value, setValue] = useState("100")

    return (
        <>

        <FAIcon
            onPress={() => setTheme()}
            icon={faMoon} size={25} style={{marginTop: "2%", alignSelf: "end"}}/>
        <Display style={{height: "100px", marginTop: "5%"}}>
            <Text style={styles.subValue}>subValue</Text>
            <Text>value</Text>
        </Display>

        </>
    );
}