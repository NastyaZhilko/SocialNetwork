import {ActionsTypes} from "./redux-store";

const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS='SET-USERS'
export type PhotosType={
    small: string
    large: string
}
export type UsersType= {
    name: string
    id: number
    uniqueUrlName: string
    photos: PhotosType
    status: string
    followed: boolean
}
export type UsersPageType={
    users: Array<UsersType>
}
let initialState={
    users:[]
}
export const usersReducers=(state:UsersPageType=initialState, action:ActionsTypes )=> {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return{...state, users:[...state.users, ...action.users]}

        default:
            return state
    }
}

export const followAC=(userId: number)=>{return{type:FOLLOW, userId}as const}
export const unFollowAC=(userId: number)=>{return{type:UNFOLLOW, userId}as const}
export const setUsersAC=(users:Array<UsersType>)=>{return{type:SET_USERS, users}as const}

