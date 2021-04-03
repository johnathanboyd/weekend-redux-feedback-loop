import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function Supported() {
  const dispatch = useDispatch();

  const [score, setScore ] = useState( '' )

  let handleSupportedChange = (event) => {
    console.log( 'in handleSupportedChange:', event.target.value );
    setScore( event.target.value )
  }

  let addToStore=( score )=>{
    dispatch( { type: 'setSupportFeedback', payload: score })
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
              onChange={ handleSupportedChange }
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
              onChange={ handleSupportedChange }
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
              onChange={ handleSupportedChange }
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
              onChange={ handleSupportedChange }
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
              onChange={ handleSupportedChange }
            />
          5
          </label>
        </div>
      </form>
      <div>
        <Link to="/comment">
          <button type="submit" onClick={() => addToStore( score )}>Submit</button>
        </Link>  
      </div>

    </>
    )
  }
  
  export default Supported