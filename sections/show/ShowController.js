app.controller('ShowController', ShowController);

function ShowController(ShowService, $stateParams, data, seasons){
	var vm = this;

	vm.data = data;
	vm.seasons = seasons;

	vm.newEntry = {};
	vm.episodes = [];

	vm.gettingEpisodes = false;

	vm.getEpisodes 	=  getEpisodes;
	vm.saveEntry 	=  saveEntry;
	vm.removeEntry 	=  removeEntry;

	function getEpisodes(){
		vm.gettingEpisodes = true;
		ShowService.getSeason( vm.data.id, vm.newEntry.seasonNumber ).then(function(response){
			vm.episodes = response.episodes;  // This is Fetching the Episodes
			vm.gettingEpisodes = false;
		})
	}

	function saveEntry() {
        if (vm.data.diary_entries == undefined) {
            vm.data.diary_entries = [];
        }
        vm.newEntry.date = new Date();
        vm.data.diary_entries.push(vm.newEntry);
        vm.newEntry = {};
    };
    
    function removeEntry($index) {
        vm.data.diary_entries.splice($index, 1);
    };

}