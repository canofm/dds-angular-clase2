var propiedadIdActual = 1;

function Propiedad (direccion, localidad, estado, tipo) {
	return { id: propiedadIdActual++, direccion: direccion, localidad: localidad, estado: estado, tipo: tipo };
}

propiedades = [
	new Propiedad("Libertad 1617", "Retiro, Buenos Aires", "Abierto", { nombre: "Hotel", cantidadEstrellas: 3 } ),
	new Propiedad("Bulnes 1905", "Palermo, Buenos Aires", "Refaccionando", { nombre: "Casa particular", banios: 2, antiguedad: 15 }),
	new Propiedad("Avenida Martinez de Hoz 2071", "Punta Mogotes, Mar del Plata", "Abierto", { nombre: "Casa particular", banios: 1, antiguedad: 0 }),
	new Propiedad("Avenida Belgrano 1041", "Mendoza", "Abierto", { nombre: "Hotel", cantidadEstrellas: 2 })
];

function PropiedadesServices() {
	var self = this;

	self.getAll = function () {
		return propiedades;
	};

	self.get = function (id) {
		return _.find(propiedades, { id: id });
	};
	
	self.create = function (propiedad) {
		propiedades.push(_.assign(propiedad, { id : propiedadIdActual++ }));
	};

	self.update = function (propiedad) {
		_.assign(_.find(propiedades, function (obj) { _.isMatch(obj, {id: propiedad.id})}), propiedad)
	}

	self.delete = function (id) {
		_.remove(propiedades, function(obj) { return _.isMatch(obj, { id: id }); });
	}
};

angular.module("booking-app")
.factory("PropiedadesServices", function() {
	return new PropiedadesServices();
});