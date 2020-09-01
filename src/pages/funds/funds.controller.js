export default class FundsController {
    constructor($scope, $log) {
        this.title = "FundsComponent";
        this.log = $log.log;
        this.disableForm = false;

    }


}

FundsController.$inject = ["$scope", "$log"];