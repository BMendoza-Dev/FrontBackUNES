(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-tabs-tab-alternos-tab-alternos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-alternos/tab-alternos.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tabs/tab-alternos/tab-alternos.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"stycky\">\n  <ion-select interface=\"action-sheet\" (ionChange)=\"onChange($event)\"\n              placeholder=\"Seleccione un ítem de la lista\"\n              cancel-text=\"Cancelar\"\n              [selectedText]=\"periodActive.name\"\n              style=\"border-bottom: 2px solid #a2a4ab;text-align: center;\"\n  >\n    <ion-select-option *ngFor=\"let p of arrayPeriod\"  [value]=\"p\" >{{p.name}}</ion-select-option>\n  </ion-select>\n  <ion-searchbar style=\"font-size: small;\" (change)=\"searchItems($event)\" (ionClear)=\"getClear()\" [value]=\"searchAlterno\" autocomplete=\"on\" placeholder=\"Para buscar mínimo 3 caracteres\"></ion-searchbar>\n  </div>\n  <ion-card class=\"cardStyles\" *ngFor=\"let assembly of assemblyMan; let end=last\">\n    <ion-item (click)=\"changeModal(assembly.id,assembly.imageChange)\">\n      <img [src]='assembly.imageChange'  [hidden]=\"assembly.imageChange==null || assembly.imageChange == 0\"  style=\"width: 40px; margin:5px auto;\" />\n      <ion-icon [hidden]=\"assembly.imageChange !== 0\" name=\"md-contact\" style=\"font-size: 2.5em;\"></ion-icon>\n      <ion-spinner [hidden]=\"assembly.imageChange!=null\"   name=\"circles\"></ion-spinner>\n      <ion-label style=\"font-size: smaller;margin-left: 5px;\">\n        <small class=\"linkText\">{{assembly.lastName}} {{assembly.firstName}}</small><br><span></span>\n        <small>{{assembly.territorialDivision}}</small><br><span></span>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n  <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/tabs/tab-alternos/tab-alternos.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/tabs/tab-alternos/tab-alternos.module.ts ***!
  \*********************************************************************/
/*! exports provided: TabAlternosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabAlternosPageModule", function() { return TabAlternosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_alternos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-alternos.page */ "./src/app/components/tabs/tab-alternos/tab-alternos.page.ts");







const routes = [
    {
        path: '',
        component: _tab_alternos_page__WEBPACK_IMPORTED_MODULE_6__["TabAlternosPage"]
    }
];
let TabAlternosPageModule = class TabAlternosPageModule {
};
TabAlternosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tab_alternos_page__WEBPACK_IMPORTED_MODULE_6__["TabAlternosPage"]]
    })
], TabAlternosPageModule);



/***/ }),

/***/ "./src/app/components/tabs/tab-alternos/tab-alternos.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/tabs/tab-alternos/tab-alternos.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stycky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #ffffff;\n  margin-bottom: 10px;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJlc21vcmFsZXMvSW3DoWdlbmVzL2FwcC1hc2FtYmxlYTIvc3JjL2FwcC9jb21wb25lbnRzL3RhYnMvdGFiLWFsdGVybm9zL3RhYi1hbHRlcm5vcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGFicy90YWItYWx0ZXJub3MvdGFiLWFsdGVybm9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFicy90YWItYWx0ZXJub3MvdGFiLWFsdGVybm9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHlja3l7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOjA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHotaW5kZXg6IDk5OTtcbn0iLCIuc3R5Y2t5IHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHotaW5kZXg6IDk5OTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/tabs/tab-alternos/tab-alternos.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/tabs/tab-alternos/tab-alternos.page.ts ***!
  \*******************************************************************/
/*! exports provided: TabAlternosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabAlternosPage", function() { return TabAlternosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/model */ "./src/app/interfaces/model.ts");
/* harmony import */ var _modal_modal_asambleista_modal_asambleista_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modal/modal-asambleista/modal-asambleista.page */ "./src/app/components/modal/modal-asambleista/modal-asambleista.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/rest.service */ "./src/app/service/rest.service.ts");






