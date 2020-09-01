const MODULE_NAME = "common";

import SECURITY_MODULE from './security/security.module';

import ReferencesUpdateController from './dialogs/references-update/references-update.controller';

import angular from "angular";

angular
    .module(MODULE_NAME, [ SECURITY_MODULE ])
    .controller('ReferencesUpdateController',ReferencesUpdateController);

export default MODULE_NAME;