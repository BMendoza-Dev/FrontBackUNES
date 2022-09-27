(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-sesiones-sesiones-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sesiones/sesiones.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sesiones/sesiones.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{properties.titleSessions}}\"></app-header>\r\n<ion-content class=\"listSession\">\r\n    <div class=\"tableSticky\">\r\n        <table width=\"100%\">\r\n            <tr>\r\n                <td align=\"center\" style=\"font-size: small; color: #a2a4ab;\" width=\"50%\">\r\n                    <ion-text>Para buscar escriba el dato en los filtros de búsqueda</ion-text>\r\n                </td>\r\n                <td width=\"50%\">\r\n                    <ion-item style=\"display: inline-block; width: 75%\">\r\n                        <ion-label position=\"floating\"># de sesión</ion-label>\r\n                        <ion-input (change)=\"getClear()\" [(ngModel)]=\"searchSession\"></ion-input>\r\n                    </ion-item>\r\n                    <ion-icon (click)=\"resetText()\" *ngIf=\"searchSession != null\"  class=\"btnOption\" name=\"md-close\" style=\"display: inline-block; font-size: 8px;\"></ion-icon>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td width=\"50%\">\r\n                    <ion-item style=\"display: inline-block; width: 75%\">\r\n                        <ion-label position=\"floating\">Fecha desde</ion-label>\r\n                        <ion-datetime (ionChange)=\"getClear()\" [(ngModel)]=\"dateFrom\" [max]=\"maxDateFrom\" [min]=\"minDateFrom\" displayFormat=\"DD/MM/YYYY\"></ion-datetime>\r\n                    </ion-item>\r\n                    <ion-icon (click)=\"resetFrom()\" *ngIf=\"dateFrom != null\" class=\"btnOption\" name=\"md-close\" style=\"display: inline-block\"></ion-icon>\r\n                </td>\r\n                <td width=\"50%\">\r\n                    <ion-item style=\"display: inline-block; width: 75%\">\r\n                        <ion-label position=\"floating\">Fecha hasta</ion-label>\r\n                        <ion-datetime (ionChange)=\"getClear()\" [(ngModel)]=\"dateTo\" [max]=\"maxDateTo\" [min]=\"minDateTo\"  displayFormat=\"DD/MM/YYYY\"></ion-datetime>\r\n                    </ion-item>\r\n                    <ion-icon (click)=\"resetTo()\" *ngIf=\"dateTo != null\" class=\"btnOption\" name=\"md-close\" style=\"display: inline-block\"></ion-icon>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <ion-card *ngFor=\"let item of changeSession; let i = index\" class=\"cardStyles\" style=\"padding-left: 5px; padding-top: 5px;\">\r\n\r\n        <ion-grid style=\"font-size: small;\">\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-text (click)=\"changeView(i)\" class=\"linkText\">Sesión {{item.number}} :: {{item.date | date: 'yyyy-MM-dd'}}</ion-text>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"4\">\r\n                    <ion-icon (click)=\"putSession(item,i)\" [ngClass]=\"{'favoriteOk':sessionStar[i]}\" class=\"linkIcon favoriteNone\" name=\"md-star\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col size=\"8\" style=\"text-align: right;\">\r\n                    <ion-icon (click)=\"openOrderApproved(item)\" class=\"linkIcon\" name=\"calendar\"></ion-icon>\r\n\r\n                    <ion-icon (click)=\"openAttachments(item,item.list)\" class=\"linkIcon\" name=\"md-attach\"></ion-icon>\r\n\r\n                    <ion-icon (click)=\"getIntervening(item)\" class=\"linkIcon\" ios=\"ios-person\" md=\"md-person\"></ion-icon>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n\r\n        <ion-grid  [hidden]=\"!hiddenThemes[i]\" class=\"listSession\">\r\n            <ion-row style=\"font-size: x-small\">\r\n                <ion-col>\r\n                    <ion-icon ios=\"ios-radio-button-on\" md=\"md-radio-button-on\" style=\"font-size: 10px; width: 20px!important;\"></ion-icon>Tema Tratado\r\n                    <ion-icon ios=\"ios-checkmark\" md=\"md-checkmark\" style=\"font-size: 10px; width: 20px!important;\"></ion-icon>Votación\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row *ngFor=\"let theme of item.list\">\r\n                <ion-col size=\"1\" style=\"text-align: right;\">\r\n                    <ion-icon ios=\"ios-radio-button-on\" md=\"md-radio-button-on\" style=\"font-size: 14px; margin-top: 5px; width: 20px!important;\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col size=\"11\">\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-text (click)=\"navigateTo(theme, 'temas')\" class=\"linkText\" style=\"font-size: small\">\r\n                                {{ theme.description.length > 100 ? theme.description.substring(0,100)+\"...\" : theme.description }}\r\n                            </ion-text>\r\n                            <ion-row *ngFor=\"let voting of theme.list\">\r\n                                <ion-col size=\"1\" style=\"text-align: right;\">\r\n                                    <ion-icon ios=\"ios-checkmark\" md=\"md-checkmark\" style=\"font-size: 12px; margin-top: 5px; width: 20px!important;\"></ion-icon>\r\n                                </ion-col>\r\n                                <ion-col size=\"11\">\r\n                                    <ion-text (click)=\"navigateTo(voting, 'votaciones')\" class=\"linkText\" style=\"font-size: small\">\r\n                                        {{ voting.description.length > 100 ? voting.description.substring(0,100)+\"...\" : voting.description }}\r\n                                    </ion-text>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row *ngIf=\"item.list.length == 0\">\r\n                <ion-col size=\"1\" style=\"text-align: right;\">\r\n                    <ion-icon ios=\"ios-radio-button-on\" md=\"md-radio-button-on\" style=\"font-size: 14px; width: 20px!important;\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col size=\"11\">\r\n                    <ion-text style=\"font-size: small;\">Tratamiento del orden del día</ion-text>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col class=\"hintText\" style=\"font-size: small\">\r\n                    Estado: {{item.tipo}}\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n\r\n    </ion-card>\r\n\r\n    <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\r\n        <ion-infinite-scroll-content loadingSpinner=\"\">\r\n        </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sesiones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sesiones.page */ "./src/app/components/sesiones/sesiones.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _sesiones_page__WEBPACK_IMPORTED_MODULE_6__["SesionesPage"]
    }
];
var SesionesPageModule = /** @class */ (function () {
    function SesionesPageModule() {
    }
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
    return SesionesPageModule;
}());



