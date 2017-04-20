function headerController() {
	$('select.dropdown').dropdown();
}

angular
	.module('app')
	.component('ihramHeader', {
		templateUrl: 'app/header.html',
		controller: headerController,
		bindings: {
			headerData: '=',
			motivationMode: '='
		}
	});