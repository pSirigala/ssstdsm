(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-updates-updates-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/updates/updates.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/updates/updates.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>updates</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n<div class=\"row\">\n  <ion-slides >    \n    <ion-slide *ngFor=\"let s of updateSlides\">\n      <div class=\"slide\">\n        <img src=\"{{s.src}}\"/>\n        <h2>{{s.title}}</h2>\n        <h3>{{s.subTitle}}</h3>\n        <p>{{s.description}}</p>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/updates/updates-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/updates/updates-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UpdatesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatesPageRoutingModule", function() { return UpdatesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _updates_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updates.page */ "./src/app/pages/updates/updates.page.ts");




const routes = [
    {
        path: '',
        component: _updates_page__WEBPACK_IMPORTED_MODULE_3__["UpdatesPage"]
    }
];
let UpdatesPageRoutingModule = class UpdatesPageRoutingModule {
};
UpdatesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UpdatesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/updates/updates.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/updates/updates.module.ts ***!
  \*************************************************/
/*! exports provided: UpdatesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatesPageModule", function() { return UpdatesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _updates_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updates-routing.module */ "./src/app/pages/updates/updates-routing.module.ts");
/* harmony import */ var _updates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updates.page */ "./src/app/pages/updates/updates.page.ts");







let UpdatesPageModule = class UpdatesPageModule {
};
UpdatesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _updates_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdatesPageRoutingModule"]
        ],
        declarations: [_updates_page__WEBPACK_IMPORTED_MODULE_6__["UpdatesPage"]]
    })
], UpdatesPageModule);



/***/ }),

/***/ "./src/app/pages/updates/updates.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/updates/updates.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwZGF0ZXMvdXBkYXRlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/updates/updates.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/updates/updates.page.ts ***!
  \***********************************************/
/*! exports provided: UpdatesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatesPage", function() { return UpdatesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_slides_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/slides.service */ "./src/app/services/slides.service.ts");



let UpdatesPage = class UpdatesPage {
    constructor(slidesService) {
        this.slidesService = slidesService;
    }
    ngOnInit() {
        this.slidesService.getSlidesByType('templeConstruction').subscribe(res => {
            this.updateSlides = res;
        });
    }
};
UpdatesPage.ctorParameters = () => [
    { type: _services_slides_service__WEBPACK_IMPORTED_MODULE_2__["SlidesService"] }
];
UpdatesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-updates',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./updates.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/updates/updates.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./updates.page.scss */ "./src/app/pages/updates/updates.page.scss")).default]
    })
], UpdatesPage);



/***/ })

}]);
//# sourceMappingURL=pages-updates-updates-module-es2015.js.map