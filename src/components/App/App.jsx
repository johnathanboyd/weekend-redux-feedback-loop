import React, { useEffect, useState } from 'react';
import{HashRouter as Router, Route, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';



function App() {

 
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
  //function to POST
  
  // change handler
  
  // radio selector specific state
  
  
  
  
  
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route path="/" exact>
          <h2>How are you feeling today?</h2>
          <Feeling />
        </Route>

        <Route path="/understanding" exact>
          <h2>How well are you understanding the content?</h2>
          <Understanding />
        </Route>
        <Route path="/supported" exact>
          <Supported />
        </Route>

        <Route path="/comment" exact>
        <Comments />
        </Route>
      </Router>
    </div>
  );
}

export default App;
