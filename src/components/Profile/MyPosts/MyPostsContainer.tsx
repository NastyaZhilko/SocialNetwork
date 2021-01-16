import React from "react";
import {addPost} from "../../../Redux/profile_reducer";
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
        addPostCallback: (newPostText:string) => {
            dispatch(addPost(newPostText))
        }
    }
}
const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
