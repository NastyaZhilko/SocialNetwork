import React, {useEffect} from 'react';
import {followTC, requestUsers, unFollowTC, UsersType} from "../../Redux/users_reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";
import s from "./Users.module.css"

type PropsType = {}
export const Users: React.FC<PropsType> = ({}) => {
    const totalUsersCount = useSelector<AppStateType, number>((state) => state.usersPage.totalUsersCount)
    const currentPage = useSelector<AppStateType, number>((state) => state.usersPage.currentPage)
    const users = useSelector<AppStateType, Array<UsersType>>((state) => state.usersPage.users)
    const pageSize = useSelector<AppStateType, number>((state) => state.usersPage.pageSize)
    const followingInProgress = useSelector<AppStateType, Array<number>>((state) => state.usersPage.followingInProgress)
    //const filter = useSelector<AppStateType, number>((state) => state.usersPage.)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize))
    }, [])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize))
    }
    const follow = (userId: number) => {
        dispatch(followTC(userId))
    }
    const unFollow = (userId: number) => {
        dispatch(unFollowTC(userId))
    }

    return (
        <div className={s.block}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}
                       totalItemCount={totalUsersCount}/>
            <div className={s.usersBlock}>
                {
                    users.map(u => <User
                        user={u}
                        followingInProgress={followingInProgress}
                        follow={follow}
                        unFollow={unFollow}
                        key={u.id}/>)
                }
            </div>
        </div>
    )
};
