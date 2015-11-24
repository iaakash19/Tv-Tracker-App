angular.module('app.components')
			.controller('nextOncontroller', nextOncontroller);

function nextOncontroller(StoreFactory, ShowService){
	var vm = this;
	vm.nextEpisodes = [];

	var today = new Date();
	today.setHours(0,0,0,0);

	// Loop through myShows
	angular.forEach(StoreFactory.fetchShows(), function(show){

		// Get show information of each show
		ShowService.get(show.id)
						.then(function(showResponse){
							if( showResponse.in_production === true ) {
								// Get the Current Season
								var seasonNumber = (showResponse.seasons.length > 1) ? showResponse.seasons.length - 1 : 1;

								ShowService.getSeason(show.id, seasonNumber)
												.then(function(response){
													// Loop through each episode in latest season
													angular.forEach(response.episodes, function(episode){
														if(episode.name != ''){
															var ep_date = new Date(episode.air_date);

															if( ep_date > today ) {
																 //Add the show name and image
						                                        episode.showName = show.name;
						                                        episode.showImage = show.backdrop_path;
						                                        episode.homepage = showResponse.homepage;
						                                        vm.nextEpisodes.push(episode);
															}
														}
													})
												})
							}	
						})
	});

}