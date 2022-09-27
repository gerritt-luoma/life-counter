import { AnyAction } from "redux";

export interface GameState {
    numPlayers: number
}

const initialState: GameState = {
    numPlayers: 2
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