import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

interface MenuButtonProps {
    color: string,
    type: string,
    payload: string,
    pressed?: boolean,
    text: string,
    left?: number,
    top?: number
}

export default function MenuButton({ color, pressed, left, top, type, payload, text }: MenuButtonProps) {
    const dispatch = useDispatch();
    return (
        <View style={[
            styles.container,
            {
                backgroundColor: color,
                position: pressed ? 'absolute' : 'relative',
                top: top,
                left: left
            }
            ]}>
            <Pressable
            onPress={() =>{
                console.log('Pressed');
                dispatch({type: type, payload: payload});
            }}
            style={styles.button}
            >
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        opacity: 1,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50
    },
    text: {
        color: 'white',
        fontSize: 30
    }
});
