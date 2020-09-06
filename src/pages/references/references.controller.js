export default class ReferencesController {
    constructor($scope, $log, $http, $state, ReferencesService, $sessionStorage, dialogs, $injector) {
        this.title = "ReferencesComponent";
        this.log = $log.log;
        this.$http = $http;
        this.$scope = $scope;
        this.dialogs = dialogs;
        this.state = $state;
        this.referencesService = ReferencesService;
        this.resolve = $scope.$parent.$resolve;
        this.$sessionStorage = $sessionStorage;
        this.refList = this.resolve.referencesList;

        this.refValueInsertData = {
            ref_id: 1,
            ref_value_id: null,
            ref_value: '',
            ref_value_order: null
        };

       /* this.getRefListValue = ((data) => {
            this.dialogs.create(
                '/dialogs/references-update-list/references-update-list.html',
                'ReferencesUpdateListController', {
                    data: updateData
                },
                {
                    size: "md",
                    windowClass: 'ref-dialog',
                    backdrop: 'static'
                },
                'ctrl').result.then((data) => {
                if (!!data) {
                    this.refreshPage(data);
                }
            });
        });
*/
        this.updateReferences = ((updateData) => {
            this.dialogs.create(
                '/dialogs/references-update/references-update.html',
                'ReferencesUpdateController', {
                    data: updateData
                },
                {
                    size: "md",
                    windowClass: 'ref-dialog',
                    backdrop: 'static'
                },
                'ctrl').result.then((data) => {
                if (!!data) {
                    this.refreshPage(data);
                }
            });
        });

        this.updateReferencesList = ((updateData) => {
            this.dialogs.create(
                '/dialogs/references-update-list/references-update-list.html',
                'ReferencesUpdateListController', {
                    data: updateData
                },
                {
                    size: "md",
                    windowClass: 'ref-dialog',
                    backdrop: 'static'
                },
                'ctrl');
        });

        this.getRefListValueRequest = ((ref_id) => {
            this.referencesService.networkService.sendGet(this.referencesService.networkService.pluginNamespace + '/references/' + ref_id + '/values',
                this.getRefListValue,
                this.referencesService.errorService.getError);
        });

        this.refreshPageValue = ((data) => {
            let searchData = this.refList.findIndex((value) => {
                return ((value.ref_id == data.ref_id) && (value.ref_value_id == data.ref_value_id));
            });
            if (searchData < 0) {
                this.refListValue.push(data);
            } else {
                this.refListValue[searchData].ref_id = data.ref_id;
                this.refListValue[searchData].ref_value_id = data.ref_value_id;
                this.refListValue[searchData].ref_value = data.ref_value;
                this.refListValue[searchData].ref_value_order = data.ref_value_order;
            }

            this.cancelRefValue();
        });

        this.refreshPage = ((data) => {

            let searchData = this.refList.findIndex((value) => {
                return value.id == data.id;
            });

            if (searchData < 0) {
                this.refList.push(data);
            } else {
                this.refList[searchData].id = data.id;
                this.refList[searchData].ref_name = data.ref_name;
                this.refList[searchData].ref_title = data.ref_title;
                this.refList[searchData].ref_description = data.ref_description;
            }

            this.cancelRef();
        });

        this.$scope.$watch(() => this.refList, (newValue) => {

            if (!!newValue) {
                this.getRefListValueRequest(this.refList[0].id);
                this.refValueInsertData.ref_id = this.refList[0].id;
            }
        }, true);

    }

    clearFilter() {
        if (!!this.refFilter)
            this.refFilter.ref_title = '';
    }

    editRef(numberRef) {
        let refInsertData = null;

        if (numberRef < 0) {
            refInsertData = {
                id: 0,
                ref_name: '',
                ref_title: '',
                ref_description: ''
            };
        } else {
            refInsertData = {
                id: this.refList[numberRef].id,
                ref_name: this.refList[numberRef].ref_name,
                ref_title: this.refList[numberRef].ref_title,
                ref_description: this.refList[numberRef].ref_description
            };
        }

        this.updateReferences(refInsertData);
    }

    editRefList(numberRef) {
        let refInsertData = null;

        if (numberRef < 0) {
            refInsertData = {
                id: 0,
                ref_name: '',
                ref_title: '',
                ref_description: ''
            };
        } else {
            refInsertData = {
                id: this.refList[numberRef].id,
                ref_name: this.refList[numberRef].ref_name,
                ref_title: this.refList[numberRef].ref_title,
                ref_description: this.refList[numberRef].ref_description
            };
        }

        this.updateReferencesList(refInsertData);
    }

    /* Не используется */
    /*editRefValue(nuberRef) {

        this.refValueInsertData = {
            ref_id: this.refListValue[nuberRef].ref_id,
            ref_value_id: this.refListValue[nuberRef].ref_value_id,
            ref_value: this.refListValue[nuberRef].ref_value,
            ref_value_order: this.refListValue[nuberRef].ref_value_order
        };

    }

    saveRefValue() {
        let endPointStr = this.referencesService.networkService.pluginNamespace + '/references/' + this.refValueInsertData.ref_id + '/values';
        endPointStr = !this.refValueInsertData.ref_value_id ? endPointStr : endPointStr + '/' + this.refValueInsertData.ref_value_id;

        let sendData = {
            'Value': this.refValueInsertData.ref_value,
            'ValueOrder': this.refValueInsertData.ref_value_order
        };

        if (this.hasSendValueData()) {
            this.referencesService.networkService.sendPost(endPointStr, sendData, this.referencesService.headersRef,
                this.refreshPageValue, this.referencesService.networkService.getError);
        }
    }

    hasSendValueData() {
        if ((!!this.refValueInsertData.ref_value_order) && (!!this.refValueInsertData.ref_value)) {
            if ((this.refValueInsertData.ref_value_order != '') && (this.refValueInsertData.ref_value_order != '')) {
                return true;
            }
        }

        return false;
    }

*/

    cancelRef() {
        this.refInsertData = {
            id: 0,
            ref_name: '',
            ref_title: '',
            ref_description: ''
        };
    }


    viewRef(ref_id) {
        this.refValueInsertData.ref_id = this.refList[ref_id].id;
        this.getRefListValueRequest(this.refList[ref_id].id);
    }

}

ReferencesController.$inject = ["$scope", "$log", "$http", "$state", "ReferencesService", "$sessionStorage", "dialogs", "$injector"];