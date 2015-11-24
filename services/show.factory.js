angular.module('app.services')
.constant('API_KEY', '368d9617d917e182fce9821fb7f430b5')
.constant('BASE_URL', 'https://api.themoviedb.org/3/')
.factory('ShowService', dataService);


function dataService($http, $log, API_KEY, BASE_URL) {
	
	var data = {
		get: get,
		search: search,
		getSeason: getSeason
	};

	function makeRequest(url, params) {
		var request_url = BASE_URL + url + '?api_key=' + API_KEY;

		angular.forEach(params, function(value, key){
			request_url = request_url + '&' + key + '=' + value;
		});

		var http_call = $http
							.get(request_url)
							.then(function(response){
								return response.data;
							})
							.catch(dataServiceError);
		return http_call;
	}

	function get(id) {
		return makeRequest('tv/' +  id, {})
	}

	function search(query, curr_page) {
		
		console.log(curr_page);

		return makeRequest('search/tv', { query: query, page: curr_page })
				.then(function(data){
					return data;
				})
	}

	function getSeason(showID, seasonNumber) {
		return makeRequest('tv/'+ showID + '/season/'+ seasonNumber, {});
	}

	return data;

	function dataServiceError(errorResponse) {
		$log.error('XHR Failed to Connect');
		$log.error(errorResponse);
	}
}


