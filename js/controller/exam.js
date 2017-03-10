 var app = angular.module('quizApp');
 app.controller('quizCtrl',function($http,$scope,$interval, quizFactory)
 {                      
     $scope.getQuestion=function(){
      	var quiz =   quizFactory.getQuestion().then(function(resp){


      		
					 $scope.question = resp;
        	console.log("$scope.question", $scope.question)
        });
        
    }
    $scope.getQuestion();



$scope.answers ={};
  $scope.correctCount = 0;
  $scope.showResult = function(){
	    $scope.correctCount = 0;
		    var qLength = $scope.question.length;
		    
		     for(var i=0;i<qLength;i++){
			      var answers = $scope.question[i].answers;
			    
			      $scope.question[i].userAnswerCorrect = false;
			      $scope.question[i].userAnswer = $scope.answers[i];
			     
			      for(var j=0;j<answers.length;j++){
				        answers[j].selected = "donno";
				     
				        if ($scope.question[i].userAnswer === answers[j].answer && answers[j].correct===true){
				       
				          $scope.question[i].userAnswerCorrect = true;
				         
				          answers[j].selected = "true";
				         
				          $scope.correctCount++;
		        

		        }else if($scope.question[i].userAnswer === answers[j].answer&& answers[j].correct===false){
		         
		          answers[j].selected = "false";
	        }
      }
  }
}
    
   


   


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
	  $scope.countdown=10;
	  startCountDown();



       
  });

