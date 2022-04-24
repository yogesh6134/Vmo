import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const Button = (props) => {
    return (
        <TouchableOpacity style={props.button} onPress={props.onButtonPress}>
         <Text style={props.buttonTextStyle}>{props.buttonText}</Text>
        </TouchableOpacity>
    )
}
export default Button