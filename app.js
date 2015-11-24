var app = angular.module('ngSteroid', ['app.routes', 'app.core']);

app.controller('MainController', MainController);

function MainController() {
	var vm = this;
	vm.name = 'Aakash';
}