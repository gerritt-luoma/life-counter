import React from "react";
import type { RootState } from "../../reducers/store";
import { useSelector } from "react-redux";
import { decrement, increment } from "../../reducers/counterReducer";
import HealthButton from "./healthbutton";
import { View, Text } from "react-native";

interface PlayerProps {
    color: string,
    number: number
}

export default function Player({ color, number }: PlayerProps) {
    /* Determine which players life total to display */
    const lifeTotal = useSelector((state: RootState) => {
        switch(number) {
            case 1:
                return state.player1;
            case 2:
                return state.player2;
            case 3:
                return state.player3;
            case 4:
                return state.player4;
            case 5:
                return state.player5;
            default:
                /* Adding this default to get around
                typescript issues for now */
                return state.player6;
        }
    });

    return (
        <View>
            <HealthButton
            playerNumber={number}
            decrement={true}
            title={"-"}
            />
            <Text>{lifeTotal.value}</Text>
            <HealthButton
            playerNumber={number}
            decrement={false}
            title={"+"}
            />
        </View>
    )
}