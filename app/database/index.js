var q = require('q'),
 	Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server
  	var mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});
	var user = {};


user.getUserData = function(){
	var deferred = q.defer();
	mongoclient.open(function(err, mongoclient) {
	    var db = mongoclient.db("userDB");
	    db.collection('userDB').find({}).toArray(function(err, result) {
	      if(err){
	      	//console.log(err)
	      	deferred.resolve(null)
	      }else{
	      	//console.log(result);
	      	deferred.resolve(result);
	      }
	      mongoclient.close();

	    });
	    
  	});	
	 return deferred.promise;
}

user.setUserData = function(newDoc){//console.log(JSON.parse(newDoc));
	newDoc = JSON.parse(newDoc);
	var deferred = q.defer();
	mongoclient.open(function(err, mongoclient) {

    // Get the first db and do an update document on it
	    var db = mongoclient.db("userDB");
	    db.collection('userDB').update({id:1},newDoc,{upsert:true},function(err, result) {
	      if(err){
	      	// console.log(err)
	      	deferred.resolve(null)
	      }else{
	      	// console.log(result);
	      	deferred.resolve(result);
	      }
	      mongoclient.close();

	    });
	    
  	});	
    return deferred.promise;
}
module.exports = user;