const getPeriodMonthList = (req, res, db) => {
	const p_userID = req.params.userid;
	const p_month = req.params.monthyear.slice(0,2);
	const p_year = req.params.monthyear.slice(2);
	const strStartDate = p_year+'-'+p_month+'-01';
	const strEndDate = p_year+'-'+p_month+'-31';

	db('period_calendar')
	.select('*')
	.where('user_id',p_userID)
	.whereBetween('date', [strStartDate, strEndDate])
	.then(periods => { res.json(periods); })
	.catch(error => {res.status(400).json('error getting the period calendar')});
};

const getPeriodDay = (req, res, db) => {
};

const addPeriodDay = (req, res, db) => {
};

const deletePeriodDay = (req, res, db) => {
};

module.exports = {
	getPeriodMonthList: getPeriodMonthList,
	getPeriodDay: getPeriodDay, 
	addPeriodDay: addPeriodDay,
	deletePeriodDay: deletePeriodDay
}