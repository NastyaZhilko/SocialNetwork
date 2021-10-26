import {authApi, ResultCodesEnum, securityAPI} from "../Api/Api";
import {ActionsTypes, ThunkType} from "../Types/commonType";
import {stopSubmit} from "redux-form";


export type AuthPropsType = typeof initialState

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captcha: null as string | null
}
export const authReducers = (state = initialState, action: ActionsTypes): AuthPropsType => {
    switch (action.type) {
        case 'samurai-network/auth/SET_USER_DATA':
        case 'samurai-network/auth/GET_CAPTCHA_URL':

            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}
//action creators
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => (
    {type: 'samurai-network/auth/SET_USER_DATA', payload: {id, email, login, isAuth}} as const)

export const getCaptchaUrlSuccess = (captcha: string|null) => (
    {type: 'samurai-network/auth/GET_CAPTCHA_URL', payload: {captcha}} as const)


export const auth = (): ThunkType => async (dispatch) => {
    let response = await authApi.me()
    if (response.data.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email: string, password: string, rememberMe: false, captcha: string|null): ThunkType => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(auth())
    } else {
        if(response.data.resultCode===ResultCodesEnum.CaptchaIsRequired){
            dispatch(getCaptchaUrl())
        }
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logOut = (): ThunkType => async (dispatch) => {
    const response = await authApi.logOut()
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
        dispatch(getCaptchaUrlSuccess(null))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))

}




