(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-votaciones-votaciones-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/votaciones/votaciones.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/votaciones/votaciones.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{properties.titleVotations}}\"></app-header>\n\n<ion-content>\n  <!--<ion-toolbar [hidden]=\"hiddenSearch\">\n    <ion-searchbar (ionClear)=\"getClear()\" (change)=\"getItems($event)\" autocomplete=\"on\" [value]=\"searchVotation\" placeholder=\"Para buscar mínimo 3 caracteres\"></ion-searchbar>\n  </ion-toolbar>-->\n  <form>\n    <div class=\"tableSticky\" [hidden]=\"hiddenSearch\">\n      <table  width=\"100%\" style=\"margin-left: 2%;\">\n        <tr >\n          <td align=\"center\" colspan=\"2\" style=\"font-size: small; color: #a2a4ab;\">\n            <ion-text>Para buscar escriba el dato en los filtros de búsqueda</ion-text>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <ion-item style=\"display: inline-block; width: 80%\">\n              <ion-label position=\"floating\" style=\"text-align: left\">Tema/Propuesta Votación</ion-label>\n              <ion-input  (change)=\"getChange()\"  style=\"font-size: 12px;\" [value]=\"searchVotation\" name=\"searchVotation\"   [(ngModel)]=\"searchVotation\"></ion-input>\n            </ion-item>\n            <ion-icon *ngIf=\"searchVotation != ''\" style=\"display: inline-block; font-size: 8px;\"  name=\"md-close\" class=\"btnOption\" (click)=\"resetTextFirst()\"></ion-icon>\n          </td>\n          <td width=\"50%\">\n            <ion-item style=\"display: inline-block; width: 80%\">\n              <ion-label position=\"floating\"># de sesión</ion-label>\n              <ion-input (change)=\"getChange()\"  name=\"sessionNumber\"  [(ngModel)]=\"sessionNumber\"></ion-input>\n            </ion-item>\n            <ion-icon *ngIf=\"sessionNumber != null\" style=\"display: inline-block; font-size: 8px;\"  name=\"md-close\" class=\"btnOption\" (click)=\"resetText()\"></ion-icon>\n          </td>\n        </tr>\n        <tr>\n          <td width=\"50%\">\n            <ion-item style=\"display: inline-block; width: 80%\">\n              <ion-label position=\"floating\" >Fecha desde</ion-label>\n              <ion-datetime (ionChange)=\"getChange()\"  displayFormat=\"DD/MM/YYYY\" name=\"from\" [min]=\"minDateFrom\" [max]=\"maxDateFrom\" [(ngModel)]=\"dateFrom\"  ></ion-datetime>\n            </ion-item>\n            <ion-icon *ngIf=\"dateFrom != null\" style=\"display: inline-block\" name=\"md-close\" class=\"btnOption\" (click)=\"resetFrom()\"></ion-icon>\n          </td>\n          <td width=\"50%\">\n            <ion-item style=\"display: inline-block; width: 80%\">\n              <ion-label position=\"floating\">Fecha hasta</ion-label>\n              <ion-datetime (ionChange)=\"getChange()\" displayFormat=\"DD/MM/YYYY\"  [min]=\"minDateTo\" [max]=\"maxDateTo\" name=\"dateTo\" [(ngModel)]=\"dateTo\" ></ion-datetime>\n            </ion-item>\n            <ion-icon *ngIf=\"dateTo != null\" style=\"display: inline-block\" name=\"md-close\" class=\"btnOption\" (click)=\"resetTo()\"></ion-icon>\n          </td>\n        </tr>\n      </table>\n    </div>\n    <ion-card [hidden]=\"!listItemsSearch\">\n      <ion-list  class=\"listSearch\">\n        <ion-item  lines=\"none\" style=\"height: 35px;\">\n          <ion-text style=\"font-size: small;\"><b>Búsqueda rápida</b></ion-text>\n        </ion-item>\n        <ion-item lines=\"none\" (click)=\"changeSearch('Cambio del ordén del dia')\" style=\"cursor: pointer;\">\n          <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\n          <span>Cambio del ordén del dia</span>\n        </ion-item>\n        <ion-item lines=\"none\" (click)=\"changeSearch('Proyecto de Resolución')\" style=\"cursor: pointer;\">\n          <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\n          <span>Proyectos de Resolución</span>\n        </ion-item>\n        <ion-item lines=\"none\" (click)=\"changeSearch('Juicio Político')\" style=\"cursor: pointer;\">\n          <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\n          <span>Juicio Político</span>\n        </ion-item>\n        <ion-item lines=\"none\" (click)=\"changeSearch('Aprobación del Proyecto de Ley')\" style=\"cursor: pointer;\">\n          <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\n          <span>Aprobación de Proyecto de Ley</span>\n        </ion-item>\n        <ion-item lines=\"none\" (click)=\"changeSearch('Moción')\" style=\"cursor: pointer;\">\n          <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\n          <span>Moción</span>\n        </ion-item>\n        <ion-item lines=\"none\" (click)=\"changeSearch('Aprobación del Convenio')\" style=\"cursor: pointer;\">\n          <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\n          <span>Aprobación del Convenio</span>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n\n    <!--<ion-list [hidden]=\"!listItemsTheme\">\n\n      <ion-item *ngFor=\"let item of theme\">\n        <ion-grid class=\"lisThemes\">\n          <ion-row>\n            <ion-col style=\"font-size: 12px;\">\n              <ion-text class=\"linkText\" (click)=\"openDetail(item)\">{{ item.description }}</ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col style=\"font-size: 11px;\">\n              <ion-text>{{ item.themeDescription }}</ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col style=\"font-size: 11px;\">\n              <ion-text>Sesión {{ item.agendaNumber}} del {{ formatDate(item.date) | date: 'yyyy-MM-dd'}}</ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col style=\"text-align: right;\">\n              <ion-icon name=\"md-document\" class=\"linkIcon\" (click)=\"getPdf(item)\"></ion-icon>\n              &nbsp;\n              <ion-icon name=\"md-stats\" class=\"linkIcon\" (click)=\"openDetail(item)\"></ion-icon>\n              &nbsp;\n              <ion-icon name=\"share\" class=\"linkIcon\" (click)=\"getSocial(item)\" *ngIf=\"!isIos\"></ion-icon>\n\n              <ion-icon name=\"logo-twitter\" class=\"linkIcon\" (click)=\"getSocialiOS(item, 1)\" *ngIf=\"isIos\"></ion-icon>\n\n              <ion-icon name=\"logo-facebook\" class=\"linkIcon\" (click)=\"getSocialiOS(item, 2)\" *ngIf=\"isIos\"></ion-icon>\n\n              <ion-icon name=\"logo-instagram\" class=\"linkIcon\" (click)=\"getSocialiOS(item, 3)\" *ngIf=\"isIos\"></ion-icon>\n\n              <ion-icon name=\"logo-whatsapp\" class=\"linkIcon\" (click)=\"getSocialiOS(item, 4)\" *ngIf=\"isIos\"></ion-icon>\n\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </ion-item>\n\n    </ion-list>-->\n\n    <ion-card *ngFor=\"let item of theme\" class=\"cardStyles\" style=\"padding-left: 5px; padding-top: 5px;\">\n      <ion-row>\n        <ion-col style=\"font-size: 12px;\">\n          <ion-text class=\"linkText\" (click)=\"openDetail(item)\">{{ item.description }}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col style=\"font-size: 11px;\">\n          <ion-text>{{ item.themeDescription }}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col style=\"font-size: 11px;\">\n          <ion-text>Sesión {{ item.agendaNumber}} del {{ formatDate(item.date) | date: 'yyyy-MM-dd'}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\">\n          <ion-icon name=\"share\" class=\"linkIcon\" (click)=\"getSocial(item)\" *ngIf=\"!isIos\"></ion-icon>\n          &nbsp;&nbsp;\n          <ion-fab *ngIf=\"isIos\">\n            <ion-fab-button color=\"white\" style=\"width: 30px; height: 30px; --box-shadow: none; margin-top: -2px\">\n              <ion-icon class=\"linkIcon\" name=\"share\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-list side=\"end\" style=\"margin-top: -15px; margin-left: 30px; font-size: 25px;\">\n              <ion-icon name=\"logo-twitter\" (click)=\"getSocialiOS(item, 1)\" class=\"linkIcon\"></ion-icon>\n              &nbsp;&nbsp;\n              <ion-icon name=\"logo-instagram\" (click)=\"getSocialiOS(item, 3)\" class=\"linkIcon\"></ion-icon>\n              &nbsp;\n              <ion-icon name=\"logo-whatsapp\" (click)=\"getSocialiOS(item, 4)\" class=\"linkIcon\"></ion-icon>\n              &nbsp;&nbsp;\n              <ion-icon name=\"ios-more\" (click)=\"getSocialiOS(item, 2)\" class=\"linkIcon\"></ion-icon>\n            </ion-fab-list>\n          </ion-fab>\n        </ion-col>\n        <ion-col size=\"4\" style=\"text-align: right;\">\n          <ion-icon name=\"md-document\" class=\"linkIcon\" (click)=\"getPdf(item)\"></ion-icon>\n          &nbsp;&nbsp;\n          <ion-icon name=\"md-stats\" class=\"linkIcon\" (click)=\"openDetail(item)\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </form>\n\n  <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/votaciones/votaciones.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/votaciones/votaciones.module.ts ***!
  \************************************************************/
