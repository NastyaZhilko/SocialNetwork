import React from 'react'
import {UsersType} from "../../Redux/users_reducer";
import axios from 'axios';
import avatar1 from '../../assets/img/avatar1.png'
import s from './Users.module.css'

type UsersPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UsersType>) => void,
    usersPage:Array<UsersType>
}

type ResponseType={
    items:Array<UsersType>
    totalCount: number
    error:null
}

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get<ResponseType>('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return <div>
            {
                this.props.usersPage.map(u => <div key={u.id}>
               <span>
                   <div>
                       <img className={s.avatar} src={u.photos.small != null ? u.photos.small : avatar1}/>
                   </div>
                   <div>
                       {u.followed
                           ? <button onClick={() => {
                               this.props.unFollow(u.id)
                           }}>Unfollow</button>
                           : <button onClick={() => {
                               this.props.follow(u.id)
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
}

export default Users