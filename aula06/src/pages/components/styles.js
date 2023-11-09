import { StyleSheet } from "react-native";
import { dark_theme } from "./themes/dark"
import { light_theme } from "./themes/light"
import React from "react";

var dark_theme_on = localStorage.getItem('dark_theme_on') == "true" ? true : false;

export function styleConcat(baseStyle, newStyle) {
    var concatenatedStyles = {};
    for (const key in baseStyle) {
        concatenatedStyles[key] = baseStyle[key];
    }
    for (const key in newStyle) {
        concatenatedStyles[key] = newStyle[key];
    }
    return concatenatedStyles;
}

function stylesConcat(baseStyle, newStyle) {
    var concatenatedStyles = {};

    for (const key in baseStyle) {
        concatenatedStyles[key] = baseStyle[key];
    }
    
    for (const keybase in baseStyle) {
        for (const keynew in newStyle) {
            if(baseStyle[keynew] == undefined)
                concatenatedStyles[keynew] = newStyle[keynew]
            else
                concatenatedStyles[keynew] = styleConcat(baseStyle[keynew], newStyle[keynew])
        }
    }

    return concatenatedStyles;
}

const stylesBase = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
        padding: "20px",
    },

    display: {
        borderRadius: "10px",
        borderWidth: 1,
        padding: "10px",
    },

    subValue: {
        fontSize: "1em",
        opacity: ".5",
    },

    displayValue: {
        fontSize: "2em",
    },

    display_button: {
        width: "33%"
    },

    display_button_text: {
        fontSize: "1.5em",
        textAlign: "center",
    },

    container: {
        padding: "30px",
        width: "100%",
        height: "100%",
    },

    user_container: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: "10px",
        padding: "10px",
        gap: "10px",
    },

    input_container: {
        gap: "5px"
    },

    label: {
        fontWeight: "bold",
        marginLeft: "5px",
    },

    input_text: {
        width: "100%",
        height: "30px",
        backgroundColor: "white",
        paddingHorizontal: "5px",
        borderWidth: 1,
        borderColor: "rgb(203 203 203)",
        borderRadius: "5px",
    },

    large_button: {
        padding: "20px",
        borderWidth: 1,
        borderColor: "rgb(203 203 203)",
        borderRadius: "5px",
    },

    profile_image: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
    },
})

export var styles = stylesConcat(stylesBase, dark_theme_on ? dark_theme : light_theme)
export function setTheme() {
    dark_theme_on = !dark_theme_on
    localStorage.setItem('dark_theme_on', dark_theme_on);
    window.location.reload()
}