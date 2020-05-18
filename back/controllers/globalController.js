let _lstMoods = [];
let _lstAbuseCategories = [];

const getMoods = (db) => {
	if(_lstMoods.length === 0)
	{
		db('moods')
		.select('*')
		.then(moods => {
			_lstMoods = moods; 
			return _lstMoods;
		})
	}
	else
	{
		return _lstMoods;
	}
};

const getAbuseCategories = (db) => {
	if(_lstAbuseCategories.length === 0)
	{
		db('abuse_categories')
		.select('*')
		.whereNot('id', -1)
		.then(categories => {
			_lstAbuseCategories = categories; 
			return _lstAbuseCategories;
		})
	}
	else
	{
		return _lstAbuseCategories;
	}
}

const getParentAbuseCategories = (db) => {
	let lstAbuseCategories = [];
	lstAbuseCategories = getAbuseCategories(db);
	return (lstAbuseCategories.filter(category => category.parent === -1));
};

const getAbuseCategoriesByParent = (db, p_parentID) => {
	let lstAbuseCategories = [];
	lstAbuseCategories = getAbuseCategories(db);
	return (lstAbuseCategories.filter(category => category.parent === Number(p_parentID)));
};

module.exports = {
	getMoods: getMoods,
	getParentAbuseCategories: getParentAbuseCategories, 
	getAbuseCategoriesByParent: getAbuseCategoriesByParent
}