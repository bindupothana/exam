 var app =angular.module('quizApp', ['ngroute']);
 app.config(function($stateProvider,$urlRouterProvider){
 $stateProvider
 .state('start', {
 	url : '/start',
  templateUrl : 'views/start.html',
  controller : 'studentCtrl'

 });
 $urlRouterProvider.otherwise('/');

 }) ;



  





