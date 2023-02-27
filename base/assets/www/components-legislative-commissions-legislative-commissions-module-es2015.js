(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-legislative-commissions-legislative-commissions-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/legislative-commissions/legislative-commissions.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/legislative-commissions/legislative-commissions.page.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{properties.titleComissions}}\"></app-header>\n\n<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button  tab=\"tabInformationCommission\">\n        <ion-icon name=\"md-globe\"></ion-icon>\n        <ion-label>Información de Comisión</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"tabMembersCommission?id={{id}}\">\n        <ion-icon name=\"contacts\"></ion-icon>\n        <ion-label>Miembros</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/legislative-commissions/legislative-commissions.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/legislative-commissions/legislative-commissions.module.ts ***!
  \**************************************************************************************/
/*! exports provided: LegislativeCommissionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegislativeCommissionsPageModule", function() { return LegislativeCommissionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _legislative_commissions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./legislative-commissions.page */ "./src/app/components/legislative-commissions/legislative-commissions.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _legislative_commissions_page__WEBPACK_IMPORTED_MODULE_6__["LegislativeCommissionsPage"],
        children: [
            {
                path: 'tabInformationCommission',
                children: [
                    {
                        path: '',
                        loadChildren: '../tabs/tab-information-commission/tab-information-commission.module#TabInformationCommissionPageModule'
                    }
                ]
            },
            {
                path: 'tabMembersCommission',
                children: [
                    {
                        path: '',
                        loadChildren: '../tabs/tab-members-commission/tab-members-commission.module#TabMembersCommissionPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'tabInformationCommission',
                pathMatch: 'full'
            }
        ]
    }
];
let LegislativeCommissionsPageModule = class LegislativeCommissionsPageModule {
};
LegislativeCommissionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_legislative_commissions_page__WEBPACK_IMPORTED_MODULE_6__["LegislativeCommissionsPage"]]
    })
], LegislativeCommissionsPageModule);



/***/ }),

/***/ "./src/app/components/legislative-commissions/legislative-commissions.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/legislative-commissions/legislative-commissions.page.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGVnaXNsYXRpdmUtY29tbWlzc2lvbnMvbGVnaXNsYXRpdmUtY29tbWlzc2lvbnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/legislative-commissions/legislative-commissions.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/legislative-commissions/legislative-commissions.page.ts ***!
  \************************************************************************************/
/*! exports provided: LegislativeCommissionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegislativeCommissionsPage", function() { return LegislativeCommissionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _properties_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../properties/properties */ "./src/app/properties/properties.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LegislativeCommissionsPage = class LegislativeCommissionsPage {
    constructor(properties, route) {
        this.properties = properties;
        this.route = route;
    }
    ngOnInit() {
        this.id = this.route.snapshot.queryParamMap.get('id');
    }
};
LegislativeCommissionsPage.ctorParameters = () => [
    { type: _properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
LegislativeCommissionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-legislative-commissions',
        template: __webpack_require__(/*! raw-loader!./legislative-commissions.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/legislative-commissions/legislative-commissions.page.html"),
        styles: [__webpack_require__(/*! ./legislative-commissions.page.scss */ "./src/app/components/legislative-commissions/legislative-commissions.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], LegislativeCommissionsPage);



/***/ })

}]);
//# sourceMappingURL=components-legislative-commissions-legislative-commissions-module-es2015.js.map