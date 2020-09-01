// app.js
import angular from "angular";
import "@uirouter/angularjs";
import "oclazyload";
import "bootstrap";
import "bootstrap-modal";
import 'angular-ui-router';
import './scss/app.scss';
import './services/main.services';
import 'angular-gettext';
import 'angular-sessionstorage';
import 'angular-local-storage';
import 'angular-sanitize';
import 'angular-ui-bootstrap';
import 'angular-block-ui';
import 'angular-permission';
import 'angular-dialog-service';
import 'angular-translate';

import "./pages/login/login.module";
import "./pages/maindesk/maindesk.module";
import "./pages/references/references.module";
import "./pages/funds/funds.module";
import "./pages/servicedesk/servicedesk.module";
import COMMON_MODULE from "./common/common.module";

import { appRouting } from "./app.routing";
const MUS_APP =  angular
  .module("musApp", [
    "ui.router",
      "permission",
      "permission.ui",
      "ngSanitize",
      //"pascalprecht.translate",
      'LocalStorageModule',
      "ngSessionStorage",
    "gettext",
    "oc.lazyLoad",
    "blockUI",
    "registerServices",
    "ui.bootstrap",
    "ui.bootstrap.modal",
    "dialogs.main",
      COMMON_MODULE,
     "loginModule",
      "fundsModule",
      "referencesModule",
      "maindeskModule",
      "servicedeskModule"
  ])
  .config(appRouting);

MUS_APP.run(['$templateCache',function($templateCache){
   $templateCache.put('/dialogs/references-update/references-update.html',
      require('./common/dialogs/references-update/references-update.html'));
}]);

export { MUS_APP };
