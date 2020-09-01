/* eslint-disable no-undef */
class ErrorService {
    constructor( $log, NetworkService, $sessionStorage) {
        this.log = $log.log;
        this.$sessionStorage = $sessionStorage;
        this.networkService = NetworkService;
    }

    getError(error){
        this.log(error);
    }

}

ErrorService.$inject = ["$http","$log", "$window", "NetworkService", "$sessionStorage"];

export { ErrorService };
