import { RECEIVE_MESSAGES,SEND_MESSAGES} from '../actions/actionsTypes';
import messages from '../../data/messages';
import { GiftedChat } from 'react-native-gifted-chat';

const INITIAL_STATE = {
    messages:messages,
}


export default (state=INITIAL_STATE,{type,payload}) => {

    switch(type){
        case SEND_MESSAGES:
        return {
            ...state,
            messages:GiftedChat.append(state.messages,payload.messages)
        };
        case RECEIVE_MESSAGES:
        return {...state,messages:payload.messages};
        default:
        return state;

    }
}