(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tab-information-commission-tab-information-commission-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-information-commission/tab-information-commission.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tabs/tab-information-commission/tab-information-commission.page.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\ninformación\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/tabs/tab-information-commission/tab-information-commission.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/tabs/tab-information-commission/tab-information-commission.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: TabInformationCommissionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabInformationCommissionPageModule", function() { return TabInformationCommissionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_information_commission_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-information-commission.page */ "./src/app/components/tabs/tab-information-commission/tab-information-commission.page.ts");







var routes = [
    {
        path: '',
        component: _tab_information_commission_page__WEBPACK_IMPORTED_MODULE_6__["TabInformationCommissionPage"]
    }
];
var TabInformationCommissionPageModule = /** @class */ (function () {
    function TabInformationCommissionPageModule() {
    }
    TabInformationCommissionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab_information_commission_page__WEBPACK_IMPORTED_MODULE_6__["TabInformationCommissionPage"]]
        })
    ], TabInformationCommissionPageModule);
    return TabInformationCommissionPageModule;
}());



/***/ }),

/***/ "./src/app/components/tabs/tab-information-commission/tab-information-commission.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/tabs/tab-information-commission/tab-information-commission.page.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFicy90YWItaW5mb3JtYXRpb24tY29tbWlzc2lvbi90YWItaW5mb3JtYXRpb24tY29tbWlzc2lvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/tabs/tab-information-commission/tab-information-commission.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/tabs/tab-information-commission/tab-information-commission.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: TabInformationCommissionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabInformationCommissionPage", function() { return TabInformationCommissionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TabInformationCommissionPage = /** @class */ (function () {
    function TabInformationCommissionPage(route) {
        this.route = route;
    }
    TabInformationCommissionPage.prototype.ngOnInit = function () {
        var id = this.route.snapshot.queryParamMap.get('id');
        console.log(id);
    };
    TabInformationCommissionPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    TabInformationCommissionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-information-commission',
            template: __webpack_require__(/*! raw-loader!./tab-information-commission.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-information-commission/tab-information-commission.page.html"),
            styles: [__webpack_require__(/*! ./tab-information-commission.page.scss */ "./src/app/components/tabs/tab-information-commission/tab-information-commission.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TabInformationCommissionPage);
    return TabInformationCommissionPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tab-information-commission-tab-information-commission-module-es5.js.map