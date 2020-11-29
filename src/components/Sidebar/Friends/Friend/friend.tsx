import React from "react";
import s from './friend.module.css'
import {FriendsType} from "../../../../Redux/store";

const Friend = (props: FriendsType) => {

    return <div className={s.friend}>
        <img src={props.img}/>
        <span>{props.name}</span>
    </div>


}
export default Friend;
