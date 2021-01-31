import React from 'react';
import s from './../Dialogs.module.css'
type MessageItemType={
    message:string
}

const MessageItem = React.memo((props:MessageItemType) => {

    return (

            <div className={s.message}>
                {props.message}
            </div>


    )
})
export default MessageItem;
