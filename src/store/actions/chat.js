import {SEND_MESSAGES,RECEIVE_MESSAGES } from  './actionsTypes';


export  const   onSendMessages = ( messages, dsclient ) => async dispatch=> {

    //list
    const chat = dsclient.record.getList(`chatRoom/1_2`);

    //record
    //path: chatRoom/userId-otheruserId
    const record = dsclient.record.getRecord(`chatRoom/1_2/${messages[0]._id})`);


    record.whenReady((record)=>{
        // insert data to record
        record.set(messages[0]);

        //insert record to list
        chat.addEntry(`chatRoom/1_2/${messages[0]._id})`);

    });


    dispatch({
        type:SEND_MESSAGES,
        payload:{messages}
    });
};


export  const   onFetchMessages = (dsclient)=> async dispatch => {


    const chat = dsclient.record.getList(`chatRoom/1_2`);

    chat.subscribe((entries = []) => {
        console.log('entries',entries);

        const messages =  entries.map((record) => {

           return  dsclient.record.getRecord(record).whenReady(record=>record.get());
        });

        console.log('messages',messages);

        dispatch({
            type:RECEIVE_MESSAGES,
            payload:{messages}
        });

    }); 

}

