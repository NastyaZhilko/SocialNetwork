import React, {KeyboardEvent, useEffect, useState} from "react";


export type ChatMessageResponseType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    )
}

const Chat: React.FC = () => {

    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {
        let ws: WebSocket
        const closeHandler = () => {
            console.log('close ws')
            setTimeout(createChanel, 3000)
        }

        function createChanel() {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }

        createChanel()
        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, [])

    return (
        <div>
            <Messages wsChannel={wsChannel}/>
            <AddMessageForm wsChannel={wsChannel}/>
        </div>
    )
}

const Messages: React.FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {
    const [messages, setMessages] = useState<ChatMessageResponseType[]>([])
    useEffect(() => {
        const messageHandler = (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        };
        wsChannel?.addEventListener('message', messageHandler)
        return ()=>{
            wsChannel?.removeEventListener('message', messageHandler)
        }
    }, [wsChannel])
    return (
        <div style={{height: '300px', overflowY: 'auto'}}>
            {messages.map((m) => <Message message={m}/>)}
        </div>
    )
}

const Message: React.FC<{ message: ChatMessageResponseType }> = ({message}) => {

    return (
        <div>
            <img src={message.photo} alt="avatar" style={{width: '30px', height: '30px'}}/>{message.userName}
            <br/>
            {message.message}
            <hr/>
        </div>
    )
}

const AddMessageForm: React.FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        const openHandler = () => {
            setReadyStatus('ready')
        }

        wsChannel?.addEventListener('open', openHandler)
        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel])
    const sendMessage = () => {
        if (!message) {
            return
        }
        wsChannel?.send(message)
        setMessage('')
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) =>{
        if (e.key === 'Enter') {
            sendMessage();
        }
    }
    return (
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)}
                      onKeyPress={onKeyPressHandler}
                      value={message}/>
            <button onClick={sendMessage}

                    disabled={wsChannel === null || readyStatus !== 'ready'
                    }>Send</button>
        </div>
    )
}

export default ChatPage