(function (){
    function controller(fac){
        var vmodel = this;
        fac.obtenerDatos(function (data){
            vmodel.data = data;
        });
    }

    controller.$inject = ["factory1"];

    function factory($to){
        return {
            obtenerDatos: function (cb){
                $to(function (){
                    cb([
                        {nombre: "Elfego Guerra", edad: 28, direccion: "Yuca #100"},
                        {nombre: "Marco Rocha", edad: 25, direccion: "San Sebastian #200"},
                        {nombre: "Marcelo Rdz", edad: 26, direccion: "Sierra Sol #220"},
                    ]);
                }, 200);
            }
        }
    }

    factory.$inject = ["$timeout"];

    angular
        .module("app-factories", [])
        .controller("factoryCtrl", controller)
        .factory("factory1", factory);
})();