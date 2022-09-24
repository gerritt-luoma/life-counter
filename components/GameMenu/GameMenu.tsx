import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
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
                    height: menuState.pressed ? '100%' : 0,
                    width: menuState.pressed ? '100%' : 0,
                }
            ]}>
                <View style={[
                    styles.buttons,
                    {
                        height: menuState.pressed ? 250 : 0,
                        width: menuState.pressed ? 250 : 0
                    }
                    ]}>
                    <MenuButton color={'black'} pressed={menuState.pressed}/>
                    {
                        menuState.pressed && displayButtons()
                    }
                </View>
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
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 125
    }
});

const subButtons = [
    {
        color: 'skyblue',
    },
    {
        color: 'gray',
    },
    {
        color: 'purple'
    },
    {
        color: 'yellow',
    },
    {
        color: 'darkseagreen'
    }
];

function displayButtons() {
    const degreesBetween = 360/subButtons.length;
    const radiansBetween = (degreesBetween*Math.PI)/180;
    const shift = Math.PI/2

    return subButtons.map((button, index) => {
        const top = (Math.sin(radiansBetween*index - shift) * 110) + 100;
        const left = (Math.cos(radiansBetween * index - shift) * 110) + 100;
        return <MenuButton
            key={index}
            color={button.color}
            pressed={true}
            left={left}
            top={top}
            />
    })
}
