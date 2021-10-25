import {profileAPI, ResultCodesEnum, usersAPI} from "../Api/Api";
import {ActionsTypes, ThunkType} from "../Types/commonType";
import {stopSubmit} from "redux-form";

export type PhotosType = {
    small: string | null
    large: string
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}
export type ProfilePageType = typeof initialState

export type PostType = {
    id: number
    message: string
    howManyLikes: number

}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', howManyLikes: 10},
        {id: 2, message: 'It is my first post?', howManyLikes: 15}
    ] as PostType[],
    profile: null as ProfileType | null,
    status: ''
};

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {
                    id: 3,
                    message: action.newPostText,
                    howManyLikes: 0
                }]
            }

        case   'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile,

            }
        }
        case  'SET-STATUS': {
            return {
                ...state,
                status: action.status,

            }
        }

        case  'SAVE-PHOTO-SUCCESS': {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state;
    }
}

export const addPost = (newPostText: string) => {
    return {type: 'ADD-POST', newPostText} as const
}

export const setUsersProfile = (profile: ProfileType) => {
    return {type: 'SET-USER-PROFILE', profile} as const
}

export const setStatus = (status: string) => {
    return {type: 'SET-STATUS', status} as const
}

export const savePhotoSuccess = (photos: PhotosType) => {
    return {type: 'SAVE-PHOTO-SUCCESS', photos} as const
}

export const getProfile = (userId: number): ThunkType => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUsersProfile(response.data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch,
                                                                       getState) => {
    const response = await profileAPI.saveProfile(profile)
    const userId = getState().auth.id
    if (response.data.resultCode === ResultCodesEnum.Success) {
        if (userId != null) {
            dispatch(getProfile(userId))
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit('edit-profile',{_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}