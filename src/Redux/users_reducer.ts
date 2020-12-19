import {ActionsTypes} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT='SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING='TOGGLE-IS-FETCHING'

export type PhotosType = {
    small: string
    large: string
}
export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: PhotosType
    status: string
    followed: boolean
}
export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
}
let initialState: UsersPageType= {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}
export const usersReducers = (state: UsersPageType = initialState, action: ActionsTypes) => {
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
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state
    }
}

export const follow = (userId: number) => {
    return {type: FOLLOW, userId} as const
}
export const unFollow = (userId: number) => {
    return {type: UNFOLLOW, userId} as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {type: SET_USERS, users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
        return {type: SET_TOTAL_USERS_COUNT, count:totalUsersCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const
}

