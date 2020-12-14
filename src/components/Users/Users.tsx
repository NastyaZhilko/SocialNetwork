import React from 'react'
import {UsersPageType, UsersType} from "../../Redux/users_reducer";
import axios from 'axios';
import avatar1 from '../../assets/img/avatar1.png'
import s from './Users.module.css'

type UsersPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UsersType>) => void,
    usersPage: UsersPageType

}
let Users = (props: UsersPropsType) => {
        if (props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=> {
                props.setUsers(response.data.items)
            })
    }
    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
               <span>
                   <div >
                       <img className={s.avatar} src={u.photos.small !=null ? u.photos.small : avatar1}/>
                   </div>
                   <div>
                       {u.followed
                           ? <button onClick={() => {
                               props.unFollow(u.id)
                           }}>Unfollow</button>
                           : <button onClick={() => {
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
            </div>)
        }
    </div>
}
export default Users