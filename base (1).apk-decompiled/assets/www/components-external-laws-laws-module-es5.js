(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-external-laws-laws-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/external/laws/laws.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/external/laws/laws.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{properties.titleLaws}}\"></app-header>\n\n<ion-content>\n  <iframe #iflaws id=\"iframe_laws\" class= 'webPage' name= \"samplePage\"\n          [src]=\"url | safe\"\n          (load)=\"onLoadIframe()\"\n  ></iframe>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/external/laws/laws.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/external/laws/laws.module.ts ***!
  \*********************************************************/
/*! exports provided: LawsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LawsPageModule", function() { return LawsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _laws_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./laws.page */ "./src/app/components/external/laws/laws.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var routes = [
    {
        path: '',
        component: _laws_page__WEBPACK_IMPORTED_MODULE_6__["LawsPage"]
    }
];
var LawsPageModule = /** @class */ (function () {
    function LawsPageModule() {
    }
    LawsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
            ],
            declarations: [_laws_page__WEBPACK_IMPORTED_MODULE_6__["LawsPage"]]
        })
    ], LawsPageModule);
    return LawsPageModule;
}());



/***/ }),

/***/ "./src/app/components/external/laws/laws.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/external/laws/laws.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".webPage {\n  width: 99%;\n  height: 99%;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phbmRyZXMvRXNjcml0b3Jpby9Qcm95ZWN0b3MtZGUtU29mdHdhcmUvQXBwL2FwcC1hc2FtYmxlYS9zcmMvYXBwL2NvbXBvbmVudHMvZXh0ZXJuYWwvbGF3cy9sYXdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9leHRlcm5hbC9sYXdzL2xhd3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4dGVybmFsL2xhd3MvbGF3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2ViUGFnZXtcbiAgd2lkdGg6IDk5JTtcbiAgaGVpZ2h0OiA5OSU7XG4gIGJvcmRlcjogbm9uZTtcbn0iLCIud2ViUGFnZSB7XG4gIHdpZHRoOiA5OSU7XG4gIGhlaWdodDogOTklO1xuICBib3JkZXI6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/external/laws/laws.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/external/laws/laws.page.ts ***!
  \*******************************************************/
/*! exports provided: LawsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LawsPage", function() { return LawsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _properties_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../properties/properties */ "./src/app/properties/properties.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var LawsPage = /** @class */ (function () {
    function LawsPage(properties) {
        this.properties = properties;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ulrLaw;
    }
    LawsPage.prototype.ngOnInit = function () {
    };
    LawsPage.prototype.onLoadIframe = function () {
        /*
        let content = this.iframe.nativeElement.contentWindow.document.getElementById('header');
        console.log(content);
        */
    };
    LawsPage.ctorParameters = function () { return [
        { type: _properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"] }
    ]; };
    LawsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-laws',
            template: __webpack_require__(/*! raw-loader!./laws.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/external/laws/laws.page.html"),
            styles: [__webpack_require__(/*! ./laws.page.scss */ "./src/app/components/external/laws/laws.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"]])
    ], LawsPage);
    return LawsPage;
}());



/***/ })

}]);
//# sourceMappingURL=components-external-laws-laws-module-es5.js.map