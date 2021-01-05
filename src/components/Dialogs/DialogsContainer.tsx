import React from 'react';
import {addNewMessage, addNewMessageText} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
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


/*compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)*/ //не могу понять как ее заюзать
let AuthRedirectComponent=withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;
