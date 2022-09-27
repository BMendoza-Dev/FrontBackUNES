(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tab-comision-tab-comision-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-comision/tab-comision.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tabs/tab-comision/tab-comision.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n  <ion-searchbar *ngIf=\"false\" style=\"font-size: small;\" (change)=\"filterCommissions($event)\" (ionClear)=\"filterCommissions('')\" autocomplete=\"on\" placeholder=\"\"></ion-searchbar>\n  <ion-card *ngIf=\"!showListAssembly\">\n    <ion-card class=\"cardStyles\" *ngFor=\"let com of commissionListFiltered\">\n      <ion-item (click)=\"selectCommission(com)\" style=\"font-size: 12px;\">\n          <ion-text>{{ com.name.toUpperCase() }}</ion-text>\n      </ion-item>\n    </ion-card>\n  </ion-card>\n\n  <ion-select *ngIf=\"showListAssembly\" interface=\"action-sheet\"\n              (ionChange)=\"onChange($event)\" [(ngModel)]=\"commissionIdSelected\"\n              placeholder=\"Seleccione un ítem de la lista\"\n              cancel-text=\"Cancelar\"\n              style=\"border-bottom: 2px solid #a2a4ab;text-align: center;\"\n  >\n    <ion-select-option *ngFor=\"let t of commissionList\" [value]=\"t.id\" >{{t.name}}</ion-select-option>\n  </ion-select>\n  <ion-card *ngIf=\"showListAssembly\">\n    <ion-card class=\"cardStyles\" *ngFor=\"let assembly of assemblyList\">\n      <ion-item (click)=\"changeModal(assembly.id,assembly.imageChange)\">\n        <img [src]='assembly.imageChange'  [hidden]=\"assembly.imageChange==null\"  style=\"width: 40px; margin:5px auto;\" />\n        <ion-spinner [hidden]=\"assembly.imageChange!=null\"   name=\"circles\"></ion-spinner>\n        <ion-label style=\"font-size: smaller;margin-left: 5px;\">\n          <small>{{assembly.lastName}} {{assembly.firstName}}</small><br><span></span>\n          <small>{{assembly.roleName?assembly.roleName:'INTEGRANTE DE LA COMISIÓN'}}</small><br><span></span>\n        </ion-label>\n      </ion-item>\n    </ion-card>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/tabs/tab-comision/tab-comision.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/tabs/tab-comision/tab-comision.module.ts ***!
  \*********************************************************************/
/*! exports provided: TabComisionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComisionPageModule", function() { return TabComisionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_comision_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-comision.page */ "./src/app/components/tabs/tab-comision/tab-comision.page.ts");







var routes = [
    {
        path: '',
        component: _tab_comision_page__WEBPACK_IMPORTED_MODULE_6__["TabComisionPage"]
    }
];
var TabComisionPageModule = /** @class */ (function () {
    function TabComisionPageModule() {
    }
    TabComisionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab_comision_page__WEBPACK_IMPORTED_MODULE_6__["TabComisionPage"]]
        })
    ], TabComisionPageModule);
    return TabComisionPageModule;
}());



/***/ }),

/***/ "./src/app/components/tabs/tab-comision/tab-comision.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/tabs/tab-comision/tab-comision.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phbmRyZXMvRXNjcml0b3Jpby9Qcm95ZWN0b3MtZGUtU29mdHdhcmUvQXBwL2FwcC1hc2FtYmxlYS9zcmMvYXBwL2NvbXBvbmVudHMvdGFicy90YWItY29taXNpb24vdGFiLWNvbWlzaW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90YWJzL3RhYi1jb21pc2lvbi90YWItY29taXNpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFicy90YWItY29taXNpb24vdGFiLWNvbWlzaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWxlY3R7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuIiwiaW9uLXNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/tabs/tab-comision/tab-comision.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/tabs/tab-comision/tab-comision.page.ts ***!
  \*******************************************************************/
/*! exports provided: TabComisionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComisionPage", function() { return TabComisionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_modal_asambleista_modal_asambleista_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal/modal-asambleista/modal-asambleista.page */ "./src/app/components/modal/modal-asambleista/modal-asambleista.page.ts");





