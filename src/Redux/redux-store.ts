import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile_reducer";
import {sidebarReducer} from "./sidebar_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {usersReducers} from "./users_reducer";
import {authReducers} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"


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
        auth: authReducers,
        form: formReducer
    }
);

export type AppStateType = ReturnType<typeof reducers>

export let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware));

type Window = typeof window & { store: Store }
(window as Window).store = store;
export default store;