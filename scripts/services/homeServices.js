'use strict';

app.factory('HomeFactory',function($http){
	var url='http://jsonplaceholder.typicode.com/users';

	var HomeFactory={
		getUsers:function(){
			return $http.get(url).success(function(data){
				return data;
			})
			.error(function(err){
				console.log(err);
			})
		},

		createUsers:function(){

		}
	};

	return HomeFactory
});