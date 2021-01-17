import {authApi, ResultCodesEnum} from "../Api/Api";
import {ActionsTypes, ThunkType} from "../Types/commonType";

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
    isAuth: false
}
export const authReducers = (state = initialState, action: ActionsTypes):AuthPropsType => {
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

export const setAuthUserData = (id: number, email: string, login: string):SetAuthUserDataType => {
    return {
        type: SET_USER_DATA, data: {id, email, login}
    } as const
}

export const auth=():ThunkType =>{
    return (dispatch)=>{

        authApi.me()
            .then(response => {
                if (response.data.resultCode===ResultCodesEnum.Success){
                    let {id, login, email}=response.data.data
                    dispatch(setAuthUserData(id, login, email))
                }
            })
    }
}


