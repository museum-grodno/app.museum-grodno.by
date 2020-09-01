//"use strict";

fundsRouting.$inject = ["$urlRouterProvider", "$stateProvider"];

function fundsRouting($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/funds");

  $stateProvider.state(
    {
      name: "funds",
      url: "/funds",
      component: "fundsComponent",
      lazyLoad: ($transition$) => {
        const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

        return import("./funds.components")
          .then(mod => $ocLazyLoad.load(mod.FUNDS_INDEX_MODULE))
          .catch(err => {
            throw new Error("Ooops, something went wrong, " + err);
          });
      }
    });
}

export { fundsRouting };