/***/ }),

/***/ "./src/app/components/sesiones/sesiones.page.scss":
/*!********************************************************!*\
  !*** ./src/app/components/sesiones/sesiones.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listSession ion-icon {\n  width: 40px;\n  font-size: 25px;\n}\n\n.tableSticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n  background-color: #ffffff;\n}\n\n.tableSticky > table {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phbmRyZXMvRXNjcml0b3Jpby9Qcm95ZWN0b3MtZGUtU29mdHdhcmUvQXBwL2FwcC1hc2FtYmxlYS9zcmMvYXBwL2NvbXBvbmVudHMvc2VzaW9uZXMvc2VzaW9uZXMucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Nlc2lvbmVzL3Nlc2lvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VzaW9uZXMvc2VzaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3RTZXNzaW9uIGlvbi1pY29ue1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4udGFibGVTdGlja3l7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOjA7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnRhYmxlU3RpY2t5ID4gdGFibGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi5saXN0U2Vzc2lvbiBpb24taWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi50YWJsZVN0aWNreSB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi50YWJsZVN0aWNreSA+IHRhYmxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _properties_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../properties/properties */ "./src/app/properties/properties.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modal_modal_attachment_modal_attachment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal-attachment/modal-attachment.page */ "./src/app/components/modal/modal-attachment/modal-attachment.page.ts");
/* harmony import */ var _modal_modal_order_aproved_modal_order_aproved_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal-order-aproved/modal-order-aproved.page */ "./src/app/components/modal/modal-order-aproved/modal-order-aproved.page.ts");
/* harmony import */ var _reducers_favSessions_session_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducers/favSessions/session.action */ "./src/app/reducers/favSessions/session.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _modal_modal_intervening_modal_intervening_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal/modal-intervening/modal-intervening.page */ "./src/app/components/modal/modal-intervening/modal-intervening.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");












