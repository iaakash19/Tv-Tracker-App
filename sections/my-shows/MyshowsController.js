app.controller('MyshowsController', MyshowsController);

function MyshowsController(StoreFactory) {
	console.log('MyshowsController is Fired');
	var vm = this;

	vm.shows = StoreFactory.fetchShows();;
	// vm.unttrackShow = unttrackShow;

	
	// function unttrackShow(showId){
	// 	StoreFactory.removeShow(showId);
	// }

	
	}
