import {ActionsTypes} from "./redux-store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export type ContactsType={
    facebook: string
    website: string
    vk: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type PhotosType={
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob:boolean
    lookingForAJobDescription: string
    fullName:string
    userId: number
    photos: PhotosType

}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType|null
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
    newPostText: 'New post',
    profile:  null
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 3,
                message: state.newPostText,
                howManyLikes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case  SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state;
    }
}

export let addPostActionCreator = () => {
    return {type: ADD_POST
    } as const
}

export let addNewPostTextActionCreator = (newText: string) => {
    return {type: UPDATE_NEW_POST_TEXT,newText: newText} as const}

export let setUsersProfile = (profile:ProfileType ) => {
    return {type: SET_USER_PROFILE,profile} as const}
