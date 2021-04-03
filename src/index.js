import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// set up reducers 
// this reducer is for admin page in stretch... getting a bit ahead of myself
/*const submittedFeedback = (state = [], action) => {
    if (action.type === 'setSubmittedFeedback') {
        console.log('set state')
        state = [...action.payload]
    }
    return state;
} */

const newFeedback = ( state ={}, action)=>{
    if( action.type === 'setFeelFeedback'){
        state = {...state, feeling: action.payload}
    }
    if( action.type === 'setUnderstandFeedback'){
        state = {...state, understanding: action.payload}
    }
    if( action.type === 'setSupportFeedback'){
        state = {...state, support: action.payload}
    }
    if( action.type === 'setCommentFeedback'){
        state = {...state, comments: action.payload}
    }
    if ( action.type === 'clearSurvey' ){
        state = {} 
    }
    return state;
}

const store = createStore(
    combineReducers({
        //submittedFeedback: submittedFeedback,
        newFeedback: newFeedback
    }),
    applyMiddleware( logger )
)
 
ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
