import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// set up reducers 
const submittedFeedback = (state = [], action) => {
    console.log('in submittedFeedback');
    if (action.type === 'setSubmittedFeedback') {
        console.log('set state')
        state = [...action.payload]
    }
    return state;
} 
const feelFeedback =( state ={}, action)=>{
    console.log( 'in feelFeedback', action.payload );
    if( action.type === 'setFeelFeedback'){
        console.log( 'set state', action.payload )
        state = {...state, feeling: action.payload}
    }
    return state;
}
const understandFeedback =( state ={}, action)=>{
    console.log( 'in understandFeedback', action.payload );
    if( action.type === 'setUnderstandFeedback'){
        console.log( 'set state', action.payload )
        state = {...state, understanding: action.payload}
    }
    return state;
}
const supportFeedback =( state ={}, action)=>{
    console.log( 'in supportFeedback', action.payload );
    if( action.type === 'setSupportFeedback'){
        console.log( 'set state', action.payload )
        state = {...state, support: action.payload}
    }
    return state;
}
const commentFeedback =( state ={}, action)=>{
    console.log( 'in commentFeedback', action.payload );
    if( action.type === 'setCommentFeedback'){
        console.log( 'set state', action.payload )
        state = {...state, comments: action.payload}
    }
    return state;
}

const store = createStore(
    combineReducers({
        //submittedFeedback: submittedFeedback,
        feelFeedback: feelFeedback,
        understandFeedback: understandFeedback,
        supportFeedback: supportFeedback,
        commentFeedback: commentFeedback

    }),
    applyMiddleware( logger )
)
 
ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
