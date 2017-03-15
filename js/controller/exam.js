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
 



       $scope.getAnswers=function(){
       quizFactory.getAnswersFactory().then(function(resp){
          $scope.correctCount = 0;
          $scope.answers = resp;
          $scope.correctCount = 0;
       var questionLength = $scope.questions.length;
           for(var i=0;i<questionLength;i++){
              var answers = $scope.questions[i].answer;
                $scope.questions[i].userAnswerCorrect = false;
                $scope.questions[i].userAnswer = $scope.answer[i];
                for(var j=0;j<answers.length;j++){
                   answers[j].selectedAnswer = "answer";
                     if ($scope.questions[i].userAnswer === answers[j].answer && answers[j].correct===true){
                         $scope.questions[i].userAnswerCorrect = true;
                         answers[j].selectedAnswer = "true";
                         $scope.correctCount++;
                      }
                     else if($scope.questions[i].userAnswer === answers[j].answerText && answers[j].correct===false){
                            answers[j].selectedAnswer = "false";
                      }

                  }
             }
         console.log("$scope.answer", $scope.answers)
          $scope.getAnswers();
        });
     }


     $scope.showResult = function(){
      //$state.go('score');
      console.log("jhjhj",$scope.selectedAnswer)
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

