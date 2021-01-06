import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialohItem";
import MessageItem from "./Messages/Messages";
import {DialogsPageType} from "../../Redux/dialogs_reducer";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";


type OneDialogsType = {
    dialogsPage: DialogsPageType
    onSendMessageClick: (newMessage: string) => void
    onNewMessageChange: (messageBody: string) => void
    isAuth: boolean
}

const Dialogs = (props: OneDialogsType) => {
    let dialogsElements =
        props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>)
    let messageElements =
        props.dialogsPage.messages.map(m => <MessageItem message={m.message}/>)
    let newMessageText =
        props.dialogsPage.newMessageText;
    let onSend = () => {
        props.onSendMessageClick(props.dialogsPage.newMessageText)
    }
    let onNewChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onNewMessageChange(e.currentTarget.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageText}
                                   onChange={onNewChange}
                                   placeholder='Enter your message'>
                    </textarea>
                    </div>
                    <div>
                        <button onClick={onSend}>Send</button>
                    </div>
                </div>
            </div>
            <div className={s.messages}>
            </div>
        </div>
    )
}

export default withAuthRedirect(Dialogs);

