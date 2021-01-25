import {ActionsTypes, ThunkType} from "../Types/commonType";
import {auth} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';


export type PropsType = typeof initialState

let initialState = {
    initialized: false
}
export const appReducers = (state = initialState, action: ActionsTypes): PropsType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: 'SET_INITIALIZED'} as const)

export const initializeApp = ():ThunkType=>(dispatch) =>
{
        dispatch(auth() as any)
            .then(() => {
                dispatch(initializedSuccess())
            })


    }


