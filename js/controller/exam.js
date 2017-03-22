var app =angular.module('quizApp');
   app.controller('quizCtrl',function($http,$scope,$interval,$state,quizFactory){    
       $scope.quiz = {};  
       $scope.results = []; 
        $scope.selectedAns = [];            
       $scope.getQuestion=function(){
           quizFactory.getQuestionFactory().then(function(data){
            $scope.questions = data;
  		      console.log("$scope.question", $scope.questions)
            });
        }
        $scope.getQuestion();    
                     

       $scope.selectedAnswerForQues = function(key, inner_key){
        if($scope.selectedAns.length == 0){
          var answer = {
            question: key ,
            userSelectedAnswer: inner_key
          }
          $scope.selectedAns.push(answer);
        }
       else {
          var found = false;
          for(var i=0; i< $scope.selectedAns.length; i++){
            if($scope.selectedAns[i].question == key){
             found = true;
             $scope.selectedAns[i].userSelectedAnswer = inner_key;
           }
         }
         if(!found){
          var answer = {
            question: key,
            userSelectedAnswer: inner_key
          }
          $scope.selectedAns.push(answer);
        } 
      }
      console.log("Ans",$scope.selectedAns);
      console.log("key, inner_key", key, inner_key)
    }
      
             
  $scope.getAnswers=function(){
     $scope.correctCount = 0;
     var correctCount = 0;
     var questionLength = $scope.questions.length;
    for(var i = 0; i< questionLength ; i++){
      var answer = $scope.questions[i].answer;
         console.log("ans", answer)
    
      for(var j=0; j < $scope.selectedAns.length; j++){
        var ques = $scope.selectedAns[j].question;
        var selectedAns = $scope.selectedAns[j].userSelectedAnswer;
        if(i === ques && answer===selectedAns){
          $scope.correctCount ++;
        }
      }

    }
    console.log("anshhgfhfgh", correctCount)
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
       $scope.countdown=90;
       startCountDown();



});
