import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'

function Submitted(){
    const dispatch = useDispatch()

    const clearEntries = () => {
        dispatch({ type: 'clearEntries' })
    }
    return(
        <>
          <div>
            <h1>Feedback!</h1>
          </div>

          <div>
            <h1>Thank You!</h1>
            <Link to="/">
                <button onClick={clearEntries}>High FIVE</button>
            </Link>        
          </div>
        </>
    )
}

export default Submitted;