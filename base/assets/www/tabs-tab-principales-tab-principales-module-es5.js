(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tab-principales-tab-principales-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-principales/tab-principales.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tabs/tab-principales/tab-principales.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"stycky\">\n    <ion-select interface=\"action-sheet\" (ionChange)=\"onChange($event)\"\n                placeholder=\"Seleccione un ítem de la lista\"\n                cancel-text=\"Cancelar\"\n                [selectedText]=\"periodActive.name\"\n                style=\"border-bottom: 2px solid #a2a4ab;text-align: center;\"\n    >\n      <ion-select-option *ngFor=\"let p of arrayPeriod\"  [value]=\"p\" >{{p.name}}</ion-select-option>\n    </ion-select>\n    <!--   <ion-searchbar style=\"font-size: small;\" (change)=\"searchItems($event)\"\n                     (ionClear)=\"getClear()\"\n                     [(ngModel)]=\"searchAssembly\"\n                     autocomplete=\"on\"\n                     placeholder=\"Para buscar mínimo 3 caracteres\"></ion-searchbar> -->\n    <tr >\n      <td align=\"center\" colspan=\"2\" style=\"font-size: small; color: #a2a4ab;\">\n        <ion-text>Para buscar escriba el dato en los filtros de búsqueda</ion-text>\n      </td>\n    </tr>\n    <ion-card  style=\"margin-bottom: 10px !important; margin-top: 10px !important;\">\n      <table  width=\"100%\" style=\"margin-left: 2%;\">\n        <tr >\n          <td align=\"center\" colspan=\"2\" style=\"font-size: small; color: #a2a4ab;\">\n          </td>\n        </tr>\n        <tr>\n\n          <td width=\"50%\">\n            <ion-item style=\"display: inline-block; width: 85%;\" >\n              <ion-label position=\"floating\" style=\"text-align: left\">Asambleistas</ion-label>\n              <ion-input   (change) = \"getClear()\" style=\"font-size: 12px ;\"\n                          [(ngModel)]=\"searchAssembly\" [ngModelOptions]=\"{standalone: true}\">\n                          </ion-input>\n            </ion-item>\n            <ion-icon *ngIf=\"searchAssembly != ''\" style=\"display: inline-block; font-size: 8px;\"  name=\"md-close\" class=\"btnOption\" (click)=\"resetTextFirst()\"></ion-icon>\n          </td>\n\n          <td [hidden]=\"bandCurul\" width=\"50%\">\n            <ion-item style=\"display: inline-block; width: 85%\"  align-items-center>\n              <ion-label position=\"floating\" style=\"text-align: left\">Curul</ion-label>\n              <ion-input (change) = \"getClear()\" style=\"font-size: 12px;\" name=\"curul\"\n                         [(ngModel)]=\"curulNumber\" [ngModelOptions]=\"{standalone: true}\"></ion-input>\n            </ion-item>\n            <ion-icon *ngIf=\"curulNumber != '' \" style=\"display: inline-block; font-size: 8px;\"  name=\"md-close\" class=\"btnOption\" (click)=\"resetTextSecond()\"></ion-icon>\n          </td>\n        </tr>\n      </table>\n    </ion-card>\n  </div>\n    <ion-card class=\"cardStyles\" *ngFor=\"let assembly of assemblyMan; let end=last\">\n    <ion-item (click)=\"changeModal(assembly.id,assembly.imageChange)\">\n      <img [src]='assembly.imageChange'  [hidden]=\"assembly.imageChange==null|| assembly.imageChange == 0\"  style=\"width: 40px; margin:5px auto;\" />\n      <ion-spinner [hidden]=\"assembly.imageChange!=null\"   name=\"circles\"></ion-spinner>\n      <ion-label style=\"font-size: smaller;margin-left: 5px;\">\n        <small class=\"linkText\">{{assembly.lastName}} {{assembly.firstName}}</small><br><span></span>\n        <small>{{assembly.territorialDivision}}</small><br><span></span>\n        <small *ngIf=\"assembly.active\">Activo hasta la finalización del periodo legislativo<br></small>\n        <small *ngIf=\"!assembly.active\">No finaliza el periodo legislativo<br></small>\n          <div class=\"item row\">\n            <span align=\"text-right\" [hidden]=\"bandCurul\"  class=\"col col-50\"><small>Curul {{assembly.curul}}</small></span>\n          </div>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n  <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/tabs/tab-principales/tab-principales.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/tabs/tab-principales/tab-principales.module.ts ***!
  \***************************************************************************/
/*! exports provided: TabPrincipalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPrincipalesPageModule", function() { return TabPrincipalesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_principales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-principales.page */ "./src/app/components/tabs/tab-principales/tab-principales.page.ts");







