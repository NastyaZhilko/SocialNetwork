import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {addNewPostText, addPost, profileReducer, setStatus, setUsersProfile} from "./profile_reducer";
import {sidebarReducer} from "./sidebar_reducer";
import {addNewMessage, addNewMessageText, dialogsReducer} from "./dialogs_reducer";
import {
    acceptFollow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    toggleIsFetching,
    acceptUnFollow,
    usersReducers
} from "./users_reducer";
import {authReducers, setAuthUserData} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"

export type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof addNewPostText>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof addNewMessage>
    | ReturnType<typeof addNewMessageText>
    | ReturnType<typeof acceptFollow>
    | ReturnType<typeof acceptUnFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingInProgress>
    | ReturnType<typeof setStatus>



/*export type StoreType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    usersPage: UsersPageType
    getState: () => AppStateType
    subscribe: (observer: () => void) => void
    dispatch: Dispatch
    auth: AuthPropsType
}*/
let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducers,
        auth: authReducers
    }
);

export type AppStateType = ReturnType<typeof reducers>
// ThunkAction
// 1 параметр - описываем, что возвращает thunk
// 2 параметр - state всего приложения
// 3 параметр - экстра аргументы
// 4 параметр - все action всего App
export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>
export let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware));

type Window = typeof window & { store: Store }
(window as Window).store = store;
export default store;