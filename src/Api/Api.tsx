import axios from "axios";
import {PhotosType, ProfileType} from "../Redux/profile_reducer";
import {UsersType} from "../Redux/users_reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "5562f413-fdfb-4253-9584-34a31cc657d3"
    }
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10

}

export type  ResponseUserType = {
    items: UsersType[]
    totalCount: number
    error: null | string
}

export type FieldErrorType = {
    field: string
    message: string
}
export type BaseOperationResponseType<T> = {
    resultCode: ResultCodesEnum
    fieldsErrors: FieldErrorType
    messages: string[]
    data: T
}

type MeDataType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}
export type LoginResponseDataType = {
    userId: number
}
type SavePhotoResponseDataType = {
    photos: PhotosType
}
type SaveProfileResponseDataType={
    profile: ProfileType
}
type CaptchaResponseDataType = {
    url: string
}
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<ResponseUserType>(`users?page=${currentPage}&count=${pageSize}`)
    },

    unFollow(id: number) {
        return instance.delete<BaseOperationResponseType<UsersType>>(`follow/${id}`)
    },
    follow(id: number) {
        debugger
        return instance.post<BaseOperationResponseType<UsersType>>(`follow/${id}`)
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {

    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<BaseOperationResponseType<{}>>(`profile/status/`, {status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<BaseOperationResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile (profile: ProfileType){
        return instance.put<BaseOperationResponseType<SaveProfileResponseDataType>>(`profile` , profile)
    }
}


export const authApi = {
    me() {
        return instance.get<BaseOperationResponseType<MeDataType>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: null|string) {
        return instance.post<BaseOperationResponseType<LoginResponseDataType>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        })
    },
    logOut() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI  = {
    getCaptchaUrl() {
        return instance.get<CaptchaResponseDataType>(`security/get-captcha-url`)
    }
}