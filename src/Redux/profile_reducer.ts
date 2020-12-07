import {ActionsTypes} from "./redux-store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            return {...state,
                posts:[...state.posts, newPost],
                newPostText : ''
            }

        case "UPDATE-NEW-POST-TEXT":
            return  {...state,
                newPostText : action.newText
            }
        default:
            return state;
    }
}

export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}

export let addNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}