(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-votaciones-votaciones-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/votaciones/votaciones.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/votaciones/votaciones.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{properties.titleVotations}}\"></app-header>\r\n\r\n<ion-content>\r\n  <!--<ion-toolbar [hidden]=\"hiddenSearch\">\r\n    <ion-searchbar (ionClear)=\"getClear()\" (change)=\"getItems($event)\" autocomplete=\"on\" [value]=\"searchVotation\" placeholder=\"Para buscar mínimo 3 caracteres\"></ion-searchbar>\r\n  </ion-toolbar>-->\r\n  <form>\r\n    <div class=\"tableSticky\" [hidden]=\"hiddenSearch\">\r\n      <table  width=\"100%\" style=\"margin-left: 2%;\">\r\n        <tr >\r\n          <td align=\"center\" colspan=\"2\" style=\"font-size: small; color: #a2a4ab;\">\r\n            <ion-text>Para buscar escriba el dato en los filtros de búsqueda</ion-text>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <ion-item style=\"display: inline-block; width: 80%\">\r\n              <ion-label position=\"floating\" style=\"text-align: left\">Tema/Propuesta Votación</ion-label>\r\n              <ion-input  (change)=\"getChange()\"  style=\"font-size: 12px;\" [value]=\"searchVotation\" name=\"searchVotation\"   [(ngModel)]=\"searchVotation\"></ion-input>\r\n            </ion-item>\r\n            <ion-icon *ngIf=\"searchVotation != ''\" style=\"display: inline-block; font-size: 8px;\"  name=\"md-close\" class=\"btnOption\" (click)=\"resetTextFirst()\"></ion-icon>\r\n          </td>\r\n          <td width=\"50%\">\r\n            <ion-item style=\"display: inline-block; width: 80%\">\r\n              <ion-label position=\"floating\"># de sesión</ion-label>\r\n              <ion-input (change)=\"getChange()\"  name=\"sessionNumber\"  [(ngModel)]=\"sessionNumber\"></ion-input>\r\n            </ion-item>\r\n            <ion-icon *ngIf=\"sessionNumber != null\" style=\"display: inline-block; font-size: 8px;\"  name=\"md-close\" class=\"btnOption\" (click)=\"resetText()\"></ion-icon>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td width=\"50%\">\r\n            <ion-item style=\"display: inline-block; width: 80%\">\r\n              <ion-label position=\"floating\" >Fecha desde</ion-label>\r\n              <ion-datetime (ionChange)=\"getChange()\"  displayFormat=\"DD/MM/YYYY\" name=\"from\" [min]=\"minDateFrom\" [max]=\"maxDateFrom\" [(ngModel)]=\"dateFrom\"  ></ion-datetime>\r\n            </ion-item>\r\n            <ion-icon *ngIf=\"dateFrom != null\" style=\"display: inline-block\" name=\"md-close\" class=\"btnOption\" (click)=\"resetFrom()\"></ion-icon>\r\n          </td>\r\n          <td width=\"50%\">\r\n            <ion-item style=\"display: inline-block; width: 80%\">\r\n              <ion-label position=\"floating\">Fecha hasta</ion-label>\r\n              <ion-datetime (ionChange)=\"getChange()\" displayFormat=\"DD/MM/YYYY\"  [min]=\"minDateTo\" [max]=\"maxDateTo\" name=\"dateTo\" [(ngModel)]=\"dateTo\" ></ion-datetime>\r\n            </ion-item>\r\n            <ion-icon *ngIf=\"dateTo != null\" style=\"display: inline-block\" name=\"md-close\" class=\"btnOption\" (click)=\"resetTo()\"></ion-icon>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <ion-card [hidden]=\"!listItemsSearch\">\r\n      <ion-list  class=\"listSearch\">\r\n        <ion-item  lines=\"none\" style=\"height: 35px;\">\r\n          <ion-text style=\"font-size: small;\"><b>Búsqueda rápida</b></ion-text>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" (click)=\"changeSearch('Cambio del ordén del dia')\" style=\"cursor: pointer;\">\r\n          <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\r\n          <span>Cambio del ordén del dia</span>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" (click)=\"changeSearch('Proyecto de Resolución')\" style=\"cursor: pointer;\">\r\n          <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\r\n          <span>Proyectos de Resolución</span>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" (click)=\"changeSearch('Juicio Político')\" style=\"cursor: pointer;\">\r\n          <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\r\n          <span>Juicio Político</span>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" (click)=\"changeSearch('Aprobación del Proyecto de Ley')\" style=\"cursor: pointer;\">\r\n          <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\r\n          <span>Aprobación de Proyecto de Ley</span>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" (click)=\"changeSearch('Moción')\" style=\"cursor: pointer;\">\r\n          <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\r\n          <span>Moción</span>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" (click)=\"changeSearch('Aprobación del Convenio')\" style=\"cursor: pointer;\">\r\n          <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\r\n          <span>Aprobación del Convenio</span>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card>\r\n\r\n    <!--<ion-list [hidden]=\"!listItemsTheme\">\r\n\r\n      <ion-item *ngFor=\"let item of theme\">\r\n        <ion-grid class=\"lisThemes\">\r\n          <ion-row>\r\n            <ion-col style=\"font-size: 12px;\">\r\n              <ion-text class=\"linkText\" (click)=\"openDetail(item)\">{{ item.description }}</ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col style=\"font-size: 11px;\">\r\n              <ion-text>{{ item.themeDescription }}</ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col style=\"font-size: 11px;\">\r\n              <ion-text>Sesión {{ item.agendaNumber}} del {{ formatDate(item.date) | date: 'yyyy-MM-dd'}}</ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col style=\"text-align: right;\">\r\n              <ion-icon name=\"md-document\" class=\"linkIcon\" (click)=\"getPdf(item)\"></ion-icon>\r\n              &nbsp;\r\n              <ion-icon name=\"md-stats\" class=\"linkIcon\" (click)=\"openDetail(item)\"></ion-icon>\r\n              &nbsp;\r\n              <ion-icon name=\"share\" class=\"linkIcon\" (click)=\"getSocial(item)\" *ngIf=\"!isIos\"></ion-icon>\r\n\r\n              <ion-icon name=\"logo-twitter\" class=\"linkIcon\" (click)=\"getSocialiOS(item, 1)\" *ngIf=\"isIos\"></ion-icon>\r\n\r\n              <ion-icon name=\"logo-facebook\" class=\"linkIcon\" (click)=\"getSocialiOS(item, 2)\" *ngIf=\"isIos\"></ion-icon>\r\n\r\n              <ion-icon name=\"logo-instagram\" class=\"linkIcon\" (click)=\"getSocialiOS(item, 3)\" *ngIf=\"isIos\"></ion-icon>\r\n\r\n              <ion-icon name=\"logo-whatsapp\" class=\"linkIcon\" (click)=\"getSocialiOS(item, 4)\" *ngIf=\"isIos\"></ion-icon>\r\n\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n      </ion-item>\r\n\r\n    </ion-list>-->\r\n\r\n    <ion-card *ngFor=\"let item of theme\" class=\"cardStyles\" style=\"padding-left: 5px; padding-top: 5px;\">\r\n      <ion-row>\r\n        <ion-col style=\"font-size: 12px;\">\r\n          <ion-text class=\"linkText\" (click)=\"openDetail(item)\">{{ item.description }}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"font-size: 11px;\">\r\n          <ion-text>{{ item.themeDescription }}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col style=\"font-size: 11px;\">\r\n          <ion-text>Sesión {{ item.agendaNumber}} del {{ formatDate(item.date) | date: 'yyyy-MM-dd'}}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"8\">\r\n          <ion-icon name=\"share\" class=\"linkIcon\" (click)=\"getSocial(item)\" *ngIf=\"!isIos\"></ion-icon>\r\n          &nbsp;&nbsp;\r\n          <ion-fab *ngIf=\"isIos\">\r\n            <ion-fab-button color=\"white\" style=\"width: 30px; height: 30px; --box-shadow: none; margin-top: -2px\">\r\n              <ion-icon class=\"linkIcon\" name=\"share\"></ion-icon>\r\n            </ion-fab-button>\r\n            <ion-fab-list side=\"end\" style=\"margin-top: -15px; margin-left: 30px; font-size: 25px;\">\r\n              <ion-icon name=\"logo-twitter\" (click)=\"getSocialiOS(item, 1)\" class=\"linkIcon\"></ion-icon>\r\n              &nbsp;&nbsp;\r\n              <ion-icon name=\"logo-instagram\" (click)=\"getSocialiOS(item, 3)\" class=\"linkIcon\"></ion-icon>\r\n              &nbsp;\r\n              <ion-icon name=\"logo-whatsapp\" (click)=\"getSocialiOS(item, 4)\" class=\"linkIcon\"></ion-icon>\r\n              &nbsp;&nbsp;\r\n              <ion-icon name=\"ios-more\" (click)=\"getSocialiOS(item, 2)\" class=\"linkIcon\"></ion-icon>\r\n            </ion-fab-list>\r\n          </ion-fab>\r\n        </ion-col>\r\n        <ion-col size=\"4\" style=\"text-align: right;\">\r\n          <ion-icon name=\"md-document\" class=\"linkIcon\" (click)=\"getPdf(item)\"></ion-icon>\r\n          &nbsp;&nbsp;\r\n          <ion-icon name=\"md-stats\" class=\"linkIcon\" (click)=\"openDetail(item)\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  </form>\r\n\r\n  <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _votaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./votaciones.page */ "./src/app/components/votaciones/votaciones.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _votaciones_page__WEBPACK_IMPORTED_MODULE_6__["VotacionesPage"]
    }
];
var VotacionesPageModule = /** @class */ (function () {
    function VotacionesPageModule() {
    }
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
    return VotacionesPageModule;
}());



