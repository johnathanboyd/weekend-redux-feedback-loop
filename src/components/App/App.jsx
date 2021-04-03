import React, { useEffect, useState } from 'react';
import{HashRouter as Router, Route, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../ReviewFeedback/ReviewFeedback';
import Submitted from '../Submitted/Submitted';



function App() {

  /* the GET route is for the stretch goal
  useEffect( ()=>{
    getFeedback();
  }, [])
  
  //function to GET
  let getFeedback=()=>{
    console.log( 'in getFeedback' );
    axios.get( '/api/feedback' ).then( ( response ) =>{  
      // this is where dispatch for submited feedback would go, i believe.
      console.log( 'back from getFeedback GET with:', response );
    }).catch( ( err ) =>{
      console.log( err );
      alert( 'err from getMenu')
    })
  }
  */   
  
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route path="/" exact>
          <h1>How are you feeling today?</h1>
          <Feeling />
        </Route>

        <Route path="/understanding" exact>
          <h1>How well are you understanding the content?</h1>
          <Understanding />
        </Route>
        <Route path="/supported" exact>
          <h1>How well are you being supported?</h1>
          <Supported />
        </Route>

        <Route path="/comment" exact>
            <h1>Any comments you want to leave?</h1>
        <Comments />
        </Route>

        <Route path="/review" exact>
            <h1>Review Your Feedback</h1>
            <Review />
        </Route>

        <Route path="/submitted">
          <Submitted />
        </Route>    
      </Router>
    </div>
  );
}

export default App;
