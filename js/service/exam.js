 var app = angular.module('quizApp');
app.factory('quizFactory', function($q, quizService) {
var factory={};
var questionMapname = {};
var answersMapname={};

function isExistKey(mapname, key){
      return mapname[key];
    }
   factory.getQuestion = function() {
       
       var deferred = $q.defer();
       quizService.getQuestion().then(
        function(successInfo) {
            console.log(successInfo.data)

 

   for(var i=0; i< successInfo.data.length; i++){
          console.log(successInfo.data[i].question)    
          var roleMap = isExistKey(questionMapname, successInfo.data[i].question);
          if(roleMap){
       var roleList = isExistKey(roleMap, successInfo.data[i].role);
       if(roleList){
         roleList.push(successInfo.data[i]);
       }else{
         roleList = [];
         roleList.push(successInfo.data[i]);
       }
              
       roleMap[successInfo.data[i].role] = roleList;
              questionMapname[successInfo.data[i].question] = roleMap;
          } else{
              var roleList = [];
              roleList.push(successInfo.data[i]);
       var roleMap = {};
       roleMap[successInfo.data[i].role] = roleList;
              questionMapname[successInfo.data[i].question] = roleMap;
          }
   }


      console.log(questionMapname)

            deferred.resolve(questionMapname);
        },
        function(errorInfo) {
             deferred.reject([]);
        });
   return deferred.promise;
   }

   return factory;
   
   

});