(function (){
    angular
        .module("modulo1", [])
        .controller("_controller1", function ($scope){
            $scope.title = "modulo 1";
        });
})();


/*
    Mejores practicas
 */

(function (){
    function controller(sc){
        var vmodel = this;
        vmodel.title = "modulo 1";
        sc.subtitle = "subtitulo1";
    }

    controller.$inject = ["$scope"];

    angular
        .module("app-controllers", ["modulo1"])
        .controller("controller1", controller);

})();
