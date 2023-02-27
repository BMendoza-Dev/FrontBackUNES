(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-temas-temas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/temas/temas.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/temas/temas.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{properties.titleThemes}}\"></app-header>\n<ion-content>\n    <!--<ion-toolbar [hidden]=\"hiddenSearch\">\n        <ion-searchbar (ionClear)=\"getClear()\" (change)=\"getItems($event)\"  autocomplete=\"on\" [value]=\"searchTheme\" placeholder=\"Para buscar mínimo 3 caracteres\"></ion-searchbar>\n    </ion-toolbar>-->\n    <form>\n        <div class=\"tableSticky\" [hidden]=\"hiddenSearch\">\n            <table  width=\"100%\" style=\"margin-left: 2%;\">\n                <tr >\n                    <td align=\"center\" colspan=\"2\" style=\"font-size: small; color: #a2a4ab;\">\n                        <ion-text>Filtros de búsqueda</ion-text>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <ion-item style=\"display: inline-block; width: 80%\">\n                            <ion-label position=\"floating\" style=\"text-align: left\">Tema</ion-label>\n                            <ion-input  (change)=\"getChange()\"  style=\"font-size: 12px;\"\n                                        [(ngModel)]=\"searchTheme\" [ngModelOptions]=\"{standalone: true}\"></ion-input>\n                        </ion-item>\n                        <ion-icon *ngIf=\"searchTheme != ''\" style=\"display: inline-block; font-size: 8px;\"  name=\"md-close\" class=\"btnOption\" (click)=\"resetTextFirst()\"></ion-icon>\n                    </td>\n                    <td width=\"50%\">\n                        <ion-item style=\"display: inline-block; width: 80%\">\n                            <ion-label position=\"floating\"># de sesión</ion-label>\n                            <ion-input (change)=\"getChange()\"\n                                       [(ngModel)]=\"sessionNumber\" [ngModelOptions]=\"{standalone: true}\"></ion-input>\n                        </ion-item>\n                        <ion-icon *ngIf=\"sessionNumber != null\" style=\"display: inline-block; font-size: 8px;\"  name=\"md-close\" class=\"btnOption\" (click)=\"resetText()\"></ion-icon>\n                    </td>\n                </tr>\n                <tr>\n                    <td width=\"50%\">\n                        <ion-item style=\"display: inline-block; width: 80%\">\n                            <ion-label position=\"floating\" >Fecha desde</ion-label>\n                            <ion-datetime (ionChange)=\"getChange()\"  displayFormat=\"DD/MM/YYYY\" name=\"from\" [min]=\"minDateFrom\" [max]=\"maxDateFrom\" [(ngModel)]=\"dateFrom\"  ></ion-datetime>\n                        </ion-item>\n                        <ion-icon *ngIf=\"dateFrom != null\" style=\"display: inline-block\" name=\"md-close\" class=\"btnOption\" (click)=\"resetFrom()\"></ion-icon>\n                    </td>\n                    <td width=\"50%\">\n                        <ion-item style=\"display: inline-block; width: 80%\">\n                            <ion-label position=\"floating\">Fecha hasta</ion-label>\n                            <ion-datetime (ionChange)=\"getChange()\" displayFormat=\"DD/MM/YYYY\"  [min]=\"minDateTo\" [max]=\"maxDateTo\" name=\"dateTo\" [(ngModel)]=\"dateTo\" ></ion-datetime>\n                        </ion-item>\n                        <ion-icon *ngIf=\"dateTo != null\" style=\"display: inline-block\" name=\"md-close\" class=\"btnOption\" (click)=\"resetTo()\"></ion-icon>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <ion-card [hidden]=\"!listItemsSearch\">\n          <ion-list  class=\"listSearch\">\n            <ion-item  lines=\"none\" style=\"height: 35px;\">\n              <ion-text style=\"font-size: small;\">Búsqueda rápida</ion-text>\n            </ion-item>\n            <!--<ion-item lines=\"none\" (click)=\"changeSearch('Proyecto de Ley')\">\n                <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\n                <span>Proyectos de Ley</span>\n            </ion-item>-->\n            <ion-item lines=\"none\" (click)=\"changeSearch('Proyecto de Resolución')\">\n                <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\n                <span>Proyectos de Resolución</span>\n            </ion-item>\n            <ion-item lines=\"none\" (click)=\"changeSearch('Juicio Político')\">\n                <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\n                <span>Juicios Políticos</span>\n            </ion-item>\n            <ion-item lines=\"none\" (click)=\"changeSearch('Comparecencia')\">\n                <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\n                <span>Solicitudes de Comparecencia</span>\n            </ion-item>\n            <!--<ion-item lines=\"none\" (click)=\"changeSearch('Informe')\">\n                <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\n                <span>Informes</span>\n            </ion-item>-->\n              <ion-item lines=\"none\" (click)=\"changeSearch('Informe para Primer Debate')\">\n                  <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\n                  <span>Informe para Primer Debate</span>\n              </ion-item>\n              <ion-item lines=\"none\" (click)=\"changeSearch('Informe para Segundo Debate')\">\n                  <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\n                  <span>Informe para Segundo Debate</span>\n              </ion-item>\n              <ion-item lines=\"none\" (click)=\"changeSearch('Objeción Parcial')\">\n                  <ion-icon style=\"color: #1A2C66; width: 1.5em;\" name=\"md-play\"></ion-icon>\n                  <span>Objeción Parcial</span>\n              </ion-item>\n          </ion-list>\n        </ion-card>\n        <ion-list [hidden]=\"!listItemsTheme\">\n        <ion-item *ngFor=\"let item of theme; let i = index\">\n\n            <ion-grid class=\"lisThemes\">\n                <ion-row>\n                    <td colspan=\"2\" style=\"font-size: 12px;\">\n                        <ion-text>{{ item.description }}</ion-text>\n                    </td>\n                </ion-row>\n                <ion-row>\n                    <td colspan=\"2\" style=\"font-size: 11px;\">\n                        <div style=\"width: 100%; height: 5px;\"></div>\n                        <ion-text>Sesión:{{item.agendaNumber}}</ion-text>\n                    </td>\n                </ion-row>\n                <ion-row>\n                    <td colspan=\"2\" style=\"font-size: 11px;\">\n                        <ion-text *ngIf=\"item.dates!=''\">Tratado en: {{item.dates}}</ion-text>\n                    </td>\n                </ion-row>\n                <ion-row>\n                    <td colspan=\"2\" style=\"font-size: 11px;\">\n                        <ion-text *ngIf=\"item.dates==''\">El tema aún no es debatido</ion-text>\n                    </td>\n                </ion-row>\n                <ion-row>\n                    <td width=\"35%\">\n                        <ion-icon name=\"md-star\" class=\"linkIcon favoriteNone\" [ngClass]=\"{'favoriteOk':themeStar[i]}\" (click)=\"putTheme(item,i)\"></ion-icon>\n                    </td>\n                    <td width=\"65%\" style=\"text-align: right;\">\n                        <ion-icon name=\"md-document\" class=\"linkIcon\" (click)=\"openAttachments(item)\"></ion-icon>\n                        &nbsp;\n                        <ion-icon ios=\"ios-person\" md=\"md-person\" class=\"linkIcon\" (click)=\"getIntervening(item)\"></ion-icon>\n                    </td>\n                </ion-row>\n            </ion-grid>\n\n        </ion-item>\n      </ion-list>\n    </form>\n  <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"\">\n        </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _temas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./temas.page */ "./src/app/components/temas/temas.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _temas_page__WEBPACK_IMPORTED_MODULE_6__["TemasPage"]
    }
];
var TemasPageModule = /** @class */ (function () {
    function TemasPageModule() {
    }
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
    return TemasPageModule;
}());



