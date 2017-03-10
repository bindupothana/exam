var app = angular.module('quizApp');
app.service('quizService',function($http)
  {    
     this.getQuestion= function()
     {

        return $http.get('quiz.json').success(function(response) {
        console.log(response.data);

    });

     }

});


