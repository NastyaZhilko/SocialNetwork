import {addPost, setStatus, setUsersProfile} from "../Redux/profile_reducer";
import {addNewMessage} from "../Redux/dialogs_reducer";
import {
    acceptFollow,
    acceptUnFollow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    toggleIsFetching
} from "../Redux/users_reducer";
import {setAuthUserData} from "../Redux/auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../Redux/redux-store";

//типизация экшинов
export type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof addNewMessage>
    | ReturnType<typeof acceptFollow>
    | ReturnType<typeof acceptUnFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingInProgress>
    | ReturnType<typeof setStatus>
export const actions={

}
//типизация санок
// ThunkAction
// 1 параметр - описываем, что возвращает thunk
// 2 параметр - state всего приложения
// 3 параметр - экстра аргументы
// 4 параметр - все action всего App
export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>
