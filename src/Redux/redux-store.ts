import {combineReducers, createStore, Dispatch, Store} from "redux";
import {
    addNewPostTextActionCreator,
    addPostActionCreator,
    ProfilePageType,
    profileReducer,
    setUsersProfile
} from "./profile_reducer";
import {sidebarReducer, SidebarType} from "./sidebar_reducer";
import {
    addNewMessageActionCreator,
    addNewMessageTextActionCreator,
    DialogsPageType,
    dialogsReducer
} from "./dialogs_reducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow,
    UsersPageType,
    usersReducers
} from "./users_reducer";
import {AuthPropsType, authReducers,  setAuthUserData} from "./auth-reducer";


export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof addNewPostTextActionCreator>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof addNewMessageActionCreator>
    | ReturnType<typeof addNewMessageTextActionCreator>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setAuthUserData>



export type StoreType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    usersPage: UsersPageType
    getState: () => AppStateType
    subscribe: (observer: () => void) => void
    dispatch: Dispatch
    auth: AuthPropsType
}
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
export let store: Store = createStore(reducers);

type Window = typeof window & { store: Store }
(window as Window).store = store;
export default store;