import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile_reducer";

export type ProfilePropsType = {
    profile: ProfileType | null
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div className='app-wrapper-content'>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;