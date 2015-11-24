angular.module('app.components')
	.directive('showOverview', showOverview);

function showOverview() {
	var DDO = {
		templateUrl: '/components/show/show.template.html',
		restrict: 'E',
		scope: {
			show : '=',
			showRating: '=',
			showDiary: '='
		},
		//bindToController: true,
		controller: 'displayShowsController as displayShow'
	}

	return DDO;
}
