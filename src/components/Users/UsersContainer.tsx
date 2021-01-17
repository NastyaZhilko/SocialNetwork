import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {follow, getUsers, setCurrentPage, unFollow, UsersType} from "../../Redux/users_reducer";
import Users from "./Users";
import loading from '../../assets/preloader.gif'
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";

/*type ResponseType = {
    items: Array<UsersType>
    totalCount: number
    error: null
}*/

export type PropsType = OwnPropsType & MapStateToPropsType & MapDispatchToPropsType

type OwnPropsType = {}

type MapStateToPropsType = {
    usersPage: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader loading={loading}/> : null}
            <Users
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                usersPage={this.props.usersPage}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
        },
        toggleFollowingInProgress: (isFetch: boolean, userId: number) => {

            dispatch(toggleFollowingInProgress(isFetch,userId))
        }

    }
}*/
export default compose(
connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    follow, unFollow, setCurrentPage, getUsers
}))(UsersContainer)