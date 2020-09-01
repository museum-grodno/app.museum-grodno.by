//"use strict";

appRouting.$inject = ["$urlRouterProvider", "$stateProvider", "$translateProvider", "$httpProvider"];


function appRouting($urlRouterProvider, $stateProvider, $translateProvider, $httpProvider) {
  $urlRouterProvider.otherwise("/login");
  $stateProvider.state('loginModule', {url: '/login'});

  $httpProvider.interceptors.push( [ '$injector', function( $injector) {
      return {
          'request': function( config ) {
              let $log = $injector.get('$log');
              let $token = $injector.get('$window').sessionStorage.getItem('token');

              if(!!$token){
                  config.headers.Authorization = 'Bearer '+ $token;
              }

              //$log.log(config);
              return config;
          }
      };
  } ] );


  // console.log()
  //$urlRouterProvider.interceptors.push()
}

export { appRouting };
