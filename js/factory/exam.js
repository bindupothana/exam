 var app = angular.module('quizApp');
app.factory('quizFactory', function($q, quizService) {
var factory={};
var questionMapname = {};
var answersMapname={};
 
    function isExistKey(mapname, key){
    return mapname[key];
    }
    factory.getQuestionFactory = function() {
     var deferred = $q.defer();
    quizService.getQuestion().then(
    function(successInfo) {
   

              deferred.resolve(successInfo.data);
          },
          function(errorInfo) {
               deferred.reject([]);
          });
     return deferred.promise;
     }

     return factory;
     
     

  });