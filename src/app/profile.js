function profileController(mainService, navService, $sce) {
	var vm = this;

	vm.$onInit = function() {
		vm.nav = {
			logo: '',
			items: navService.getData(1)
		};
		vm.header = {
			banner: '',
			profile: '',
			from: ''
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
				social: data.company.social,
				other: data.company.other
			};

			// Header
			if (content.header.banner) {
				vm.header.banner = 'background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(' + content.header.banner + '); background-size: cover; background-repeat: no-repeat; background-position: center;';
			} else {
				vm.header.banner = 'background: #0074a7';
			}
			vm.header.profile = content.header.profile;
			vm.header.from = content.header.from;

			// Legalitas
			vm.split = content.description.icons.length / 2;
			vm.newIcons = {firstRow: [], lastRow: []};
			for (var i = 0; i < content.description.icons.length; i++) {
				if (i < vm.split) {
					vm.newIcons.firstRow.push(content.description.icons[i]);
				} else {
					vm.newIcons.lastRow.push(content.description.icons[i]);
				}
			}

			// Description
			vm.description = {
				desc: content.description.desc,
				company: data.company.company,
				address: data.company.address,
				phone: data.company.phone,
				email: data.company.email,
				icons: content.description.icons,
				map: $sce.trustAsResourceUrl('https://www.google.com/maps/embed/v1/place?key=AIzaSyA-srPyfMSjTtREAi6WZREEua3hzy3xwU0&q=' + data.company.map)
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