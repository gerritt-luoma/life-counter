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
    /*
    There is a very good chance this is a dumb way to
    do this.  Just creates an array of nums from 0..numPlayers
    and returns a map of that many players with the appropriate
    keys/numbers

    TODO: Need to assign the correct color to the player.  Maybe
    remove the color from the props and instead set it from the
    player state
    */
    let players = [...Array(numPlayers).keys()].map(key => {
        return <Player key={key} color={'white'} number={key}/>
    });
    return players;
}
