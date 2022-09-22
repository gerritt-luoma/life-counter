import React from "react";
import { StyleSheet, View } from "react-native";
import MenuButton from "./MenuButton";
import type { RootState } from "../../reducers/store";
import { useSelector } from "react-redux";

export default function GameMenu() {
    const menuState = useSelector((state: RootState) => {
        return state.menu;
    });

    return (
        <>
            <View style={[
                styles.container,
                {
                    height: menuState.pressed ? '100%' : 50,
                    width: menuState.pressed ? '100%' : 50,
                    borderRadius: menuState.pressed ? 0 : 50,
                }
            ]}>
                <MenuButton/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
