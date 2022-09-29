import { AnyAction } from "@reduxjs/toolkit"

export interface PlayerState {
    value: number
}

const initialState: PlayerState = {
    value: 0,
}

function createPlayerWithNumber(playerNumber=1) {
    return function player(state = initialState, action: AnyAction) {
        switch(action.type) {
            case `INCREMENT_${playerNumber}`:
                return {...state, value: state.value + 1};
            case `DECREMENT_${playerNumber}`:
                return {...state, value: state.value - 1};
            case `SET_${playerNumber}`:
                return {...state, value: action.payload}
            default:
                return state;
        }
    }
}

export default createPlayerWithNumber
