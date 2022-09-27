(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-temas-temas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/temas/temas.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/temas/temas.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{properties.titleThemes}}\"></app-header>\r\n<ion-content>\r\n    <!--<ion-toolbar [hidden]=\"hiddenSearch\">\r\n        <ion-searchbar (ionClear)=\"getClear()\" (change)=\"getItems($event)\"  autocomplete=\"on\" [value]=\"searchTheme\" placeholder=\"Para buscar mínimo 3 caracteres\"></ion-searchbar>\r\n    </ion-toolbar>-->\r\n    <form>\r\n        <div class=\"tableSticky\" [hidden]=\"hiddenSearch\">\r\n            <table  width=\"100%\" style=\"margin-left: 2%;\">\r\n                <tr >\r\n                    <td align=\"center\" colspan=\"2\" style=\"font-size: small; color: #a2a4ab;\">\r\n                        <ion-text>Filtros de búsqueda</ion-text>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <ion-item style=\"display: inline-block; width: 80%\">\r\n                            <ion-label position=\"floating\" style=\"text-align: left\">Tema</ion-label>\r\n                            <ion-input  (change)=\"getChange()\"  style=\"font-size: 12px;\"\r\n                                        [(ngModel)]=\"searchTheme\" [ngModelOptions]=\"{standalone: true}\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-icon *ngIf=\"searchTheme != ''\" style=\"display: inline-block; font-size: 8px;\"  name=\"md-close\" class=\"btnOption\" (click)=\"resetTextFirst()\"></ion-icon>\r\n                    </td>\r\n                    <td width=\"50%\">\r\n                        <ion-item style=\"display: inline-block; width: 80%\">\r\n                            <ion-label position=\"floating\"># de sesión</ion-label>\r\n                            <ion-input (change)=\"getChange()\"\r\n                                       [(ngModel)]=\"sessionNumber\" [ngModelOptions]=\"{standalone: true}\"></ion-input>\r\n                        </ion-item>\r\n                        <ion-icon *ngIf=\"sessionNumber != null\" style=\"display: inline-block; font-size: 8px;\"  name=\"md-close\" class=\"btnOption\" (click)=\"resetText()\"></ion-icon>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td width=\"50%\">\r\n                        <ion-item style=\"display: inline-block; width: 80%\">\r\n                            <ion-label position=\"floating\" >Fecha desde</ion-label>\r\n                            <ion-datetime (ionChange)=\"getChange()\"  displayFormat=\"DD/MM/YYYY\" name=\"from\" [min]=\"minDateFrom\" [max]=\"maxDateFrom\" [(ngModel)]=\"dateFrom\"  ></ion-datetime>\r\n                        </ion-item>\r\n                        <ion-icon *ngIf=\"dateFrom != null\" style=\"display: inline-block\" name=\"md-close\" class=\"btnOption\" (click)=\"resetFrom()\"></ion-icon>\r\n                    </td>\r\n                    <td width=\"50%\">\r\n                        <ion-item style=\"display: inline-block; width: 80%\">\r\n                            <ion-label position=\"floating\">Fecha hasta</ion-label>\r\n                            <ion-datetime (ionChange)=\"getChange()\" displayFormat=\"DD/MM/YYYY\"  [min]=\"minDateTo\" [max]=\"maxDateTo\" name=\"dateTo\" [(ngModel)]=\"dateTo\" ></ion-datetime>\r\n                        </ion-item>\r\n                        <ion-icon *ngIf=\"dateTo != null\" style=\"display: inline-block\" name=\"md-close\" class=\"btnOption\" (click)=\"resetTo()\"></ion-icon>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <ion-card [hidden]=\"!listItemsSearch\">\r\n          <ion-list  class=\"listSearch\">\r\n            <ion-item  lines=\"none\" style=\"height: 35px;\">\r\n              <ion-text style=\"font-size: small;\">Búsqueda rápida</ion-text>\r\n            </ion-item>\r\n            <!--<ion-item lines=\"none\" (click)=\"changeSearch('Proyecto de Ley')\">\r\n                <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\r\n                <span>Proyectos de Ley</span>\r\n            </ion-item>-->\r\n            <ion-item lines=\"none\" (click)=\"changeSearch('Proyecto de Resolución')\">\r\n                <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\r\n                <span>Proyectos de Resolución</span>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" (click)=\"changeSearch('Juicio Político')\">\r\n                <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\r\n                <span>Juicios Políticos</span>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" (click)=\"changeSearch('Comparecencia')\">\r\n                <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\r\n                <span>Solicitudes de Comparecencia</span>\r\n            </ion-item>\r\n            <!--<ion-item lines=\"none\" (click)=\"changeSearch('Informe')\">\r\n                <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\r\n                <span>Informes</span>\r\n            </ion-item>-->\r\n              <ion-item lines=\"none\" (click)=\"changeSearch('Informe para Primer Debate')\">\r\n                  <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\r\n                  <span>Informe para Primer Debate</span>\r\n              </ion-item>\r\n              <ion-item lines=\"none\" (click)=\"changeSearch('Informe para Segundo Debate')\">\r\n                  <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\r\n                  <span>Informe para Segundo Debate</span>\r\n              </ion-item>\r\n              <ion-item lines=\"none\" (click)=\"changeSearch('Objeción Parcial')\">\r\n                  <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\r\n                  <span>Objeción Parcial</span>\r\n              </ion-item>\r\n          </ion-list>\r\n        </ion-card>\r\n        <ion-list [hidden]=\"!listItemsTheme\">\r\n        <ion-item *ngFor=\"let item of theme; let i = index\">\r\n\r\n            <ion-grid class=\"lisThemes\">\r\n                <ion-row>\r\n                    <td colspan=\"2\" style=\"font-size: 12px;\">\r\n                        <ion-text>{{ item.description }}</ion-text>\r\n                    </td>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <td colspan=\"2\" style=\"font-size: 11px;\">\r\n                        <div style=\"width: 100%; height: 5px;\"></div>\r\n                        <ion-text>Sesión:{{item.agendaNumber}}</ion-text>\r\n                    </td>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <td colspan=\"2\" style=\"font-size: 11px;\">\r\n                        <ion-text *ngIf=\"item.dates!=''\">Tratado en: {{item.dates}}</ion-text>\r\n                    </td>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <td colspan=\"2\" style=\"font-size: 11px;\">\r\n                        <ion-text *ngIf=\"item.dates==''\">El tema aún no es debatido</ion-text>\r\n                    </td>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <td width=\"35%\">\r\n                        <ion-icon name=\"md-star\" class=\"linkIcon favoriteNone\" [ngClass]=\"{'favoriteOk':themeStar[i]}\" (click)=\"putTheme(item,i)\"></ion-icon>\r\n                    </td>\r\n                    <td width=\"65%\" style=\"text-align: right;\">\r\n                        <ion-icon name=\"md-document\" class=\"linkIcon\" (click)=\"openAttachments(item)\"></ion-icon>\r\n                        &nbsp;\r\n                        <ion-icon ios=\"ios-person\" md=\"md-person\" class=\"linkIcon\" (click)=\"getIntervening(item)\"></ion-icon>\r\n                    </td>\r\n                </ion-row>\r\n            </ion-grid>\r\n\r\n        </ion-item>\r\n      </ion-list>\r\n    </form>\r\n  <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\r\n        <ion-infinite-scroll-content loadingSpinner=\"\">\r\n        </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/components/temas/temas.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/temas/temas.module.ts ***!
  \**************************************************/
