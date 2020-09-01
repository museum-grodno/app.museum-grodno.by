/* eslint-disable no-undef */
class ReferencesService {
    constructor($http, $log, $window, NetworkService, $sessionStorage, ErrorService, dialogs) {
        this.$http = $http;
        this.log = $log.log;
        this.$sessionStorage = $sessionStorage;
        this.errorService = ErrorService;
        this.networkService = NetworkService;
        this.dialogs = dialogs;
        this.referencesList = null;

        this.getAllReferences = ((data) => {
            this.$sessionStorage.putObject('references', data);
            return data;
        });


    }

    getError(error) {
        this.log(error);
    }

    getReferencesList(getAllRef) {
        return this.networkService.sendGet(this.networkService.pluginNamespace + '/references',
            getAllRef, this.errorService.getError);
    }


    updateReferencesList(referencesCallback, referencesUpdateData) {
        let endPointStr = referencesUpdateData.id == 0 ? '/references' : '/references/' + referencesUpdateData.id;
        endPointStr = this.networkService.pluginNamespace + endPointStr;
        let sendData = {
            'Name': referencesUpdateData.ref_name,
            'Title': referencesUpdateData.ref_title,
            'Description': referencesUpdateData.ref_description
        }

        if (this.hasSendData(referencesUpdateData)) {
            this.networkService.sendPost(endPointStr, sendData,/* this.referencesService.headersRef,*/
                referencesCallback, this.networkService.getError);
        }
    }

    hasSendData(refInsertData) {

        if ((!!refInsertData.ref_name) && (!!refInsertData.ref_title)) {
            if ((refInsertData.ref_name != '') && (refInsertData.ref_title != '')) {
                return true;
            }
        }

        return false;
    }


}

ReferencesService.$inject = ["$http", "$log", "$window", "NetworkService", "$sessionStorage", "ErrorService", "dialogs"];

export {ReferencesService};
