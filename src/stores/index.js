import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import StoreTodo from './modules/StoreTodo' 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
let reducers = combineReducers({
    StoreTodo,
})

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)),
);

export default store