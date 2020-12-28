import React from "react";
import {addNewPostText, addPost} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../Redux/redux-store";

let mapStateToProps=(state: AppStateType)=>{
    return{
        profilePage: state.profilePage
    }
}
let mapDispatchToProps=(dispatch: Dispatch)=> {
    return {
        addPostCallback: () => {
            dispatch(addPost())
        },
        addNewPostText: (newText: string) => {
            dispatch(addNewPostText(newText));
        }
    }
}
const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
