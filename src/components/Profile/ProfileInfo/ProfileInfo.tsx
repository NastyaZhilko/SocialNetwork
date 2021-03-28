import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../Redux/profile_reducer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Preloader from "../../common/Preloader/Preloader";
import avatar1 from "../../../assets/img/avatar1.png";

type PropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto:(file: File) => void
}

const ProfileInfo: React.FC<PropsType> = ({isOwner, profile, status, updateStatus, savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }
const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) =>{
    if(e.target.files && e.target.files.length){
        savePhoto(e.target.files[0])
    }
}
    return (
        <div className='app-wrapper-content'>

            <div className={s.descriptionBlock}>
                <img className={s.image} src={profile.photos.large || avatar1}/>
                     {isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
                     <div>
                         <div>
                             <b>Full name:</b> {profile.fullName}
                         </div>
                         <div>
                             <b>Looking for a lob:</b> {profile.lookingForAJob ? 'yes' : 'no'}
                         </div>
                         {profile.lookingForAJob &&
                         <div>
                             <b>My professional skills:</b> {profile.lookingForAJobDescription}
                         </div>
                         }
                         <div>
                             <b>About me:</b> {profile.aboutMe}
                         </div>
                     </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>


        </div>
    )

}

export default ProfileInfo