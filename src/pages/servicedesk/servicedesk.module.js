//"use strict";

import angular from "angular";
import { servicedeskRouting } from "./servicedesk.routing";

const SERVICEDESK_MODULE = angular
  .module("servicedeskModule", [])
  .config(servicedeskRouting);
export { SERVICEDESK_MODULE };