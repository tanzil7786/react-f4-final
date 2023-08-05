import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import postReducer from './reducers/postReducer';
import selectedPostReducer from './reducers/selectedPostReducer';

const rootReducer = combineReducers({
    posts : postReducer,
    selectedPost : selectedPostReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;