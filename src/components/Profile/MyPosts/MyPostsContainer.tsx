import React from "react";
import {addNewPostTextActionCreator, addPostActionCreator} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../Redux/redux-store";

type MyPostsContainerType = {
    store: StoreType
}

const MyPostsContainer = (props: MyPostsContainerType) => {

    const addPost = (postText: string) => {
        props.store.dispatch(addPostActionCreator(postText));
    }
    const newTextChange = (newText: string) => {
        props.store.dispatch(addNewPostTextActionCreator(newText));
    }
    return (<MyPosts
        addPostCallback={addPost}
        addNewPostText={newTextChange}
        profilePage={props.store.getState().profilePage}
    />)

}

export default MyPostsContainer;
