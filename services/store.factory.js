angular.module('app.services')
.factory('StoreFactory', StoreFactory);

function StoreFactory($log, $rootScope, localStorageService){
	
	var shows = [];

	var ls = localStorageService.get('localStore');

	if( ls !== null ) {
		shows = ls;
	}

	var showStore = {
		addShow: addShow,
		fetchShow: fetchShow,
		removeShow: removeShow,
		fetchShows: fetchShows
	};

	function addShow(showToBeAdded){

		shows.push(showToBeAdded);
		saveLocal();
	}

	function fetchShow(idOfShowToBeChecked) {
		var result = false;

		angular.forEach(shows, function(show){

			if( result === false ) {
				if(show.id == idOfShowToBeChecked){
					result = show;
				}
			}
			
		});
		
		return result;



	}

	function removeShow(idOfShowToBeRemoved){
		var idx = -1;
		var found = false;

		angular.forEach(shows, function(show){
			if( found === false ){
				if( show.id === idOfShowToBeRemoved ) {
					found = true;
				}
				idx++;
			}
		});

		if(found === true){
			shows.splice(idx,1);
		}

		saveLocal();
		

	}

	function fetchShows(){

		return shows;

	}

	function saveLocal() {
		localStorageService.set('localStore', shows);
	}

	$rootScope.$watch(
		function(){
			return shows;
		},
		function(){
			saveLocal();
		},
		true
	);


	return showStore;

}