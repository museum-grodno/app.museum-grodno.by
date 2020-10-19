export default class ReferencesUpdateListController {
    constructor(data, ReferencesService, $scope, $uibModalInstance) {
        this.refValueList = data.data;
        console.log(this.refValueList);
        this.referencesService = ReferencesService;
        this.$uibModalInstance = $uibModalInstance;
    }

    cancel() {
        this.$uibModalInstance.close(false);
    }

    save() {
        this.referencesService.updateReferencesList(
            (data) => {
                this.$uibModalInstance.close(data);
            },
            this.refUpdateData
        );

    }
}

ReferencesUpdateListController.$inject = ["data", "ReferencesService", "$scope", "$uibModalInstance"];