/*! exports provided: VotacionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotacionesPageModule", function() { return VotacionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _votaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./votaciones.page */ "./src/app/components/votaciones/votaciones.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _votaciones_page__WEBPACK_IMPORTED_MODULE_6__["VotacionesPage"]
    }
];
let VotacionesPageModule = class VotacionesPageModule {
};
VotacionesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_votaciones_page__WEBPACK_IMPORTED_MODULE_6__["VotacionesPage"]]
    })
], VotacionesPageModule);



/***/ }),

/***/ "./src/app/components/votaciones/votaciones.page.scss":
/*!************************************************************!*\
  !*** ./src/app/components/votaciones/votaciones.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tableSticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n  background-color: #ffffff;\n}\n\nion-fab {\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJlc21vcmFsZXMvSW3DoWdlbmVzL2FwcC1hc2FtYmxlYTIvc3JjL2FwcC9jb21wb25lbnRzL3ZvdGFjaW9uZXMvdm90YWNpb25lcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdm90YWNpb25lcy92b3RhY2lvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZvdGFjaW9uZXMvdm90YWNpb25lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGVTdGlja3l7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOjA7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWZhYiB7XG4gIHotaW5kZXg6IDA7XG59XG4iLCIudGFibGVTdGlja3kge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tZmFiIHtcbiAgei1pbmRleDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/votaciones/votaciones.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/votaciones/votaciones.page.ts ***!
  \**********************************************************/
