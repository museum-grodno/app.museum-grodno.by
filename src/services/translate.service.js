/* eslint-disable no-undef */
class TranslateService {
    constructor( NetworkService, $sessionStorage) {
        this.$sessionStorage = $sessionStorage;
        this.networkService = NetworkService;
        this.translateEndPoint = this.networkService.pluginNamespace + '/labels';
      //  this.lang = $sessionStorage.
        this.translate = null;
    }
  
    getLabels(data){
        return data;
    }

    getLabelsBd(){
       return this.networkService.sendGet(this.translateEndPoint,/*this.getLabels*/ null,this.getError);
    }

    getError(error){
        console.log(error);
    }

    getCaption(label){
      return this.translate[this.lang][label];
    }

}

TranslateService.$inject = ["NetworkService", "$sessionStorage"];

export { TranslateService };
