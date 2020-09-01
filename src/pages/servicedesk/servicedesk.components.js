//"use strict";

import angular from "angular";
import ServicedeskController from "./servicedesk.controller";

class ServicedeskComponent {
  constructor() {
    this.template = require("./servicedesk.view.html");
    this.controller = ServicedeskController;
  }
}

const SERVICEDESK_INDEX_MODULE = angular
  .module("servicedesk.module", [])
  .component("servicedeskComponent", new ServicedeskComponent());

export { SERVICEDESK_INDEX_MODULE };
