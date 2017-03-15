 
 'use strict';


 var app =angular.module('quizApp', ['ui.router']);
 app.config(function($stateProvider,$urlRouterProvider){

 $stateProvider
 .state('score', {
 	url : '/score',
  templateUrl : 'view/score.html',
  controller : 'quizCtrl'

 });
 $urlRouterProvider.otherwise('/quiz');

 }) ;
