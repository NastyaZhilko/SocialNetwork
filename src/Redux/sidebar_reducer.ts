import {addNewPostTextActionCreator, addPostActionCreator} from "./profile_reducer";
import {addNewMessageActionCreator, addNewMessageTextActionCreator} from "./dialogs_reducer";
export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof addNewPostTextActionCreator>
    | ReturnType<typeof addNewMessageActionCreator> | ReturnType<typeof addNewMessageTextActionCreator>
export type FriendsType = {
    id: number
    name: string
    img: string
}
export type SidebarType = {
    friends: Array<FriendsType>
}
let initialState={
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
export const sidebarReducer=(state: SidebarType=initialState, action: ActionsTypes)=>{
    return state
}