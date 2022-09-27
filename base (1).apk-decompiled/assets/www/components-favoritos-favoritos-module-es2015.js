(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-favoritos-favoritos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/favoritos/favoritos.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/favoritos/favoritos.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{properties.titleFavorites}}\"></app-header>\n\n<ion-content>\n    <ion-tabs>\n        <ion-tab-bar slot=\"top\">\n            <ion-tab-button  tab=\"tabSesiones\">\n                <ion-icon ios=\"ios-keypad\" md=\"md-keypad\"></ion-icon>\n                <ion-label>Sesiones favoritas</ion-label>\n            </ion-tab-button>\n\n            <ion-tab-button tab=\"tabTemas\">\n                <ion-icon ios=\"ios-bookmarks\" md=\"md-bookmarks\"></ion-icon>\n                <ion-label>Temas favoritos</ion-label>\n            </ion-tab-button>\n        </ion-tab-bar>\n    </ion-tabs>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/favoritos/favoritos.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/favoritos/favoritos.module.ts ***!
  \**********************************************************/
/*! exports provided: FavoritosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosPageModule", function() { return FavoritosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _favoritos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favoritos.page */ "./src/app/components/favoritos/favoritos.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _favoritos_page__WEBPACK_IMPORTED_MODULE_6__["FavoritosPage"],
        children: [
            {
                path: 'tabSesiones',
                children: [
                    {
                        path: '',
                        loadChildren: '../tabs/tab-sesiones/tab-sesiones.module#TabSesionesPageModule'
                    }
                ]
            },
            {
                path: 'tabTemas',
                children: [
                    {
                        path: '',
                        loadChildren: '../tabs/tab-temas/tab-temas.module#TabTemasPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'tabSesiones',
                pathMatch: 'full'
            }
        ]
    }
];
let FavoritosPageModule = class FavoritosPageModule {
};
FavoritosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_favoritos_page__WEBPACK_IMPORTED_MODULE_6__["FavoritosPage"]]
    })
], FavoritosPageModule);



/***/ }),

/***/ "./src/app/components/favoritos/favoritos.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/favoritos/favoritos.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmF2b3JpdG9zL2Zhdm9yaXRvcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/favoritos/favoritos.page.ts":
/*!********************************************************!*\
  !*** ./src/app/components/favoritos/favoritos.page.ts ***!
  \********************************************************/
/*! exports provided: FavoritosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosPage", function() { return FavoritosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _properties_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../properties/properties */ "./src/app/properties/properties.ts");



let FavoritosPage = class FavoritosPage {
    constructor(properties) {
        this.properties = properties;
    }
    ngOnInit() {
    }
};
FavoritosPage.ctorParameters = () => [
    { type: _properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"] }
];
FavoritosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favoritos',
        template: __webpack_require__(/*! raw-loader!./favoritos.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/favoritos/favoritos.page.html"),
        styles: [__webpack_require__(/*! ./favoritos.page.scss */ "./src/app/components/favoritos/favoritos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"]])
], FavoritosPage);



/***/ })

}]);
//# sourceMappingURL=components-favoritos-favoritos-module-es2015.js.map