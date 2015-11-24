angular.module('app.components')
			.directive('nextOn', nextOn);

function nextOn(){

	var DDO = {
		restrict: 'E',
		scope : {
			limit: '@'
		},
		templateUrl: 'components/next-on/next-on.template.html',
		controller: 'nextOncontroller as nextShow'
	};

	return DDO;
}