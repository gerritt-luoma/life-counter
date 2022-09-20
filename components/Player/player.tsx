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
                return state.player1.value;
            case 2:
                return state.player2.value;
            case 3:
                return state.player3.value;
            case 4:
                return state.player4.value;
            case 5:
                return state.player5.value;
            default:
                /* Adding this default to get around
                typescript issues for now */
                return state.player6.value;
        }
    });

    return (
        <View>
            <HealthButton
            onPress={decrement}
            title={"-"}
            />
            <Text>{lifeTotal}</Text>
            <HealthButton
            onPress={increment}
            title={"+"}
            />
        </View>
    )
}