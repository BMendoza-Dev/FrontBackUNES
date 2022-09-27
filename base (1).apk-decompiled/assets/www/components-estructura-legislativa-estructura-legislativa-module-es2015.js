(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-estructura-legislativa-estructura-legislativa-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/estructura-legislativa/estructura-legislativa.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/estructura-legislativa/estructura-legislativa.page.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{properties.titleConformation}}\"></app-header>\r\n\r\n<ion-content>\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"top\" style=\"height: 0;\">\r\n      <!--<ion-tab-button  tab=\"tabAmbito\">\r\n        <ion-icon name=\"md-globe\"></ion-icon>\r\n        <ion-label>Ambito Territorial</ion-label>\r\n      </ion-tab-button>-->\r\n\r\n      <ion-tab-button tab=\"tabComision\">\r\n        <!--<ion-icon name=\"contacts\"></ion-icon>\r\n        <ion-label>Comisiones</ion-label>-->\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/components/estructura-legislativa/estructura-legislativa.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/estructura-legislativa/estructura-legislativa.module.ts ***!
  \************************************************************************************/
/*! exports provided: EstructuraLegislativaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstructuraLegislativaPageModule", function() { return EstructuraLegislativaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _estructura_legislativa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estructura-legislativa.page */ "./src/app/components/estructura-legislativa/estructura-legislativa.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _estructura_legislativa_page__WEBPACK_IMPORTED_MODULE_6__["EstructuraLegislativaPage"],
        children: [
            {
                path: 'tabAmbito',
                children: [
                    {
                        path: '',
                        loadChildren: '../tabs/tab-ambito/tab-ambito.module#TabAmbitoPageModule'
                    }
                ]
            },
            {
                path: 'tabComision',
                children: [
                    {
                        path: '',
                        loadChildren: '../tabs/tab-comision/tab-comision.module#TabComisionPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'tabComision',
                pathMatch: 'full'
            }
        ]
    }
];
let EstructuraLegislativaPageModule = class EstructuraLegislativaPageModule {
};
EstructuraLegislativaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        declarations: [_estructura_legislativa_page__WEBPACK_IMPORTED_MODULE_6__["EstructuraLegislativaPage"]]
    })
], EstructuraLegislativaPageModule);



/***/ }),

/***/ "./src/app/components/estructura-legislativa/estructura-legislativa.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/estructura-legislativa/estructura-legislativa.page.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXN0cnVjdHVyYS1sZWdpc2xhdGl2YS9lc3RydWN0dXJhLWxlZ2lzbGF0aXZhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/estructura-legislativa/estructura-legislativa.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/estructura-legislativa/estructura-legislativa.page.ts ***!
  \**********************************************************************************/
/*! exports provided: EstructuraLegislativaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstructuraLegislativaPage", function() { return EstructuraLegislativaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _properties_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../properties/properties */ "./src/app/properties/properties.ts");



let EstructuraLegislativaPage = class EstructuraLegislativaPage {
    constructor(properties) {
        this.properties = properties;
    }
    ngOnInit() {
    }
};
EstructuraLegislativaPage.ctorParameters = () => [
    { type: _properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"] }
];
EstructuraLegislativaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-estructura-legislativa',
        template: __webpack_require__(/*! raw-loader!./estructura-legislativa.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/estructura-legislativa/estructura-legislativa.page.html"),
        styles: [__webpack_require__(/*! ./estructura-legislativa.page.scss */ "./src/app/components/estructura-legislativa/estructura-legislativa.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"]])
], EstructuraLegislativaPage);



/***/ })

}]);
//# sourceMappingURL=components-estructura-legislativa-estructura-legislativa-module-es2015.js.map