export default class ReferencesUpdateListController {
    constructor(data, ReferencesService, $scope, $uibModalInstance) {
        this.refUpdateData = data.data
        this.referencesService = ReferencesService;
        this.$uibModalInstance = $uibModalInstance;
    }

    cancel() {
        this.$uibModalInstance.close(false);
    }

    save() {
        this.referencesService.updateReferencesList(
            (data) => {
                console.log(data);
                this.$uibModalInstance.close(data);
            },
            this.refUpdateData
        );

    }
}

ReferencesUpdateListController.$inject = ["data", "ReferencesService", "$scope", "$uibModalInstance"];