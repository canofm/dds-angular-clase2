angular.module('booking-app')
.config(function($stateProvider) {
  return $stateProvider
  .state('main.listado_propiedades', {
    url: "/propiedades",
    templateUrl: "app/propiedades/views/list.html",
    controller: "ListadoPropiedadesCtrl",
    controllerAs: "listadoCtrl",
    resolve: {
    	propiedades: function (PropiedadesServices) {
    		return PropiedadesServices.getAll()
    	}
    }
  })
  .state('main.alta_propiedades', {
    url: "/propiedades/crear",
    templateUrl: "app/propiedades/views/create.html",
    controller: "CrearPropiedadCtrl",
    controllerAs: "crearCtrl"
  })
  .state('main.editar_propiedades', {
    url: "/propiedades/editar/:id",
    templateUrl: "app/propiedades/views/edit.html",
    controller: "EditarPropiedadCtrl",
    controllerAs: "editarCtrl",
    resolve: {
      propiedad: function (PropiedadesServices, $stateParams) {
        return PropiedadesServices.get(parseInt($stateParams.id));
      }
    }
  });
});