/***/ }),

/***/ "./src/app/components/votaciones/votaciones.page.scss":
/*!************************************************************!*\
  !*** ./src/app/components/votaciones/votaciones.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tableSticky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n  background-color: #ffffff;\n}\n\nion-fab {\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phbmRyZXMvRXNjcml0b3Jpby9Qcm95ZWN0b3MtZGUtU29mdHdhcmUvQXBwL2FwcC1hc2FtYmxlYS9zcmMvYXBwL2NvbXBvbmVudHMvdm90YWNpb25lcy92b3RhY2lvbmVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy92b3RhY2lvbmVzL3ZvdGFjaW9uZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdm90YWNpb25lcy92b3RhY2lvbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZVN0aWNreXtcclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6MDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLWZhYiB7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG4iLCIudGFibGVTdGlja3kge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24tZmFiIHtcbiAgei1pbmRleDogMDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _properties_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../properties/properties */ "./src/app/properties/properties.ts");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _modal_modal_voting_detail_modal_voting_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal-voting-detail/modal-voting-detail.page */ "./src/app/components/modal/modal-voting-detail/modal-voting-detail.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modal_modal_statistics_modal_statistics_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal/modal-statistics/modal-statistics.page */ "./src/app/components/modal/modal-statistics/modal-statistics.page.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");













