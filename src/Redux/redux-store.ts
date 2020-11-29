import {combineReducers, createStore, Dispatch} from "redux";
import {ProfilePageType, profileReducer} from "./profile_reducer";
import {DialogsPageType, dialogsReducer} from "./dialogs_reducer";
import {sidebarReducer, SidebarType} from "./sidebar_reducer";


export type StoreType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    getState: () => AppStateType
    subscribe: (observer: () => void) => void
    dispatch: Dispatch
}
let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer

    }
);

let store: StoreType = createStore(reducers);
export type AppStateType=ReturnType<typeof reducers>

export default store;