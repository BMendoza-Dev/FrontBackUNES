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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _assemblyhouses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assemblyhouses.page */ "./src/app/components/external/assemblyhouses/assemblyhouses.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _assemblyhouses_page__WEBPACK_IMPORTED_MODULE_6__["AssemblyhousesPage"]
    }
];
var AssemblyhousesPageModule = /** @class */ (function () {
    function AssemblyhousesPageModule() {
    }
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
    return AssemblyhousesPageModule;
}());



/***/ }),

/***/ "./src/app/components/external/assemblyhouses/assemblyhouses.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/external/assemblyhouses/assemblyhouses.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".webPage {\n  width: 100%;\n  height: 99%;\n  border: none;\n}\n\n.button-radio {\n  width: 50px;\n  background-color: #2280de;\n  color: white;\n  border-radius: 3px;\n  padding-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJlc21vcmFsZXMvSW3DoWdlbmVzL2FwcC1hc2FtYmxlYTIvc3JjL2FwcC9jb21wb25lbnRzL2V4dGVybmFsL2Fzc2VtYmx5aG91c2VzL2Fzc2VtYmx5aG91c2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9leHRlcm5hbC9hc3NlbWJseWhvdXNlcy9hc3NlbWJseWhvdXNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4dGVybmFsL2Fzc2VtYmx5aG91c2VzL2Fzc2VtYmx5aG91c2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWJQYWdle1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5OSU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmJ1dHRvbi1yYWRpb3tcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjgwZGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuIiwiLndlYlBhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5OSU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmJ1dHRvbi1yYWRpbyB7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjI4MGRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _properties_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../properties/properties */ "./src/app/properties/properties.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");






var AssemblyhousesPage = /** @class */ (function () {
    function AssemblyhousesPage(properties, platform, rest, callNumber) {
        this.properties = properties;
        this.platform = platform;
        this.rest = rest;
        this.callNumber = callNumber;
        this.housesList = [];
    }
    AssemblyhousesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.getAssemblyHouses().subscribe(function (response) {
            _this.housesList = response;
        });
    };
    AssemblyhousesPage.prototype.openmap = function (dest) {
        if (this.platform.is('ios')) {
            window.open('maps://?q=' + dest, '_system');
        }
        else {
            window.open('geo:0,0?q=' + dest, '_system');
        }
    };
    AssemblyhousesPage.prototype.goCallNumber = function (phoneNumber) {
        this.callNumber.callNumber(phoneNumber, false)
            .then(function (res) { return console.log('llamando!', res); })
            .catch(function (err) { return console.log('Error de llamada', err); });
    };
    AssemblyhousesPage.ctorParameters = function () { return [
        { type: _properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] }
    ]; };
    AssemblyhousesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assemblyhouses',
            template: __webpack_require__(/*! raw-loader!./assemblyhouses.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/external/assemblyhouses/assemblyhouses.page.html"),
            styles: [__webpack_require__(/*! ./assemblyhouses.page.scss */ "./src/app/components/external/assemblyhouses/assemblyhouses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _service_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"]])
    ], AssemblyhousesPage);
    return AssemblyhousesPage;
}());



/***/ })

}]);
//# sourceMappingURL=components-external-assemblyhouses-assemblyhouses-module-es5.js.map