/***/ }),

/***/ "./src/app/components/temas/temas.page.scss":
/*!**************************************************!*\
  !*** ./src/app/components/temas/temas.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lisThemes ion-icon {\n  font-size: 18px;\n}\n\nion-toolbar {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  margin-bottom: 10px;\n  z-index: 999;\n}\n\n.tableSticky {\n  margin-top: 3%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJlc21vcmFsZXMvSW3DoWdlbmVzL2FwcC1hc2FtYmxlYTIvc3JjL2FwcC9jb21wb25lbnRzL3RlbWFzL3RlbWFzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90ZW1hcy90ZW1hcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlbWFzL3RlbWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXNUaGVtZXMgaW9uLWljb257XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi10b29sYmFye1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDowO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG4udGFibGVTdGlja3l7XG4gIG1hcmdpbi10b3A6MyU7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOjA7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbiIsIi5saXNUaGVtZXMgaW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLnRhYmxlU3RpY2t5IHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _properties_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../properties/properties */ "./src/app/properties/properties.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_modal_attachment_modal_attachment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal-attachment/modal-attachment.page */ "./src/app/components/modal/modal-attachment/modal-attachment.page.ts");
/* harmony import */ var _modal_modal_intervening_modal_intervening_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal-intervening/modal-intervening.page */ "./src/app/components/modal/modal-intervening/modal-intervening.page.ts");
/* harmony import */ var _reducers_favThemes_theme_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers/favThemes/theme.action */ "./src/app/reducers/favThemes/theme.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var TemasPage = /** @class */ (function () {
    function TemasPage(getRest, properties, modalController, alertController, store, toastController, route) {
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
    TemasPage.prototype.ngOnInit = function () {
    };
    TemasPage.prototype.ionViewWillEnter = function () {
        var idTheme = this.route.snapshot.queryParamMap.get('id');
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
    };
    /*
    Método que consulta un tema por ID desde el componente de Sesiones.
     */
    TemasPage.prototype.getThemeById = function (idTheme) {
        var _this = this;
        this.getRest.getThemes({
            id: idTheme,
            search: '',
            sessionNumber: '',
            dateFrom: '',
            dateTo: '',
            offset: 0
        }).subscribe(function (response) {
            _this.theme = response;
        });
    };
    TemasPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.changeSearch(_this.searchTheme, event);
        }, 500);
    };
    TemasPage.prototype.changeSearch = function (textSearch, event) {
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
        this.k = 0;
        var incre = 30;
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
            }).subscribe(function (response) {
                var _a;
                if (response.length > 0) {
                    if (event !== undefined) {
                        (_a = _this.theme).push.apply(_a, response);
                        _this.theme.forEach(function (data) {
                            _this.valFavorites(data['description'], _this.k);
                            _this.k++;
                        });
                        if (event) {
                            event.target.complete();
                        }
                    }
                    else {
                        _this.theme = response;
                        _this.theme.forEach(function (data) {
                            _this.valFavorites(data['description'], _this.k);
                            _this.k++;
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
    };
    TemasPage.prototype.resetTextFirst = function () {
        this.searchTheme = '';
        this.getChange();
    };
    TemasPage.prototype.resetText = function () {
        this.sessionNumber = null;
        this.getChange();
    };
    TemasPage.prototype.resetFrom = function () {
        this.dateFrom = null;
        this.getChange();
    };
    TemasPage.prototype.resetTo = function () {
        this.dateTo = null;
        this.getChange();
    };
    /*getClear() {
        this.i = 0;
        this.j = 0;
        this.searchTheme = '';
        this.theme = [];
        this.listItemsTheme = false;
        this.listItemsSearch = true;
    }*/
    TemasPage.prototype.getChange = function () {
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
    };
    TemasPage.prototype.openAttachments = function (t) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_modal_attachment_modal_attachment_page__WEBPACK_IMPORTED_MODULE_5__["ModalAttachmentPage"],
                            componentProps: {
                                "sessionId": t.agendaId,
                                "themeId": t.id
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
    TemasPage.prototype.getIntervening = function (t) {
        var _this = this;
        this.getRest.getInterveningByTheme({
            themeId: t.id
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
                _this.presentToast('No existen intervenciones para el tema');
            }
        });
    };
    TemasPage.prototype.openIntervening = function (l, t) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_modal_intervening_modal_intervening_page__WEBPACK_IMPORTED_MODULE_6__["ModalInterveningPage"],
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
    TemasPage.prototype.presentAlert = function (note) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: note,
                            buttons: ['Aceptar']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TemasPage.prototype.putTheme = function (item, index) {
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
            var newListaTheme = new _reducers_favThemes_theme_action__WEBPACK_IMPORTED_MODULE_7__["ConfiguracionListaTheme"](item.agendaId, item.agendaNumber, item.agendaStartDate, item.approvedOrder, item.dates, item.description, item.id);
            this.store.dispatch({ type: _reducers_favThemes_theme_action__WEBPACK_IMPORTED_MODULE_7__["NAME_LIST_THEME"], text: newListaTheme });
        }
    };
    TemasPage.prototype.removeTheme = function (item, index) {
        var deleteList = new _reducers_favThemes_theme_action__WEBPACK_IMPORTED_MODULE_7__["ConfiguracionListaTheme"](item.agendaId, item.agendaNumber, item.agendaStartDate, item.approvedOrder, item.dates, item.description, item.id);
        this.store.dispatch({ type: _reducers_favThemes_theme_action__WEBPACK_IMPORTED_MODULE_7__["NAME_LIST_THEME_DELETE"], text: deleteList });
        this.themeStar[index] = false;
        this.presentToast('Tema eliminado de la sección de favoritos');
    };
    TemasPage.prototype.presentToast = function (msg) {
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
    /*
        Método que indica en el icono star que temas estan guardados en favoritos
     */
    TemasPage.prototype.valFavorites = function (data, index) {
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
    };
    TemasPage.ctorParameters = function () { return [
        { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
        { type: _properties_properties__WEBPACK_IMPORTED_MODULE_3__["Properties"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
    ]; };
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
    return TemasPage;
}());



/***/ })

}]);
//# sourceMappingURL=components-temas-temas-module-es5.js.map