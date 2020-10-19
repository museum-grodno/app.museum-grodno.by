export default class LoginController {
    constructor($scope, $http, LoginService, $window, SecurityService, $state) {
        this.title = "LoginComponent";
        this.$http = $http;
        this.$scope = $scope;
        this.disableForm = false;
        this.loginService = LoginService;
        this.securityService = SecurityService;

       this.user = {
            login: null,
            password: null
        };

        this.$scope.$watch(this.loginService.loginData, (newValue)=>{
            this.loginService.loginData = newValue;
        });

        this.$scope.$watch(this.loginService.userLogin, (newValue)=>{
            this.disableForm= newValue;
        });
    }

    signIn() {
        this.disableForm = true;
        this.loginService.auth(this.user);
    }

    logOut() {
        this.disableForm = false;
        this.loginService.logout();
    }
}

LoginController.$inject = ["$scope", "$http", "LoginService", "TranslateService", "$window", "SecurityService", "$state"];