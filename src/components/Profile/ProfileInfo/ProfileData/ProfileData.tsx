import {ContactsType, ProfileType} from "../../../../Redux/profile_reducer";
import React from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import {Contact} from "../ProfileInfo/ProfileInfo";

type ProfileDataPropsType = {
    profile: ProfileType
    goToEditMode: () => void
    isOwner: boolean
}
export const ProfileData: React.FC<ProfileDataPropsType> = ({profile, goToEditMode, isOwner}) => {
    return (
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
                <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key}
                                    contactValue={profile.contacts[key as keyof ContactsType]}
                    />
                }
            )}
            </div>
            {isOwner &&
            <div className={s.edit}>
                <button onClick={goToEditMode}>Edit</button>
            </div>
            }
        </div>
    )
}