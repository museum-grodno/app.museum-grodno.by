//"use strict";

import angular from "angular";
import FundsController from "./funds.controller";

class FundsComponent {
  constructor() {
    this.template = require("./funds.view.html");
    this.controller = FundsController;
  }
}

const FUNDS_INDEX_MODULE = angular
  .module("funds.module", [])
  .component("fundsComponent", new FundsComponent());

export { FUNDS_INDEX_MODULE };
