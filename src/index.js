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
const newFeedback =( state ={}, action)=>{
    console.log( 'in newFeedback', action.payload );
    if( action.type === 'setNewFeedback'){
        console.log( 'set state', action.payload )
        state = {...state, feeling: action.payload}
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
