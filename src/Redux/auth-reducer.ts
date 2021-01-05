import {ActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {authApi} from "../Api/Api";

const SET_USER_DATA = 'SET_USER_DATA';

export type UserDataType = {
    id: number | null
    login: string | null
    email: string | null
}
export type SetAuthUserDataType={
    type: 'SET_USER_DATA'
    data: UserDataType
}
export type AuthPropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
let initialState: AuthPropsType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducers = (state: AuthPropsType = initialState, action: ActionsTypes):AuthPropsType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }

        default:
            return state
    }
}

export const setAuthUserData = (id: number|null, email: string|null, login: string|null):SetAuthUserDataType => {
    return {
        type: SET_USER_DATA, data: {id, email, login}
    } as const
}

export const auth=()=>{
    return (dispatch: Dispatch)=>{

        authApi.me()
            .then(response => {
                if (response.data.resultCode===0){
                    let {id,login, email}=response.data.data
                    dispatch(setAuthUserData(id, login, email))
                }
            })
    }
}

