import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from './Post/post'
import {ProfilePageType} from "../../../Redux/store";

type MyPostsType = {
    profilePage: ProfilePageType
    addPostCallback: (postText: string) => void
    addNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsType) => {
    let postElements =
        props.profilePage.posts.map(p => <Post id={p.id} message={p.message} howManyLikes={p.howManyLikes}/>)

    const addPost = () => {
        props.addPostCallback(props.profilePage.newPostText);
    }
    const newTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPostText = e.currentTarget.value
        props.addNewPostText(newPostText)
    }
    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div className={s.nav}>
            <div>
                <textarea value={props.profilePage.newPostText}
                          onChange={newTextChange}
                />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
}

export default MyPosts;
