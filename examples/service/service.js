(function (){
    function controller(ser){
        var vmodel = this;
        ser.agregarDatos([
                        {nombre: "Elfego Guerra", edad: 28, direccion: "Yuca #100"},
                        {nombre: "Marco Rocha", edad: 25, direccion: "San Sebastian #200"},
                        {nombre: "Marcelo Rdz", edad: 26, direccion: "Sierra Sol #220"},
                    ]);
        ser.obtenerDatos(function (data){
            vmodel.data = data;
        });
    }

    controller.$inject = ["service1"];

    function factory($to){
        var datos = [];
        this.obtenerDatos = function (cb){
                $to(function (){
                    cb(datos);
                }, 200);
            };

        this.agregarDatos = function (data){
            datos = data;
        }
    }

    factory.$inject = ["$timeout"];

    angular
        .module("app-services", [])
        .controller("serviceCtrl", controller)
        .service("service1", factory);
})();