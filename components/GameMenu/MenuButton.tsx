import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

export default function MenuButton() {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Pressable
            onPress={() =>{
                console.log('Pressed');
                dispatch({type: 'TOGGLE_MENU'});
            }}
            style={styles.button}
            >
                <Text style={styles.text}>~</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        backgroundColor: 'black',
        opacity: 1,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white'
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
