function ListadoPropiedadesCtrl(propiedades, PropiedadesServices) {
  var self = this;
  self.propiedades = propiedades;

  self.delete = function (propiedadId) {
  	PropiedadesServices.delete(propiedadId)
	};
}

angular.module("booking-app")
.controller("ListadoPropiedadesCtrl", [ "propiedades", "PropiedadesServices", function(propiedades, PropiedadesServices) { 
  return new ListadoPropiedadesCtrl(propiedades, PropiedadesServices);
}]);