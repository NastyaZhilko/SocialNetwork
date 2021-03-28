import React from 'react'
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import Preloader from "../common/Preloader/Preloader";
import {Users} from "./Users";


//export type PropsType = OwnPropsType & MapStateToPropsType & MapDispatchToPropsType

/*type OwnPropsType = {}

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
    requestUsers: (currentPage: number, pageSize: number) => void
}*/
export type PropsType ={
    pageTitle: string
}
export const UsersPage: React.FC<PropsType> = (props)=> {
const isFetching = useSelector<AppStateType, boolean>((state)=>state.usersPage.isFetching)
        return <>
            <h2>{props.pageTitle}</h2>
            {isFetching ? <Preloader /> : null}
            <Users />
        </>

}

/*
export class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader loading={loading}/> : null}
            <Users
                //follow={this.props.follow}
                //unFollow={this.props.unFollow}
                //usersPage={this.props.usersPage}
                //pageSize={this.props.pageSize}
                //totalUsersCount={this.props.totalUsersCount}
                //currentPage={this.props.currentPage}
                //onPageChanged={this.onPageChanged}
                //followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}
*/

/*let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/
/*
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage:getTotalCurrentPage(state),
        isFetching: getTotalIsFetching(state),
        followingInProgress: getTotalFollowingInProgress(state)
    }
}
export default compose<React.ComponentType>(
connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    follow, unFollow, setCurrentPage, requestUsers
}))(UsersContainer)*/
