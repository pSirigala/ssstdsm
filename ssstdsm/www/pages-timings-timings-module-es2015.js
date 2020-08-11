(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-timings-timings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timings/timings.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timings/timings.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Timings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"col-md-12 col-sm-12\">\n    <h4><strong> Sai Baba Aarthi</strong></h4>\n    <h3><strong> Venue: Pure land of Iowa</strong></h3>\n    <div>6.45 PM Thursday</div>\n    <div>Address: 8364, Hickman Road, Clive, IA -50325</div>\n    <br/>\n    <div><strong> Directions:</strong> If you are driving east on Hickman road, make a right on 82nd st signal lights then take first right and then second left into “Pure land of Iowa” (You will see a pole near the sign board)</div>    \n  </div>\n  <br/>\n  <br/>\n  <div>\n    <h4><strong>Virtual Aarthi Sai Baba Aarthi</strong></h4>\n    <div>\n      Join Zoom Meeting<br/>\nhttps://us04web.zoom.us/j/631300816?pwd=WmdWclBIaTYzYWlhUXlCbE1TaDlMUT09<br/>\n\nMeeting ID: 631 300 816<br/>\nPassword: 681244<br/>\n\nOne tap mobile\n+13126266799,,631300816#,,#,681244# US (Chicago)\n+19292056099,,631300816#,,#,681244# US (New York)\n\nDial by your location\n        +1 312 626 6799 US (Chicago)\n        +1 929 205 6099 US (New York)\n        +1 253 215 8782 US\n        +1 301 715 8592 US\n        +1 346 248 7799 US (Houston)\n        +1 669 900 6833 US (San Jose)\nMeeting ID: 631 300 816\nPassword: 681244\nFind your local number: https://us04web.zoom.us/u/ft4rfIps6\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/timings/timings-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/timings/timings-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TimingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingsPageRoutingModule", function() { return TimingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _timings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timings.page */ "./src/app/pages/timings/timings.page.ts");




const routes = [
    {
        path: '',
        component: _timings_page__WEBPACK_IMPORTED_MODULE_3__["TimingsPage"]
    }
];
let TimingsPageRoutingModule = class TimingsPageRoutingModule {
};
TimingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TimingsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/timings/timings.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/timings/timings.module.ts ***!
  \*************************************************/
/*! exports provided: TimingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingsPageModule", function() { return TimingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _timings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timings-routing.module */ "./src/app/pages/timings/timings-routing.module.ts");
/* harmony import */ var _timings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timings.page */ "./src/app/pages/timings/timings.page.ts");







let TimingsPageModule = class TimingsPageModule {
};
TimingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _timings_routing_module__WEBPACK_IMPORTED_MODULE_5__["TimingsPageRoutingModule"]
        ],
        declarations: [_timings_page__WEBPACK_IMPORTED_MODULE_6__["TimingsPage"]]
    })
], TimingsPageModule);



/***/ }),

/***/ "./src/app/pages/timings/timings.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/timings/timings.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RpbWluZ3MvdGltaW5ncy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/timings/timings.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/timings/timings.page.ts ***!
  \***********************************************/
/*! exports provided: TimingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingsPage", function() { return TimingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TimingsPage = class TimingsPage {
    constructor() { }
    ngOnInit() {
    }
};
TimingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./timings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timings/timings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./timings.page.scss */ "./src/app/pages/timings/timings.page.scss")).default]
    })
], TimingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-timings-timings-module-es2015.js.map