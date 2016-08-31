function ListadoPropiedadesCtrl(propiedades) {
  var self = this;
  self.propiedades = propiedades;

  self.delete = function (propiedadId) {
		self.propiedades = _.reject(self.propiedades, function(obj) { return _.isMatch(obj, {id: propiedadId}); });
	};
}

angular.module("booking-app")
.controller("ListadoPropiedadesCtrl", [ "propiedades", function(propiedades) { 
  return new ListadoPropiedadesCtrl(propiedades);
}]);