var routes = angular.module('app.routes', ['ui.router'])

routes
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state('whatsOn', {
			url: "/",
			templateUrl: "/sections/whatsOn/templates/whatsOn.html",
			controller: 'WhatsOnController as whatsOn'
		})
		.state('my-shows', {
			url: "/my-shows",
			templateUrl: "/sections/my-shows/templates/my-shows.html",
			controller: 'MyshowsController as MyShows'
		})
		.state('search', {
			url: "/search",
			templateUrl: "/sections/search/templates/search.html",
			controller: "SearchController as searchShows"
		})
		.state('show', {
			url: "/show/:id",
			templateUrl: "/sections/show/templates/show.html",
			resolve : { 
				data: function( StoreFactory, $stateParams ) {
					return StoreFactory.fetchShow($stateParams.id);
				},
				seasons: function( ShowService, $stateParams ) {
					return ShowService.get($stateParams.id).then(function(response){
						return response.seasons;
					});
				}
			},
			controller: "ShowController as fetchShow"
		})

})