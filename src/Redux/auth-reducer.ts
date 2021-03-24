import {authApi, ResultCodesEnum} from "../Api/Api";
import {ActionsTypes, ThunkType} from "../Types/commonType";
import {stopSubmit} from "redux-form";


export type AuthPropsType = typeof initialState

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captcha: null
}
export const authReducers = (state = initialState, action: ActionsTypes): AuthPropsType => {
    switch (action.type) {
        case 'samurai-network/auth/SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => (
    {type: 'samurai-network/auth/SET_USER_DATA', payload: {id, email, login, isAuth}} as const)

export const auth = (): ThunkType => async (dispatch) => {
    let response = await authApi.me()
    if (response.data.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email: string, password: string, rememberMe: false, captcha: string): ThunkType => async (dispatch) => {
    let response = await authApi.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(auth())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logOut = (): ThunkType => async (dispatch) => {
    let response = await authApi.logOut()
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}




