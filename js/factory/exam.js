 var app = angular.module('quizApp');
app.factory('quizFactory', function($q, quizService) {
var factory={};
var question = {};
var answer={};
 
   
    factory.getQuestionFactory = function() {
       var deferred = $q.defer();
       quizService.getQuestion().then(function(resp) {  
       deferred.resolve(resp.data);
    },
      function(errorInfo) {
        deferred.reject([]);
          });
     return deferred.promise;
     }


     factory.getAnswersFactory = function(){
       var deferred = $q.defer();
        quizService.getAnswers().then(function(resp) {
         deferred.resolve(resp.data);
      },
       function(errorInfo) {
         deferred.reject([]);
       });
      return deferred.promise;
    }

    return factory;



  });