import {ActionsTypes, ThunkType} from "./redux-store";
import {profileAPI, usersAPI} from "../Api/Api";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

export type ContactsType = {
    facebook: string
    website: string
    vk: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType


}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | null
    status: string
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
    profile: null,
    status:''
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
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
                profile: action.profile,

            }
        }
        case  SET_STATUS: {
            return {
                ...state,
                status: action.status,

            }
        }

        default:
            return state;
    }
}

export const addPost = () => {
    return {
        type: ADD_POST
    } as const
}

export const addNewPostText = (newText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText} as const
}

export const setUsersProfile = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile} as const
}
export const setStatus = (status: string) => {
    return {type: SET_STATUS,status} as const
}


export const getProfile = (userId: number): ThunkType => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data))
            })
    }
}
export const getStatus = (userId: number): ThunkType => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}

export const updateStatus = (status:string): ThunkType => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode===0) {
                    dispatch(setStatus(status))
                }
            })
    }
}