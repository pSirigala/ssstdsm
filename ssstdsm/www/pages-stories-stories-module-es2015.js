(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-stories-stories-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stories/stories.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stories/stories.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>stories</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/stories/stories-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/stories/stories-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: StoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesPageRoutingModule", function() { return StoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _stories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stories.page */ "./src/app/pages/stories/stories.page.ts");




const routes = [
    {
        path: '',
        component: _stories_page__WEBPACK_IMPORTED_MODULE_3__["StoriesPage"]
    }
];
let StoriesPageRoutingModule = class StoriesPageRoutingModule {
};
StoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StoriesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/stories/stories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/stories/stories.module.ts ***!
  \*************************************************/
/*! exports provided: StoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesPageModule", function() { return StoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _stories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stories-routing.module */ "./src/app/pages/stories/stories-routing.module.ts");
/* harmony import */ var _stories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stories.page */ "./src/app/pages/stories/stories.page.ts");







let StoriesPageModule = class StoriesPageModule {
};
StoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stories_routing_module__WEBPACK_IMPORTED_MODULE_5__["StoriesPageRoutingModule"]
        ],
        declarations: [_stories_page__WEBPACK_IMPORTED_MODULE_6__["StoriesPage"]]
    })
], StoriesPageModule);



/***/ }),

/***/ "./src/app/pages/stories/stories.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/stories/stories.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0b3JpZXMvc3Rvcmllcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/stories/stories.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/stories/stories.page.ts ***!
  \***********************************************/
/*! exports provided: StoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesPage", function() { return StoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let StoriesPage = class StoriesPage {
    constructor() { }
    ngOnInit() {
    }
};
StoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./stories.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stories/stories.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./stories.page.scss */ "./src/app/pages/stories/stories.page.scss")).default]
    })
], StoriesPage);



/***/ })

}]);
//# sourceMappingURL=pages-stories-stories-module-es2015.js.map