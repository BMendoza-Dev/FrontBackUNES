(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-external-assemblyhouses-assemblyhouses-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/external/assemblyhouses/assemblyhouses.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/external/assemblyhouses/assemblyhouses.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{properties.titleAssemblyHouses}}\"></app-header>\n\n<ion-content>\n  <!--<iframe class= 'webPage' name= \"samplePage\" src=\"https://www.asambleanacional.gob.ec/es/contenido/la_asamblea_nacional_traves_de_las_casas_de_la_asamblea_creadas_para_fomentar_una_relacion\"></iframe>-->\n\n  <ion-card  *ngFor=\"let item of housesList\"  class=\"cardStyles\">\n    <ion-grid  class=\"listSession\">\n      <ion-row>\n        <ion-col>\n          <ion-text style=\"font-weight: bold; font-size: small;\">{{item.territorial}} | {{item.city}}</ion-text>\n        </ion-col>\n        <ion-col style=\"text-align: right;\">\n          <ion-button style=\"height: 28px;\" (click)=\"openmap(item.location)\">\n            Ir\n            <ion-icon slot=\"end\" name=\"md-pin\" style=\"font-size: 25px;\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-top: -15px;\">\n        <ion-col style=\"font-size: small;\">\n          <ion-text class=\"linkText\" (click)=\"goCallNumber(item.phone)\">{{item.phone}}</ion-text><br>\n          <a class=\"linkText\" href=\"mailto:{{item.email}}\">{{item.email}}</a><br>\n          <ion-text>{{item.address}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/external/assemblyhouses/assemblyhouses.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/external/assemblyhouses/assemblyhouses.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AssemblyhousesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssemblyhousesPageModule", function() { return AssemblyhousesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _assemblyhouses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assemblyhouses.page */ "./src/app/components/external/assemblyhouses/assemblyhouses.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _assemblyhouses_page__WEBPACK_IMPORTED_MODULE_6__["AssemblyhousesPage"]
    }
];
let AssemblyhousesPageModule = class AssemblyhousesPageModule {
};
AssemblyhousesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_assemblyhouses_page__WEBPACK_IMPORTED_MODULE_6__["AssemblyhousesPage"]]
    })
], AssemblyhousesPageModule);



/***/ }),

/***/ "./src/app/components/external/assemblyhouses/assemblyhouses.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/external/assemblyhouses/assemblyhouses.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".webPage {\n  width: 100%;\n  height: 99%;\n  border: none;\n}\n\n.button-radio {\n  width: 50px;\n  background-color: #2280de;\n  color: white;\n  border-radius: 3px;\n  padding-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phbmRyZXMvRXNjcml0b3Jpby9Qcm95ZWN0b3MtZGUtU29mdHdhcmUvQXBwL2FwcC1hc2FtYmxlYS9zcmMvYXBwL2NvbXBvbmVudHMvZXh0ZXJuYWwvYXNzZW1ibHlob3VzZXMvYXNzZW1ibHlob3VzZXMucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2V4dGVybmFsL2Fzc2VtYmx5aG91c2VzL2Fzc2VtYmx5aG91c2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXh0ZXJuYWwvYXNzZW1ibHlob3VzZXMvYXNzZW1ibHlob3VzZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlYlBhZ2V7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk5JTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYnV0dG9uLXJhZGlve1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyODBkZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4iLCIud2ViUGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk5JTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYnV0dG9uLXJhZGlvIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjgwZGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/external/assemblyhouses/assemblyhouses.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/external/assemblyhouses/assemblyhouses.page.ts ***!
  \***************************************************************************/
/*! exports provided: AssemblyhousesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssemblyhousesPage", function() { return AssemblyhousesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _properties_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../properties/properties */ "./src/app/properties/properties.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");






let AssemblyhousesPage = class AssemblyhousesPage {
    constructor(properties, platform, rest, callNumber) {
        this.properties = properties;
        this.platform = platform;
        this.rest = rest;
        this.callNumber = callNumber;
        this.housesList = [];
    }
    ngOnInit() {
        this.rest.getAssemblyHouses().subscribe(response => {
            this.housesList = response;
        });
    }
    openmap(dest) {
        if (this.platform.is('ios')) {
            window.open('maps://?q=' + dest, '_system');
        }
        else {
            window.open('geo:0,0?q=' + dest, '_system');
        }
    }
    goCallNumber(phoneNumber) {
        this.callNumber.callNumber(phoneNumber, false)
            .then(res => console.log('llamando!', res))
            .catch(err => console.log('Error de llamada', err));
    }
};
AssemblyhousesPage.ctorParameters = () => [
    { type: _properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] }
];
AssemblyhousesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assemblyhouses',
        template: __webpack_require__(/*! raw-loader!./assemblyhouses.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/external/assemblyhouses/assemblyhouses.page.html"),
        styles: [__webpack_require__(/*! ./assemblyhouses.page.scss */ "./src/app/components/external/assemblyhouses/assemblyhouses.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _service_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"]])
], AssemblyhousesPage);



/***/ })

}]);
//# sourceMappingURL=components-external-assemblyhouses-assemblyhouses-module-es2015.js.map