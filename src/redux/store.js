import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from './reducers/newsReducer';

const rootReducer = combineReducers({
    newsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));