let TabAlternosPage = class TabAlternosPage {
    constructor(modalController, rest) {
        this.modalController = modalController;
        this.rest = rest;
        this.assemblyMan = [];
        this.searchAlterno = '';
        this.periodActive = new _interfaces_model__WEBPACK_IMPORTED_MODULE_2__["Period"]();
        this.allPeriod = [];
        this.arrayPeriod = [];
        this.i = 0;
    }
    ngOnInit() {
        this.getPeriod();
        this.getPeriodAll();
    }
    getPeriod() {
        this.rest.getPeriod().subscribe(respo => {
            this.periodActive = respo;
        }, error1 => { }, () => {
            this.listAssemblyByPeriod();
        });
    }
    getPeriodAll() {
        let i = 0;
        this.rest.getPeriodAll().subscribe(response => {
            this.allPeriod = response;
            this.allPeriod.forEach(data => {
                if (!data.name.indexOf('ASAMBLEA NACIONAL')) {
                    this.arrayPeriod[i] = data;
                    i = i + 1;
                }
            });
        }, error1 => { }, () => {
        });
    }
    onChange($event) {
        this.periodActive = $event.target.value;
        this.assemblyMan = [];
        this.listAssemblyByPeriod();
    }
    loadData(event) {
        setTimeout(() => {
            this.listAssemblyByPeriod(event);
        }, 500);
    }
    listAssemblyByPeriod(event) {
        this.infiniteScroll.disabled = false;
        const incre = 30;
        if (event !== undefined) {
            this.i = this.i + incre;
        }
        this.rest.getAssemblyMembersResource({
            periodId: this.periodActive.id,
            territorialId: 0,
            politicalPartyId: 0,
            includePicture: false,
            onlyActives: false,
            onlyAlterns: true,
            assembly: 0,
            offset: this.i,
            limit: 30
        }).subscribe(response => {
            this.assemblyMan.push(...response);
            if (this.assemblyMan.length === 0) {
                event.target.disabled = true;
                return;
            }
            if (event !== undefined) {
                event.target.complete();
            }
        }, () => {
            console.log('Ha ocurrido un error');
        }, () => {
            if (this.assemblyMan) {
                this.listAssemblyPhoto();
            }
        });
    }
    listAssemblyPhoto() {
        this.assemblyMan.forEach((data) => {
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
                data['imageChange'] = 0;
            }
        });
    }
    changeModal(id, image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_asambleista_modal_asambleista_page__WEBPACK_IMPORTED_MODULE_3__["ModalAsambleistaPage"],
                componentProps: {
                    'periodActive': this.periodActive.id,
                    'idAssembly': id,
                    'imageChange': image,
                    'assembly': this.assemblyMan.filter(data => data.id === id)
                }
            });
            return yield modal.present();
        });
    }
    searchItems(event) {
        const f = event.target.value;
        if (f && f.toString().length > 2) {
            this.rest.getAssemblyMembersResource({
                periodId: this.periodActive.id,
                territorialId: 0,
                politicalPartyId: 0,
                includePicture: false,
                onlyActives: false,
                onlyAlterns: true,
                assembly: f,
                offset: 0,
                limit: 30
            }).subscribe(response => {
                this.assemblyMan = response;
            }, () => {
            }, () => {
                if (this.assemblyMan) {
                    this.listAssemblyPhoto();
                    this.infiniteScroll.disabled = true;
                }
            });
        }
        else if (this.searchAlterno === '') {
            this.assemblyMan = [];
            this.listAssemblyByPeriod();
        }
    }
    getClear() {
        this.i = 0;
        this.assemblyMan = [];
        this.listAssemblyByPeriod();
    }
};
TabAlternosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
], TabAlternosPage.prototype, "infiniteScroll", void 0);
TabAlternosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-alternos',
        template: __webpack_require__(/*! raw-loader!./tab-alternos.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-alternos/tab-alternos.page.html"),
        styles: [__webpack_require__(/*! ./tab-alternos.page.scss */ "./src/app/components/tabs/tab-alternos/tab-alternos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _service_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]])
], TabAlternosPage);



/***/ })

}]);
//# sourceMappingURL=components-tabs-tab-alternos-tab-alternos-module-es2015.js.map