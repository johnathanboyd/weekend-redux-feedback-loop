import {useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Review(){
    const entry = useSelector( (store)=>{
        return store.newFeedback
    })

    let submitFeedback=()=>{
        axios.post( '/feedback', entry ).then( ( response )=>{
            console.log( 'back from POST with response:', response )
        }).catch( ( err )=>{
        console.log( err );
        alert( 'error in POST', err ); 
        })
    }

    return(
        <>
        <p>Feeling: {entry.feeling}</p>
        <p>Understanding:{entry.understanding}</p>
        <p>Support: {entry.support}</p>
        <p>Comments: {entry.comments}</p>
        <Link to="/submitted">
            <button onClick={submitFeedback}>Submit Feedback</button>
        </Link>
        </>
    )
}

export default Review;