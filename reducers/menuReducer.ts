import { AnyAction } from "redux";

export interface MenuState {
    pressed: boolean
}

const initialState: MenuState = {
    pressed: false
}

function menu(state = initialState, action: AnyAction) {
    switch(action.type) {
        case 'TOGGLE_MENU':
            return {...state, pressed: !state.pressed};
        default:
            return state;
    }
}

export default menu;
