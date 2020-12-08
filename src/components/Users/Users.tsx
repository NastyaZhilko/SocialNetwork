import React from 'react'

import {UsersPageType, UsersType} from "../../Redux/users_reducer";


type UsersPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UsersType>) => void,
    usersPage: UsersPageType

}
let Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: '',
                followed: true,
                fullName: 'Nastya',
                status: 'I am student',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 1,
                photoUrl: '',
                followed: true,
                fullName: 'Sasha',
                status: 'I am student',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 1,
                photoUrl: '',
                followed: true,
                fullName: 'Roma',
                status: 'I am teacher',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
            ]
        )
    }
    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
               <span>
                   <div>
                       <img src={u.photoUrl}/>
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
                       <div>{u.fullName}</div><div>{u.status}</div>
                   </span>
                   <span>
                        <div>{u.location.country}</div>
                       <div>{u.location.city}</div>
                   </span>
               </span>
            </div>)
        }
    </div>
}
export default Users