var SesionesPage = /** @class */ (function () {
    function SesionesPage(properties, rest, modalController, store, toastController, alertController, navController, router) {
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
    SesionesPage.prototype.ngOnInit = function () {
    };
    SesionesPage.prototype.ionViewWillEnter = function () {
        this.changeSession = [];
        this.sessionStar = [];
        this.i = 0;
        this.getSessionsList();
    };
    SesionesPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getSessionsList(event);
        }, 500);
    };
    SesionesPage.prototype.valFavorites = function (data, index) {
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
    };
    SesionesPage.prototype.changeThemes = function () {
        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-EN');
        var dateImport;
        this.changeSession.forEach(function (dataReco) {
            dateImport = datePipe.transform(dataReco['date'], 'yyyy-MM-dd');
            /*this.rest.getListThemesBySession({
                agendaId: dataReco['id'],
                date: dateImport
            }).subscribe(responseTheme => {
                dataReco['listThemes'] = responseTheme;
            });*/
        });
    };
    SesionesPage.prototype.changeView = function (pos) {
        this.hiddenThemes[pos] = !this.hiddenThemes[pos];
    };
    SesionesPage.prototype.getClear = function () {
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
    };
    SesionesPage.prototype.openAttachments = function (t, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_modal_attachment_modal_attachment_page__WEBPACK_IMPORTED_MODULE_6__["ModalAttachmentPage"],
                            componentProps: {
                                "sessionId": t.id,
                                "themeId": i.id
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null) {
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SesionesPage.prototype.openOrderApproved = function (session) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_modal_order_aproved_modal_order_aproved_page__WEBPACK_IMPORTED_MODULE_7__["ModalOrderAprovedPage"],
                            componentProps: {
                                "sessionObject": session
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null) {
                                // this.dataReturned = dataReturned.data;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SesionesPage.prototype.putSession = function (item, index) {
        var banValidate = false;
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
            var newLista = new _reducers_favSessions_session_action__WEBPACK_IMPORTED_MODULE_8__["ConfiguracionLista"](item.id, item.number, item.startDate, item.tipo, item.date, item.list, item.initialDate, item.initialTime);
            this.store.dispatch({ type: _reducers_favSessions_session_action__WEBPACK_IMPORTED_MODULE_8__["NAME_LIST"], text: newLista });
        }
    };
    SesionesPage.prototype.removeSession = function (item, index) {
        var deleteList = new _reducers_favSessions_session_action__WEBPACK_IMPORTED_MODULE_8__["ConfiguracionLista"](item.id, item.number, item.startDate, item.tipo, item.date, item.list, item.initialDate, item.initialTime);
        this.store.dispatch({ type: _reducers_favSessions_session_action__WEBPACK_IMPORTED_MODULE_8__["NAME_LIST_SESSION_DELETE"], text: deleteList });
        this.sessionStar[index] = false;
        this.presentToast('Sesión eliminda de la sección favoritos');
    };
    SesionesPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SesionesPage.prototype.messageClose = function () {
        this.toastController.dismiss({
            'dismissed': true
        });
    };
    SesionesPage.prototype.getIntervening = function (o) {
        var _this = this;
        this.rest.getInterveningBySession({
            agendaId: o.id,
            date: o.startDate.substring(0, 10)
        }).subscribe(function (response) {
            var themeList = [];
            var lst;
            lst = response;
            if (lst.length > 0) {
                var arr = lst.map(function (p) { return p.themeId; });
                var s = new Set(arr);
                var u = Array.from(s);
                for (var _i = 0, u_1 = u; _i < u_1.length; _i++) {
                    var n = u_1[_i];
                    var al = {
                        description: '',
                        id: 0,
                        startdate: new Date(),
                        list: []
                    };
                    al.id = n;
                    for (var _a = 0, lst_1 = lst; _a < lst_1.length; _a++) {
                        var it = lst_1[_a];
                        if (it.themeId === n) {
                            al.description = it.description;
                            break;
                        }
                    }
                    themeList.push(al);
                }
                _this.openIntervening(lst, themeList);
            }
            else {
                _this.presentToast('No existen intervenciones para la sesión');
            }
        });
    };
    SesionesPage.prototype.openIntervening = function (l, t) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_modal_intervening_modal_intervening_page__WEBPACK_IMPORTED_MODULE_10__["ModalInterveningPage"],
                            componentProps: {
                                "list": l,
                                "themes": t
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
    SesionesPage.prototype.resetFrom = function () {
        this.dateFrom = null;
        this.getClear();
    };
    SesionesPage.prototype.resetTo = function () {
        this.dateTo = null;
        this.getClear();
    };
    SesionesPage.prototype.resetText = function () {
        this.searchSession = null;
        this.getClear();
    };
    SesionesPage.prototype.getSessionsList = function (event) {
        var _this = this;
        this.infiniteScroll.disabled = false;
        var index = 0;
        this.hiddenThemes = [];
        var offset = 15;
        if (event !== undefined) {
            this.i = this.i + offset;
        }
        var t = '';
        var df = '';
        var dt = '';
        if (this.searchSession != null) {
            t = this.searchSession;
        }
        if (this.dateFrom != null) {
            df = this.dateFrom.toString().substr(0, 10);
        }
        if (this.dateTo != null) {
            dt = this.dateTo.toString().substr(0, 10);
        }
        var parts;
        this.rest.getListSessions({
            sessionNumber: t,
            from: df,
            to: dt,
            offset: this.i,
        }).subscribe(function (response) {
            var _a;
            (_a = _this.changeSession).push.apply(_a, response);
            _this.changeSession.forEach(function (data) {
                parts = data.startDate.split('[');
                data['date'] = new Date(parts[0]);
                _this.valFavorites(data, index);
                _this.hiddenThemes[index] = false;
                index++;
            });
            _this.changeThemes();
            if (event) {
                event.target.complete();
            }
            if (response.length === 0 && event) {
                event.target.disabled = true;
            }
        });
    };
    SesionesPage.prototype.navigateTo = function (a, componente) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var navigationExtras;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                navigationExtras = {
                    queryParams: {
                        id: a.id
                    }
                };
                this.router.navigate([componente], navigationExtras);
                return [2 /*return*/];
            });
        });
    };
    SesionesPage.ctorParameters = function () { return [
        { type: _properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"] },
        { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
    ]; };
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
    return SesionesPage;
}());



/***/ })

}]);
//# sourceMappingURL=components-sesiones-sesiones-module-es5.js.map