var directives = angular.module('dashboard.directives', [])

directives.directive('ngEnter', [function() {
    return function(scope, element, attrs) {

        element.bind("keydown keypress", function(event) {

            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});

                });

                event.preventDefault();
            }

        });

    };
}]);

directives.directive('ngNotImplemented', ['ngDialog', function(ngDialog) {
    return function(scope, element, attrs) {

        element.bind("click", function(event) {

            ngDialog.open({
                template: '<div class="card"><div class="card-line"><p>Cette fonctionnalité n\'est pas encore disponible.</p><p>Revenez plus tard ...</p></div></div>',
                plain: true
            })

        });

    };
}]);

module.exports = directives