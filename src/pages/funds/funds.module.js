//"use strict";

import angular from "angular";
import { fundsRouting } from "./funds.routing";

const FUNDS_MODULE = angular
  .module("fundsModule", [])
  .config(fundsRouting);

export { FUNDS_MODULE };