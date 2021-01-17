import React from "react";
import s from './ProfileInfo.module.css'
import road from './wpapers.jpg'
import {ProfileType} from "../../../Redux/profile_reducer";
import ProfileStatus from "./ProfileStatus";

export type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus:(status: string)=>void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    return (
        <div className='app-wrapper-content'>

            {/*<div className={s.image}>
                <img src={road}/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>


        </div>
    )

}
export default ProfileInfo;