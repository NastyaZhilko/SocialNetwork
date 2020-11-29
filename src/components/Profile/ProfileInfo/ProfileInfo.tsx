import React from "react";
import s from './ProfileInfo.module.css'
import road from './wpapers.jpg'

const ProfileInfo =()=> {

    return (
        <div className='app-wrapper-content'>
            <div className={s.image}>
                <img src={road}/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>

        </div>
    )



}
export default ProfileInfo;