(function (){
    function controller($http){
        var vmodel = this;
        vmodel.myHeader = $http.defaults.headers.post.MyHeader;

        $http.post("prueba", {});
    }

    controller.$inject = ["$http"];

    function config($htp){
        $htp.defaults.headers.post['MyHeader'] = 'JR';
    } 

    config.$inject = ["$httpProvider"];

    angular
        .module("app-providers", [])
        .controller("providerCtrl", controller)
        .config(config);

})();