(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tab-sesiones-tab-sesiones-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-sesiones/tab-sesiones.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tabs/tab-sesiones/tab-sesiones.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div style=\"font-size: 12px;margin-top: 2%;\" class=\"ion-text-center\">\n        <span *ngIf=\"session.length==0\" >No se encuentran sesiones guardadas</span>\n    </div>\n  <ion-card class=\"cardStyles\" *ngFor=\"let item of session; let i = index\">\n      <ion-grid >\n          <ion-row>\n              <ion-col style=\"font-size: 12px;\">\n                  <ion-text class=\"linkText\" (click)=\"changeView(i)\">Sesión {{item.number}} | {{item.tipo}}</ion-text><br>\n                  <ion-text></ion-text>\n                  <ion-text >{{item.date | date: 'yyyy-MM-dd'}}</ion-text>\n              </ion-col>\n              <ion-col  style=\"flex-grow: 0!important;font-size: 20px!important;\">\n                  <ion-icon name=\"calendar\"  (click)=\"openOrderApproved(item)\"></ion-icon>\n              </ion-col>\n              <ion-col style=\"flex-grow: 0!important;font-size: 20px!important;\">\n                  <ion-icon name=\"md-attach\" (click)=\"openAttachments(item,item.list)\"></ion-icon>\n              </ion-col>\n              <ion-col style=\"flex-grow: 0!important;font-size: 20px!important;\">\n                  <ion-icon name=\"md-person\" (click)=\"getIntervening(item)\"></ion-icon>\n              </ion-col>\n              <ion-col style=\"flex-grow: 0!important;font-size: 20px!important;\">\n                  <ion-icon name=\"md-trash\" (click)=\"removeSession(item)\"></ion-icon>\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n      <ion-grid  class=\"listSession\" [hidden]=\"!hiddenThemes[i]\">\n          <p style=\"font-size: x-small; text-align: right;\">\n              <ion-icon style=\"font-size: 10px; width: 20px!important;\" ios=\"ios-radio-button-on\" md=\"md-radio-button-on\"></ion-icon>Tema\n              <ion-icon style=\"font-size: 10px; width: 20px!important;\" ios=\"ios-square\" md=\"md-square\"></ion-icon>Votación\n          </p>\n          <ion-row  *ngFor=\"let theme of item.list\">\n              <ion-col>\n                  <table width=\"100%\">\n                      <tr>\n                          <td width=\"10%\" valign=\"top\">\n                              <ion-icon style=\"font-size: 10px; width: 20px!important;\" ios=\"ios-radio-button-on\" md=\"md-radio-button-on\"></ion-icon>\n                          </td>\n                          <td width=\"90%\">\n                              <ion-text style=\"font-size: small\" (click)=\"navigateTo(theme, 'temas')\">\n                                  {{ theme.description.length > 100 ? theme.description.substring(0,100)+\"...\" : theme.description }}\n                              </ion-text>\n                              <ion-grid>\n                                  <ion-row *ngFor=\"let voting of theme.list\">\n                                      <ion-col>\n                                          <table width=\"100%\">\n                                              <tr>\n                                                  <td width=\"10%\" valign=\"top\">\n                                                      <ion-icon style=\"font-size: 10px; width: 20px!important;\" ios=\"ios-square\" md=\"md-square\"></ion-icon>\n                                                  </td>\n                                                  <td width=\"90%\">\n                                                      <ion-text style=\"font-size: small\" (click)=\"navigateTo(voting, 'votaciones')\">\n                                                          {{ voting.description.length > 100 ? voting.description.substring(0,100)+\"...\" : voting.description }}\n                                                      </ion-text>\n                                                  </td>\n                                              </tr>\n                                          </table>\n                                      </ion-col>\n                                  </ion-row>\n                              </ion-grid>\n                          </td>\n                      </tr>\n                  </table>\n              </ion-col>\n          </ion-row>\n          <ion-row  *ngIf=\"item.list.length == 0\">\n              <ion-col style=\"flex-grow: 0!important;\">\n                  <div style=\"display: inline-block;\">\n                      <ion-icon style=\"font-size: 16px;\" ios=\"ios-radio-button-on\" md=\"md-radio-button-on\">\n                      </ion-icon>\n                  </div>\n              </ion-col>\n              <ion-col>\n                  <div  style=\"display: inline-block;\">\n                      <ion-text style=\"font-size: small;\">Tratamiento del orden del día</ion-text>\n                  </div>\n              </ion-col>\n          </ion-row>\n\n      </ion-grid>\n\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/tabs/tab-sesiones/tab-sesiones.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/tabs/tab-sesiones/tab-sesiones.module.ts ***!
  \*********************************************************************/
/*! exports provided: TabSesionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSesionesPageModule", function() { return TabSesionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_sesiones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-sesiones.page */ "./src/app/components/tabs/tab-sesiones/tab-sesiones.page.ts");







