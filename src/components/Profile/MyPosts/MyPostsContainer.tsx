import React from "react";
import {addNewPostTextActionCreator, addPostActionCreator} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../Redux/store";
import {Dispatch} from "redux";

let mapStateToProps=(state: StateType)=>{
    return{
        profilePage: state.profilePage
    }
}
let mapDispatchToProps=(dispatch: Dispatch)=> {
    return {
        addPostCallback: () => {
            dispatch(addPostActionCreator())
        },
        addNewPostText: (newText: string) => {
            dispatch(addNewPostTextActionCreator(newText));
        }
    }
}
const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
