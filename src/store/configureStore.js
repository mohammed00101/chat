import {createStore, applyMiddleware,compose } from 'redux';
import reducers,{persistorReducer} from './reducers';
import { persistStore } from 'redux-persist';
import  Thunk  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';



// if(__DEV__)
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

export default  Store = createStore(
    persistorReducer,
    // reducers,
    composeWithDevTools(applyMiddleware(Thunk))
);

export const persistor = persistStore(Store);