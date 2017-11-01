
angular.module('myApp')
    .factory('appService', function ($rootScope,$q, $http) {
        return {
            getUserData: function () {//console.log('called');
                var defer = $q.defer();
                $http({
			      method: 'GET',
			      url: 'http://localhost:3000/' + "getUserData",
			   		}).then(function (success){//console.log(success);
			   			defer.resolve(success);
			   		},function (error){
			   			defer.resolve(null);
			   		}
			   	);
			   	return defer.promise;
            },
            setUserData: function (data) {//console.log(data);
            	var obj = {};
            	obj.data = data;
            	obj.id = 1;
                var defer = $q.defer();
                $http({
			      method: 'POST',
			      url: 'http://localhost:3000/' + "setUserData",
			      params: {data:angular.toJson(obj)}
			   		}).then(function (success){console.log(success);
			   			defer.resolve(success);
			   		},function (error){
			   			defer.resolve(null);
			   		}
			   	);
			   	return defer.promise;
            }
        };
    });

