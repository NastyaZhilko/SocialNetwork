import {authApi, ResultCodesEnum} from "../Api/Api";
import {ActionsTypes, ThunkType} from "../Types/commonType";
import {stopSubmit} from "redux-form";
import React from "react";

const SET_USER_DATA = 'SET_USER_DATA';

export type UserDataType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
export type SetAuthUserDataType = {
    type: 'SET_USER_DATA'
    data: UserDataType
}
export type AuthPropsType = typeof initialState/*{
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}*/
let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captcha: null
}
export const authReducers = (state = initialState, action: ActionsTypes): AuthPropsType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => {
    return {
        type: SET_USER_DATA, data: {id, email, login, isAuth}
    } as const
}

export const auth = (): ThunkType => {
    return (dispatch) => {

        authApi.me()
            .then(response => {
                if (response.data.resultCode === ResultCodesEnum.Success) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}
export const login = (email: string, password: string, rememberMe: false, captcha: null | string = null): ThunkType => {
    return (dispatch) => {
       /* let action=stopSubmit('login',{_error:'Common error'})
        dispatch(action)
        return*/
        authApi.login(email, password, rememberMe, captcha)
            .then(response => {
                if (response.data.resultCode === ResultCodesEnum.Success) {
                    dispatch(auth())
                }
               /* else{
                    let action=stopSubmit('login',{email:'Email is wrong'})
                }*/
            })
    }
}
export const logOut = (): ThunkType => {
    return (dispatch) => {

        authApi.logOut()
            .then(response => {
                if (response.data.resultCode === ResultCodesEnum.Success) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}



