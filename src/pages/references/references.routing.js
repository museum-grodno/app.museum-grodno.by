"use strict";

referencesRouting.$inject = ["$urlRouterProvider", "$stateProvider"];

function referencesRouting($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider.state(
        {
            name: "references",
            url: "/references",
            data: {
                permissions: {
                    only: ['isAuthorized'],
                    redirectTo: 'login'
                }
            },
            component: "referencesComponent",
            resolve: {
                'referencesList': ['ReferencesService', function (ReferencesService) {
                    return ReferencesService.getReferencesList(null).then(
                        (response)=>{
                            return response;
                        }
                    );
                }]

            },
            lazyLoad: ($transition$) => {
                const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

                return import("./references.components")
                    .then(mod => $ocLazyLoad.load(mod.REFERENCES_INDEX_MODULE))
                    .catch(err => {
                        throw new Error("Ooops, something went wrong, " + err);
                    });
            }

        });
}

export {referencesRouting};
