function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contactus-contactus-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contactus/contactus.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contactus/contactus.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContactusContactusPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Contact Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"row\">\n      <section style=\"text-align:center; min-height:99px;width:960px; margin: 0 auto\">\n        <div style=\"font-weight:bold; font-size:x-large \">Shri Shirdi Saibaba Temple of Des Moines (SSST) </div>\n        <div style=\"font-weight:500; \">(Non profit organization TAX ID:47-5157728) </div>\n\n        <div style=\"font-weight:800; \">P.O.Box # 71128, 2135 NW 108th St , Clive IA, 50325 </div>\n        <div style=\"font-weight:600; \">FOR DONATIONS: Send checks in favor of \"SSST\" to PO Box address</div>\n    </section>\n  </div>\n  <br/>\n  <div class=\"row\">\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2983.019186285633!2d-93.76752248426816!3d41.61209678999683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sP.O.Box%20%23%2071128%2C%202135%20NW%20108th%20St%20%2C%20Clive%20IA%2C%2050325!5e0!3m2!1sen!2sus!4v1596653008043!5m2!1sen!2sus\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/contactus/contactus-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/contactus/contactus-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ContactusPageRoutingModule */

  /***/
  function srcAppPagesContactusContactusRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusPageRoutingModule", function () {
      return ContactusPageRoutingModule;
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


    var _contactus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contactus.page */
    "./src/app/pages/contactus/contactus.page.ts");

    var routes = [{
      path: '',
      component: _contactus_page__WEBPACK_IMPORTED_MODULE_3__["ContactusPage"]
    }];

    var ContactusPageRoutingModule = function ContactusPageRoutingModule() {
      _classCallCheck(this, ContactusPageRoutingModule);
    };

    ContactusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactusPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/contactus/contactus.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/contactus/contactus.module.ts ***!
    \*****************************************************/

  /*! exports provided: ContactusPageModule */

  /***/
  function srcAppPagesContactusContactusModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function () {
      return ContactusPageModule;
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


    var _contactus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contactus-routing.module */
    "./src/app/pages/contactus/contactus-routing.module.ts");
    /* harmony import */


    var _contactus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contactus.page */
    "./src/app/pages/contactus/contactus.page.ts");

    var ContactusPageModule = function ContactusPageModule() {
      _classCallCheck(this, ContactusPageModule);
    };

    ContactusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contactus_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactusPageRoutingModule"]],
      declarations: [_contactus_page__WEBPACK_IMPORTED_MODULE_6__["ContactusPage"]]
    })], ContactusPageModule);
    /***/
  },

  /***/
  "./src/app/pages/contactus/contactus.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/contactus/contactus.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContactusContactusPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3R1cy9jb250YWN0dXMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/contactus/contactus.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/contactus/contactus.page.ts ***!
    \***************************************************/

  /*! exports provided: ContactusPage */

  /***/
  function srcAppPagesContactusContactusPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusPage", function () {
      return ContactusPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactusPage = /*#__PURE__*/function () {
      function ContactusPage() {
        _classCallCheck(this, ContactusPage);
      }

      _createClass(ContactusPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactusPage;
    }();

    ContactusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contactus',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./contactus.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contactus/contactus.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./contactus.page.scss */
      "./src/app/pages/contactus/contactus.page.scss"))["default"]]
    })], ContactusPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-contactus-contactus-module-es5.js.map