import {addNewPostTextActionCreator, addPostActionCreator, profileReducer} from "./profile_reducer";
import {addNewMessageActionCreator, addNewMessageTextActionCreator, dialogsReducer} from "./dialogs_reducer";
import {sidebarReducer} from "./sidebar_reducer";

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', howManyLikes: 10},
                {id: 2, message: 'It is my first post?', howManyLikes: 15}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'What do you do'},
                {id: 4, message: 'My dog is the best friend'},
                {id: 5, message: 'The best day!'}

            ],
            newMessageText: '',
            dialogs: [
                {
                    id: 1,
                    name: 'Lera',
                    img: 'https://www.sb.by/upload/resize_cache/slam.image/iblock/558/558ebd06b5552debf362edd774b92920.jpg'
                },
                {
                    id: 2,
                    name: 'Sasha',
                    img: 'https://i.pinimg.com/originals/8e/b0/fd/8eb0fdac7230089db2fa51f53e53397e.jpg'
                },
                {
                    id: 3,
                    name: 'Kesha',
                    img: 'https://www.belanta.vet/vet-blog/wp-content/uploads/2018/08/bulterer_07.jpg'
                },
                {
                    id: 4,
                    name: 'Dasha',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNdbepu0Mk7TjGMAibWXRBh5Zn1lXAWFLtVg&usqp=CAU'
                },
                {
                    id: 5,
                    name: 'Pasha',
                    img: 'https://cameralabs.org/images/jamp/page/d07d78d2fbbd361944e4a80341a9931b_L.jpg'
                }
            ]
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Lera',
                    img: 'https://hvost.news/upload/resize_cache/iblock/8b8/750_400_1/pochemu_kotenok_lizhet_volosy_i_zaryvaetsja_v_nih.jpg'
                },
                {
                    id: 2,
                    name: 'Nick',
                    img: 'https://irecommend.ru/sites/default/files/product-images/8170/x_1bfe8ccb.jpg'
                },
                {
                    id: 3,
                    name: 'Sasha',
                    img: 'https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2019-10/3_2.jpg?itok=490tTVov'
                }
            ],
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber();//из скобок удалила state
    }
}

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
    img: string
}
export type PostsType = {
    id: number
    message: string
    howManyLikes: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    messages: Array<MessagesType>
    newMessageText: string
    dialogs: Array<DialogsType>
}
export type FriendsType = {
    id: number
    name: string
    img: string
}
export type SidebarType = {
    friends: Array<FriendsType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


export type StoreType = {
    _state: StateType
    getState: () => StateType
    subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof addNewPostTextActionCreator>
    | ReturnType<typeof addNewMessageActionCreator> | ReturnType<typeof addNewMessageTextActionCreator>


//window.store=store;  не помню для чего