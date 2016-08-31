(function () {
  'use strict';

  angular
      .module('booking-app')
      .controller('DashboardCtrl', DashboardCtrl);

  DashboardCtrl.$inject = [];

  function DashboardCtrl() {
    var self = this;

    self.Detalle = Detalle;

    self.detalleVentas = new Detalle(3, 'Nuevas ventas!', "shopping-cart", "yellow");

    self.detalleMensajes = new Detalle(10, 'Nuevas mensajes!', "comments", "primary");

    self.detalleQuejas = new Detalle(3, 'Nuevas quejas!', "support", "red");

    self.detalleCampanias = new Detalle(5, 'Nuevas campañas!', "tasks", "green");

    function Detalle(_cantidad, _mensaje, icon, color) {
      return {
        cantidad: _cantidad,
        mensaje: _mensaje,
        icon: icon,
        color: color
      };
    }
  }
}());