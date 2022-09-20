import React from "react";

import { useDispatch } from "react-redux";
import { View, Button } from "react-native";

interface HealthButtonProps {
    onPress: Function,
    title: string
}

export default function HealthButton( { onPress, title } : HealthButtonProps) {
    const dispatch = useDispatch();
    return (
        <View>
            <Button
                title={title}
                onPress={() => dispatch(onPress())}
            />
        </View>
    )
}