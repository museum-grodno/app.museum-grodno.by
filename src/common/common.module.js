const MODULE_NAME = "common";

import SECURITY_MODULE from './security/security.module';

import ReferencesUpdateController from './dialogs/references-update/references-update.controller';
import ReferencesUpdateListController from "./dialogs/references-update-list/references-update-list.controller";

import angular from "angular";

angular
    .module(MODULE_NAME, [ SECURITY_MODULE ])
    .controller('ReferencesUpdateController',ReferencesUpdateController)
    .controller('ReferencesUpdateListController',ReferencesUpdateListController);

export default MODULE_NAME;