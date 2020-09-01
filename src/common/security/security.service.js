export default class SecurityService {
  constructor( $http, blockUI, $q, $injector, $state , $log, $sessionStorage, NetworkService, $window) {
    let self = this;
    this.$state = $state;
    this.log = $log.log;
    this.currentUser = $sessionStorage.get('currentUser');
    this.validity = null;
    this.$sessionStorage = $sessionStorage;
console.log(this.$state);
     //  if(!!this.currentUser){
      NetworkService.sendPost('jwt-auth/v1/token/validate',null,
            (data) => {
            },
            (error) => {
              $window.sessionStorage.clear();
            }
        );


  }

}

SecurityService.$inject = [
   '$http',  'blockUI', '$q', '$injector',  '$state', '$log', '$sessionStorage', 'NetworkService', '$window'];