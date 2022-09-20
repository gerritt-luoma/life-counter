import React from "react";

import { useDispatch } from "react-redux";
import { View, Button } from "react-native";

interface HealthButtonProps {
    title: string,
    decrement: boolean,
    playerNumber: number
}

export default function HealthButton( { title, decrement, playerNumber } : HealthButtonProps) {
    const dispatch = useDispatch();

    return (
        <View>
            <Button
                title={title}
                onPress={() => dispatch({
                    type: decrement ? `DECREMENT_${playerNumber}` : `INCREMENT_${playerNumber}`
                })}
            />
        </View>
    )
}