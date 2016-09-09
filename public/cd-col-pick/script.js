// script.js
//https://www.webcodegeeks.com/javascript/angular-js/magic-parse-service-angularjs/
(function() {
var module = angular.module('ngAdvanced', []);

module.controller('TheController', function($log) {
    this.onColorChange = function(r, g, b, a) {
      $log.log('RGBA=(%s, %s, %s, %s)', r, g, b, a);
      this.myCol = "rgba(" + r + "," + g + "," + b + "," + a + ")";
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
          scope.$watch('r', function(newValue, oldValue){
            if (newValue !== oldValue) {
              scope.onChange({'r': scope.r,
                             'g': scope.g,
                             'b': scope.b,
                             'a': scope.a});
            }
          });

          scope.$watch('g', function(newV, oldV){
            if (newV !== oldV) {
              scope.onChange({'r': scope.r,
                             'g': scope.g,
                             'b': scope.b,
                             'a': scope.a});
            }
          });

          scope.$watch('b', function(nv, ov){
            if (nv !== ov) {
              scope.onChange({'r': scope.r,
                             'g': scope.g,
                             'b': scope.b,
                             'a': scope.a});
            }
          });

          scope.$watch('a', function(nv, ov){
            if (nv !== ov) {
              scope.onChange({'r': scope.r,
                             'g': scope.g,
                             'b': scope.b,
                             'a': scope.a});
            }
          });
        }//link fn
    }; //DDO:Directive Def Obj
  });// module.directive
})();