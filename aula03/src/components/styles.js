import { StyleSheet } from "react-native";
import { dark_theme } from "./themes/dark"
import { light_theme } from "./themes/light"
import React from "react";

var dark_theme_on = localStorage.getItem('dark_theme_on');
console.log(dark_theme_on)

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
    
    for (const keybase in baseStyle) {
        for (const keynew in newStyle) {
            if(!baseStyle[keynew])
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
    }
})

export var styles = stylesConcat(stylesBase, dark_theme_on ? dark_theme : light_theme)
export function setTheme() {
    dark_theme_on = !dark_theme_on
    localStorage.setItem('dark_theme_on', dark_theme_on);
    window.location.reload()
}