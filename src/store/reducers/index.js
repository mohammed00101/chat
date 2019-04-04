import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import chatReducer from './chat';

const persistConfig = {
    key:'root',
    storage
}



export default reducers = combineReducers({
    chat:chatReducer,
});

export const persistorReducer = persistReducer(persistConfig,reducers);
