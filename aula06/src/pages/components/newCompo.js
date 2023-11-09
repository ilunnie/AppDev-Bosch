import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { View as OriginView, Text as OriginText, TouchableOpacity, Pressable, Image as OriginImage, TextInput, Switch } from "react-native";
import { styles, styleConcat } from './styles'
import { useState, useContext } from 'react';
import { Forms } from '../config/context'

const numerics = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export function View(props) {
    return (
        <OriginView style={props.style}>{props.children}</OriginView>
    );
}

export function Text(props) {
    const style = styleConcat(styles.fontStyle, props.style)
    return (
        <OriginText style={style}>{props.children}</OriginText>
    );
}

export function Display(props) {
    const style = styleConcat(styles.display, props.style)
    return (
        <View style={style}>{props.children}</View>
    );
}

export function FAIcon(props) {
    const style = styleConcat(styles.icon, props.style)
    return (
        <TouchableOpacity onPress={props.onPress}>
            <FontAwesomeIcon
                icon={props.icon}
                style={style}
                size={props.size || 0}
            />
        </TouchableOpacity>
    );
}

export function Button(props) {
    const style = styleConcat(styles.button, props.style)
    if(props.clickOpacity == "true")
        return (
            <TouchableOpacity
                onPress={props.onPress}
                style={style}>
                    <>{props.children}</>
            </TouchableOpacity>
        );
    else
        return (
            <Pressable
                onPress={props.onPress}
                style={style}>
                    <>{props.children}</>
            </Pressable>
        );
}

export function Submit(props) {
    const {forms, setForms} = useContext(Forms)
    function Send() {
        const pass = props.verify ?  props.verify(forms) : true
        
        if(pass) {
            props.action ? props.action(forms) : pass
            setForms({});
        }
    }

    return (
        <Button
            clickOpacity={props.clickOpacity}
            style={props.style}
            onPress={() => Send()}
        >
            <>{props.children}</>
        </Button>
    );
}

export function Keyboard(props) {
    return (
        <Button
            onPress={() => props.getKey(props.value)}
            style={props.style}
            clickOpacity="true">
            <Text style={props.textStyle}>
                {props.value}
            </Text>
        </Button>
    );
}

export function FormInput(props) {
    const {forms, setForms} = useContext(Forms)
    const [text, setText] = useState(forms[props.name])
    var viewStyle = styleConcat(styles.input_container, props.style || styles.input_container)
    var labelStyle = styleConcat(styles.label, props.labelStyle || styles.label)
    var inputStyle = styleConcat(styles.input_text, props.inputStyle || styles.input_text)

    function saveForms(value) {
        if(props.secureTextEntry == 'numeric')
            console.log(value.replace(/[^0-9]/g, ''))
        
        setForms({...forms, [props.name]: value})
    }

    return (
        <View style={viewStyle}>
            <Text style={labelStyle}>{props.title || "Label"}</Text>
            <TextInput
                keyboardType='numeric'
                secureTextEntry={props.secureTextEntry || false}
                onChangeText={text => saveForms(text)}
                style={inputStyle}
                value={text} >
            </TextInput>
        </View>
    );
}

export function ProfileImage(props) {
    var style = styleConcat(styles.profile_image, props.style || {})
    return (
        <OriginImage
            source={{uri: props.uri || "https://upload.wikimedia.org/wikipedia/commons/9/99/Exampleavatar.png"}}
            style={style}
        />
    );
}

export function CheckInput(props) {
    const [value, setValue] = useState(props.value || false)
    return (
        <Switch
            onValueChange={() => setValue(!value)}
            value={value}
            trackColor={{false: props.FalseTrackColor || "#767577", true: props.TrueTrackColor || "rgb(0, 150, 136)"}}
            thumbColor={props.thumbColor || "#f4f3f4"}
            activeThumbColor={props.thumbColor || "#f4f3f4"}
        />
    );
}