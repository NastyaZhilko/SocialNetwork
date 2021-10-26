import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../../Redux/profile_reducer";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import Preloader from "../../../common/Preloader/Preloader";
import avatar1 from "../../../../assets/img/avatar1.png";
import Modal from "../../../common/Modal/Modal";
import {ProfileData} from "../ProfileData/ProfileData";
import ProfileDataForm from "../ProfileDataForm/ProfileDataForm";

type PropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = ({
                                              isOwner,
                                              profile,
                                              status,
                                              updateStatus,
                                              savePhoto,
                                              saveProfile
                                          }) => {

    const [isModal, setIsModal] = useState<boolean>(false)
    const [editMode, setEditMode] = useState<boolean>(false)

    if (!profile) {
        return <Preloader/>
    }
    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
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

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} goToEditMode={() => setEditMode(true)} isOwner={isOwner}/>
                }
            </div>
        </div>
    )

}


type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}
export const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div>
            {(contactValue != "" && contactValue !=null) &&
            <div className={s.contact}>

                <b>{contactTitle}</b>:<a href={contactValue} target={'blank'}>{contactValue}</a>

            </div>
            }
        </div>
    )
}

export default ProfileInfo