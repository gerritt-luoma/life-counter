import React from "react";
import Player from "./Player";
import { useSelector } from "react-redux";
import type { RootState } from "../../reducers/store";


export default function Players() {
    const gameState = useSelector((state: RootState) => {
        return state.game
    });

    return (
        <>
            {displayPlayers(gameState.numPlayers)}
        </>
    )
}

function displayPlayers(numPlayers: number) {
    let players: JSX.Element[] = []
    for(let i = 0; i < numPlayers; i++) {
      players.push(
        <Player key={i} color={'white'} number={i}/>
      )
    }
    return players;
}