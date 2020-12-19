import React from "react";
import s from './Friends.module.css'
import Friend from "./Friend/friend";
import {NavLink} from "react-router-dom";
import {SidebarType} from "../../../Redux/sidebar_reducer";


export type FriendsType = {
    sidebar: SidebarType
}
const Friends = (props: FriendsType) => {

                let friendsElements = props.sidebar.friends.map(f =>
                    <NavLink to={`/profile/${f.id}`}>
                    <Friend id={f.id}
                            name={f.name}
                            img={f.img}/>
                    </NavLink>)
                return (
                    <>
                        <h3 className={s.friendsTitle}>Friends</h3>
                        <div className={s.friends}>{friendsElements}</div>
                    </>
                )
            }


export default Friends;