/*! exports provided: TemasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemasPageModule", function() { return TemasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _temas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./temas.page */ "./src/app/components/temas/temas.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _temas_page__WEBPACK_IMPORTED_MODULE_6__["TemasPage"]
    }
];
let TemasPageModule = class TemasPageModule {
};
TemasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_temas_page__WEBPACK_IMPORTED_MODULE_6__["TemasPage"]]
    })
], TemasPageModule);



/***/ }),

/***/ "./src/app/components/temas/temas.page.scss":
/*!**************************************************!*\
  !*** ./src/app/components/temas/temas.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lisThemes ion-icon {\n  font-size: 18px;\n}\n\nion-toolbar {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  margin-bottom: 10px;\n  z-index: 999;\n}\n\n.tableSticky {\n  margin-top: 3%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phbmRyZXMvRXNjcml0b3Jpby9Qcm95ZWN0b3MtZGUtU29mdHdhcmUvQXBwL2FwcC1hc2FtYmxlYS9zcmMvYXBwL2NvbXBvbmVudHMvdGVtYXMvdGVtYXMucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RlbWFzL3RlbWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURDQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVtYXMvdGVtYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc1RoZW1lcyBpb24taWNvbntcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOjA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuLnRhYmxlU3RpY2t5e1xyXG4gIG1hcmdpbi10b3A6MyU7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOjA7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuIiwiLmxpc1RoZW1lcyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4udGFibGVTdGlja3kge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/temas/temas.page.ts":
/*!************************************************!*\
  !*** ./src/app/components/temas/temas.page.ts ***!
  \************************************************/
