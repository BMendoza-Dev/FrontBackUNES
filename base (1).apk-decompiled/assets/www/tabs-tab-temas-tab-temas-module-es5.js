(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tab-temas-tab-temas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-temas/tab-temas.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tabs/tab-temas/tab-temas.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div style=\"font-size: 12px;margin-top: 2%;\" class=\"ion-text-center\">\n        <span *ngIf=\"themes.length==0\" >No se encuentran temas guardados</span>\n    </div>\n\n    <ion-card *ngFor=\"let item of themes\" class=\"cardStyles\">\n        <ion-grid class=\"lisThemes\">\n            <ion-row>\n                <ion-col style=\"font-size: 12px;\">\n                    <ion-text style=\"color: steelblue;font-weight: bold;\">Tema</ion-text><br>\n                    <ion-text>{{ item.description }}</ion-text>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col style=\"font-size: 12px;\">\n                    <ion-text>Sesión:{{item.agendaNumber}}</ion-text>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col style=\"font-size: 12px;\">\n                    <ion-text *ngIf=\"item.dates!=''\">Tratado en:{{item.dates}}</ion-text>\n                    <ion-text *ngIf=\"item.dates==''\">El tema aún no es debatido</ion-text>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col style=\"text-align: right;font-size: 20px;\">\n                    <ion-icon name=\"md-attach\" (click)=\"openAttachments(item)\"></ion-icon>&nbsp;\n                    <ion-icon ios=\"ios-person\" md=\"md-person\" (click)=\"getIntervening(item)\"></ion-icon>\n                </ion-col>\n                <ion-col style=\"flex-grow: 0!important;font-size: 20px!important;\">\n                    <ion-icon   name=\"md-trash\" (click)=\"removeTheme(item)\"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/tabs/tab-temas/tab-temas.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/tabs/tab-temas/tab-temas.module.ts ***!
  \***************************************************************/
/*! exports provided: TabTemasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabTemasPageModule", function() { return TabTemasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_temas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-temas.page */ "./src/app/components/tabs/tab-temas/tab-temas.page.ts");







var routes = [
    {
        path: '',
        component: _tab_temas_page__WEBPACK_IMPORTED_MODULE_6__["TabTemasPage"]
    }
];
var TabTemasPageModule = /** @class */ (function () {
    function TabTemasPageModule() {
    }
    TabTemasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab_temas_page__WEBPACK_IMPORTED_MODULE_6__["TabTemasPage"]]
        })
    ], TabTemasPageModule);
    return TabTemasPageModule;
}());



/***/ }),

/***/ "./src/app/components/tabs/tab-temas/tab-temas.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/tabs/tab-temas/tab-temas.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFicy90YWItdGVtYXMvdGFiLXRlbWFzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/tabs/tab-temas/tab-temas.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tabs/tab-temas/tab-temas.page.ts ***!
  \*************************************************************/
/*! exports provided: TabTemasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabTemasPage", function() { return TabTemasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _modal_modal_attachment_modal_attachment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modal/modal-attachment/modal-attachment.page */ "./src/app/components/modal/modal-attachment/modal-attachment.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_modal_intervening_modal_intervening_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modal/modal-intervening/modal-intervening.page */ "./src/app/components/modal/modal-intervening/modal-intervening.page.ts");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _reducers_favThemes_theme_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../reducers/favThemes/theme.action */ "./src/app/reducers/favThemes/theme.action.ts");








var TabTemasPage = /** @class */ (function () {
    function TabTemasPage(storeThemes, modalController, getRest, alertController, toastController) {
        var _this = this;
        this.storeThemes = storeThemes;
        this.modalController = modalController;
        this.getRest = getRest;
        this.alertController = alertController;
        this.toastController = toastController;
        this.storeThemes.select('listaThemes').subscribe(function (lista) {
            _this.themes = lista;
        });
    }
    TabTemasPage.prototype.ngOnInit = function () {
    };
    TabTemasPage.prototype.openAttachments = function (t) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_modal_attachment_modal_attachment_page__WEBPACK_IMPORTED_MODULE_3__["ModalAttachmentPage"],
                            componentProps: {
                                "sessionId": t.agendaId,
                                "themeId": t.id
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
    TabTemasPage.prototype.getIntervening = function (t) {
        var _this = this;
        this.getRest.getInterveningByTheme({
            themeId: t.id
        }).subscribe(function (response) {
            var lst;
            lst = response;
            if (lst.length > 0) {
                _this.openIntervening(lst);
            }
            else {
                _this.presentToast('No existen Intervenciones en este Tema');
            }
        });
    };
    TabTemasPage.prototype.openIntervening = function (l) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_modal_intervening_modal_intervening_page__WEBPACK_IMPORTED_MODULE_5__["ModalInterveningPage"],
                            componentProps: {
                                "list": l
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
    TabTemasPage.prototype.removeTheme = function (item) {
        var deleteList = new _reducers_favThemes_theme_action__WEBPACK_IMPORTED_MODULE_7__["ConfiguracionListaTheme"](item.agendaId, item.agendaNumber, item.agendaStartDate, item.approvedOrder, item.dates, item.description, item.id);
        this.storeThemes.dispatch({ type: _reducers_favThemes_theme_action__WEBPACK_IMPORTED_MODULE_7__["NAME_LIST_THEME_DELETE"], text: deleteList });
        this.presentToast('Tema borrado de favoritos');
    };
    TabTemasPage.prototype.presentToast = function (msg) {
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
    TabTemasPage.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    TabTemasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-temas',
            template: __webpack_require__(/*! raw-loader!./tab-temas.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-temas/tab-temas.page.html"),
            styles: [__webpack_require__(/*! ./tab-temas.page.scss */ "./src/app/components/tabs/tab-temas/tab-temas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _service_rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], TabTemasPage);
    return TabTemasPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tab-temas-tab-temas-module-es5.js.map