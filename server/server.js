require('dotenv').config()
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const massive = require('massive')
const bodyParser=require('body-parser');
const checkForSession = require('./middleware/checkForSession')

const app = express()

// Destructuring .env file
const { SERVER_PORT, CONNECTION_STRING , SESSION_SECRET, DOMAIN, CLIENT_ID, CLIENT_SECRET, CALLBACK_URL} = process.env

// Top Level middleware
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json())

// Database Connection
////  massive(CONNECTION_STRING).then(db => {console.log('Database up'); app.set('db', db)})


// Controller Imports
const testController = require('./controllers/testController')

// Endpoint
app.get('/api/test', (req, res)=>{
    res.status(200).send('Hits')
})
app.get('/api/test2', testController.testGet)


// Launch Server
app.listen(SERVER_PORT, () => (console.log(`boiling on port: ${SERVER_PORT}`)))
