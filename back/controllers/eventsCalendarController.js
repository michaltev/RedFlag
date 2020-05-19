const getEventsMonthList = (req, res, db) => {
	const p_userID = req.params.userid;
	const p_month = req.params.month;
	const p_year = req.params.year;
	const strStartDate = p_year+'-'+p_month+'-01';
	let nextMonth = "";
	(p_month === "12") ? (nextMonth = "01") : (nextMonth = Number(p_month) + 1);

	const strEndDate = p_year+'-'+nextMonth+'-01';

	db('events_calendar')
	.select('*')
	.where({user_id: p_userID, is_delete:false})
	.whereBetween('date', [strStartDate, strEndDate])
	.then(events => { res.json(events); })
	.catch(error => {res.status(400).json('error getting the events calendar')});
};

const getEvent = (req, res, db) => {
	const p_eventID = req.params.eventid;

	db('events_calendar')
	.select('*')
	.where({id: p_eventID, is_delete:false})
	.then(events => { res.json(events); })
	.catch(error => {res.status(400).json('error getting the event')});
};

const addEvent = (req, res, db) => {
	const { userID, 
		date,  
		mood, 
		abuseCategories,
		description} = req.body;

	db('events_calendar')
	.insert({
		date: date,
	    user_id: userID,
	    mood: mood,
	    abuse_category : abuseCategories,
	    description: description,
	    insert_date: db.fn.now(),
	    is_delete: false
		})
	.then(events => { res.json(events[0]); })
	.catch(error => {res.status(400).json('error adding the event')});
};

const deleteEvent = (req, res, db) => {
	const p_eventID = req.params.eventid;

	db('events_calendar')
	.where('id',p_eventID)
  	.update({is_delete: true})
	.then(res.json(true))
	.catch(error => {res.status(400).json('error getting the event')});
};

module.exports = {
	getEventsMonthList: getEventsMonthList,
	getEvent: getEvent, 
	addEvent: addEvent,
	deleteEvent: deleteEvent
}