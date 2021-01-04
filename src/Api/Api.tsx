import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "f86ed128-1eb6-4390-9695-099af06721b7"
    }
});
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },

    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
    },
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    }
}
export const authApi = {
    me() {
        return instance.get(`auth/me`)
    }
}