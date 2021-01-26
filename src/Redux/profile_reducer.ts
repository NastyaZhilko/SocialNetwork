import {profileAPI, ResultCodesEnum, usersAPI} from "../Api/Api";
import {ActionsTypes, ThunkType} from "../Types/commonType";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


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
    photos: {
        small: string
        large: string
    }
}
export type ProfilePageType = typeof initialState /*{
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | null
    status: string
}*/
export type PostType = {
    id: number
    message: string
    howManyLikes: number

}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', howManyLikes: 10},
        {id: 2, message: 'It is my first post?', howManyLikes: 15}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
};

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 3,
            message: action.newPostText,
            howManyLikes: 0}]
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

export const addPost = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText
    } as const
}

export const setUsersProfile = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile} as const
}

export const setStatus = (status: string) => {
    return {type: SET_STATUS, status} as const
}

export const getProfile = (userId: number): ThunkType => async (dispatch) =>
{
    await  usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data))
            })

}
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    await profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })

}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    await   profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === ResultCodesEnum.Success) {
                    dispatch(setStatus(status))
                }
            })

}