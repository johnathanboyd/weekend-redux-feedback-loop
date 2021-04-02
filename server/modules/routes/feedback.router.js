const express = require( 'express' );
const router = express.Router();
const pool = require('../modules/pool');


// GET the feedback that's been submitted. Will populate the admin page 
router.get( '/', (req, res ) => {
    console.log( 'in /feedback GET' );
    pool.query('SELECT * FROM "feedback";').then( (results) => {
        res.send(result.rows );
    }).catch( ( err ) => {
        console.log( 'error GET /api/feedback', error );
        res.sendStatus( 500);
    })
})

// POST to the feedback database 
router.post( '/', (req, res) =>{
    console.log( 'in /feedback POST:', req.body );
    let queryString = `INSERT INTO "feedback" ( feeling, understanding, support, comments ) VALUES ($1, $2, $3, $4)`;
    pool.query( queryString, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]).then ( (results)=>{
        res.sendStatus( 200 );
    }).catch( (err )=>{
        console.log( err );
        sendstatus( 500 );
    })
})