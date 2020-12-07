import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className='app-wrapper-content'>
            <ProfileInfo/>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}
export default Profile;