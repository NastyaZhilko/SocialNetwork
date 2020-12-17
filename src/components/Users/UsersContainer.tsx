import React from 'react'
import {connect} from "react-redux";
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
import Users from "./Users";
import axios from "axios";

type ResponseType = {
    items: Array<UsersType>
    totalCount: number
    error: null
}

export type UsersContainerPropsType={
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UsersType>) => void,
    usersPage: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsers: number) => void
    //onPageChanged: (pageNumber: number) => void
}

export class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            setUsers={this.props.setUsers}
            usersPage={this.props.usersPage}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            setCurrentPage={this.props.setCurrentPage}
            setTotalUsersCount={this.props.setTotalUsersCount}
            onPageChanged={this.onPageChanged}
        />
    }
}

let mapStateToProps = (state: StoreType) => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }

}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsers: number) => {
            dispatch(setTotalUsersCountAC(totalUsers))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)