import React from "react";
import s from './ProfileInfo.module.css'
import road from './wpapers.jpg'
import {ProfileType} from "../../../Redux/profile_reducer";

export type ProfileInfoPropsType={
    profile:ProfileType | null
   // isAuth:boolean
}

const ProfileInfo =(props:ProfileInfoPropsType)=> {

    return (
        <div className='app-wrapper-content'>

            <div className={s.image}>
                <img src={road}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.large}/>
                ava+description
            </div>


        </div>
    )

}
export default ProfileInfo;