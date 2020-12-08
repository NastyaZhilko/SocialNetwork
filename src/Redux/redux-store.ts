import {combineReducers, createStore, Dispatch, Store} from "redux";
import {addNewPostTextActionCreator, addPostActionCreator, ProfilePageType, profileReducer} from "./profile_reducer";
import {sidebarReducer, SidebarType} from "./sidebar_reducer";
import {
    addNewMessageActionCreator,
    addNewMessageTextActionCreator,
    DialogsPageType,
    dialogsReducer
} from "./dialogs_reducer";
import {followAC, setUsersAC, unFollowAC, UsersPageType, usersReducers} from "./users_reducer";


export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof addNewPostTextActionCreator>
    | ReturnType<typeof addNewMessageActionCreator>
    | ReturnType<typeof addNewMessageTextActionCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>


export type StoreType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    usersPage: UsersPageType
    getState: () => AppStateType
    subscribe: (observer: () => void) => void
    dispatch: Dispatch
}
let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducers
    }
);

export type AppStateType = ReturnType<typeof reducers>
export let store: Store = createStore(reducers);

type Window = typeof window & { store: Store }
(window as Window).store = store;
export default store;