import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Feeling() {
  const dispatch = useDispatch();

  let addToStore=()=>{
    console.log( 'in addToStore:', state);
    dispatch( { type: 'setFeelFeedback', payload: state })
  }  
  
  
  const [ state, setState ] = useState( '' )

  let handleFeelingChange=(event)=>{
    console.log( 'in handleFeelingChange:', event.target.value );
    setState( event.target.value
    )  
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
              checked={state ==="1"}
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
              checked={state === "2"}
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
              checked={state === "3"}
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
              checked={state === "4"}
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
              checked={state === "5"}
              onChange={ handleFeelingChange }
            />
          5
          </label>
        </div>
      </form>
      <div>
          <button type="submit" onClick={addToStore}>Submit</button>
        </div>

    </>
  )
}

export default Feeling;