(function (){
    angular
        .module("app-directives", [])
        .controller("sayHello3Ctrl", function ($scope){
            $scope.text = "Hola 3" + $scope.val;
        })
        .directive("sayHello", function() {
            return {
                scope: {
                    val: '=value'
                },
                template: '<p>Hola {{val}}</p>'
            };
        })
        .directive("sayHello2", function() {
            return {
                scope: {
                    val: '=value'
                },
                templateUrl: "/examples/directive/template1.html",
                link: function (scope, element, attrs) {
                    //Can change when we modify the template
                    element.children().append("<h3>otro hola " + scope.val + " </h3>");
                }

            };
        })
        .directive("sayHello3", function() {
            return {
                scope: {
                    val: '=value'
                },
                templateUrl: "/examples/directive/template2.html",
                controller: "sayHello3Ctrl as ctrl"
            };
        });
})();