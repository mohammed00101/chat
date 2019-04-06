import { RECEIVE_MESSAGES,SEND_MESSAGES} from '../actions/actionsTypes';
import messages from '../../data/messages';
import { GiftedChat } from 'react-native-gifted-chat';

const INITIAL_STATE = {
    messages:[],
}


export default (state=INITIAL_STATE,{type,payload}) => {

    switch(type){
        case SEND_MESSAGES:
        return {
            ...state,
            messages:GiftedChat.append(state.messages,payload.messages)
        };
       case RECEIVE_MESSAGES:

       //update sent message by filter old and  add the  message as sent  
       const oldMessages =  state.messages.filter(
           message => message._id != payload.messages[0]._id
        );

       return {
           ...state,
           messages:GiftedChat.append(oldMessages,payload.messages)
        };

        default:
        return state;

    }
}