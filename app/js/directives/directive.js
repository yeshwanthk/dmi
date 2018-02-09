angular.module('SampleApp2', [])

.directive('twoWay', function() {
  return {
    restrict: 'E',
    template: '<div><input ng-model="thing.name" type="text" /></div>',
    scope: {
      thing: "="
    }, 
    link: function(scope, element, attrs) {
    }
  };
});


