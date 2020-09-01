
//"use strict";

import {TranslateService} from "../../services/translate.service";

loginRouting.$inject = ["$urlRouterProvider", "$stateProvider"];

function loginRouting($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/login");

  $stateProvider.state('login',
    {
      name: "login",
      url: "/login",
      component: "loginComponent",
    resolve : {
          'translate' : ['TranslateService', function(TranslateService){
          var translateList = 
            TranslateService.getLabelsBd().then(response =>{
              return response;
            });
              return translateList;
        }],
      'langList' : ['NetworkService', function(NetworkService){
        return NetworkService.sendGet(NetworkService.pluginNamespace + '/lang',null,null);
      }]
      },
      lazyLoad: ($transition$) => {
        const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

        return import("./login.components")
          .then(mod => $ocLazyLoad.load(mod.LOGIN_INDEX_MODULE))
          .catch(err => {
            throw new Error("Ooops, something went wrong, " + err);
          });
      },
      data: {
          permissions: {
              except: 'isAuthorized',
              redirectTo: 'maindesk'
          },
       
        
      },
    });
}

export { loginRouting };
