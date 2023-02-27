(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-sesiones-sesiones-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sesiones/sesiones.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sesiones/sesiones.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{properties.titleSessions}}\"></app-header>\n<ion-content class=\"listSession\">\n    <div class=\"tableSticky\">\n        <table width=\"100%\">\n            <tr>\n                <td align=\"center\" style=\"font-size: small; color: #a2a4ab;\" width=\"50%\">\n                    <ion-text>Para buscar escriba el dato en los filtros de búsqueda</ion-text>\n                </td>\n                <td width=\"50%\">\n                    <ion-item style=\"display: inline-block; width: 75%\">\n                        <ion-label position=\"floating\"># de sesión</ion-label>\n                        <ion-input (change)=\"getClear()\" [(ngModel)]=\"searchSession\"></ion-input>\n                    </ion-item>\n                    <ion-icon (click)=\"resetText()\" *ngIf=\"searchSession != null\"  class=\"btnOption\" name=\"md-close\" style=\"display: inline-block; font-size: 8px;\"></ion-icon>\n                </td>\n            </tr>\n            <tr>\n                <td width=\"50%\">\n                    <ion-item style=\"display: inline-block; width: 75%\">\n                        <ion-label position=\"floating\">Fecha desde</ion-label>\n                        <ion-datetime (ionChange)=\"getClear()\" [(ngModel)]=\"dateFrom\" [max]=\"maxDateFrom\" [min]=\"minDateFrom\" displayFormat=\"DD/MM/YYYY\"></ion-datetime>\n                    </ion-item>\n                    <ion-icon (click)=\"resetFrom()\" *ngIf=\"dateFrom != null\" class=\"btnOption\" name=\"md-close\" style=\"display: inline-block\"></ion-icon>\n                </td>\n                <td width=\"50%\">\n                    <ion-item style=\"display: inline-block; width: 75%\">\n                        <ion-label position=\"floating\">Fecha hasta</ion-label>\n                        <ion-datetime (ionChange)=\"getClear()\" [(ngModel)]=\"dateTo\" [max]=\"maxDateTo\" [min]=\"minDateTo\"  displayFormat=\"DD/MM/YYYY\"></ion-datetime>\n                    </ion-item>\n                    <ion-icon (click)=\"resetTo()\" *ngIf=\"dateTo != null\" class=\"btnOption\" name=\"md-close\" style=\"display: inline-block\"></ion-icon>\n                </td>\n            </tr>\n        </table>\n    </div>\n    <ion-card *ngFor=\"let item of changeSession; let i = index\" class=\"cardStyles\" style=\"padding-left: 5px; padding-top: 5px;\">\n\n        <ion-grid style=\"font-size: small;\">\n            <ion-row>\n                <ion-col>\n                    <ion-text (click)=\"changeView(i)\" class=\"linkText\">Sesión {{item.number}} :: {{item.date | date: 'yyyy-MM-dd'}}</ion-text>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"4\">\n                    <ion-icon (click)=\"putSession(item,i)\" [ngClass]=\"{'favoriteOk':sessionStar[i]}\" class=\"linkIcon favoriteNone\" name=\"md-star\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"8\" style=\"text-align: right;\">\n                    <ion-icon (click)=\"openOrderApproved(item)\" class=\"linkIcon\" name=\"calendar\"></ion-icon>\n\n                    <ion-icon (click)=\"openAttachments(item,item.list)\" class=\"linkIcon\" name=\"md-attach\"></ion-icon>\n\n                    <ion-icon (click)=\"getIntervening(item)\" class=\"linkIcon\" ios=\"ios-person\" md=\"md-person\"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ion-grid  [hidden]=\"!hiddenThemes[i]\" class=\"listSession\">\n            <ion-row style=\"font-size: x-small\">\n                <ion-col>\n                    <ion-icon ios=\"ios-radio-button-on\" md=\"md-radio-button-on\" style=\"font-size: 10px; width: 20px!important;\"></ion-icon>Tema Tratado\n                    <ion-icon ios=\"ios-checkmark\" md=\"md-checkmark\" style=\"font-size: 10px; width: 20px!important;\"></ion-icon>Votación\n                </ion-col>\n            </ion-row>\n            <ion-row *ngFor=\"let theme of item.list\">\n                <ion-col size=\"1\" style=\"text-align: right;\">\n                    <ion-icon ios=\"ios-radio-button-on\" md=\"md-radio-button-on\" style=\"font-size: 14px; margin-top: 5px; width: 20px!important;\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"11\">\n                    <ion-row>\n                        <ion-col>\n                            <ion-text (click)=\"navigateTo(theme, 'temas')\" class=\"linkText\" style=\"font-size: small\">\n                                {{ theme.description.length > 100 ? theme.description.substring(0,100)+\"...\" : theme.description }}\n                            </ion-text>\n                            <ion-row *ngFor=\"let voting of theme.list\">\n                                <ion-col size=\"1\" style=\"text-align: right;\">\n                                    <ion-icon ios=\"ios-checkmark\" md=\"md-checkmark\" style=\"font-size: 12px; margin-top: 5px; width: 20px!important;\"></ion-icon>\n                                </ion-col>\n                                <ion-col size=\"11\">\n                                    <ion-text (click)=\"navigateTo(voting, 'votaciones')\" class=\"linkText\" style=\"font-size: small\">\n                                        {{ voting.description.length > 100 ? voting.description.substring(0,100)+\"...\" : voting.description }}\n                                    </ion-text>\n                                </ion-col>\n                            </ion-row>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"item.list.length == 0\">\n                <ion-col size=\"1\" style=\"text-align: right;\">\n                    <ion-icon ios=\"ios-radio-button-on\" md=\"md-radio-button-on\" style=\"font-size: 14px; width: 20px!important;\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"11\">\n                    <ion-text style=\"font-size: small;\">Tratamiento del orden del día</ion-text>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class=\"hintText\" style=\"font-size: small\">\n                    Estado: {{item.tipo}}\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </ion-card>\n\n    <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/sesiones/sesiones.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/sesiones/sesiones.module.ts ***!
  \********************************************************/
