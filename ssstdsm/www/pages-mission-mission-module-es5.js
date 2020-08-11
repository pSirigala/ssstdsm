function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mission-mission-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mission/mission.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mission/mission.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMissionMissionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Our Mission and Vision</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"row\">\n    <div >\n      <p>\n          <strong>\n              <h3 style=\"color: #0000FF;\">Objectives of Shirdi Sai Des Moines Trust</h3>\n          </strong>\n      </p>\n      <h4>Shri Shirdi Saibaba Temple of Des Moines (SSST) is engaged in spreading the Sai movement</h4>\n      \n  \n                  The main activities of the Trust are as follows:\n                  <ul>\n                      <li>Spreading Saibaba's teachings and messages.</li>\n                      <li>Assisting in the building of Sai Mandirs.</li>\n                      <li>Services rendered since inception.</li>\n                  </ul>                                                       \n      \n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/mission/mission-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/mission/mission-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: MissionPageRoutingModule */

  /***/
  function srcAppPagesMissionMissionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MissionPageRoutingModule", function () {
      return MissionPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _mission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mission.page */
    "./src/app/pages/mission/mission.page.ts");

    var routes = [{
      path: 'home/mission',
      component: _mission_page__WEBPACK_IMPORTED_MODULE_3__["MissionPage"]
    }];

    var MissionPageRoutingModule = function MissionPageRoutingModule() {
      _classCallCheck(this, MissionPageRoutingModule);
    };

    MissionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MissionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/mission/mission.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/mission/mission.module.ts ***!
    \*************************************************/

  /*! exports provided: MissionPageModule */

  /***/
  function srcAppPagesMissionMissionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MissionPageModule", function () {
      return MissionPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _mission_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mission-routing.module */
    "./src/app/pages/mission/mission-routing.module.ts");
    /* harmony import */


    var _mission_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mission.page */
    "./src/app/pages/mission/mission.page.ts");

    var MissionPageModule = function MissionPageModule() {
      _classCallCheck(this, MissionPageModule);
    };

    MissionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mission_routing_module__WEBPACK_IMPORTED_MODULE_5__["MissionPageRoutingModule"]],
      declarations: [_mission_page__WEBPACK_IMPORTED_MODULE_6__["MissionPage"]]
    })], MissionPageModule);
    /***/
  },

  /***/
  "./src/app/pages/mission/mission.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/mission/mission.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMissionMissionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pc3Npb24vbWlzc2lvbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/mission/mission.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/mission/mission.page.ts ***!
    \***********************************************/

  /*! exports provided: MissionPage */

  /***/
  function srcAppPagesMissionMissionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MissionPage", function () {
      return MissionPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MissionPage = /*#__PURE__*/function () {
      function MissionPage() {
        _classCallCheck(this, MissionPage);
      }

      _createClass(MissionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MissionPage;
    }();

    MissionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mission',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mission.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mission/mission.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mission.page.scss */
      "./src/app/pages/mission/mission.page.scss"))["default"]]
    })], MissionPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-mission-mission-module-es5.js.map