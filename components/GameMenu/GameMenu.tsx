import React from "react";
import { StyleSheet, View } from "react-native";
import MenuButton from "./MenuButton";
import { RootState, store } from "../../reducers/store";
import { useSelector, useDispatch } from "react-redux";

export default function GameMenu() {
    const menuState = useSelector((state: RootState) => {
        return state.menu;
    });

    return (
        <>
            <View style={[
                styles.container,
                {
                    height: menuState.currentMenu ? '100%' : 0,
                    width: menuState.currentMenu ? '100%' : 0,
                }
            ]}>
                <View style={[
                    styles.buttons,
                    {
                        height: menuState.currentMenu ? 250 : 0,
                        width: menuState.currentMenu ? 250 : 0
                    }
                    ]}>
                    <MenuButton
                        color={'black'}
                        pressed={menuState.currentMenu !== ''}
                        type={'MENU_CHANGE'}
                        payload={menuState.currentMenu === 'MAIN_MENU' ? '' : 'MAIN_MENU'}
                        text={'M'}
                    />
                    {
                        menuState.currentMenu && displayButtons(menuState.currentMenu)
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

interface menuButtonDate {
    color: string,
    type: string,
    payload: string,
    text: string,
    onPress?: Function
}

const mainMenuButtons : menuButtonDate[] = [
    {
        color: 'skyblue',
        type: 'MENU_CHANGE',
        payload: 'MENU_PLAYER_SELECT',
        text: 'PS',
    },
    {
        color: 'lightred',
        type: 'MENU_CHANGE',
        payload: '',
        text: 'RS',
        onPress() {
            const state = store.getState();
            for(let i = 0; i < state.game.numPlayers; i++) {
                store.dispatch({
                    type: `SET_${i}`,
                    payload: state.game.reset.health
                });
            }
        }
    }
];

const playerSelectButtons : menuButtonDate[] = [
    {
        color: 'black',
        type: 'SET_NUM_PLAYERS',
        payload: '2',
        text: '2'
    },
    {
        color: 'black',
        type: 'SET_NUM_PLAYERS',
        payload: '3',
        text: '3'
    },
    {
        color: 'black',
        type: 'SET_NUM_PLAYERS',
        payload: '4',
        text: '4'
    },
    {
        color: 'black',
        type: 'SET_NUM_PLAYERS',
        payload: '5',
        text: '5'
    },
    {
        color: 'black',
        type: 'SET_NUM_PLAYERS',
        payload: '6',
        text: '6'
    },
];

function displayButtons(currentMenu: string) {
    let menuButtons: menuButtonDate[] | null = null;
    switch(currentMenu) {
        case 'MAIN_MENU':
            menuButtons = mainMenuButtons;
            break;
        case 'MENU_PLAYER_SELECT':
            menuButtons = playerSelectButtons;
            break;
        default:
            console.error("Should not reach here");
            menuButtons = [];
            break;
    }
    const degreesBetween = 360/menuButtons.length;
    const radiansBetween = (degreesBetween*Math.PI)/180;
    const shift = Math.PI/2

    return menuButtons.map((button, index) => {
        const top = (Math.sin(radiansBetween*index - shift) * 110) + 100;
        const left = (Math.cos(radiansBetween * index - shift) * 110) + 100;
        return <MenuButton
            key={index}
            color={button.color}
            pressed={true}
            left={left}
            top={top}
            type={button.type}
            text={button.text}
            payload={button.payload}
            onPress={button.onPress}
            />
    })
}
