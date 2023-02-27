(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-external-ppless-ppless-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/external/ppless/ppless.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/external/ppless/ppless.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{properties.titleLawProjects}}\"></app-header>\n\n<ion-content>\n  <!--<iframe class= 'webPage' name= \"samplePage\" [src]=\"url | safe\"></iframe>-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/external/ppless/ppless.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/external/ppless/ppless.module.ts ***!
  \*************************************************************/
/*! exports provided: PplessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PplessPageModule", function() { return PplessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ppless_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ppless.page */ "./src/app/components/external/ppless/ppless.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var routes = [
    {
        path: '',
        component: _ppless_page__WEBPACK_IMPORTED_MODULE_6__["PplessPage"]
    }
];
var PplessPageModule = /** @class */ (function () {
    function PplessPageModule() {
    }
    PplessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
            ],
            declarations: [_ppless_page__WEBPACK_IMPORTED_MODULE_6__["PplessPage"]]
        })
    ], PplessPageModule);
    return PplessPageModule;
}());



/***/ }),

/***/ "./src/app/components/external/ppless/ppless.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/external/ppless/ppless.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".webPage {\n  width: 100%;\n  height: 99%;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJlc21vcmFsZXMvSW3DoWdlbmVzL2FwcC1hc2FtYmxlYTIvc3JjL2FwcC9jb21wb25lbnRzL2V4dGVybmFsL3BwbGVzcy9wcGxlc3MucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2V4dGVybmFsL3BwbGVzcy9wcGxlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4dGVybmFsL3BwbGVzcy9wcGxlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlYlBhZ2V7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk5JTtcbiAgYm9yZGVyOiBub25lO1xufSIsIi53ZWJQYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTklO1xuICBib3JkZXI6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/external/ppless/ppless.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/external/ppless/ppless.page.ts ***!
  \***********************************************************/
/*! exports provided: PplessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PplessPage", function() { return PplessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _properties_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../properties/properties */ "./src/app/properties/properties.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var PplessPage = /** @class */ (function () {
    function PplessPage(properties) {
        this.properties = properties;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlPpless;
    }
    PplessPage.prototype.ngOnInit = function () {
        window.open(this.url, '_system', 'location=no, toolbar=no');
    };
    PplessPage.ctorParameters = function () { return [
        { type: _properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"] }
    ]; };
    PplessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ppless',
            template: __webpack_require__(/*! raw-loader!./ppless.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/external/ppless/ppless.page.html"),
            styles: [__webpack_require__(/*! ./ppless.page.scss */ "./src/app/components/external/ppless/ppless.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"]])
    ], PplessPage);
    return PplessPage;
}());



/***/ })

}]);
//# sourceMappingURL=components-external-ppless-ppless-module-es5.js.map