import angular from "angular";
import {LoginService} from "./login.service";
import {ReferencesService} from "./references.service";
import {NetworkService} from "./network.service";
import {ErrorService} from "./error.service";
import {TranslateService} from "./translate.service";

const REGISTER_SERVICE = angular
    .module("registerServices", [])
    .service("ReferencesService", ReferencesService)
    .service("NetworkService", NetworkService)
    .service("ErrorService", ErrorService)
    .service("LoginService", LoginService)
    .service("TranslateService", TranslateService);

export {REGISTER_SERVICE};