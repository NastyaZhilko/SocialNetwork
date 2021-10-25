import {profileAPI, ResultCodesEnum, usersAPI} from "../Api/Api";
import {ActionsTypes, ThunkType} from "../Types/commonType";

export type PhotosType = {
    small: string | null
    large: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
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
                profile: {...state.profile, photos: action.photos} as ProfileType }
        }
        default:
            return state;
    }
}

export const addPost = (newPostText: string) => {
    return { type: 'ADD-POST', newPostText} as const
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
    let response = await usersAPI.getProfile(userId)
    debugger
            dispatch(setUsersProfile(response.data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}