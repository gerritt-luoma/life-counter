import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GameMenu() {
    return (
        <>
            <View style={styles.container}>
                <Pressable
                onPress={() => console.log('Pressed')}
                style={styles.button}
                >
                    <Text style={styles.text}>~</Text>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'black',
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
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
})