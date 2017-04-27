function profileController(mainService, navService) {
	var ctrl = this;

	mainService.getData('profile').then(getData, errorData);
	ctrl.nav = {
		logo: '',
		items: navService.getData(2)
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
			banner: content.header.banner
		};
		if (ctrl.header.banner) {
			ctrl.header.banner = 'background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(' + ctrl.header.banner + '); background-size: cover; background-repeat: no-repeat; background-position: center;';
		}

		// Description
		ctrl.description = {
			company: data.company.company,
			address: data.company.address,
			phone: data.company.phone,
			email: data.company.email,
			icons: content.description.icons
		};
		console.log(ctrl.description);
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