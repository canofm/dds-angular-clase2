function CrearPropiedadCtrl(PropiedadesServices) {
  var self = this;
  self.propiedad = {};
  self.tiposDePropiedad = [{ nombre: "Hotel" }, { nombre: "Particular"}]

  self.crear = function () {
  	PropiedadesServices.create(self.propiedad);
  }
};

angular.module("booking-app")
.controller("CrearPropiedadCtrl", [ "PropiedadesServices", function(PropiedadesServices) {
	return new CrearPropiedadCtrl(PropiedadesServices);
}]);