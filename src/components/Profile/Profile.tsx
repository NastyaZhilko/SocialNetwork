import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../Redux/redux-store";

type ProfilePropsType = {
    store: StoreType
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div className='app-wrapper-content'>
            <ProfileInfo/>
            <div>
                <MyPostsContainer
                    store={props.store}
                />
            </div>
        </div>
    )
}
export default Profile;