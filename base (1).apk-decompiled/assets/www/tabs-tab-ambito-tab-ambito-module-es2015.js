(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tab-ambito-tab-ambito-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-ambito/tab-ambito.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tabs/tab-ambito/tab-ambito.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n  <ion-searchbar *ngIf=\"false\" style=\"font-size: small;\" (change)=\"filterTerritorials($event)\" (ionClear)=\"filterTerritorials('')\" autocomplete=\"on\" placeholder=\"\"></ion-searchbar>\n  <ion-card *ngIf=\"!showListAssembly\">\n    <ion-card class=\"cardStyles\" *ngFor=\"let com of territorialListFiltered\">\n      <ion-item (click)=\"selectCommission(com)\" style=\"font-size: 12px;\">\n        <ion-text>{{ com.name.toUpperCase() }}</ion-text>\n      </ion-item>\n    </ion-card>\n  </ion-card>\n\n  <ion-select *ngIf=\"showListAssembly\" interface=\"action-sheet\"\n              (ionChange)=\"onChange($event)\" [(ngModel)]=\"territorialIdSelected\"\n              placeholder=\"Seleccione un ítem de la lista\"\n              cancel-text=\"Cancelar\"\n              style=\"border-bottom: 2px solid #a2a4ab;text-align: center;\"\n  >\n    <ion-select-option *ngFor=\"let t of territorialList\" [value]=\"t.id\" >{{t.name}}</ion-select-option>\n  </ion-select>\n\n  <ion-card *ngIf=\"showListAssembly\">\n    <ion-card class=\"cardStyles\" *ngFor=\"let assembly of assemblyList\">\n      <ion-item (click)=\"changeModal(assembly.id,assembly.imageChange)\">\n        <img [src]='assembly.imageChange'  [hidden]=\"assembly.imageChange==null\"  style=\"width: 40px; margin:5px auto;\" />\n        <ion-spinner [hidden]=\"assembly.imageChange!=null\"   name=\"circles\"></ion-spinner>\n        <ion-label style=\"font-size: smaller;margin-left: 5px;\">\n          <small>{{assembly.lastName}} {{assembly.firstName}}</small><br><span></span>\n          <small>{{assembly.politicalParty}}</small><br><span></span>\n        </ion-label>\n      </ion-item>\n    </ion-card>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/tabs/tab-ambito/tab-ambito.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/tabs/tab-ambito/tab-ambito.module.ts ***!
  \*****************************************************************/
/*! exports provided: TabAmbitoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabAmbitoPageModule", function() { return TabAmbitoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_ambito_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-ambito.page */ "./src/app/components/tabs/tab-ambito/tab-ambito.page.ts");







const routes = [
    {
        path: '',
        component: _tab_ambito_page__WEBPACK_IMPORTED_MODULE_6__["TabAmbitoPage"]
    }
];
let TabAmbitoPageModule = class TabAmbitoPageModule {
};
TabAmbitoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tab_ambito_page__WEBPACK_IMPORTED_MODULE_6__["TabAmbitoPage"]]
    })
], TabAmbitoPageModule);



/***/ }),

/***/ "./src/app/components/tabs/tab-ambito/tab-ambito.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/tabs/tab-ambito/tab-ambito.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select {\n  background-color: white;\n  --placeholder-opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phbmRyZXMvRXNjcml0b3Jpby9Qcm95ZWN0b3MtZGUtU29mdHdhcmUvQXBwL2FwcC1hc2FtYmxlYS9zcmMvYXBwL2NvbXBvbmVudHMvdGFicy90YWItYW1iaXRvL3RhYi1hbWJpdG8ucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RhYnMvdGFiLWFtYml0by90YWItYW1iaXRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsbUNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFicy90YWItYW1iaXRvL3RhYi1hbWJpdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlbGVjdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG4iLCJpb24tc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/tabs/tab-ambito/tab-ambito.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/tabs/tab-ambito/tab-ambito.page.ts ***!
  \***************************************************************/
/*! exports provided: TabAmbitoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabAmbitoPage", function() { return TabAmbitoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_modal_asambleista_modal_asambleista_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal/modal-asambleista/modal-asambleista.page */ "./src/app/components/modal/modal-asambleista/modal-asambleista.page.ts");





let TabAmbitoPage = class TabAmbitoPage {
    constructor(rest, modalController) {
        this.rest = rest;
        this.modalController = modalController;
        this.showListAssembly = false;
        this.territorialIdSelected = 0;
    }
    ngOnInit() {
        this.getPeriod();
        this.getTerritorialList();
    }
    getPeriod() {
        this.rest.getPeriod().subscribe(respo => {
            this.periodActive = respo;
        }, error1 => {
            console.log('Se ha producido un error');
        });
    }
    getTerritorialList() {
        this.rest.getTerritorialList().subscribe(response => {
            this.territorialList = response;
            this.territorialListFiltered = this.territorialList;
        });
    }
    onChange($event) {
        if ($event.target.value !== null) {
            this.getAssemblymenTerritorialList($event.target.value);
        }
    }
    getAssemblymenTerritorialList(id) {
        this.rest.getAssemblyMembersResource({
            periodId: this.periodActive.id,
            territorialId: id,
            politicalPartyId: 0,
            includePicture: false,
            onlyActives: true,
            onlyAlterns: false,
            assembly: 0,
            offset: 0,
            limit: 0
        }).subscribe(response => {
            this.assemblyList = response;
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
    filterTerritorials(d) {
        const f = d.target.value.toString().trim().toLowerCase();
        if (f.length === 0) {
            this.territorialListFiltered = this.territorialList;
        }
        else {
            this.territorialListFiltered = this.territorialList.filter(data => data.name.toLowerCase().includes(f));
        }
    }
    selectCommission(m) {
        this.getAssemblymenTerritorialList(m.id);
        this.territorialIdSelected = m.id;
        this.showListAssembly = true;
    }
};
TabAmbitoPage.ctorParameters = () => [
    { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
TabAmbitoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-ambito',
        template: __webpack_require__(/*! raw-loader!./tab-ambito.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-ambito/tab-ambito.page.html"),
        styles: [__webpack_require__(/*! ./tab-ambito.page.scss */ "./src/app/components/tabs/tab-ambito/tab-ambito.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], TabAmbitoPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tab-ambito-tab-ambito-module-es2015.js.map