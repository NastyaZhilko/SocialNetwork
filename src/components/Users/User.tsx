import React from 'react';
import s from "./Users.module.css";
import avatar1 from "../../assets/img/avatar1.png";
import {UsersType} from "../../Redux/users_reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    user: UsersType
    followingInProgress: Array<number>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
}

export const User : React.FC<PropsType> = ({user, followingInProgress,unFollow,  follow} ) => {


    return <div className={s.container}>
               <span>
                   <div>
                       <NavLink to={'/profile/' + user.id}>
                           <img className={s.avatar} src={user.photos.small != null ? user.photos.small : avatar1}/>
                  </NavLink>
                   </div>
                   <div>
                       {user.followed
                           ? <button disabled={followingInProgress
                               .some(id => id === user.id)} onClick={() => {
                               unFollow(user.id)
                           }}>Unfollow</button>
                           : <button disabled={followingInProgress
                               .some(id => id === user.id)} onClick={() => {
                               follow(user.id)
                           }}>Follow</button>}
                   </div>
               </span>
                        <span>
                   <span>
                       <div>{user.name}</div><div>{user.status}</div>
                   </span>
                   <span>
                        <div>{"location.country"}</div>
                       <div>{"location.city"}</div>
                   </span>
               </span>

    </div>
};
