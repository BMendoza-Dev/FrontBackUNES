(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tab-members-commission-tab-members-commission-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-members-commission/tab-members-commission.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tabs/tab-members-commission/tab-members-commission.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-card>\n        <ion-card class=\"cardStyles\" *ngFor=\"let assembly of assemblyList\">\n            <ion-item (click)=\"changeModal(assembly.id,assembly.imageChange)\">\n                <img [src]='assembly.imageChange'  [hidden]=\"assembly.imageChange==null\"  style=\"width: 40px; margin:5px auto;\" />\n                <ion-spinner [hidden]=\"assembly.imageChange!=null\"   name=\"circles\"></ion-spinner>\n                <ion-label style=\"font-size: smaller;margin-left: 5px;\">\n                    <small>{{assembly.lastName}} {{assembly.firstName}}</small><br><span></span>\n                    <small>{{assembly.roleName?assembly.roleName:'INTEGRANTE DE LA COMISIÓN'}}</small><br><span></span>\n                </ion-label>\n            </ion-item>\n        </ion-card>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/tabs/tab-members-commission/tab-members-commission.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/tabs/tab-members-commission/tab-members-commission.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: TabMembersCommissionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMembersCommissionPageModule", function() { return TabMembersCommissionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_members_commission_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-members-commission.page */ "./src/app/components/tabs/tab-members-commission/tab-members-commission.page.ts");







var routes = [
    {
        path: '',
        component: _tab_members_commission_page__WEBPACK_IMPORTED_MODULE_6__["TabMembersCommissionPage"]
    }
];
var TabMembersCommissionPageModule = /** @class */ (function () {
    function TabMembersCommissionPageModule() {
    }
    TabMembersCommissionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab_members_commission_page__WEBPACK_IMPORTED_MODULE_6__["TabMembersCommissionPage"]]
        })
    ], TabMembersCommissionPageModule);
    return TabMembersCommissionPageModule;
}());



/***/ }),

/***/ "./src/app/components/tabs/tab-members-commission/tab-members-commission.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/tabs/tab-members-commission/tab-members-commission.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFicy90YWItbWVtYmVycy1jb21taXNzaW9uL3RhYi1tZW1iZXJzLWNvbW1pc3Npb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/tabs/tab-members-commission/tab-members-commission.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/tabs/tab-members-commission/tab-members-commission.page.ts ***!
  \***************************************************************************************/
/*! exports provided: TabMembersCommissionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMembersCommissionPage", function() { return TabMembersCommissionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TabMembersCommissionPage = /** @class */ (function () {
    function TabMembersCommissionPage(rest, modalController, route) {
        this.rest = rest;
        this.modalController = modalController;
        this.route = route;
        this.assemblyList = [];
    }
    TabMembersCommissionPage.prototype.ngOnInit = function () {
        var id = this.route.snapshot.queryParamMap.get('id');
        console.log(id);
        //this.getAssemblymenCommissionList();
    };
    TabMembersCommissionPage.ctorParameters = function () { return [
        { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    TabMembersCommissionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-members-commission',
            template: __webpack_require__(/*! raw-loader!./tab-members-commission.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-members-commission/tab-members-commission.page.html"),
            styles: [__webpack_require__(/*! ./tab-members-commission.page.scss */ "./src/app/components/tabs/tab-members-commission/tab-members-commission.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TabMembersCommissionPage);
    return TabMembersCommissionPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tab-members-commission-tab-members-commission-module-es5.js.map