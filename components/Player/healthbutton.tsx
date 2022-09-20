import React from "react";

import { useDispatch } from "react-redux";
import { View, Pressable, Text, StyleSheet } from "react-native";

interface HealthButtonProps {
    title: string,
    decrement: boolean,
    playerNumber: number
}

export default function HealthButton( { title, decrement, playerNumber } : HealthButtonProps) {
    const dispatch = useDispatch();

    return (
        <View>
            <Pressable
                onPress={() => dispatch({
                    type: decrement ? `DECREMENT_${playerNumber}` : `INCREMENT_${playerNumber}`
                })}
                style={styles.button}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        color: 'black'
    },
    button: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
