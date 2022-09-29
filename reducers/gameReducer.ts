import { AnyAction } from "redux";

export interface GameState {
    numPlayers: number,
    reset: ResetTypes
}

interface ResetTypes {
    health: number
}

const initialState: GameState = {
    numPlayers: 2,
    reset: {
        health: 40
    }
}

function gameReducer(state = initialState, action: AnyAction) {
    switch(action.type) {
        case 'SET_NUM_PLAYERS':
            return {...state, numPlayers: action.payload};
        default:
            return state;
    }
}

export default gameReducer;