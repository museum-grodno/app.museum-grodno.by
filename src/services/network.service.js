class NetworkService {
    constructor($http, $log,$window, $state) {
        this.$http = $http;
        this.log = $log.log;
        this.$sessionStorage = $window.sessionStorage;
        this.$state = $state;
        this.API_URL = 'https://museum-grodno.by/wp-json/';
        //this.API_URL = 'http://localhost/wordpress/wp-json/';
        this.pluginNamespace = 'museum-funds/v1';
        /*this.headersDefault =
        {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin'
        }*/


    }

    sendPost (endPoint, userData, /*headers,*/ /*nameSpaceObject ,*/callBack, backError ){
        this.$http({
            method: "POST",
            url: this.API_URL+endPoint,

            data: userData,

            //headers: headers
        })

            .then( (response)=> {
                if(!!callBack) {
                    callBack.call(this, response.data);
                } else {
                  return response.data;
                }
            })

            .catch( (error) =>{
              if(!!backError){
                 backError.call(this, error);
              } else {
                console.log(error);
              }
               
          
            });
    }

    sendGet (endPoint, /*nameSpaceObject ,*/callBack, backError ){
       return this.$http({
            method: "GET",
            url: this.API_URL+endPoint
            })
            .then( (response)=> {
          if(!!callBack){
           return callBack.call(this, response.data);
          } else {
            return response.data;
          }
                
            })
            .catch( (error) =>{
               if(!!backError){
                 backError.call(this, error);
              } else {
                console.log(error);
              }
            });
    }

}

NetworkService.$inject = ["$http","$log", "$window", "$state"];

export { NetworkService };