import React from 'react'
import {UsersType} from "../../Redux/users_reducer";
import axios from 'axios';
import avatar1 from '../../assets/img/avatar1.png'
import s from './Users.module.css'

type UsersPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UsersType>) => void,
    usersPage: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsers: number) => void

}

type ResponseType = {
    items: Array<UsersType>
    totalCount: number
    error: null
}

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                        return <span className={this.props.currentPage === p ? s.selectedPage : ''}
                                     onClick={() => {
                                         this.onPageChanged(p)
                                     }}>{p}</span>

                    }
                )
                }

            </div>
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