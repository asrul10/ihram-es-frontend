function navFixedController($window) {
	console.log($window);
	angular.element($window).bind("scroll", function() {
	    // scope.visible = false;
	    // scope.$apply();
        console.log($('body').scrollTop());
	});
    $($window).scroll(function () {
        // if ($('body').scrollTop() < 400) {
        // } else {
        // }
        console.log($('body').scrollTop());
    });
}

angular
    .module('app')
    .component('ihramNavFixed', {
        templateUrl: 'app/navFixed.html',
        controller: navFixedController,
		bindings: {
			navData: "="
		},
    });