function mainController(mainService, navService) {
	var ctrl = this;

	mainService.getData('home').then(getData, errorData);
	ctrl.nav = {
		logo: '',
		items: navService.getData(0)
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
			company: data.company.company,
			banner: content.header.banner
		};
		if (ctrl.header.banner) {
			ctrl.header.banner = 'background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(' + ctrl.header.banner + '); background-size: cover; background-repeat: no-repeat; background-position: center;';
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
	}
	$('select.dropdown').dropdown();

	function errorData(response) {
		console.log('Error');
	}
}

angular
    .module('app')
    .component('app', {
        templateUrl: 'app/main.html',
        controller: mainController
    });