import {createStore} from 'redux';
import reducers,{persistorReducer} from './reducers';
import { persistStore } from 'redux-persist';



export default  Store = createStore(
    persistorReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(Store);