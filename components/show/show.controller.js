angular.module('app.components')
			.controller('displayShowsController', displayShowsController);

function displayShowsController(StoreFactory){
	
	var vm = this;

	vm.trackShow = trackShow;
	vm.unttrackShow = unttrackShow;
	vm.hasShow = hasShow;

	function trackShow(showToBeTracked){
		StoreFactory.addShow(showToBeTracked);
	}

	function unttrackShow(IdOfShowToBeUnTracked){
		StoreFactory.removeShow(IdOfShowToBeUnTracked);
	}

	function hasShow(IdOfShowToBeChecked){

		var show = StoreFactory.fetchShow(IdOfShowToBeChecked);
		return show ? true : false;
	}

}