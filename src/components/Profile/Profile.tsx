import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile_reducer";

export type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto:(file: File) => void
}
const Profile = (props: ProfilePropsType) => {
    console.log('profile')
    return (
        <div className='app-wrapper-content'>
            {props.profile && <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
            />}
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;