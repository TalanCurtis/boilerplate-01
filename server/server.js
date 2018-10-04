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

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

//// checkForSession is a dummy User for development to sub in for Auth0. 
//// useAuth0 variable toggles between checkForSession or useAuth0
app.use(checkForSession)
function auth0SessionSwitch(req){
    const useAuth0 = true
    if (useAuth0) {
        return user = req.user
    } else {
        return req.session.user
    }
}

app.use(passport.initialize());
app.use(passport.session());

// Database Connection
massive(CONNECTION_STRING).then(db => {console.log('Database up'); app.set('db', db)})

////////////////////////////
///// AUTH 0 start /////////
// Setting up passport to use this "strategy"
// passport.use takes in a Constructor Function ({})
passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    // this is where you make a database call
    // serializeUser gets called immediately after done
    //done(null, profile)
    const db = app.get('db');

    const { sub, name, picture } = profile._json;

    db.find_user([sub]).then(dbResponse => {
        if (dbResponse[0]) {
            console.log('find_user: ',dbResponse[0])
            done(null, dbResponse[0].id)
        } else {
            // creates user and sends it back
            db.create_user([name, picture, sub]).then(dbResponse => {
                console.log('create_user: ',dbResponse[0])
                done(null, dbResponse[0].id)
            })
        }
    });
}));
// serializeUser is gets profile passed down from passport.authenticate done(profile)
passport.serializeUser((id, done) => {
    done(null, id)
});

// deserializeUser 
// whatever you pass out through profile shows up on a req.user{}
// this where you 
passport.deserializeUser((id, done) => {
    const db = app.get('db');
    db.find_logged_in_user([id]).then(dbResponse => {
        console.log('deserializeUser: ',dbResponse[0])
        done(null, dbResponse[0])
    })
});

//// Auth 0  Endpoints
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/home'
}))
//////// This endpoint checks to see if user is still logged in
///// put this check on component did mount to see if user still valid
app.get('/auth/me', (req, res) => {
    if (!auth0SessionSwitch(req)) {
        console.log('auth me No User: ', auth0SessionSwitch(req))
        res.status(401).send('not logged in')
    } else {
        console.log('auth me User: ', auth0SessionSwitch(req).user_name)
        const userObj = {userName: auth0SessionSwitch(req).user_name, userImage: auth0SessionSwitch(req).img} 
        res.status(200).send(userObj)
    }
})

app.get('/logout', (req, res)=>{
    req.logout();
    res.status(200).send('log out')
    // res.redirect('http://localhost:3000/')
} )
////////////////////////////
///// AUTH 0 end /////////

// Controller Imports
const aTestController = require('./controllers/aTestController')

// Endpoints
//// boilerplate endpoints CRUD
app.get('/api/test', (req, res)=>{
    const testResponse = {user:req.user||null, sessionUser:req.session.user||null}
    res.status(200).send(testResponse)
});

app.get('/api/test2', aTestController.testGet);
app.get('/api/users', aTestController.getAllUsers);
app.post('/api/user', aTestController.createUser);
app.put('/api/user', aTestController.updateUser);
app.delete('/api/user', aTestController.deleteUser);

// Launch Server
app.listen(SERVER_PORT, () => (console.log(`boiling on port: ${SERVER_PORT}`)))
