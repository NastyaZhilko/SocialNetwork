import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsers= createSelector(getUsersSelector,(users)=> {
    return users.filter(u => true)
})//fake filter for study how use reselect!

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getTotalCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getTotalIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getTotalFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}


