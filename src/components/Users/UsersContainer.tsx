import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {StoreType} from "../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from "../../Redux/users_reducer";
import {Dispatch} from "redux";

let mapStateToProps=(state: StoreType)=>{
    return{
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage}
}
let mapDispatchToProps=(dispatch: Dispatch)=>{
    return{
        follow: (userId:number)=>{
            dispatch(followAC(userId))
        },
        unFollow: (userId:number)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UsersType>)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsers: number)=>{
            dispatch(setTotalUsersCountAC(totalUsers))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)