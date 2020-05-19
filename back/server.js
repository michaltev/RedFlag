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

// users

app.post('/signin', (req, res) => { usersController.handleSignin(req, res, db) });

app.post('/register', (req, res) => { usersController.handleRegister(req, res, db) });

app.get('/profile/:id', (req, res) => { usersController.getUserProfile(req, res, db) });

// globals (moods + categories)

app.get('/moods', (req, res) => { res.json(globalController.getMoods(db)) })

app.get('/abusecategories', (req, res) => 
  { res.json(globalController.getParentAbuseCategories(db)) })

app.get('/abusecategories/:parentid', (req, res) => 
  { res.json(globalController.getAbuseCategoriesByParent(db, req.params.parentid)) })

// period calendar

app.get('/peroidcalendar/:userid/:year/:month', (req, res) => 
  { periodCalendarController.getPeriodMonthList(req, res, db) });

app.get('/peroidcalendar/:periodid', (req, res) => 
  { periodCalendarController.getPeriodDay(req, res, db) });

app.post('/peroidcalendar/add', (req, res) => 
  { periodCalendarController.addPeriodDay(req, res, db) });

app.delete('/peroidcalendar/remove/:periodid', (req, res) => 
  { periodCalendarController.deletePeriodDay(req, res, db) });

// events calendar

app.get('/eventscalendar/:userid/:year/:month', (req, res) => 
  { eventsCalendarController.getEventsMonthList(req, res, db) });

app.get('/eventscalendar/:eventid', (req, res) => 
  { eventsCalendarController.getEvent(req, res, db) });

app.post('/eventscalendar/add', (req, res) => 
  { eventsCalendarController.addEvent(req, res, db) });

app.delete('/eventscalendar/remove/:eventid', (req, res) => 
  { eventsCalendarController.deleteEvent(req, res, db) });


app.listen(3000, () => {
	console.log('app is running');
})