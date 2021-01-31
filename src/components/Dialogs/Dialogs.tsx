import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialohItem";
import MessageItem from "./Messages/Messages";
import {DialogsPageType} from "../../Redux/dialogs_reducer";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, minLength2, required} from "../../Utils/validators";


type OneDialogsType = {
    dialogsPage: DialogsPageType
    onSendMessageClick: (newMessage: string) => void
    isAuth: boolean

}

const Dialogs = React.memo((props: OneDialogsType) => {
    let dialogsElements =
        props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>)
    let messageElements =
        props.dialogsPage.messages.map(m => <MessageItem message={m.message}/>)


    let addNewMessage = (value:any) => {
        props.onSendMessageClick(value.newMessageText)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <MessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
            <div className={s.messages}>
            </div>
        </div>
    )
})
type FormDataType = {
    newMessageText: string
}
const maxLength50=maxLengthCreator(50)
const MessageForm: React.FC<InjectedFormProps<FormDataType>> = (props)=> {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} name={'newMessageText'}
                       component={Textarea}
                validate={[required,maxLength50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const MessageReduxForm = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(MessageForm)

export default withAuthRedirect(Dialogs);

