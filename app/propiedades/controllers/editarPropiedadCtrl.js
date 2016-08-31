function EditarPropiedadCtrl(PropiedadesServices, propiedad) {
  var self = this;
  self.propiedad = propiedad;
  self.tiposDePropiedad = [{ nombre: "Hotel" }, { nombre: "Particular"}]

  self.editar = function () {
  	PropiedadesServices.update(self.propiedad);
  }
};

angular.module("booking-app")
.controller("EditarPropiedadCtrl", [ "PropiedadesServices", "propiedad", function(PropiedadesServices, propiedad) {
	return new EditarPropiedadCtrl(PropiedadesServices, propiedad);
}]);