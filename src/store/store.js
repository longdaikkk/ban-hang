import {combineReducers, createStore} from 'redux';
import { clothReducer } from './reducers/cloth.reducer';

const rootReducer = combineReducers({
    clothReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
