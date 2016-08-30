(function () {
  'use strict';

  angular
      .module('booking-app')
      .controller('DashboardCtrl', DashboardCtrl);

  DashboardCtrl.$inject = [];

  function DashboardCtrl() {
    var self = this;

    self.Detalle = Detalle;

    self.detalleVentas = new Detalle(3, 'Nuevas ventas!', '');

    self.detalleMensajes = new Detalle(10, 'Nuevas mensajes!', '');

    self.detalleQuejas = new Detalle(3, 'Nuevas quejas!', '');

    self.detalleCampanias = new Detalle(5, 'Nuevas campañas!', '');

    function Detalle(_cantidad, _mensaje, _accion) {
      return {
        cantidad: _cantidad,
        mensaje: _mensaje,
        accion: _accion
      };
    }
  }
}());