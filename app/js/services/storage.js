
var app = angular.module('SampleApp1',[]);

        app.service('myService', function($http) {
            this.service = function() {
                return $http.get('https://api.github.com/users/hadley/orgs');
            }
        });

        app.controller('MainCtrl', function(myService,$scope){
            myService.service().then(function(res1){
                $scope.myService = res1.data;
            });
            $scope.data = {
			    name: "World"
			  };
        })