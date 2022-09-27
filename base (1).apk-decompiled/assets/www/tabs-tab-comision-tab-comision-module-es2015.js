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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_comision_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-comision.page */ "./src/app/components/tabs/tab-comision/tab-comision.page.ts");







const routes = [
    {
        path: '',
        component: _tab_comision_page__WEBPACK_IMPORTED_MODULE_6__["TabComisionPage"]
    }
];
let TabComisionPageModule = class TabComisionPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_modal_asambleista_modal_asambleista_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal/modal-asambleista/modal-asambleista.page */ "./src/app/components/modal/modal-asambleista/modal-asambleista.page.ts");





let TabComisionPage = class TabComisionPage {
    constructor(rest, modalController) {
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
    ngOnInit() {
        this.getCommissionList();
    }
    getCommissionList() {
        this.rest.getCommissionList({
            periodId: 5,
            meetingGroupTypeId: 2
        }).subscribe(response => {
            this.commissionList = response;
            this.commissionListFiltered = this.commissionList;
        });
    }
    onChange($event) {
        if ($event.target.value !== null) {
            this.getAssemblymenCommissionList($event.target.value);
        }
    }
    getAssemblymenCommissionList(id) {
        this.rest.getAssemblymanByCommission({
            meetingGroupId: id
        }).subscribe(response => {
            this.assemblyList = response;
            for (let i = 0; i < this.assemblyList.length; i++) {
                for (let j = 0; j < this.roleList.length; j++) {
                    if (this.assemblyList[i].roleName.toLowerCase().startsWith(this.roleList[j].name)) {
                        this.assemblyList[i].roleOrder = this.roleList[j].order;
                        break;
                    }
                }
            }
            this.assemblyList.sort((a, b) => a.roleOrder - b.roleOrder);
            this.getPhotosList();
        });
    }
    changeModal(id, image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_asambleista_modal_asambleista_page__WEBPACK_IMPORTED_MODULE_4__["ModalAsambleistaPage"],
                componentProps: {
                    'assembly': this.assemblyList.filter(data => data.id == id)
                }
            });
            return yield modal.present();
        });
    }
    getPhotosList() {
        this.assemblyList.forEach((data) => {
            this.getPhoto(data);
        });
    }
    getPhoto(data) {
        this.rest.getAssemblymanPhoto({
            assemblyMemberId: data.id
        }).subscribe(responsePhoto => {
            const blob = new Blob([responsePhoto], {
                type: 'image/png'
            });
            if (blob.size > 0) {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    this.photoMan = reader.result;
                    data['imageChange'] = this.photoMan;
                };
            }
            else {
                data['imageChange'] = '../assets/images/silueta.png';
            }
        }, () => {
            data['imageChange'] = '../assets/images/silueta.png';
        });
    }
    filterCommissions(d) {
        const f = d.target.value.toString().trim().toLowerCase();
        if (f.length === 0) {
            this.commissionListFiltered = this.commissionList;
        }
        else {
            this.commissionListFiltered = this.commissionList.filter(data => data.name.toLowerCase().includes(f));
        }
    }
    selectCommission(m) {
        this.getAssemblymenCommissionList(m.id);
        this.commissionIdSelected = m.id;
        this.showListAssembly = true;
    }
};
TabComisionPage.ctorParameters = () => [
    { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
TabComisionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-comision',
        template: __webpack_require__(/*! raw-loader!./tab-comision.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-comision/tab-comision.page.html"),
        styles: [__webpack_require__(/*! ./tab-comision.page.scss */ "./src/app/components/tabs/tab-comision/tab-comision.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], TabComisionPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tab-comision-tab-comision-module-es2015.js.map