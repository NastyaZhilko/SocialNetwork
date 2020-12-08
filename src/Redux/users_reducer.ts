import {ActionsTypes} from "./redux-store";

const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS='SET-USERS'
export type LocationType={
    city: string
    country: string
}
export type UsersType={
    id:number
    photoUrl:string
    followed: boolean
    fullName: string
    status:string
    location:LocationType
}
export type UsersPageType={
    users: Array<UsersType>
}
let initialState={
    users:[
        {id:1, photoUrl:'', followed: true, fullName:'Nastya',status: 'I am student', location:{city: 'Minsk', country:'Belarus'}},
        {id:2, photoUrl:'', followed: false, fullName:'Sasha',status: 'I am student', location:{city: 'Moscow', country:'Russia'}},
        {id:3, photoUrl:'', followed: true, fullName:'Roma',status: 'I am teacher', location:{city: 'Kiev', country:'Ukraine'}}
    ]
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

