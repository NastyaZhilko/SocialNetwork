import React from 'react'
import {connect} from "react-redux";
import {StoreType} from "../../Redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow,
    UsersType
} from "../../Redux/users_reducer";
import Users from "./Users";
import axios from "axios";
import loading from '../../assets/preloader.gif'
import Preloader from "../common/Preloader/Preloader";

type ResponseType = {
    items: Array<UsersType>
    totalCount: number
    error: null
}

export type UsersContainerPropsType = OwnPropsType & MapStateToPropsType & MapDispatchToPropsType

type OwnPropsType = {}

type MapStateToPropsType = {
    usersPage: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsers: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader loading={loading}/> : null}
            <Users
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                //setUsers={this.props.setUsers}
                usersPage={this.props.usersPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                //setCurrentPage={this.props.setCurrentPage}
                //setTotalUsersCount={this.props.setTotalUsersCount}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}

let mapStateToProps = (state: StoreType):MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

/*let mapDispatchToProps = (dispatch: Dispatch) => {
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
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }
}*/
export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, StoreType>(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer)