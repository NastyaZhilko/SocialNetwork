import React from 'react';
import s from "./Users.module.css";
import avatar from "../../assets/img/avatar.png";
import {UsersType} from "../../Redux/users_reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    user: UsersType
    followingInProgress: Array<number>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
}

export const User: React.FC<PropsType> = ({user, followingInProgress, unFollow, follow}) => {


    return <div className={s.container}>
        <div>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img className={s.avatar} src={user.photos.small != null ? user.photos.small : avatar}/>
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
        </div>
        <div>
            <div><b>Name:</b> {user.name}</div>
            <div><b>Status:</b> {user.status ? user.status : 'No status'}</div>
        </div>
    </div>
};
