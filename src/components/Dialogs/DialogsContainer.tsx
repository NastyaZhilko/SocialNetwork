import React from 'react';
import {addNewMessage, addNewMessageText} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(addNewMessage())
        },
        onNewMessageChange: (messageBody: string) => {
            dispatch(addNewMessageText(messageBody))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