var VotacionesPage = /** @class */ (function () {
    function VotacionesPage(properties, restService, modalController, file, fileOpener, toastController, socialSharing, route) {
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
    VotacionesPage.prototype.ngOnInit = function () {
        this.isIos = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].isIosPlatform;
    };
    VotacionesPage.prototype.ionViewWillEnter = function () {
        var idVote = this.route.snapshot.queryParamMap.get('id');
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
    };
    /*
    Método que consulta un tema por ID desde el componente de Sesiones.
     */
    VotacionesPage.prototype.getVoteById = function (idVote) {
        var _this = this;
        this.restService.getListVotation({
            id: idVote,
            sessionNumber: '',
            dateFrom: '',
            dateTo: '',
            search: '',
            offset: 0
        }).subscribe(function (response) {
            _this.theme = response;
        });
    };
    VotacionesPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.changeSearch(_this.searchVotation, event);
        }, 500);
    };
    /*
    Método que se ejecuta con la búsqueda rápida, además cuando el event del infinitscroll se activa.
     */
    VotacionesPage.prototype.changeSearch = function (textSearch, event) {
        var _this = this;
        var df = '';
        var dt = '';
        var sn = '';
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
        var incre = 30;
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
            }).subscribe(function (response) {
                var _a;
                if (response.length > 0) {
                    if (event !== undefined) {
                        (_a = _this.theme).push.apply(_a, response);
                        if (event) {
                            event.target.complete();
                        }
                    }
                    else {
                        _this.theme = response;
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
    };
    VotacionesPage.prototype.getClear = function () {
        this.i = 0;
        this.j = 0;
        this.theme = [];
        this.listItemsTheme = false;
        this.listFilterVoting = true;
        this.listItemsSearch = true;
    };
    VotacionesPage.prototype.getChange = function () {
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
    };
    VotacionesPage.prototype.resetTextFirst = function () {
        this.searchVotation = '';
        this.getChange();
    };
    VotacionesPage.prototype.resetText = function () {
        this.sessionNumber = null;
        this.getChange();
    };
    VotacionesPage.prototype.resetFrom = function () {
        this.dateFrom = null;
        this.getChange();
    };
    VotacionesPage.prototype.resetTo = function () {
        this.dateTo = null;
        this.getChange();
    };
    VotacionesPage.prototype.getPdf = function (v) {
        var _this = this;
        this.restService.getVotationAttachment({
            votingId: v.votingId
        }).subscribe(function (response) {
            var blob = new Blob([response], { type: 'application/pdf' });
            /*
            const downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(blob);
            downloadLink.download = v.description + '.pdf';
            downloadLink.click();
            */
            var filePath = _this.file.externalRootDirectory + '/Download/';
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].isIosPlatform) {
                filePath = _this.file.documentsDirectory;
            }
            var fileName = v.description.replace(' ', '_').substr(0, 90);
            _this.file.writeFile(filePath, fileName + '.pdf', blob, { replace: true }).then(function (fileEntry) {
                _this.fileOpener.open(fileEntry.toURL(), 'application/pdf')
                    .then()
                    .catch(function (err) { return _this.presentToast('Error al abrir el archivo, revise en la carpeta de descargas'); });
            })
                .catch(function (err) {
                _this.presentToast('Error al almacenar el archivo: ' + JSON.stringify(err));
                throw err;
            });
        });
    };
    VotacionesPage.prototype.formatDate = function (s) {
        s = s.replace('[UTC]', '');
        return new Date(s);
    };
    VotacionesPage.prototype.openDetail = function (v) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_modal_voting_detail_modal_voting_detail_page__WEBPACK_IMPORTED_MODULE_4__["ModalVotingDetailPage"],
                            componentProps: {
                                "votingId": v.votingId
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
    VotacionesPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 5000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    VotacionesPage.prototype.openStatistics = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_modal_statistics_modal_statistics_page__WEBPACK_IMPORTED_MODULE_9__["ModalStatisticsPage"],
                            componentProps: {
                                "voting": item
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
    VotacionesPage.prototype.getSocial1 = function (item) {
        var _this = this;
        var options = {
            message: item.description,
            subject: 'Votación en la sesión ' + item.agendaNumber,
            files: '',
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlRestApp + '/votingsResource/generatePDF?votingId=' + item.votingId,
            chooserTitle: item.description
        };
        this.socialSharing.shareWithOptions(options).then(function (response) {
        }).catch(function () {
            _this.presentToast('No cuenta con la aplicación instalada');
        });
    };
    VotacionesPage.prototype.getSocial = function (item) {
        var _this = this;
        this.restService.getVotingDetail({
            votingId: item.votingId
        }).subscribe(function (response) {
            var uints = new Uint8Array(response.graphic);
            var base64 = btoa(String.fromCharCode.apply(null, uints));
            var graphic = 'data:image/png;base64,' + base64;
            _this.restService.getVotingVotes({
                votingId: item.votingId
            }).subscribe(function (response) {
                var votes = response;
                var yes = 0;
                var not = 0;
                var white = 0;
                var abst = 0;
                votes.forEach(function (data) {
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
                var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]('en-EN');
                var dateV = datePipe.transform(item.date.substring(0, 10), 'dd/MM/yyyy');
                var options = {
                    message: 'Sesión No.: ' + item.agendaNumber + '\n' +
                        'Fecha: ' + dateV + '\n' +
                        'Moción: ' + item.description + '\n' +
                        '-- Resultado --' + '\n' + 'Si: ' + yes + '\n' + 'No: ' + not + '\n' + 'Blanco: ' + white + '\n' + 'Abstención: ' + abst,
                    subject: 'Votación realizada en la sesión ' + item.agendaNumber,
                    files: [graphic, _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlRestApp + '/votingsResource/generatePDF?votingId=' + item.votingId],
                    url: '',
                    chooserTitle: 'Seleccione una aplicación'
                };
                _this.socialSharing.shareWithOptions(options).then(function (response1) {
                }).catch(function () {
                    _this.presentToast('No cuenta con una aplicación para compartir información');
                });
            });
        });
    };
    VotacionesPage.prototype.getSocialiOS = function (item, app) {
        var _this = this;
        this.restService.getVotingDetail({
            votingId: item.votingId
        }).subscribe(function (rsp) {
            var uints = new Uint8Array(rsp.graphic);
            var binary = '';
            for (var i = 0; i < uints.length; i++) {
                binary += String.fromCharCode(uints[i]);
            }
            var base64 = btoa(binary);
            var graphic = 'data:image/png;base64,' + base64;
            _this.restService.getVotingVotes({
                votingId: item.votingId
            }).subscribe(function (response) {
                var votes = response;
                var yes = 0;
                var not = 0;
                var white = 0;
                var abst = 0;
                votes.forEach(function (data) {
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
                var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]('en-EN');
                var dateV = datePipe.transform(item.date.substring(0, 10), 'dd/MM/yyyy');
                var options = {
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
                        _this.socialSharing.shareViaTwitter(options.message, graphic, options.url).then(function (response1) {
                        }).catch(function () {
                            // this.presentToast('Error compartiendo via Twitter');
                        });
                        break;
                    case 2:
                        _this.presentToast('Mantenga presionado y pegue el texto de la Votación para compartir.');
                        _this.socialSharing.share(options.message, options.subject, graphic, options.url).then(function (response2) {
                        }).catch(function () {
                            // this.presentToast('Error compartiendo via Facebook');
                        });
                        break;
                    case 3:
                        _this.presentToast('Mantenga presionado y seleccione pegar en el pie de foto para compartir.');
                        _this.socialSharing.shareViaInstagram(options.message, graphic).then(function (response3) {
                        }).catch(function () {
                            // this.presentToast('Error compartiendo via Instagram');
                        });
                        break;
                    case 4:
                        _this.socialSharing.shareViaWhatsApp(options.message, '', options.url).then(function (response4) {
                        }).catch(function () {
                            // this.presentToast('Error compartiendo via WhastApp');
                        });
                        break;
                }
            });
        });
    };
    VotacionesPage.ctorParameters = function () { return [
        { type: _properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"] },
        { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }
    ]; };
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
    return VotacionesPage;
}());



/***/ })

}]);
//# sourceMappingURL=components-votaciones-votaciones-module-es5.js.map