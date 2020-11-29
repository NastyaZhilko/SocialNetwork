import React from 'react';
import {addNewMessageActionCreator, addNewMessageTextActionCreator} from "../../Redux/dialogs_reducer";
import {StoreType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";

type DialogsContainerType = {
    store: StoreType
}

const DialogsContainer = (props: DialogsContainerType) => {
    let onSend = (newMessage: string) => {
        props.store.dispatch(addNewMessageActionCreator(newMessage));
    }
    let onNewChange = (messageBody: string) => {
        props.store.dispatch(addNewMessageTextActionCreator(messageBody))
    }
    return (
        <Dialogs
            onSendMessageClick={onSend}
            onNewMessageChange={onNewChange}
            dialogsPage={props.store.getState().dialogsPage}
        />
    )
}

export default DialogsContainer;
