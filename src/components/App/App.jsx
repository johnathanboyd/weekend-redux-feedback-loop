import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';



function App() {

  //dispatch used to send info to redux store
  const dispatch = useDispatch();

  useEffect( ()=>{
    getFeedback();
  }, [])

  const [ newFeedback, setNewFeedback ] = useState( { feeling: '', understanding: '', support: '', comment:''} );
  
  let addToStore=(feels)=>{
    console.log( 'in addToStore' );
    feels.feeling = feels.value
    dispatch({ type: 'setNewFeedback', payload: feels})
  }
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
  
  const [ state, setState ] = useState( '' )
  
  let handleFeelingChange=(event)=>{
    console.log( 'in handleFeelingChange:', event.target.value );
    setState({
      selectedOption: event.target.value
    })
    
  }
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <h2>How are you feeling today?</h2>
    <form >
        <div>
          <label htmlFor="1">
            <input 
              type="radio" 
              id="rating1" 
              value="1" 
              checked={state.selectedOption ==="1"}
              onChange={ handleFeelingChange }
            />
            1
          </label> 
        </div>
        <div>
          <label htmlFor="2">
            <input 
              type="radio" 
              id="rating2" 
              value="2" 
              checked={state.selectedOption === "2"}
              onChange={ handleFeelingChange }
            />
            2
          </label>
        </div>
        
        <div>
          <label htmlFor="3">
            <input 
              type="radio" 
              id="rating3" 
              value="3" 
              checked={state.selectedOption === "3"}
              onChange={ handleFeelingChange }
            />
            3
          </label>
        </div>
        <div>
          <label htmlFor="4">
            <input 
              type="radio" 
              id="rating4" 
              value="4" 
              checked={state.selectedOption === "4"}
              onChange={ handleFeelingChange }
            />
          4
          </label>
        </div>
        <div>
          <label htmlFor="5">
            <input 
              type="radio" 
              id="rating5" 
              value="5" 
              checked={state.selectedOption === "5"}
              onChange={ handleFeelingChange }
            />
          5
          </label>
        </div>
        <div>
          <button type="submit" onClick={ addToStore }>Submit</button>
        </div>
    </form>



      <Understanding />
      <Supported />
      <Comments />
    </div>
  );
}

export default App;
