SecurityConfig.$inject = ['$urlRouterProvider'];

export default function SecurityConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise(function($injector) {
		var $state = $injector.get("$state");
		$state.go('/login');
	});
}