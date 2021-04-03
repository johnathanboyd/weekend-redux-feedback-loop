import {useState} from 'react';
import { useSelector } from 'react-redux';

function Review(){
    const entry = useSelector( (store)=>{
        return store.newFeedback
    })


    return(
        <>
        <p>Feeling: {entry.feeling}</p>
        <p>Understanding:{entry.understanding}</p>
        <p>Support: {entry.support}</p>
        <p>Comments: {entry.comments}</p>
        
        </>
    )
}

export default Review;