import { AnyAction } from "redux";

export interface MenuState {
    currentMenu: string
}

const initialState: MenuState = {
    currentMenu: ''
}

function menu(state = initialState, action: AnyAction) {
    switch(action.type) {
        case 'MENU_CHANGE':
            return {...state, currentMenu: action.payload};
        default:
            return state;
    }
}

export default menu;
