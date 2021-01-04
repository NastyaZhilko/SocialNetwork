import React from 'react';
import s from "./Users.module.css";
import avatar1 from "../../assets/img/avatar1.png";
import {UsersType} from "../../Redux/users_reducer";
import {NavLink} from "react-router-dom";

export type UsersPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    usersPage: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
}
let Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.usersPage.map(u => {
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
                           ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                               props.unFollow(u.id)
                           }}>Unfollow</button>
                           : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                               props.follow(u.id)
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
}
export default Users;