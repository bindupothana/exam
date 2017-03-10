 var app =angular.module('quizApp', ['ui.router']);
 app.config(function($stateProvider,$urlRouterProvider){
 $stateProvider
 .state('start', {
 	url : '/start',
  templateUrl : 'views/start.html',
  controller : 'studentCtrl'

 });
 $urlRouterProvider.otherwise('/');

 }) ;



  





