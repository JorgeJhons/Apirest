'use strict';

var app = angular.module('Appirest',[
	'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home',{
		url:'/home',
		templateUrl:'views/home.html',
		controller:'HomeController',
		controllerAs:'home'
	});

	$urlRouterProvider.otherwise('/home');
});
