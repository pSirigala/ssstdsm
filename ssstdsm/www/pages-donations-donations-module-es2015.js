(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-donations-donations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/donations/donations.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/donations/donations.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>donations</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div id=\"Donate\" class=\"all\" style=\"max-width: 100%; height: 100%;\">\n    <div style=\"width:100%; text-align:center; margin-top:2%\">\n        <p style=\"text-align: center;color: brown;\"><strong> Every Dollar makes a Difference </strong>\n        </p>\n<p style=\"text-align: center;color: brown;\"><strong> Appeal For Funds </strong></p>\n\n<p>\n    <strong>Shri Shirdi Saibaba Temple of Des Moines humbly requests all devotees to extend their sincere financial support and contribution towards Land, Idol and temple construction. Your generous donations will enable us to manage the budget to your best satisfaction in making this temple a wholesome one.</strong>\n</p>\n<p>\n    <strong>In honor and appreciation to your donation, you will receive certain honorary* and temple services* and a tax-deductible receipt.</strong>\n</p>\n<p><strong>\nAll donations if made in USA are tax deductible. Tax ID # 47-5157728\nPlease consult your tax advisor for details and eligibility.\n            </strong>\n</p>\n<p><strong>Please make your check payable to:</strong></p>\n\n<p><strong>Shri Shirdi Saibaba Temple of Des Moines</strong></p>\n<p><strong>P.O.Box # 71128, 2135 NW 108th St , Clive IA, 50325</strong></p>\n          <h2 style=\"padding:0; margin:0\">\n           To donate online \n            <a href=\"https://squareup.com/store/shri-shiridi-sai-temple\" target=\"_blank\"> click here </a>\n        </h2>\n    </div>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/donations/donations-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/donations/donations-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DonationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsPageRoutingModule", function() { return DonationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _donations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donations.page */ "./src/app/pages/donations/donations.page.ts");




const routes = [
    {
        path: '',
        component: _donations_page__WEBPACK_IMPORTED_MODULE_3__["DonationsPage"]
    }
];
let DonationsPageRoutingModule = class DonationsPageRoutingModule {
};
DonationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DonationsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/donations/donations.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/donations/donations.module.ts ***!
  \*****************************************************/
/*! exports provided: DonationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsPageModule", function() { return DonationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _donations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./donations-routing.module */ "./src/app/pages/donations/donations-routing.module.ts");
/* harmony import */ var _donations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donations.page */ "./src/app/pages/donations/donations.page.ts");







let DonationsPageModule = class DonationsPageModule {
};
DonationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _donations_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonationsPageRoutingModule"]
        ],
        declarations: [_donations_page__WEBPACK_IMPORTED_MODULE_6__["DonationsPage"]]
    })
], DonationsPageModule);



/***/ }),

/***/ "./src/app/pages/donations/donations.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/donations/donations.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvbmF0aW9ucy9kb25hdGlvbnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/donations/donations.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/donations/donations.page.ts ***!
  \***************************************************/
/*! exports provided: DonationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsPage", function() { return DonationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DonationsPage = class DonationsPage {
    constructor() { }
    ngOnInit() {
    }
};
DonationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donations',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./donations.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/donations/donations.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./donations.page.scss */ "./src/app/pages/donations/donations.page.scss")).default]
    })
], DonationsPage);



/***/ })

}]);
//# sourceMappingURL=pages-donations-donations-module-es2015.js.map