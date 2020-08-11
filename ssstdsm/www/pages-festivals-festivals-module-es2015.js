(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-festivals-festivals-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/festivals/festivals.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/festivals/festivals.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Festivals</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding> \n  <div class=\"row\">\n    <ion-card *ngFor=\"let e of events; let i=index\">\n      <ion-card-header>\n        <ion-card-title>{{e.name}}</ion-card-title>\n        <ion-card-subtitle>{{e.subTitle}}</ion-card-subtitle>        \n      </ion-card-header>\n    \n      <ion-card-content>\n        <div [innerHTML]=\"e.description\"></div>\n        <br/>\n        <div><strong>Address:</strong>{{e.address}}</div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/festivals/festivals-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/festivals/festivals-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FestivalsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FestivalsPageRoutingModule", function() { return FestivalsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _festivals_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./festivals.page */ "./src/app/pages/festivals/festivals.page.ts");




const routes = [
    {
        path: '',
        component: _festivals_page__WEBPACK_IMPORTED_MODULE_3__["FestivalsPage"]
    }
];
let FestivalsPageRoutingModule = class FestivalsPageRoutingModule {
};
FestivalsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FestivalsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/festivals/festivals.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/festivals/festivals.module.ts ***!
  \*****************************************************/
/*! exports provided: FestivalsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FestivalsPageModule", function() { return FestivalsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _festivals_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./festivals-routing.module */ "./src/app/pages/festivals/festivals-routing.module.ts");
/* harmony import */ var _festivals_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./festivals.page */ "./src/app/pages/festivals/festivals.page.ts");







let FestivalsPageModule = class FestivalsPageModule {
};
FestivalsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _festivals_routing_module__WEBPACK_IMPORTED_MODULE_5__["FestivalsPageRoutingModule"]
        ],
        declarations: [_festivals_page__WEBPACK_IMPORTED_MODULE_6__["FestivalsPage"]]
    })
], FestivalsPageModule);



/***/ }),

/***/ "./src/app/pages/festivals/festivals.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/festivals/festivals.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zlc3RpdmFscy9mZXN0aXZhbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/festivals/festivals.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/festivals/festivals.page.ts ***!
  \***************************************************/
/*! exports provided: FestivalsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FestivalsPage", function() { return FestivalsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_events_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/events-service.service */ "./src/app/services/events-service.service.ts");



let FestivalsPage = class FestivalsPage {
    constructor(eventService) {
        this.eventService = eventService;
    }
    ngOnInit() {
        this.eventService.getEvents().subscribe(res => {
            this.events = res;
        });
    }
};
FestivalsPage.ctorParameters = () => [
    { type: _services_events_service_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"] }
];
FestivalsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-festivals',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./festivals.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/festivals/festivals.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./festivals.page.scss */ "./src/app/pages/festivals/festivals.page.scss")).default]
    })
], FestivalsPage);



/***/ }),

/***/ "./src/app/services/events-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/events-service.service.ts ***!
  \****************************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let EventsService = class EventsService {
    constructor(db) {
        this.eventsCollections = db.collection('events');
        this.events = this.eventsCollections.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getEvents() {
        return this.events;
    }
};
EventsService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
EventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventsService);



/***/ })

}]);
//# sourceMappingURL=pages-festivals-festivals-module-es2015.js.map