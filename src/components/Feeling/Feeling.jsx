import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Feeling() {
  const dispatch = useDispatch();

  // this is for the rating chosen
  const [ score, setScore ] = useState( '' )
  
  let handleFeelingChange = (event)=>{
      console.log( 'in handleFeelingChange:', event.target.value );
      // conditional to not have a blank score must go here
      setScore( event.target.value)  
    }
    
    let addToStore=( score )=>{
      dispatch( { type: 'setFeelFeedback', payload: score })
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
              checked={score === "1" }
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
              checked={score ===  "2" }
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
              checked={score ===  "3" }
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
              checked={score ===  "4" }
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
              value= "5" 
              checked={score === "5" }
              onChange={ handleFeelingChange }
            />
          5
          </label>
        </div>
      </form>
      <div>
          <Link to="/understanding">
          <button type="submit" onClick={() => addToStore( score )}>Submit</button>
          </Link>
        </div>

    </>
  )
}

export default Feeling;