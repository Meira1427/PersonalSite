angular.module('personalSite', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		template: '<home></home>'
	})
	.when('/home', {
		template: '<home></home>'
	})
	.when('/about', {
		template: '<about></about>'
	})
	.when('/contact', {
		template: '<contact></contact>'
	})
    .when('/labs', {
		template: '<labs></labs>'
	})
    .when('/resume', {
        template: '<resume></resume>'
    })
    .when('/swot', {
        template: '<swot></swot>'
    })
	.otherwise({
		template: '<h1>404-Not Found</h1>'
	})
});
