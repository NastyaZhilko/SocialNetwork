import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {addNewPostText, addPost, profileReducer, setUsersProfile} from "./profile_reducer";
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
import thunkMiddleware from "redux-thunk"

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
export let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware));

type Window = typeof window & { store: Store }
(window as Window).store = store;
export default store;