/*! exports provided: SesionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SesionesPageModule", function() { return SesionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sesiones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sesiones.page */ "./src/app/components/sesiones/sesiones.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _sesiones_page__WEBPACK_IMPORTED_MODULE_6__["SesionesPage"]
    }
];
let SesionesPageModule = class SesionesPageModule {
};
SesionesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_sesiones_page__WEBPACK_IMPORTED_MODULE_6__["SesionesPage"]]
    })
], SesionesPageModule);



/***/ }),

/***/ "./src/app/components/sesiones/sesiones.page.scss":
/*!********************************************************!*\
  !*** ./src/app/components/sesiones/sesiones.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listSession ion-icon {\n  width: 40px;\n  font-size: 25px;\n}\n\n.tableSticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n  background-color: #ffffff;\n}\n\n.tableSticky > table {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJlc21vcmFsZXMvSW3DoWdlbmVzL2FwcC1hc2FtYmxlYTIvc3JjL2FwcC9jb21wb25lbnRzL3Nlc2lvbmVzL3Nlc2lvbmVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZXNpb25lcy9zZXNpb25lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nlc2lvbmVzL3Nlc2lvbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0U2Vzc2lvbiBpb24taWNvbntcbiAgd2lkdGg6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi50YWJsZVN0aWNreXtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6MDtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLnRhYmxlU3RpY2t5ID4gdGFibGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIi5saXN0U2Vzc2lvbiBpb24taWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi50YWJsZVN0aWNreSB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi50YWJsZVN0aWNreSA+IHRhYmxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/sesiones/sesiones.page.ts":
/*!******************************************************!*\
  !*** ./src/app/components/sesiones/sesiones.page.ts ***!
  \******************************************************/
/*! exports provided: SesionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SesionesPage", function() { return SesionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _properties_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../properties/properties */ "./src/app/properties/properties.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _modal_modal_attachment_modal_attachment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal-attachment/modal-attachment.page */ "./src/app/components/modal/modal-attachment/modal-attachment.page.ts");
/* harmony import */ var _modal_modal_order_aproved_modal_order_aproved_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal-order-aproved/modal-order-aproved.page */ "./src/app/components/modal/modal-order-aproved/modal-order-aproved.page.ts");
/* harmony import */ var _reducers_favSessions_session_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducers/favSessions/session.action */ "./src/app/reducers/favSessions/session.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _modal_modal_intervening_modal_intervening_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal/modal-intervening/modal-intervening.page */ "./src/app/components/modal/modal-intervening/modal-intervening.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");












