var app =angular.module('quizApp');
   app.controller('quizCtrl',function($http,$scope,$interval,$state,quizFactory){    
       $scope.quiz = {};  
       $scope.results = [];           
       $scope.getQuestion=function(){
           quizFactory.getQuestionFactory().then(function(data){
             $scope.questions = data;
  		      console.log("$scope.question", $scope.questions)
            });
        
        }
        $scope.getQuestion();
 
        $scope.options ={};
        $scope.correctCount = 0;
        $scope.getAnswers=function(){
          quizFactory.getAnswersFactory().then(function(resp){
             $scope.options = resp;
             var ques_info = resp;
             console.log("ans", $scope.options )
             // $scope.correctCount = 0;
             var correctCount = 0;
             var questionLength = ques_info.length;
                for(var i = 0; i< questionLength-1; i++){
                  var options = ques_info[i].options;
                  var answer = ques_info[i].answer;
                       console.log("ans", ques_info[i].answer)
                           for(var j=0; j< options.length-1 ;j++)
                              if (options[j].correct===true){
                                  $scope.questions[i].userAnswerCorrect = true;
                                  options[j].selectedAnswer = "true";
                                  $scope.correctCount++;
                                  $scope.answer = correctCount; 

                                }
                                else if($scope.questions[i].userAnswer === options[j].answer && options[j].correct===false){
                                       options[j].selectedAnswer = "false";
                                }
                            }
                
             console.log("$scope.answer", $scope.options)
         });
      }


    $scope.m1 = function(key, inner_key){

      console.log("key, inner_key", key, inner_key)
    }
     
     
   var decreamentCountdown=function(){
      $scope.countdown -=1;
      if($scope.countdown<1){
        $scope.message="timed out";
      }
    };
     var startCountDown=function() {
       $interval(decreamentCountdown,1000,$scope.countdown)
      };
       $scope.countdown=90;
       startCountDown();


});

