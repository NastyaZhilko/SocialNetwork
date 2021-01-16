import {ActionsTypes} from "../Types/commonType";
const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogsPageType = typeof initialState/*{
    messages: Array<MessagesType>
    newMessageText: string
    dialogs: Array<DialogsType>
}*/
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
    img: string
}
let initialState = {
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What do you do'},
        {id: 4, message: 'My dog is the best friend'},
        {id: 5, message: 'The best day!'}

    ] as Array<MessageType>,

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
    ] as Array<DialogType>
}
export const dialogsReducer = (state= initialState, action: ActionsTypes):DialogsPageType => {

    switch (action.type) {

        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessageText}]
            };

        default:
            return state
    }
}


export let addNewMessage = (newMessageText:string) => {
    return {
        type: SEND_MESSAGE,
        newMessageText
    } as const
}

