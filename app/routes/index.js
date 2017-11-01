var dbAgent = require('../database');
var route = {};
route.getUserData = function(req,res){
	// console.log('called');
	dbAgent.getUserData().then(function(result){//console.log(result);
		res.json(result);
	})
}
route.index = function(req, res){
  res.render('index');
};
route.setUserData = function(req,res){//console.log(req);
	dbAgent.setUserData(req.query.data).then(function(result){
		// res.send(result);
		res.sendStatus(result)
	})
}
module.exports = route;