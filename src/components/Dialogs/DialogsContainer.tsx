import React from 'react';
import {addNewMessageActionCreator, addNewMessageTextActionCreator} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../Redux/store";
import {Dispatch} from "redux";

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(addNewMessageActionCreator())
        },
        onNewMessageChange: (messageBody: string) => {
            dispatch(addNewMessageTextActionCreator(messageBody))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
