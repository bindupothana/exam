var app =angular.module('quizApp');
   app.controller('quizCtrl',function($http,$scope,$interval,quizFactory,filterFilter){    
       var createResults;
       $scope.questions = {};  
       $scope.results = []; 
       quizFactory.getQuestionFactory().then(function(data){
          $scope.questions = data;
    		  console.log("getdata", $scope.questions)
          // createResults();
       });
        
        
        createResults = function () {
          var length = $scope.questions.length;
            for (var i = 0; i < length; i++) {
              $scope.results.push({
               answer:     $scope.questions[i].answer,
               userChoice: null,
               correct:    null
        });
      }
    };
      $scope.chekUserMultiChoice = function (question, userChoice) {
      
        if ($scope.results[question - 1].userChoice === null) {
            $scope.results[question - 1].userChoice = [];
        }

        var findPos = $scope.results[question - 1].userChoice.indexOf(userChoice);
        if (findPos < 0) {
          $scope.results[question - 1].userChoice.push(userChoice);
        } else {
          $scope.results[question - 1].userChoice.slice(findPos, 1);
        }
      }
        var answer = JSON.stringify($scope.questions[question - 1].answer.sort());
        var choice = JSON.stringify($scope.results[question - 1].userChoice.sort());
        if (answer === choice) {
         $scope.results[question - 1].correct = true;
        } else {
         $scope.results[question - 1].correct = false;
         }
    // };

       $scope.checkUserChoice = function (question, userChoice) {
       $scope.results[question - 1].userChoice = userChoice;
        }


        
     
     var decreamentCountdown=function(){
      $scope.countdown -=1;
      if($scope.countdown<1){
        $scope.message="  timed out";
      }
    };
     var startCountDown=function() {
       $interval(decreamentCountdown,1000,$scope.countdown)
      };
       $scope.countdown=10;
       startCountDown();


});