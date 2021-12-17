import { types } from "../types/types";

// const state = {
//     name: 'Fernando',
//     logged: true
// }
export const authReducer = (state = {}, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                ...action.payload,
                logged: false
            }


        default: return state;
    }
}