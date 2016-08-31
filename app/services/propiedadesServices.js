function Propiedad (id, direccion, localidad, estado, tipo) {
	return { id: id, direccion: direccion, localidad: localidad, estado: estado, tipo: tipo };
}

function PropiedadesServices() {
	var self = this;
	propiedades = [
			new Propiedad(1, "Libertad 1617", "Retiro, Buenos Aires", "Abierto", { nombre: "Hotel", cantidadEstrellas: 3 } ),
			new Propiedad(2, "Bulnes 1905", "Palermo, Buenos Aires", "Refaccionando", { nombre: "Casa particular", banios: 2, antiguedad: 15 }),
			new Propiedad(3, "Avenida Martinez de Hoz 2071", "Punta Mogotes, Mar del Plata", "Abierto", { nombre: "Casa particular", banios: 1, antiguedad: 0 }),
			new Propiedad(4, "Avenida Belgrano 1041", "Mendoza", "Abierto", { nombre: "Hotel", cantidadEstrellas: 2 })
		];

	self.getAll = function () {
		return propiedades;
	};
	
	self.create = function (propiedad) {
		propiedades.push(propiedad);
	};
};

angular.module("booking-app")
.factory("PropiedadesServices", function() {
	return new PropiedadesServices();
});