let SesionesPage = class SesionesPage {
    constructor(properties, rest, modalController, store, toastController, alertController, navController, router) {
        this.properties = properties;
        this.rest = rest;
        this.modalController = modalController;
        this.store = store;
        this.toastController = toastController;
        this.alertController = alertController;
        this.navController = navController;
        this.router = router;
        this.changeSession = [];
        this.sessionStorage = [];
        this.sessionStar = [];
        this.j = 0;
        this.l = 0;
        this.searchSession = null;
        this.i = 0;
        this.hiddenThemes = [];
        this.dateFrom = null;
        this.dateTo = null;
        this.minDateFrom = new Date('2012-02-28').toISOString();
        this.maxDateFrom = new Date().toISOString();
        this.minDateTo = new Date('2012-02-28').toISOString();
        this.maxDateTo = new Date().toISOString();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.changeSession = [];
        this.sessionStar = [];
        this.i = 0;
        this.getSessionsList();
    }
    loadData(event) {
        setTimeout(() => {
            this.getSessionsList(event);
        }, 500);
    }
    valFavorites(data, index) {
        this.sessionStorage = JSON.parse(localStorage.getItem('session'));
        if (this.sessionStorage) {
            for (this.l = 0; this.l < this.sessionStorage.length; this.l++) {
                if ((this.sessionStorage[this.l].number === data.number) && (this.sessionStorage[this.l].startDate === data.startDate)) {
                    this.sessionStar[index] = true;
                    this.l = this.sessionStorage.length;
                }
                else {
                    this.sessionStar[index] = false;
                }
            }
        }
    }
    changeThemes() {
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-EN');
        let dateImport;
        this.changeSession.forEach(dataReco => {
            dateImport = datePipe.transform(dataReco['date'], 'yyyy-MM-dd');
            /*this.rest.getListThemesBySession({
                agendaId: dataReco['id'],
                date: dateImport
            }).subscribe(responseTheme => {
                dataReco['listThemes'] = responseTheme;
            });*/
        });
    }
    changeView(pos) {
        this.hiddenThemes[pos] = !this.hiddenThemes[pos];
    }
    getClear() {
        if (this.dateFrom !== null) {
            this.minDateTo = new Date(this.dateFrom).toISOString();
        }
        else {
            this.minDateTo = new Date('2012-02-28').toISOString();
        }
        if (this.dateTo !== null) {
            this.maxDateFrom = new Date(this.dateTo).toISOString();
        }
        else {
            this.maxDateFrom = new Date().toISOString();
        }
        this.i = 0;
        this.changeSession = [];
        this.getSessionsList();
    }
    openAttachments(t, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_attachment_modal_attachment_page__WEBPACK_IMPORTED_MODULE_6__["ModalAttachmentPage"],
                componentProps: {
                    "sessionId": t.id,
                    "themeId": i.id
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                }
            });
            return yield modal.present();
        });
    }
    openOrderApproved(session) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_order_aproved_modal_order_aproved_page__WEBPACK_IMPORTED_MODULE_7__["ModalOrderAprovedPage"],
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
    putSession(item, index) {
        let banValidate = false;
        this.sessionStorage = JSON.parse(localStorage.getItem('session'));
        if (this.sessionStorage) {
            for (this.j = 0; this.j < this.sessionStorage.length; this.j++) {
                if ((this.sessionStorage[this.j].number === item.number) && (this.sessionStorage[this.j].startDate === item.startDate)) {
                    // this.presentToast('La sesión ' + this.sessionStorage[this.j].number + ' ya se encuentra en favoritos')
                    this.removeSession(item, index);
                    banValidate = false;
                    return;
                }
                else {
                    banValidate = true;
                }
            }
        }
        else {
            banValidate = true;
        }
        if (banValidate === true) {
            this.sessionStar[index] = true;
            this.presentToast('Se añadio a favoritos la sesión seleccionada');
            const newLista = new _reducers_favSessions_session_action__WEBPACK_IMPORTED_MODULE_8__["ConfiguracionLista"](item.id, item.number, item.startDate, item.tipo, item.date, item.list, item.initialDate, item.initialTime);
            this.store.dispatch({ type: _reducers_favSessions_session_action__WEBPACK_IMPORTED_MODULE_8__["NAME_LIST"], text: newLista });
        }
    }
    removeSession(item, index) {
        const deleteList = new _reducers_favSessions_session_action__WEBPACK_IMPORTED_MODULE_8__["ConfiguracionLista"](item.id, item.number, item.startDate, item.tipo, item.date, item.list, item.initialDate, item.initialTime);
        this.store.dispatch({ type: _reducers_favSessions_session_action__WEBPACK_IMPORTED_MODULE_8__["NAME_LIST_SESSION_DELETE"], text: deleteList });
        this.sessionStar[index] = false;
        this.presentToast('Sesión eliminda de la sección favoritos');
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
    messageClose() {
        this.toastController.dismiss({
            'dismissed': true
        });
    }
    getIntervening(o) {
        this.rest.getInterveningBySession({
            agendaId: o.id,
            date: o.startDate.substring(0, 10)
        }).subscribe(response => {
            let themeList = [];
            let lst;
            lst = response;
            if (lst.length > 0) {
                const arr = lst.map(p => p.themeId);
                const s = new Set(arr);
                const u = Array.from(s);
                for (const n of u) {
                    let al = {
                        description: '',
                        id: 0,
                        startdate: new Date(),
                        list: []
                    };
                    al.id = n;
                    for (const it of lst) {
                        if (it.themeId === n) {
                            al.description = it.description;
                            break;
                        }
                    }
                    themeList.push(al);
                }
                this.openIntervening(lst, themeList);
            }
            else {
                this.presentToast('No existen intervenciones para la sesión');
            }
        });
    }
    openIntervening(l, t) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_intervening_modal_intervening_page__WEBPACK_IMPORTED_MODULE_10__["ModalInterveningPage"],
                componentProps: {
                    "list": l,
                    "themes": t
                }
            });
            return yield modal.present();
        });
    }
    resetFrom() {
        this.dateFrom = null;
        this.getClear();
    }
    resetTo() {
        this.dateTo = null;
        this.getClear();
    }
    resetText() {
        this.searchSession = null;
        this.getClear();
    }
    getSessionsList(event) {
        this.infiniteScroll.disabled = false;
        let index = 0;
        this.hiddenThemes = [];
        const offset = 15;
        if (event !== undefined) {
            this.i = this.i + offset;
        }
        let t = '';
        let df = '';
        let dt = '';
        if (this.searchSession != null) {
            t = this.searchSession;
        }
        if (this.dateFrom != null) {
            df = this.dateFrom.toString().substr(0, 10);
        }
        if (this.dateTo != null) {
            dt = this.dateTo.toString().substr(0, 10);
        }
        let parts;
        this.rest.getListSessions({
            sessionNumber: t,
            from: df,
            to: dt,
            offset: this.i,
        }).subscribe(response => {
            this.changeSession.push(...response);
            this.changeSession.forEach(data => {
                parts = data.startDate.split('[');
                data['date'] = new Date(parts[0]);
                this.valFavorites(data, index);
                this.hiddenThemes[index] = false;
                index++;
            });
            this.changeThemes();
            if (event) {
                event.target.complete();
            }
            if (response.length === 0 && event) {
                event.target.disabled = true;
            }
        });
    }
    navigateTo(a, componente) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const navigationExtras = {
                queryParams: {
                    id: a.id
                }
            };
            this.router.navigate([componente], navigationExtras);
        });
    }
};
SesionesPage.ctorParameters = () => [
    { type: _properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"] },
    { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
], SesionesPage.prototype, "infiniteScroll", void 0);
SesionesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sesiones',
        template: __webpack_require__(/*! raw-loader!./sesiones.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/sesiones/sesiones.page.html"),
        styles: [__webpack_require__(/*! ./sesiones.page.scss */ "./src/app/components/sesiones/sesiones.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"],
        _service_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
], SesionesPage);



/***/ })

}]);
//# sourceMappingURL=components-sesiones-sesiones-module-es2015.js.map