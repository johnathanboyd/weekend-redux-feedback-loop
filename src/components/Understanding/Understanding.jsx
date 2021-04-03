import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Understanding() {
  const dispatch = useDispatch();
  
  // this is for rating chosen
  const [score, setScore ] = useState( '' )
  
  let handleUnderstandingChange =(event)=>{
    console.log( 'in handleUnderstandingChange:', event.target.value );
    setScore( event.target.value )
  }
  
  let addToStore=( score )=>{
    dispatch( { type: 'setUndersandFeedback', payload: score }) 
  }

  return(
    <>
     <form>
        <div>
          <label htmlFor="1">
            <input 
              type="radio" 
              id="rating1" 
              value="1" 
              checked={score ==="1"}
              onChange={ handleUnderstandingChange }
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
              checked={score === "2"}
              onChange={ handleUnderstandingChange }
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
              checked={score === "3"}
              onChange={ handleUnderstandingChange }
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
              checked={score === "4"}
              onChange={ handleUnderstandingChange }
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
              checked={score === "5"}
              onChange={ handleUnderstandingChange }
            />
          5
          </label>
        </div>
      </form>
      <div>
        <Link to="/supported">
          <button type="submit" onClick={() => addToStore( score )}>Submit</button>
        </Link>  
      </div>

    </>
  )
}

export default Understanding