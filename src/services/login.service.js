
class LoginService {
  constructor($http, $log, NetworkService, $window, $state, SecurityService) {
    this.$http = $http;
    this.log = $log.log;
    this.$sessionStorage = $window.sessionStorage;
    this.$state = $state;
    this.networkService = NetworkService;
    this.userLogin = false;
    this.SecurityService = SecurityService;
  }

  auth(userProfile){
      //token = this.$sessionStorage.getItem('token');
      //this.getToken(userProfile);
      this.networkService.sendPost('jwt-auth/v1/token',{username: userProfile.login, password: userProfile.password},
          (data) =>{
          this.userLogin = true;
          this.SecurityService.currentUser = data.user_email;
          this.$sessionStorage.setItem('token', data.token);
          this.$sessionStorage.setItem('currentUser', data.user_email);
          this.$sessionStorage.setItem('language', userProfile.lang);

          this.$state.go('maindesk');
      },
          (err) => {
          this.log(err);
          this.userLogin = false;
      });
  }

  logout(){
      this.$sessionStorage.clear();
  }

  updateData(data){
    this.$http.put(this.API_URL, JSON.stringify(data));
  }


}

LoginService.$inject = ["$http","$log","NetworkService",  "$window", "$state", "SecurityService"];

export { LoginService };