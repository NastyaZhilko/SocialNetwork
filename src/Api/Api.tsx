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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => response.data)
    },

    unFollow(id: number) {
        return instance.delete(`follow/${id}`, {
            withCredentials: true
        }).then(response => response.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`, {
            withCredentials: true
        }).then(response => response.data)
    },
    getProfile(userId:number) {
        return instance.get(`profile/`+userId, {
            withCredentials: true
        }).then(response => response.data)
    },
    auth() {
        return instance.get(`auth/me`, {
            withCredentials: true
        }).then(response => response.data)
    },
}