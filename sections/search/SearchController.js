app.controller('SearchController', SearchController);

function SearchController(ShowService, StoreFactory) {
	var vm = this;
	vm.results = [];

	vm.currentPage = 1;
	vm.totalResults = 0;

	vm.search = search;
	vm.typeahead = typeahead;

	

	//
	function search(searchQuery){
		console.log(vm.currentPage);
		ShowService.search(searchQuery, vm.currentPage)
						.then(function(response){
							vm.results = response.results;
							vm.totalResults = response.total_results;
						});
	}

	function typeahead(query){
		return ShowService.search(query, vm.currentPage)
								.then(function(response){
									return response.results.map(function(show){
										return show.name;
									})
								})
	}
	

}