const routes = [
    {
        path: '',
        component: _tab_sesiones_page__WEBPACK_IMPORTED_MODULE_6__["TabSesionesPage"]
    }
];
let TabSesionesPageModule = class TabSesionesPageModule {
};
TabSesionesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tab_sesiones_page__WEBPACK_IMPORTED_MODULE_6__["TabSesionesPage"]]
    })
], TabSesionesPageModule);



/***/ }),

/***/ "./src/app/components/tabs/tab-sesiones/tab-sesiones.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/tabs/tab-sesiones/tab-sesiones.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFicy90YWItc2VzaW9uZXMvdGFiLXNlc2lvbmVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/tabs/tab-sesiones/tab-sesiones.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/tabs/tab-sesiones/tab-sesiones.page.ts ***!
  \*******************************************************************/
/*! exports provided: TabSesionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabSesionesPage", function() { return TabSesionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _modal_modal_order_aproved_modal_order_aproved_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modal/modal-order-aproved/modal-order-aproved.page */ "./src/app/components/modal/modal-order-aproved/modal-order-aproved.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_modal_attachment_modal_attachment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modal/modal-attachment/modal-attachment.page */ "./src/app/components/modal/modal-attachment/modal-attachment.page.ts");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _reducers_favSessions_session_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../reducers/favSessions/session.action */ "./src/app/reducers/favSessions/session.action.ts");
/* harmony import */ var _modal_modal_intervening_modal_intervening_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modal/modal-intervening/modal-intervening.page */ "./src/app/components/modal/modal-intervening/modal-intervening.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let TabSesionesPage = class TabSesionesPage {
    constructor(store, modalController, rest, toastController, router) {
        this.store = store;
        this.modalController = modalController;
        this.rest = rest;
        this.toastController = toastController;
        this.router = router;
        this.i = 0;
        this.hiddenThemes = [];
        this.listOrder = [];
        this.store.select('listaConfiguracion').subscribe(lista => {
            this.session = lista;
        });
    }
    ngOnInit() {
        this.viewThemes();
    }
    viewThemes() {
        let index = 0;
        this.session.forEach(data => {
            this.hiddenThemes[index] = false;
            index++;
        });
    }
    openOrderApproved(session) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_order_aproved_modal_order_aproved_page__WEBPACK_IMPORTED_MODULE_3__["ModalOrderAprovedPage"],
                componentProps: {
                    "sessionObject": session
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    // this.dataReturned = dataReturned.data;
                }
            });
            return yield modal.present();
        });
    }
    openAttachments(t, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_attachment_modal_attachment_page__WEBPACK_IMPORTED_MODULE_5__["ModalAttachmentPage"],
                componentProps: {
                    "sessionId": t.id,
                    "themeId": i.id
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    // this.dataReturned = dataReturned.data;
                }
            });
            return yield modal.present();
        });
    }
    removeSession(item) {
        const deleteList = new _reducers_favSessions_session_action__WEBPACK_IMPORTED_MODULE_7__["ConfiguracionLista"](item.id, item.number, item.startDate, item.tipo, item.date, item.list, item.initialDate, item.initialTime);
        this.store.dispatch({ type: _reducers_favSessions_session_action__WEBPACK_IMPORTED_MODULE_7__["NAME_LIST_SESSION_DELETE"], text: deleteList });
        this.presentToast('Sesión borrada de favoritos');
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    getIntervening(o) {
        this.rest.getInterveningBySession({
            agendaId: o.id
        }).subscribe(response => {
            let lst;
            lst = response;
            if (lst.length > 0) {
                this.openIntervening(lst);
            }
            else {
                this.presentToast('No existen intervenciones para la sesión.');
            }
        });
    }
    openIntervening(l) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_intervening_modal_intervening_page__WEBPACK_IMPORTED_MODULE_8__["ModalInterveningPage"],
                componentProps: {
                    "list": l
                }
            });
            return yield modal.present();
        });
    }
    changeView(pos) {
        this.hiddenThemes[pos] = !this.hiddenThemes[pos];
    }
    navigateTo(a, componente) {
        const navigationExtras = {
            queryParams: {
                id: a.id
            }
        };
        this.router.navigate([componente], navigationExtras);
    }
};
TabSesionesPage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
TabSesionesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-sesiones',
        template: __webpack_require__(/*! raw-loader!./tab-sesiones.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-sesiones/tab-sesiones.page.html"),
        styles: [__webpack_require__(/*! ./tab-sesiones.page.scss */ "./src/app/components/tabs/tab-sesiones/tab-sesiones.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _service_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
], TabSesionesPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tab-sesiones-tab-sesiones-module-es2015.js.map