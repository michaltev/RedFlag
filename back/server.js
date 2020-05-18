const express = require('express')
const cors = require('cors')
const knex = require('knex')

const usersController = require('./controllers/usersController');
const globalController = require('./controllers/globalController');
const eventsCalendarController = require('./controllers/eventsCalendarController');
const periodCalendarController = require('./controllers/periodCalendarController');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'admin',
    database : 'redflag'
  }
});

var app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
	console.log('getting');
	res.json('getting');
});

app.post('/signin', (req, res) => { usersController.handleSignin(req, res, db) });

app.post('/register', (req, res) => { usersController.handleRegister(req, res, db) });

app.get('/profile/:id', (req, res) => { usersController.getUserProfile(req, res, db) });

app.listen(3000, () => {
	console.log('app is running');
})