/*! exports provided: VotacionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotacionesPage", function() { return VotacionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _properties_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../properties/properties */ "./src/app/properties/properties.ts");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _modal_modal_voting_detail_modal_voting_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal-voting-detail/modal-voting-detail.page */ "./src/app/components/modal/modal-voting-detail/modal-voting-detail.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modal_modal_statistics_modal_statistics_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal/modal-statistics/modal-statistics.page */ "./src/app/components/modal/modal-statistics/modal-statistics.page.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");













let VotacionesPage = class VotacionesPage {
    constructor(properties, restService, modalController, file, fileOpener, toastController, socialSharing, route) {
        this.properties = properties;
        this.restService = restService;
        this.modalController = modalController;
        this.file = file;
        this.fileOpener = fileOpener;
        this.toastController = toastController;
        this.socialSharing = socialSharing;
        this.route = route;
        this.listItemsTheme = false;
        this.listItemsSearch = true;
        this.listFilterVoting = false;
        this.searchVotation = '';
        this.dateFrom = null;
        this.dateTo = null;
        this.hiddenSearch = false;
        this.sessionNumber = null;
        this.minDateFrom = new Date('2012-02-28').toISOString();
        this.maxDateFrom = new Date().toISOString();
        this.minDateTo = new Date('2012-02-28').toISOString();
        this.maxDateTo = new Date().toISOString();
        this.theme = [];
        this.i = 0;
        this.j = 0;
        this.isIos = false;
    }
    ngOnInit() {
        this.isIos = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].isIosPlatform;
    }
    ionViewWillEnter() {
        const idVote = this.route.snapshot.queryParamMap.get('id');
        if (idVote !== null) {
            this.listItemsSearch = false;
            this.listFilterVoting = true;
            this.listItemsTheme = true;
            this.infiniteScroll.disabled = true;
            this.hiddenSearch = true;
            this.getVoteById(idVote);
        }
        else {
            this.hiddenSearch = false;
            this.listItemsSearch = true;
            this.listFilterVoting = true;
            this.listItemsTheme = false;
            this.searchVotation = '';
            this.theme = [];
        }
    }
    /*
    Método que consulta un tema por ID desde el componente de Sesiones.
     */
    getVoteById(idVote) {
        this.restService.getListVotation({
            id: idVote,
            sessionNumber: '',
            dateFrom: '',
            dateTo: '',
            search: '',
            offset: 0
        }).subscribe(response => {
            this.theme = response;
        });
    }
    loadData(event) {
        setTimeout(() => {
            this.changeSearch(this.searchVotation, event);
        }, 500);
    }
    /*
    Método que se ejecuta con la búsqueda rápida, además cuando el event del infinitscroll se activa.
     */
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
        this.searchVotation = textSearch;
        const incre = 30;
        if (event !== undefined) {
            this.j = this.j + incre;
        }
        // Reset items back to all of the items
        if (textSearch !== '' || sn !== '' || df !== '' || dt !== '') {
            this.listItemsSearch = false;
            this.listFilterVoting = false;
            this.listItemsTheme = true;
            this.restService.getListVotation({
                id: '',
                sessionNumber: sn,
                dateFrom: df,
                dateTo: dt,
                search: textSearch,
                offset: this.j
            }).subscribe(response => {
                if (response.length > 0) {
                    if (event !== undefined) {
                        this.theme.push(...response);
                        if (event) {
                            event.target.complete();
                        }
                    }
                    else {
                        this.theme = response;
                    }
                }
                else {
                    if (response.length === 0 && event !== undefined) {
                        event.target.disabled = true;
                    }
                }
            });
        }
        else {
            this.listItemsTheme = false;
            this.listFilterVoting = true;
            this.listItemsSearch = true;
        }
    }
    getClear() {
        this.i = 0;
        this.j = 0;
        this.theme = [];
        this.listItemsTheme = false;
        this.listFilterVoting = true;
        this.listItemsSearch = true;
    }
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
        this.changeSearch(this.searchVotation);
    }
    resetTextFirst() {
        this.searchVotation = '';
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
    getPdf(v) {
        this.restService.getVotationAttachment({
            votingId: v.votingId
        }).subscribe(response => {
            const blob = new Blob([response], { type: 'application/pdf' });
            /*
            const downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(blob);
            downloadLink.download = v.description + '.pdf';
            downloadLink.click();
            */
            let filePath = this.file.externalRootDirectory + '/Download/';
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].isIosPlatform) {
                filePath = this.file.documentsDirectory;
            }
            const fileName = v.description.replace(' ', '_').substr(0, 90);
            this.file.writeFile(filePath, fileName + '.pdf', blob, { replace: true }).then((fileEntry) => {
                this.fileOpener.open(fileEntry.toURL(), 'application/pdf')
                    .then()
                    .catch(err => this.presentToast('Error al abrir el archivo, revise en la carpeta de descargas'));
            })
                .catch((err) => {
                this.presentToast('Error al almacenar el archivo: ' + JSON.stringify(err));
                throw err;
            });
        });
    }
    formatDate(s) {
        s = s.replace('[UTC]', '');
        return new Date(s);
    }
    openDetail(v) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_voting_detail_modal_voting_detail_page__WEBPACK_IMPORTED_MODULE_4__["ModalVotingDetailPage"],
                componentProps: {
                    "votingId": v.votingId
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
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 5000,
                position: 'top'
            });
            toast.present();
        });
    }
    openStatistics(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_statistics_modal_statistics_page__WEBPACK_IMPORTED_MODULE_9__["ModalStatisticsPage"],
                componentProps: {
                    "voting": item
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
    getSocial1(item) {
        var options = {
            message: item.description,
            subject: 'Votación en la sesión ' + item.agendaNumber,
            files: '',
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlRestApp + '/votingsResource/generatePDF?votingId=' + item.votingId,
            chooserTitle: item.description
        };
        this.socialSharing.shareWithOptions(options).then(response => {
        }).catch(() => {
            this.presentToast('No cuenta con la aplicación instalada');
        });
    }
    getSocial(item) {
        this.restService.getVotingDetail({
            votingId: item.votingId
        }).subscribe(response => {
            const uints = new Uint8Array(response.graphic);
            const base64 = btoa(String.fromCharCode.apply(null, uints));
            const graphic = 'data:image/png;base64,' + base64;
            this.restService.getVotingVotes({
                votingId: item.votingId
            }).subscribe(response => {
                const votes = response;
                let yes = 0;
                let not = 0;
                let white = 0;
                let abst = 0;
                votes.forEach(data => {
                    switch (data.description) {
                        case 'SI':
                            yes++;
                            break;
                        case 'NO':
                            not++;
                            break;
                        case 'ABSTENCION':
                            abst++;
                            break;
                        case 'BLANCO':
                            white++;
                            break;
                    }
                });
                const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]('en-EN');
                let dateV = datePipe.transform(item.date.substring(0, 10), 'dd/MM/yyyy');
                const options = {
                    message: 'Sesión No.: ' + item.agendaNumber + '\n' +
                        'Fecha: ' + dateV + '\n' +
                        'Moción: ' + item.description + '\n' +
                        '-- Resultado --' + '\n' + 'Si: ' + yes + '\n' + 'No: ' + not + '\n' + 'Blanco: ' + white + '\n' + 'Abstención: ' + abst,
                    subject: 'Votación realizada en la sesión ' + item.agendaNumber,
                    files: [graphic, _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlRestApp + '/votingsResource/generatePDF?votingId=' + item.votingId],
                    url: '',
                    chooserTitle: 'Seleccione una aplicación'
                };
                this.socialSharing.shareWithOptions(options).then(response1 => {
                }).catch(() => {
                    this.presentToast('No cuenta con una aplicación para compartir información');
                });
            });
        });
    }
    getSocialiOS(item, app) {
        this.restService.getVotingDetail({
            votingId: item.votingId
        }).subscribe(rsp => {
            const uints = new Uint8Array(rsp.graphic);
            let binary = '';
            for (let i = 0; i < uints.length; i++) {
                binary += String.fromCharCode(uints[i]);
            }
            const base64 = btoa(binary);
            const graphic = 'data:image/png;base64,' + base64;
            this.restService.getVotingVotes({
                votingId: item.votingId
            }).subscribe(response => {
                const votes = response;
                let yes = 0;
                let not = 0;
                let white = 0;
                let abst = 0;
                votes.forEach(data => {
                    switch (data.description) {
                        case 'SI':
                            yes++;
                            break;
                        case 'NO':
                            not++;
                            break;
                        case 'ABSTENCION':
                            abst++;
                            break;
                        case 'BLANCO':
                            white++;
                            break;
                    }
                });
                const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]('en-EN');
                const dateV = datePipe.transform(item.date.substring(0, 10), 'dd/MM/yyyy');
                const options = {
                    message: 'Sesión ' + item.agendaNumber + '\n' +
                        'Fecha: ' + dateV + '\n' +
                        'Moción: ' + item.description + '\n' +
                        'Resultado' + '\n' + 'Si: ' + yes + '\n' + 'No: ' + not + '\n' + 'Blanco: ' + white + '\n' + 'Abstención: ' + abst,
                    subject: 'Votación realizada en la sesión ' + item.agendaNumber,
                    files: [_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlRestApp + '/votingsResource/generatePDF?votingId=' + item.votingId],
                    url: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlRestApp + '/votingsResource/generatePDF?votingId=' + item.votingId,
                    chooserTitle: 'Compartir via...'
                };
                switch (app) {
                    case 1:
                        this.socialSharing.shareViaTwitter(options.message, graphic, options.url).then(response1 => {
                        }).catch(() => {
                            // this.presentToast('Error compartiendo via Twitter');
                        });
                        break;
                    case 2:
                        this.presentToast('Mantenga presionado y pegue el texto de la Votación para compartir.');
                        this.socialSharing.share(options.message, options.subject, graphic, options.url).then(response2 => {
                        }).catch(() => {
                            // this.presentToast('Error compartiendo via Facebook');
                        });
                        break;
                    case 3:
                        this.presentToast('Mantenga presionado y seleccione pegar en el pie de foto para compartir.');
                        this.socialSharing.shareViaInstagram(options.message, graphic).then(response3 => {
                        }).catch(() => {
                            // this.presentToast('Error compartiendo via Instagram');
                        });
                        break;
                    case 4:
                        this.socialSharing.shareViaWhatsApp(options.message, '', options.url).then(response4 => {
                        }).catch(() => {
                            // this.presentToast('Error compartiendo via WhastApp');
                        });
                        break;
                }
            });
        });
    }
};
VotacionesPage.ctorParameters = () => [
    { type: _properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"] },
    { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"])
], VotacionesPage.prototype, "infiniteScroll", void 0);
VotacionesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-votaciones',
        template: __webpack_require__(/*! raw-loader!./votaciones.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/votaciones/votaciones.page.html"),
        styles: [__webpack_require__(/*! ./votaciones.page.scss */ "./src/app/components/votaciones/votaciones.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"],
        _service_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]])
], VotacionesPage);



/***/ })

}]);
//# sourceMappingURL=components-votaciones-votaciones-module-es2015.js.map