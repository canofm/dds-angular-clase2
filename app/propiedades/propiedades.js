angular.module('booking-app')
.config(function($stateProvider) {
  return $stateProvider
  .state('main.listado_propiedades', {
    url: "/propiedades",
    templateUrl: "app/propiedades/views/list.html"
  })
  .state('main.alta_propiedades', {
    url: "/propiedades/crear",
    templateUrl: "app/propiedades/views/create.html"
  });
});