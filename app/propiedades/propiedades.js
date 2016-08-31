angular.module('booking-app')
.config(function($stateProvider) {
  return $stateProvider
  .state('main.listado_propiedades', {
    url: "/propiedades",
    templateUrl: "app/propiedades/views/list.html",
    controller: "ListadoPropiedadesCtrl",
    controllerAs: "listadoCtrl",
    resolve: {
    	propiedades: function (PropiedadesHome) {
    		return PropiedadesHome.getAll()
    	}
    }
  })
  .state('main.alta_propiedades', {
    url: "/propiedades/crear",
    templateUrl: "app/propiedades/views/form.html",
    controller: "CrearPropiedadCtrl",
    controllerAs: "formCtrl"
  })
  .state('main.editar_propiedades', {
    url: "/propiedades/editar/:id",
    templateUrl: "app/propiedades/views/form.html",
    controller: "EditarPropiedadCtrl",
    controllerAs: "formCtrl",
    resolve: {
      propiedad: function (PropiedadesHome, $stateParams) {
        return PropiedadesHome.get(parseInt($stateParams.id));
      }
    }
  });
});