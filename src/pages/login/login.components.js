//"use strict";

import angular from "angular";
import LoginController from "./login.controller";

class LoginComponent {
  constructor() {
    this.template = require("./login.view.html");
    this.controller = LoginController;
    /*this.resolve = {
      'resA' : function(){
            return {"value" : "A"} ;
        
    }} ;
    this.test = "ert";*/
  }
}

const LOGIN_INDEX_MODULE = angular
  .module("login.module", [])
  .component("loginComponent", new LoginComponent());

export { LOGIN_INDEX_MODULE };
