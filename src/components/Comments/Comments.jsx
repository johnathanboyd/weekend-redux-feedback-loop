import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Comments() {
  const dispatch = useDispatch();

  const [comment, setComment] = useState( '' );

  let handleCommentChange = (event) =>{
    setComment(event.target.value)
  } 
  let addComment = ( string ) =>{
    dispatch( { type: 'setCommentFeedback', payload: string})
  }
  return(
      <>
      <input 
      type="text" 
      value={comment}
      onChange={handleCommentChange}
      placeholder="optional"
      />
      <Link to="/review"> 
        <button onClick={() => addComment( comment ) }>Review</button>
      </Link>
      </>
    )
  }
  
  export default Comments;