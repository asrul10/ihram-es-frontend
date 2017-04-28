function mainController(mainService, navService) {
	var vm = this;

	vm.$onInit = function() {
		vm.nav = {
			logo: '',
			items: navService.getData(0)
		};

		mainService.getData('home').then(function(response) {
			var data = response.data;
			var content = data.content;

			// Nav
			vm.nav.logo = data.company.logo;

			// Footer
			vm.footer = {
				phone: data.company.phone,
				email: data.company.email,
				social: data.company.social
			};

			// Header
			vm.header = {
				company: data.company.company,
				banner: content.header.banner
			};
			if (vm.header.banner) {
				vm.header.banner = 'background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(' + vm.header.banner + '); background-size: cover; background-repeat: no-repeat; background-position: center;';
			} else {
				vm.header.banner = 'background: #0074a7';
			}

			// Description
			vm.description = content.description;

			// Featured
			vm.featured = {
				company: data.company.company,
				address: data.company.address,
				countPackage: content.featured.countPackage,
				countUsers: content.featured.countUsers,
				icons: content.featured.icons
			};
		});
	};
}

angular
    .module('app')
    .component('app', {
        templateUrl: 'app/main.html',
        controllerAs: 'vm',
        controller: mainController
    });