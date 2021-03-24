import React, {useEffect} from 'react';
import s from "./Users.module.css";
import avatar1 from "../../assets/img/avatar1.png";
import {followTC, requestUsers, unFollowTC, UsersType} from "../../Redux/users_reducer";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";

export type UsersPropsType = {}
export const Users = (props:UsersPropsType) => {
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

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span className={currentPage === p ? s.selectedPage : ''}
                             onClick={() => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            users.map(u => {
                return (
                    <div key={u.id}>
               <span>
                   <div>
                       <NavLink to={'/profile/' + u.id}>
                           <img className={s.avatar} src={u.photos.small != null ? u.photos.small : avatar1}/>
                  </NavLink>
                   </div>
                   <div>
                       {u.followed
                           ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                               unFollow(u.id)
                           }}>Unfollow</button>
                           : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                               follow(u.id)
                           }}>Follow</button>}
                   </div>
               </span>
                        <span>
                   <span>
                       <div>{u.name}</div><div>{u.status}</div>
                   </span>
                   <span>
                        <div>{"location.country"}</div>
                       <div>{"location.city"}</div>
                   </span>
               </span>
                    </div>
                )
            })
        }
    </div>
};
