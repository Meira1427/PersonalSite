angular.module('personalSite')
	.component('navbar', {
		templateUrl: 'app/appModule/navbar/navbar.component.html',

		controller: function($location){
			var vm = this;

			vm.getViewKeyword = function(){
				switch($location.path()) {
					case '/':
						return 'Home';
					case '/home':
						return 'Home';
					case '/about':
						return 'About';
					case '/contact':
						return 'Contact';
					case '/labs':
						return 'Labs';
					case '/resume':
						return 'Resume';
					case '/swot':
						return 'SWOT';
					default:
						return 'Default';
				}
			};
		},

		controllerAs: 'vm'
    });
