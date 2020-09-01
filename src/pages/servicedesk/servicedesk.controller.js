
export default class ServicedeskController {
    constructor($scope, $log, $http, $state,$sessionStorage, $window) {
        // self = this;
        this.title = "ServicedeskComponent";
        this.log = $log.log;
        this.$http = $http;
        this.$scope = $scope;
        this.state = $state;
        this.disableForm = false;
        this.$sessionStorage = $sessionStorage;
        this.$window = $window;
        //this.referencesService.getAllReferences().$promise.then((data)=>{this.log(data)});
    }

  /*  signIn() {
        this.disableForm = true;
        this.loginService.auth(this.user);
    }*/

    logOut() {
      //  this.disableForm = false;
     //   this.loginService.logout();
     this.$window.sessionStorage.clear();
     this.state.go('/login');
      
    }

    /*hasError() {
      this.log(this.$scope.auth.login.$invalid && this.$scope.auth.$submitted);
      return this.$scope.auth.login.$invalid && this.$scope.auth.$submitted;
    }*/

}

ServicedeskController.$inject = ["$scope", "$log", "$http", "$state", "$sessionStorage", "$window"];