var routes = [
    {
        path: '',
        component: _tab_principales_page__WEBPACK_IMPORTED_MODULE_6__["TabPrincipalesPage"]
    }
];
var TabPrincipalesPageModule = /** @class */ (function () {
    function TabPrincipalesPageModule() {
    }
    TabPrincipalesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab_principales_page__WEBPACK_IMPORTED_MODULE_6__["TabPrincipalesPage"]]
        })
    ], TabPrincipalesPageModule);
    return TabPrincipalesPageModule;
}());



/***/ }),

/***/ "./src/app/components/tabs/tab-principales/tab-principales.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/tabs/tab-principales/tab-principales.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stycky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #ffffff;\n  margin-bottom: 10px;\n  z-index: 999;\n  display: -webkit-box;\n  max-height: 150px;\n  -webkit-line-clamp: 7;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJlc21vcmFsZXMvSW3DoWdlbmVzL2FwcC1hc2FtYmxlYTIvc3JjL2FwcC9jb21wb25lbnRzL3RhYnMvdGFiLXByaW5jaXBhbGVzL3RhYi1wcmluY2lwYWxlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGFicy90YWItcHJpbmNpcGFsZXMvdGFiLXByaW5jaXBhbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YWJzL3RhYi1wcmluY2lwYWxlcy90YWItcHJpbmNpcGFsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eWNreXtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgei1pbmRleDogOTk5O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogNztcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cblxuXG4iLCIuc3R5Y2t5IHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDc7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/tabs/tab-principales/tab-principales.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/tabs/tab-principales/tab-principales.page.ts ***!
  \*************************************************************************/
/*! exports provided: TabPrincipalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPrincipalesPage", function() { return TabPrincipalesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interfaces_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/model */ "./src/app/interfaces/model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _modal_modal_asambleista_modal_asambleista_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modal/modal-asambleista/modal-asambleista.page */ "./src/app/components/modal/modal-asambleista/modal-asambleista.page.ts");






