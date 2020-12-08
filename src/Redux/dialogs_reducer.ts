import {ActionsTypes} from "./redux-store";


const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
export type DialogsPageType = {
    messages: Array<MessagesType>
    newMessageText: string
    dialogs: Array<DialogsType>
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
let initialState = {
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
}
export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes):DialogsPageType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText:action.messageBody}


        case SEND_MESSAGE:
            let messageBody = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: messageBody}]
            };

        default:
            return state
    }
}

export let addNewMessageTextActionCreator = (messageBody: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        messageBody: messageBody
    } as const
}

export let addNewMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