var TabComisionPage = /** @class */ (function () {
    function TabComisionPage(rest, modalController) {
        this.rest = rest;
        this.modalController = modalController;
        this.showListAssembly = false;
        this.commissionIdSelected = 0;
        this.roleList = [
            { name: 'presidente', order: 1 },
            { name: 'vicepresidente', order: 2 },
            { name: 'primer vicepresidente', order: 3 },
            { name: 'segundo vicepresidente', order: 4 },
            { name: 'primer vocal', order: 5 },
            { name: 'segundo vocal', order: 6 },
            { name: 'tercer vocal', order: 7 },
            { name: 'cuarto vocal', order: 8 },
            { name: '', order: 9 }
        ];
    }
    TabComisionPage.prototype.ngOnInit = function () {
        this.getCommissionList();
    };
    TabComisionPage.prototype.getCommissionList = function () {
        var _this = this;
        this.rest.getCommissionList({
            periodId: 5,
            meetingGroupTypeId: 2
        }).subscribe(function (response) {
            _this.commissionList = response;
            _this.commissionListFiltered = _this.commissionList;
        });
    };
    TabComisionPage.prototype.onChange = function ($event) {
        if ($event.target.value !== null) {
            this.getAssemblymenCommissionList($event.target.value);
        }
    };
    TabComisionPage.prototype.getAssemblymenCommissionList = function (id) {
        var _this = this;
        this.rest.getAssemblymanByCommission({
            meetingGroupId: id
        }).subscribe(function (response) {
            _this.assemblyList = response;
            for (var i = 0; i < _this.assemblyList.length; i++) {
                for (var j = 0; j < _this.roleList.length; j++) {
                    if (_this.assemblyList[i].roleName.toLowerCase().startsWith(_this.roleList[j].name)) {
                        _this.assemblyList[i].roleOrder = _this.roleList[j].order;
                        break;
                    }
                }
            }
            _this.assemblyList.sort(function (a, b) {
                return a.roleOrder - b.roleOrder;
            });
            _this.getPhotosList();
        });
    };
    TabComisionPage.prototype.changeModal = function (id, image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_modal_asambleista_modal_asambleista_page__WEBPACK_IMPORTED_MODULE_4__["ModalAsambleistaPage"],
                            componentProps: {
                                'assembly': this.assemblyList.filter(function (data) { return data.id == id; })
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TabComisionPage.prototype.getPhotosList = function () {
        var _this = this;
        this.assemblyList.forEach(function (data) {
            _this.getPhoto(data);
        });
    };
    TabComisionPage.prototype.getPhoto = function (data) {
        var _this = this;
        this.rest.getAssemblymanPhoto({
            assemblyMemberId: data.id
        }).subscribe(function (responsePhoto) {
            var blob = new Blob([responsePhoto], {
                type: 'image/png'
            });
            if (blob.size > 0) {
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(blob);
                reader_1.onloadend = function () {
                    _this.photoMan = reader_1.result;
                    data['imageChange'] = _this.photoMan;
                };
            }
            else {
                data['imageChange'] = '../assets/images/silueta.png';
            }
        }, function () {
            data['imageChange'] = '../assets/images/silueta.png';
        });
    };
    TabComisionPage.prototype.filterCommissions = function (d) {
        var f = d.target.value.toString().trim().toLowerCase();
        if (f.length === 0) {
            this.commissionListFiltered = this.commissionList;
        }
        else {
            this.commissionListFiltered = this.commissionList.filter(function (data) { return data.name.toLowerCase().includes(f); });
        }
    };
    TabComisionPage.prototype.selectCommission = function (m) {
        this.getAssemblymenCommissionList(m.id);
        this.commissionIdSelected = m.id;
        this.showListAssembly = true;
    };
    TabComisionPage.ctorParameters = function () { return [
        { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    TabComisionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-comision',
            template: __webpack_require__(/*! raw-loader!./tab-comision.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-comision/tab-comision.page.html"),
            styles: [__webpack_require__(/*! ./tab-comision.page.scss */ "./src/app/components/tabs/tab-comision/tab-comision.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], TabComisionPage);
    return TabComisionPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tab-comision-tab-comision-module-es5.js.map