var TabPrincipalesPage = /** @class */ (function () {
    function TabPrincipalesPage(modalController, toastController, rest) {
        this.modalController = modalController;
        this.toastController = toastController;
        this.rest = rest;
        this.assemblyMan = [];
        this.searchAssembly = '';
        this.curulNumber = '';
        this.periodActive = new _interfaces_model__WEBPACK_IMPORTED_MODULE_2__["Period"]();
        this.allPeriod = [];
        this.arrayPeriod = [];
        this.bandCurul = false;
        this.periodSelect = new _interfaces_model__WEBPACK_IMPORTED_MODULE_2__["Period"]();
        this.i = 0;
    }
    TabPrincipalesPage.prototype.ngOnInit = function () {
        this.getPeriod();
        this.getPeriodAll();
    };
    TabPrincipalesPage.prototype.getPeriod = function () {
        var _this = this;
        this.rest.getPeriod().subscribe(function (respo) {
            _this.periodActive = respo;
            _this.periodSelect = respo;
        }, function (error1) { }, function () {
            _this.listAssemblyByPeriod();
        });
    };
    TabPrincipalesPage.prototype.getPeriodAll = function () {
        var _this = this;
        var j = 0;
        this.rest.getPeriodAll().subscribe(function (response) {
            _this.allPeriod = response;
            _this.allPeriod.forEach(function (data) {
                if (!data.name.indexOf('PERÍODO')) {
                    _this.arrayPeriod[j] = data;
                    j = j + 1;
                }
            });
        }, function (error1) { }, function () {
        });
    };
    TabPrincipalesPage.prototype.onChange = function (event) {
        this.periodActive = event.target.value;
        this.assemblyMan = [];
        this.i = 0;
        this.infiniteScroll.disabled = false;
        this.listAssemblyByPeriod();
    };
    TabPrincipalesPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.listAssemblyByPeriod(event);
        }, 500);
    };
    TabPrincipalesPage.prototype.listAssemblyByPeriod = function (event) {
        var _this = this;
        this.infiniteScroll.disabled = false;
        var a = '0';
        var c = '0';
        if (this.searchAssembly !== '') {
            a = this.searchAssembly;
        }
        if (this.curulNumber.toString() !== '') {
            c = this.curulNumber;
        }
        if (this.periodActive.id === this.periodSelect.id) {
            this.bandCurul = false;
        }
        else {
            this.bandCurul = true;
        }
        var incre = 30;
        if (event !== undefined) {
            this.i = this.i + incre;
        }
        this.rest.getAssemblyMembersResource({
            periodId: this.periodActive.id,
            territorialId: 0,
            politicalPartyId: 0,
            includePicture: false,
            onlyActives: false,
            onlyAlterns: false,
            assembly: a,
            curul: c,
            offset: this.i,
            limit: 30
        }).subscribe(function (response) {
            var _a;
            if (response.length > 0) {
                if (event !== undefined) {
                    (_a = _this.assemblyMan).push.apply(_a, response);
                    if (event) {
                        event.target.complete();
                    }
                }
                else {
                    _this.assemblyMan = response;
                }
            }
            else {
                if (response.length === 0 && event !== undefined) {
                    event.target.disabled = true;
                }
            }
        }, function () {
            console.log('Ha ocurrido un error');
        }, function () {
            if (_this.assemblyMan) {
                _this.listAssemblyPhoto();
            }
        });
    };
    TabPrincipalesPage.prototype.listAssemblyPhoto = function () {
        var _this = this;
        this.assemblyMan.forEach(function (data) {
            _this.getPhoto(data);
        });
    };
    TabPrincipalesPage.prototype.getPhoto = function (data) {
        var _this = this;
        this.rest.getAssemblymanPhoto({
            assemblyMemberId: data.id
        }).subscribe(function (responsePhoto) {
            var blob = new Blob([responsePhoto], {
                type: 'image/png'
            });
            if (blob.size > 0) {
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(blob);
                reader_1.onloadend = function () {
                    _this.photoMan = reader_1.result;
                    data.imageChange = _this.photoMan;
                };
            }
            else {
                data.imageChange = '../assets/images/silueta.png';
            }
        }, function () {
            data.imageChange = '../assets/images/silueta.png';
        });
    };
    TabPrincipalesPage.prototype.changeModal = function (id, image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_modal_asambleista_modal_asambleista_page__WEBPACK_IMPORTED_MODULE_5__["ModalAsambleistaPage"],
                            componentProps: {
                                periodActive: this.periodActive.id,
                                idAssembly: id,
                                imageChange: image,
                                assembly: this.assemblyMan.filter(function (data) { return data.id === id; }),
                                bandActive: this.bandCurul
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
    /*searchItems(event) {
        const f = event.target.value;
        if ( f && f.toString().length > 2 ) {
            this.rest.getAssemblyMembersResource({
                periodId: this.periodActive.id,
                territorialId: 0,
                politicalPartyId: 0,
                includePicture: false,
                onlyActives: false,
                onlyAlterns: false,
                assembly: f,
                offset: 0,
                limit: 30
            }).subscribe( response => {
                this.assemblyMan = response;
            }, () => {
            }, () => {
                if (this.assemblyMan) {
                    this.listAssemblyPhoto();
                    this.infiniteScroll.disabled = true;
                }
            });
        } else if (this.searchAssembly === '') {
            this.assemblyMan = [];
            this.listAssemblyByPeriod();
        }
    }*/
    TabPrincipalesPage.prototype.resetTextFirst = function () {
        this.searchAssembly = '';
        this.i = 0;
        this.assemblyMan = [];
        this.listAssemblyByPeriod();
    };
    TabPrincipalesPage.prototype.resetTextSecond = function () {
        this.curulNumber = '';
        this.i = 0;
        this.assemblyMan = [];
        this.listAssemblyByPeriod();
    };
    TabPrincipalesPage.prototype.getClear = function () {
        this.i = 0;
        this.assemblyMan = [];
        this.listAssemblyByPeriod();
    };
    TabPrincipalesPage.prototype.presentToast = function (msg) {
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
    TabPrincipalesPage.prototype.messageClose = function () {
        this.toastController.dismiss({
            'dismissed': true
        });
    };
    TabPrincipalesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])
    ], TabPrincipalesPage.prototype, "infiniteScroll", void 0);
    TabPrincipalesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-principales',
            template: __webpack_require__(/*! raw-loader!./tab-principales.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/tabs/tab-principales/tab-principales.page.html"),
            styles: [__webpack_require__(/*! ./tab-principales.page.scss */ "./src/app/components/tabs/tab-principales/tab-principales.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _service_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]])
    ], TabPrincipalesPage);
    return TabPrincipalesPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tab-principales-tab-principales-module-es5.js.map