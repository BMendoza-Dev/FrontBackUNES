(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-external-inspection-inspection-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/external/inspection/inspection.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/external/inspection/inspection.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{properties.titleInspection}}\"></app-header>\r\n\r\n<ion-content>\r\n  <iframe class='webPage' name=\"samplePage\" [src]=\"url | safe\"></iframe>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/components/external/inspection/inspection.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/external/inspection/inspection.module.ts ***!
  \*********************************************************************/
/*! exports provided: InspectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionPageModule", function() { return InspectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inspection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspection.page */ "./src/app/components/external/inspection/inspection.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var routes = [
    {
        path: '',
        component: _inspection_page__WEBPACK_IMPORTED_MODULE_6__["InspectionPage"]
    }
];
var InspectionPageModule = /** @class */ (function () {
    function InspectionPageModule() {
    }
    InspectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
            ],
            declarations: [_inspection_page__WEBPACK_IMPORTED_MODULE_6__["InspectionPage"]]
        })
    ], InspectionPageModule);
    return InspectionPageModule;
}());



/***/ }),

/***/ "./src/app/components/external/inspection/inspection.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/external/inspection/inspection.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".webPage {\n  width: 100%;\n  height: 99%;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phbmRyZXMvRXNjcml0b3Jpby9Qcm95ZWN0b3MtZGUtU29mdHdhcmUvQXBwL2FwcC1hc2FtYmxlYS9zcmMvYXBwL2NvbXBvbmVudHMvZXh0ZXJuYWwvaW5zcGVjdGlvbi9pbnNwZWN0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9leHRlcm5hbC9pbnNwZWN0aW9uL2luc3BlY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4dGVybmFsL2luc3BlY3Rpb24vaW5zcGVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2ViUGFnZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTklO1xuICBib3JkZXI6IG5vbmU7XG59IiwiLndlYlBhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5OSU7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/external/inspection/inspection.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/external/inspection/inspection.page.ts ***!
  \*******************************************************************/
/*! exports provided: InspectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectionPage", function() { return InspectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _properties_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../properties/properties */ "./src/app/properties/properties.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var InspectionPage = /** @class */ (function () {
    function InspectionPage(properties) {
        this.properties = properties;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlInspection;
    }
    InspectionPage.prototype.ngOnInit = function () {
    };
    InspectionPage.ctorParameters = function () { return [
        { type: _properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"] }
    ]; };
    InspectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inspection',
            template: __webpack_require__(/*! raw-loader!./inspection.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/external/inspection/inspection.page.html"),
            styles: [__webpack_require__(/*! ./inspection.page.scss */ "./src/app/components/external/inspection/inspection.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"]])
    ], InspectionPage);
    return InspectionPage;
}());



/***/ })

}]);
//# sourceMappingURL=components-external-inspection-inspection-module-es5.js.map