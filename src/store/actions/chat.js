import {SEND_MESSAGES,RECEIVE_MESSAGES } from  './actionsTypes';


export  const   onSendMessages = (messages) => (
    {
        type:SEND_MESSAGES,
        payload:{messages}
    }
)


export  const   onReceiveMessages = () => (
    {
        type:RECEIVE_MESSAGES,
        payload:{messages}
    }
)