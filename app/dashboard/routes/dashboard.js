angular.module('booking-app')
.config(function($stateProvider) {
  return $stateProvider
  .state('main.dashboard', {
    url: "/",
    templateUrl: "app/dashboard/dashboard.html",
    controller: "DashboardCtrl",
    controllerAs:"dashboardCtrl"
  });
});