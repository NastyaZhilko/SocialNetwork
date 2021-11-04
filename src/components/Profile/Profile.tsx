import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile_reducer";

export type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto:(file: File) => void
    saveProfile: (formData: ProfileType)=>Promise<any>
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div >
            {props.profile && <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />}
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;