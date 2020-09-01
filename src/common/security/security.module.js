import SecurityService from './security.service';
import SecurityConfig from './security.config';
import SecurityRun from './security.run';
import angular from "angular";

const MODULE_NAME = "common.security";

angular.module(MODULE_NAME, [])
	.service('SecurityService', SecurityService)
	.config(SecurityConfig)
	.run(SecurityRun);

export default MODULE_NAME;