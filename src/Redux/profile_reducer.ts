import {addNewMessageActionCreator, addNewMessageTextActionCreator} from "./dialogs_reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof addNewPostTextActionCreator>
    | ReturnType<typeof addNewMessageActionCreator> | ReturnType<typeof addNewMessageTextActionCreator>
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type PostsType = {
    id: number
    message: string
    howManyLikes: number
}

let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', howManyLikes: 10},
            {id: 2, message: 'It is my first post?', howManyLikes: 15}
        ],
        newPostText: ''
    };

export const profileReducer = (state: ProfilePageType=initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: 3,
                message: state.newPostText,
                howManyLikes: 0
            };
            state.posts.push(newPost)
            state.newPostText = '';
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export let addPostActionCreator = (newPost: string) => {
    return {
        type: ADD_POST,
        newPost: newPost
    } as const

}
export let addNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}