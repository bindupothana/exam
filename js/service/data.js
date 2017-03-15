var app = angular.module('quizApp');
app.service('quizService',function($http){    
     this.getQuestion= function()
    {
	    return $http.get('answer.json').success(function(response) {
	       console.log(response.data);
	     });

    }

 this.getAnswers= function()
    {
	    return $http.get('answer.json').success(function(response) {
	       console.log(response.data);
	     });

    }






});

