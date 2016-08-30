function Propiedad (id, direccion, localidad, estado, tipo) {
	return { id: id, direccion: direccion, localidad: localidad, estado: estado, tipo: tipo };
}

function PropiedadesServices() {
	self = this;
	self.getAll = function () {
		return [
			new Propiedad(1, "Libertad 1617", "Retiro, Buenos Aires", "Abierto", "Hotel"),
			new Propiedad(2, "Bulnes 1905", "Palermo, Buenos Aires", "Refaccionando", "Casa particular"),
			new Propiedad(3, "Avenida Martinez de Hoz 2071", "Punta Mogotes, Mar del Plata", "Abierto", "Casa particular"),
			new Propiedad(4, "Avenida Belgrano 1041", "Mendoza", "Abierto", "Hotel")
		];
	};
};

angular.module("booking-app")
.factory("PropiedadesServices", function() {
	return new PropiedadesServices();
});