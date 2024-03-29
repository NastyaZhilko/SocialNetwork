import {ResultCodesEnum, usersAPI} from "../Api/Api";
import {ActionsTypes, ThunkType} from "../Types/commonType";
import {updateObjectInArray} from "../Utils/objects_helper";
import {Dispatch} from "redux";

export type UsersType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }

    followed: boolean
}
export type UsersPageType = typeof initialState

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}
export const usersReducers = (state = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed:true})
              /*  users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })*/
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed:false})
               /* users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })*/
            }

        case 'SET-USERS':
            return {...state, users: action.users}

        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}

        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.count}

        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}

        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetch
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state
    }
}

export const acceptFollow = (userId: number) => {
    return {type: 'FOLLOW', userId} as const
}
export const acceptUnFollow = (userId: number) => {
    return {type: 'UNFOLLOW', userId} as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {type: 'SET-USERS', users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {type: 'SET-TOTAL-USERS-COUNT', count: totalUsersCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: 'TOGGLE-IS-FETCHING', isFetching} as const
}
export const toggleFollowingInProgress = (isFetch: boolean, userId: number) => {
    return {type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetch, userId} as const
}

export const requestUsers = (page: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
   // let data = await usersAPI.getUsers(page, pageSize)
    let response =  await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.data.items))
        dispatch(setTotalUsersCount(response.data.totalCount))
}


/*export const followTC = (userId: number): ThunkType => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let response = await usersAPI.follow(userId)

            if (response.data.resultCode === ResultCodesEnum.Success) {
                dispatch(acceptFollow(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))

}

export const unFollowTC = (userId: number): ThunkType => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let response =  await usersAPI.unFollow(userId)

            if (response.data.resultCode === ResultCodesEnum.Success) {
                dispatch(acceptUnFollow(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))
}*/

const _followUnFollowFlow =  async (dispatch: DispatchType,
                                  userId: number,
                                  apiMethod:any,
                                  actionCreator: (userId: number) => ReturnType<typeof acceptFollow>
                                      | ReturnType<typeof acceptUnFollow> ) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const followTC = (userId: number): ThunkType => async (dispatch) => {
    _followUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), acceptFollow)
}

export const unFollowTC = (userId: number): ThunkType => async (dispatch) => {
    _followUnFollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), acceptUnFollow)
}
type DispatchType = Dispatch<ActionsTypes>
