function profileController($http) {
	var ctrl = this;

	$http({
		method: 'GET',
		url: services + '/front/data'
	}).then(getData, errorData);

	function getData(response) {
		console.log(response.data);
		var data = response.data;
		var content = data.content;

		// Nav
		ctrl.nav = {
			logo: data.company.logo,
			items: data.mainPage.nav.items
		};

		// Footer
		ctrl.footer = {
			phone: data.company.phone,
			email: data.company.email,
			social: data.company.social
		};


		/**
		 * CONTENT
		 */

		// Header
		ctrl.header = {
			group: content.groups,
			banner: content.header.banner
		};
		if (ctrl.header.banner) {
			ctrl.header.banner = 'background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(' + ctrl.header.banner + '); background-size: cover; background-repeat: no-repeat; background-position: center;';
		}

		// Description
		ctrl.description = content.description;

		// Featured
		ctrl.featured = {
			company: data.company.company,
			address: data.company.address,
			countPackage: content.featured.countPackage,
			countUsers: content.featured.countUsers,
			icons: content.featured.icons
		};

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