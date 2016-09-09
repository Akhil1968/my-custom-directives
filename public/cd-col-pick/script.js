// script.js
//https://www.webcodegeeks.com/javascript/angular-js/magic-parse-service-angularjs/
(function() {
var module = angular.module('ngAdvanced', []);

module.controller('TheController', function($log) {
    this.onColorChange = function(r, g, b, a) {
      $log.log('RGBA=(%s, %s, %s, %s)', r, g, b, a);
    };
});//TheController

module.directive('colDir', function() {
    return {
        scope: {
          r:        '@initR',
          g:        '@initG',
          b:        '@initB',
          a:        '@initA',
          onChange: '&'
        },
        restrict: 'E',
        templateUrl: 'coldir-tmpl.html',
        link: function(scope) {
          ['r', 'g', 'b', 'a'].forEach(function(value) {
              scope.$watch(value, function(newValue, oldValue) {
                  if (newValue !== oldValue) {
                      if (angular.isFunction(scope.onChange)) {
                          scope.onChange({
                            'r': scope.r,
                            'g': scope.g,
                            'b': scope.b,
                            'a': scope.a
                          });
                      }
                  }
              });
          });
        }
    };
  });// directive  colDir
  
})();