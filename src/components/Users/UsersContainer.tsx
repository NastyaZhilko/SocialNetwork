import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {StoreType} from "../../Redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../Redux/users_reducer";
import {Dispatch} from "redux";

let mapStateToProps=(state: StoreType)=>{
    return{
        usersPage: state.usersPage
    }
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)