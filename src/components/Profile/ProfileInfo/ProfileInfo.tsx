import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../Redux/profile_reducer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Preloader from "../../common/Preloader/Preloader";
import avatar1 from "../../../assets/img/avatar1.png";
import Modal from "../../common/Modal/Modal";

type PropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
}

const ProfileInfo: React.FC<PropsType> = ({isOwner, profile, status, updateStatus, savePhoto}) => {
    const [isModal, setIsModal] = useState<boolean>(false)
    if (!profile) {
        return <Preloader/>
    }
    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={s.container}>
            <div className={s.descriptionBlock}>
                <div className={s.image}>
                        <div onClick={() => setIsModal(true)}>
                            <img src={profile.photos.large || avatar1}/>
                        </div>
                        <Modal modal={isModal} setModal={setIsModal}>

                            <div className={s.changePhoto}>
                                <div>
                                    {isOwner && <input type={'file'}
                                                       id="file-upload"
                                                       onChange={mainPhotoSelected}/>}
                                    <label htmlFor="file-upload" className={s.customFileUpload}>
                                        <span className={s.jsFileName}>Upload a photo</span>
                                    </label>
                                </div>
                            </div>
                        </Modal>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                <div className={s.description}>
                    <div className={s.item}>
                        <b>Full name:</b> {profile.fullName}
                    </div>

                    <div className={s.item}>
                        <b>Looking for a lob:</b> {profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    {profile.lookingForAJob &&
                    <div className={s.item}>
                        <b>My professional skills:</b> {profile.lookingForAJobDescription}
                    </div>
                    }
                    <div className={s.item}>
                        <b>About me:</b> {profile.aboutMe}
                    </div>
                    <div className={s.item}>
                        <b>Contacts:</b>
                        <ul>
                            <li>
                                FaceBook: {profile.contacts.facebook}
                            </li>
                            <li>
                                GitHub: {profile.contacts.github}
                            </li>
                            <li>
                                Instagram: {profile.contacts.instagram}
                            </li>
                            <li>
                                Twitter: {profile.contacts.twitter}
                            </li>
                            <li>
                                VK: {profile.contacts.vk}
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default ProfileInfo