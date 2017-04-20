function profileController(mainService, navService) {
	var ctrl = this;

	mainService.getData('profile').then(getData, errorData);
	ctrl.nav = {
		logo: '',
		items: navService.getData(3)
	};

	function getData(response) {
		var data = response.data;
		var content = data.content;

		// Nav
		ctrl.nav.logo = data.company.logo;

		// Footer
		ctrl.footer = {
			phone: data.company.phone,
			email: data.company.email,
			social: data.company.social
		};

		// Header
		ctrl.header = {
			group: content.groups,
			banner: content.header.banner
		};
		if (ctrl.header.banner) {
			ctrl.header.banner = 'background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(' + ctrl.header.banner + '); background-size: cover; background-repeat: no-repeat; background-position: center;';
		}

		// Packet
		ctrl.packet = content.packet;
	}

	function errorData(response) {
		console.log('Error 404');
	}
}

angular
    .module('app')
    .component('profile', {
        templateUrl: 'app/profile.html',
        controller: profileController
    });

// Jquery
$(function(){
	$('select.dropdown').dropdown();
	$('.ui.rating').rating('disable');
});