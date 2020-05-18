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