import React from 'react';
import {addNewMessageActionCreator, addNewMessageTextActionCreator} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

import {Dispatch} from "redux";
import {StoreType} from "../../Redux/redux-store";

let mapStateToProps = (state: StoreType) => {
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
