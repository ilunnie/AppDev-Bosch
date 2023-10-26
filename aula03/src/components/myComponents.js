import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { View as OriginView, Text as OriginText, TouchableOpacity } from "react-native";
import { styles, styleConcat } from './styles'

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