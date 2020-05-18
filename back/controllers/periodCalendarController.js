const getPeriodMonthList = (req, res, db) => {
	const p_userID = req.params.userid;
	const p_month = req.params.month;
	const p_year = req.params.year;
	const strStartDate = p_year+'-'+p_month+'-01';
	let nextMonth = "";
	(p_month === "12") ? (nextMonth = "01") : (nextMonth = Number(p_month) + 1);

	const strEndDate = p_year+'-'+nextMonth+'-01';

	db('period_calendar')
	.select('*')
	.where('user_id',p_userID)
	.whereBetween('date', [strStartDate, strEndDate])
	.then(periods => { res.json(periods); })
	.catch(error => {res.status(400).json('error getting the period calendar')});
};

const getPeriodDay = (req, res, db) => {
	const p_userID = req.params.userid;
	const p_year = req.params.year;
	const p_month = req.params.month;
	const p_day = req.params.day;
	const strDate = p_year+'-'+p_month+'-'+p_day;

	db('period_calendar')
	.select('*')
	.where({user_id:p_userID, date:strDate})
	.then(periods => { res.json(periods[0]); })
	.catch(error => {res.status(400).json('error getting the period day')});
};

const addPeriodDay = (req, res, db) => {
	const { userID, 
		date, 
		isPeriod, 
		flowLevel, 
		mood, 
		symptomsCramps, 
		symptomsHeadache, 
		symptomsNausea } = req.body;

	db('period_calendar')
	.insert({
		date: date,
	    user_id: userID,
	    is_period: isPeriod,
	    flow_level: flowLevel,
	    mood: mood,
	    symptoms_cramps: symptomsCramps,
		symptoms_headache: symptomsHeadache,
		symptoms_nausea: symptomsNausea,
		})
	.then(periods => { res.json(periods[0]); })
	.catch(error => {res.status(400).json('error adding the period day')});
};

const deletePeriodDay = (req, res, db) => {
	// needed??
};

module.exports = {
	getPeriodMonthList: getPeriodMonthList,
	getPeriodDay: getPeriodDay, 
	addPeriodDay: addPeriodDay,
	deletePeriodDay: deletePeriodDay
}