(function (){
    angular
        .module("modulo2", [])
        .controller("_controller2", function ($scope, $rootScope){
            $scope.name = $rootScope.name;
        });

    //  angular
    //     .module("modulo3", [])
    //     .controller("_controller3", function ($scope, $rootScope, $compile){
    //         $compile(angular.element("#nombre"))({name: "hola srs"});

    //     });
})();


/*
    Mejores practicas
 */
(function (){
    function controller(sc, rs){
        var vmodel = this;
        rs.name = "Junior";
        sc.name = rs.name;
    }

    controller.$inject = ["$scope", "$rootScope"];

    angular
        .module("app-concepts", ["modulo2"])
        .controller("controller2", controller);

})();