/*! exports provided: TemasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemasPage", function() { return TemasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _properties_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../properties/properties */ "./src/app/properties/properties.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_modal_attachment_modal_attachment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal-attachment/modal-attachment.page */ "./src/app/components/modal/modal-attachment/modal-attachment.page.ts");
/* harmony import */ var _modal_modal_intervening_modal_intervening_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal-intervening/modal-intervening.page */ "./src/app/components/modal/modal-intervening/modal-intervening.page.ts");
/* harmony import */ var _reducers_favThemes_theme_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers/favThemes/theme.action */ "./src/app/reducers/favThemes/theme.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let TemasPage = class TemasPage {
    constructor(getRest, properties, modalController, alertController, store, toastController, route) {
        this.getRest = getRest;
        this.properties = properties;
        this.modalController = modalController;
        this.alertController = alertController;
        this.store = store;
        this.toastController = toastController;
        this.route = route;
        this.searchTheme = '';
        this.sessionNumber = null;
        this.dateFrom = null;
        this.dateTo = null;
        this.listFilterTheme = false;
        this.hiddenSearch = false;
        this.listItemsTheme = false;
        this.listItemsSearch = true;
        this.theme = [];
        this.sessionStorage = [];
        this.minDateFrom = new Date('2012-02-28').toISOString();
        this.maxDateFrom = new Date().toISOString();
        this.minDateTo = new Date('2012-02-28').toISOString();
        this.maxDateTo = new Date().toISOString();
        this.i = 0;
        this.j = 0;
        this.l = 0;
        this.k = 0;
        this.m = 0;
        this.banValidate = false;
        this.themeStar = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        const idTheme = this.route.snapshot.queryParamMap.get('id');
        if (idTheme !== null) {
            this.listItemsSearch = false;
            this.listItemsTheme = true;
            this.infiniteScroll.disabled = true;
            this.hiddenSearch = true;
            this.getThemeById(idTheme);
        }
        else {
            this.listItemsSearch = true;
            this.listItemsTheme = false;
            this.searchTheme = '';
            this.theme = [];
        }
    }
    /*
    Método que consulta un tema por ID desde el componente de Sesiones.
     */
    getThemeById(idTheme) {
        this.getRest.getThemes({
            id: idTheme,
            search: '',
            sessionNumber: '',
            dateFrom: '',
            dateTo: '',
            offset: 0
        }).subscribe(response => {
            this.theme = response;
        });
    }
    loadData(event) {
        setTimeout(() => {
            this.changeSearch(this.searchTheme, event);
        }, 500);
    }
    changeSearch(textSearch, event) {
        let df = '';
        let dt = '';
        let sn = '';
        if (this.dateFrom != null) {
            df = this.dateFrom.toString().substr(0, 10);
        }
        if (this.dateTo != null) {
            dt = this.dateTo.toString().substr(0, 10);
        }
        if (this.sessionNumber != null) {
            sn = this.sessionNumber.toString().substr(0, 10);
        }
        this.k = 0;
        const incre = 30;
        if (event !== undefined) {
            this.j = this.j + incre;
        }
        this.searchTheme = textSearch;
        // Reset items back to all of the items
        if (textSearch !== '' || sn !== '' || df !== '' || dt !== '') {
            this.listItemsSearch = false;
            this.listFilterTheme = false;
            this.listItemsTheme = true;
            this.getRest.getThemes({
                id: '',
                search: this.searchTheme,
                sessionNumber: sn,
                dateFrom: df,
                dateTo: dt,
                offset: this.j
            }).subscribe(response => {
                if (response.length > 0) {
                    if (event !== undefined) {
                        this.theme.push(...response);
                        this.theme.forEach(data => {
                            this.valFavorites(data['description'], this.k);
                            this.k++;
                        });
                        if (event) {
                            event.target.complete();
                        }
                    }
                    else {
                        this.theme = response;
                        this.theme.forEach(data => {
                            this.valFavorites(data['description'], this.k);
                            this.k++;
                        });
                    }
                }
                else {
                    if (response.length === 0) {
                        event.target.disabled = true;
                    }
                }
            });
        }
        else {
            this.listItemsTheme = false;
            this.listItemsSearch = true;
            this.listFilterTheme = true;
        }
    }
    resetTextFirst() {
        this.searchTheme = '';
        this.getChange();
    }
    resetText() {
        this.sessionNumber = null;
        this.getChange();
    }
    resetFrom() {
        this.dateFrom = null;
        this.getChange();
    }
    resetTo() {
        this.dateTo = null;
        this.getChange();
    }
    /*getClear() {
        this.i = 0;
        this.j = 0;
        this.searchTheme = '';
        this.theme = [];
        this.listItemsTheme = false;
        this.listItemsSearch = true;
    }*/
    getChange() {
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
        this.j = 0;
        this.theme = [];
        this.infiniteScroll.disabled = false;
        this.changeSearch(this.searchTheme, undefined);
    }
    openAttachments(t) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_attachment_modal_attachment_page__WEBPACK_IMPORTED_MODULE_5__["ModalAttachmentPage"],
                componentProps: {
                    "sessionId": t.agendaId,
                    "themeId": t.id
                }
            });
            return yield modal.present();
        });
    }
    getIntervening(t) {
        this.getRest.getInterveningByTheme({
            themeId: t.id
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
                this.presentToast('No existen intervenciones para el tema');
            }
        });
    }
    openIntervening(l, t) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_intervening_modal_intervening_page__WEBPACK_IMPORTED_MODULE_6__["ModalInterveningPage"],
                componentProps: {
                    "list": l,
                    "themes": t
                }
            });
            return yield modal.present();
        });
    }
    presentAlert(note) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message: note,
                buttons: ['Aceptar']
            });
            yield alert.present();
        });
    }
    putTheme(item, index) {
        this.banValidate = false;
        this.sessionStorage = JSON.parse(localStorage.getItem('theme'));
        if (this.sessionStorage) {
            for (this.m = 0; this.m < this.sessionStorage.length; this.m++) {
                if (this.sessionStorage[this.m].description === item.description) {
                    // this.presentToast('El tema ya se encuentra en favoritos');
                    this.removeTheme(item, index);
                    this.banValidate = false;
                    return;
                }
                else {
                    this.banValidate = true;
                }
            }
        }
        else {
            this.banValidate = true;
        }
        if (this.banValidate === true) {
            this.themeStar[index] = true;
            this.presentToast('Se añadio a favoritos el tema seleccionado');
            const newListaTheme = new _reducers_favThemes_theme_action__WEBPACK_IMPORTED_MODULE_7__["ConfiguracionListaTheme"](item.agendaId, item.agendaNumber, item.agendaStartDate, item.approvedOrder, item.dates, item.description, item.id);
            this.store.dispatch({ type: _reducers_favThemes_theme_action__WEBPACK_IMPORTED_MODULE_7__["NAME_LIST_THEME"], text: newListaTheme });
        }
    }
    removeTheme(item, index) {
        const deleteList = new _reducers_favThemes_theme_action__WEBPACK_IMPORTED_MODULE_7__["ConfiguracionListaTheme"](item.agendaId, item.agendaNumber, item.agendaStartDate, item.approvedOrder, item.dates, item.description, item.id);
        this.store.dispatch({ type: _reducers_favThemes_theme_action__WEBPACK_IMPORTED_MODULE_7__["NAME_LIST_THEME_DELETE"], text: deleteList });
        this.themeStar[index] = false;
        this.presentToast('Tema eliminado de la sección de favoritos');
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
    /*
        Método que indica en el icono star que temas estan guardados en favoritos
     */
    valFavorites(data, index) {
        this.sessionStorage = JSON.parse(localStorage.getItem('theme'));
        if (this.sessionStorage) {
            for (this.l = 0; this.l < this.sessionStorage.length; this.l++) {
                if (this.sessionStorage[this.l].description === data) {
                    this.themeStar[index] = true;
                    this.l = this.sessionStorage.length;
                }
                else {
                    this.themeStar[index] = false;
                }
            }
        }
    }
};
TemasPage.ctorParameters = () => [
    { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _properties_properties__WEBPACK_IMPORTED_MODULE_3__["Properties"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
], TemasPage.prototype, "infiniteScroll", void 0);
TemasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-temas',
        template: __webpack_require__(/*! raw-loader!./temas.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/temas/temas.page.html"),
        styles: [__webpack_require__(/*! ./temas.page.scss */ "./src/app/components/temas/temas.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"],
        _properties_properties__WEBPACK_IMPORTED_MODULE_3__["Properties"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])
], TemasPage);



/***/ })

}]);
//# sourceMappingURL=components-temas-temas-module-es2015.js.map