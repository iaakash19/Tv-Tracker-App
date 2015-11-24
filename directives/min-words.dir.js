angular.module('app.components')
				.directive('minWords', minWords);

function minWords() {

	var DDO = {
		require: 'ngModel',
		scope: {
			minWords: '='
		},
		link: function(scope, el, attrs, $ctrl) {

			$ctrl.$validators.minWords = function(modelValue) {
				if( modelValue!=undefined ) {
					var words = modelValue.split(' ');
					if( words.length >= ( scope.minWords || 5) ) {
						return true;
					}else {
						return false;
					}
				}
			}

		}
	};

	return DDO;
}