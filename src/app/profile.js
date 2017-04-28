function profileController(mainService, navService) {
	var vm = this;

	vm.$onInit = function() {
		vm.nav = {
			logo: '',
			items: navService.getData(1)
		};
		vm.header = {
			banner: '',
			profile: 'Et irure tempor minim laboris ea laborum fugiat esse.',
			from: 'Lorem Ipsum'
		};

		mainService.getData('profile').then(function(response) {
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
			if (content.header.banner) {
				vm.header.banner = 'background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(' + content.header.banner + '); background-size: cover; background-repeat: no-repeat; background-position: center;';
			} else {
				vm.header.banner = 'background: #0074a7';
			}

			// Description
			vm.description = {
				company: data.company.company,
				address: data.company.address,
				phone: data.company.phone,
				email: data.company.email,
				icons: content.description.icons
			};			
		});
	};
}

angular
    .module('app')
    .component('profile', {
        templateUrl: 'app/profile.html',
        controllerAs: 'vm',
        controller: profileController
    });