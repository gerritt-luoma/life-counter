import { AnyAction, createSlice } from "@reduxjs/toolkit"

export interface PlayerState {
    value: number
}

const initialState: PlayerState = {
    value: 0,
}

/*function createPlayerSliceWithNumber(playerNumber=1)
{
    const playerSlice = createSlice({
        name: `player${playerNumber}`,
        initialState,
        reducers: {
            increment(state) {
                state.value++
            },
            decrement(state) {
                state.value--
            }
        }
    });
    return playerSlice.reducer
}*/

function createPlayerWithNumber(playerNumber=1) {
    return function player(state = initialState, action: AnyAction) {
        switch(action.type) {
            case `INCREMENT_${playerNumber}`:
                return {...state, value: state.value + 1};
            case `DECREMENT_${playerNumber}`:
                return {...state, value: state.value - 1};
            default:
                return state;
        }
    }
}

export default createPlayerWithNumber