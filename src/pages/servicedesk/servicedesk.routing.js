//"use strict";

servicedeskRouting.$inject = ["$urlRouterProvider", "$stateProvider"];

function servicedeskRouting($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/login");

  $stateProvider.state(
    {
      name: "servicedesk",
      url: "/servicedesk",
        data: {
            permissions: {
                only: ['isAuthorized'],
                redirectTo: 'login'
            }
        },
      component: "servicedeskComponent",
      lazyLoad: ($transition$) => {
        const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

        return import("./servicedesk.components")
          .then(mod => $ocLazyLoad.load(mod.SERVICEDESK_INDEX_MODULE))
          .catch(err => {
            throw new Error("Ooops, something went wrong, " + err);
          });
      }

    });
}

export { servicedeskRouting };
