var app = angular.module('quizApp',[]);
 app.controller('quizCtrl',function($http,$scope,$interval, quizFactory){    
      $scope.quiz = {};  
       $scope.results = [];           
      $scope.getQuestion=function(){
      quizFactory.getQuestionFactory().then(function(data){
           $scope.questions = data;
		   console.log("$scope.question", $scope.questions)
        });
        
    }
    $scope.getQuestion();
     

 //var answer = JSON.stringify

  $scope.answer ={};
  var answer = JSON.stringify
  
  $scope.correctCount = 0;
  
  $scope.showResult = function(){
   
    $scope.correctCount = 0;
   
     var questionLength = $scope.questions.length;
    for(var i=0;i<questionLength;i++){
      var answer = $scope.questions[i].answer;
     
      $scope.questions[i].userAnswerCorrect = false;
     
      $scope.questions[i].userAnswer = $scope.answer[i];
      
      for(var j=0;j<answer.length;j++){
        answer[j].selected = "donno";
        
        if ($scope.questions[i].userAnswer === answer[j].answerText && answer[j].correct===true){
          $scope.questions[i].userAnswerCorrect = true;
          answer[j].selected = "true";
          $scope.correctCount++;
        
        }
      }
    
    
    console.log($scope.answer);
    
  };
};

   


	var decreamentCountdown=function(){
	 $scope.countdown -=1;
	 if($scope.countdown<1)
	  {
	   $scope.message="timed out";
	  }
	};
	var startCountDown=function()
	{
	   $interval(decreamentCountdown,1000,$scope.countdown)
	};
	  $scope.countdown=120;
	  startCountDown();



       
  });

