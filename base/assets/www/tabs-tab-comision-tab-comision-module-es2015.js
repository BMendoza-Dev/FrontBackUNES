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
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _tab_comision_page__WEBPACK_IMPORTED_MODULE_6__["TabComisionPage"],
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
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
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

module.exports = "ion-select {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJlc21vcmFsZXMvSW3DoWdlbmVzL2FwcC1hc2FtYmxlYTIvc3JjL2FwcC9jb21wb25lbnRzL3RhYnMvdGFiLWNvbWlzaW9uL3RhYi1jb21pc2lvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGFicy90YWItY29taXNpb24vdGFiLWNvbWlzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RhYnMvdGFiLWNvbWlzaW9uL3RhYi1jb21pc2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VsZWN0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiIsImlvbi1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

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
/* harmony import */ var _interfaces_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../interfaces/model */ "./src/app/interfaces/model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_modal_asambleista_modal_asambleista_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modal/modal-asambleista/modal-asambleista.page */ "./src/app/components/modal/modal-asambleista/modal-asambleista.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let TabComisionPage = class TabComisionPage {
    constructor(rest, modalController, router, navCtrl) {
        this.rest = rest;
        this.modalController = modalController;
        this.router = router;
        this.navCtrl = navCtrl;
        this.showListAssembly = false;
        this.commissionIdSelected = 0;
        this.periodActive = new _interfaces_model__WEBPACK_IMPORTED_MODULE_3__["Period"]();
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
        // this.getCommissionList();
        this.getPeriod();
    }
    getCommissionList() {
        this.rest.getCommissionList({
            periodId: this.periodActive.id,
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
                component: _modal_modal_asambleista_modal_asambleista_page__WEBPACK_IMPORTED_MODULE_5__["ModalAsambleistaPage"],
                componentProps: {
                    // 'assembly': this.assemblyList.filter(data => data.id == id)
                    assembly: this.assemblyList.filter(data => data.id === id),
                    bandActive: false
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
    // Método en ejecución de la lista de comisiones
    selectCommission(m) {
        this.getAssemblymenCommissionList(m.id);
        this.commissionIdSelected = m.id;
        this.showListAssembly = true;
    }
    // Método que Enruta al componente legislative-commissions
    navigateTo(m, componente) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const navigationExtras = {
                queryParams: {
                    id: m.id
                }
            };
            this.router.navigate([componente], navigationExtras);
        });
    }
    getPeriod() {
        this.rest.getPeriod().subscribe(respo => {
            this.periodActive = respo;
        }, error1 => { }, () => {
            this.getCommissionList();
        });
    }
};
TabComisionPage.ctorParameters = () => [
    { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
TabComisionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-comision',
        template: __webpack_require__(/*! raw-loader!./tab-comision.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-comision/tab-comision.page.html"),
        styles: [__webpack_require__(/*! ./tab-comision.page.scss */ "./src/app/components/tabs/tab-comision/tab-comision.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], TabComisionPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tab-comision-tab-comision-module-es2015.js.map