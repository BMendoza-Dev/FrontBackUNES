(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-asambleistas-asambleistas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/asambleistas/asambleistas.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/asambleistas/asambleistas.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"{{properties.titleAssemblyman}}\"></app-header>\r\n\r\n<ion-content>\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"top\">\r\n      <ion-tab-button  tab=\"tabPrincipales\">\r\n        <ion-icon name=\"person\"></ion-icon>\r\n        <ion-label>Principales</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button  tab=\"tabAmbito\">\r\n        <ion-icon name=\"md-globe\"></ion-icon>\r\n        <ion-label>Ambito Territorial</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <!--<ion-tab-button tab=\"tabAlternos\">\r\n        <ion-icon name=\"people\"></ion-icon>\r\n        <ion-label>Alternos</ion-label>\r\n      </ion-tab-button>-->\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n\r\n<!--  <div class=\"stycky\">\r\n    <ion-select interface=\"action-sheet\" (ionChange)=\"onChange($event)\"\r\n                placeholder=\"Seleccione un ítem de la lista\"\r\n                cancel-text=\"Cancelar\"\r\n                [selectedText]=\"periodActive.name\"\r\n                style=\"border-bottom: 2px solid #a2a4ab;text-align: center;\"\r\n    >\r\n      <ion-select-option *ngFor=\"let p of arrayPeriod\"  [value]=\"p\" >{{p.name}}</ion-select-option>\r\n    </ion-select>\r\n    <ion-searchbar style=\"font-size: small;\" (change)=\"searchItems($event)\" (ionClear)=\"getClear()\" [value]=\"searchAssembly\" autocomplete=\"on\" placeholder=\"Para buscar mínimo 3 caracteres\"></ion-searchbar>\r\n  </div>\r\n  <ion-card class=\"cardStyles\" *ngFor=\"let assembly of assemblyMan; let end=last\">\r\n    <ion-item (click)=\"changeModal(assembly.id,assembly.imageChange)\">\r\n      <img [src]='assembly.imageChange'  [hidden]=\"assembly.imageChange==null|| assembly.imageChange == 0\"  style=\"width: 40px; margin:5px auto;\" />\r\n      <ion-icon [hidden]=\"assembly.imageChange !== 0\" name=\"md-contact\" style=\"font-size: 2.5em;\"></ion-icon>\r\n      <ion-spinner [hidden]=\"assembly.imageChange!=null\"   name=\"circles\"></ion-spinner>\r\n      <ion-label style=\"font-size: smaller;margin-left: 5px;\">\r\n        <small class=\"linkText\">{{assembly.lastName}} {{assembly.firstName}}</small><br><span></span>\r\n        <small>{{assembly.territorialDivision}}</small><br><span></span>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-card>\r\n  <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>-->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/components/asambleistas/asambleistas.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/asambleistas/asambleistas.module.ts ***!
  \****************************************************************/
/*! exports provided: AsambleistasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsambleistasPageModule", function() { return AsambleistasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _asambleistas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asambleistas.page */ "./src/app/components/asambleistas/asambleistas.page.ts");
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _asambleistas_page__WEBPACK_IMPORTED_MODULE_6__["AsambleistasPage"],
        children: [
            {
                path: 'tabPrincipales',
                children: [
                    {
                        path: '',
                        loadChildren: '../tabs/tab-principales/tab-principales.module#TabPrincipalesPageModule'
                    }
                ]
            },
            {
                path: 'tabAmbito',
                children: [
                    {
                        path: '',
                        loadChildren: '../tabs/tab-ambito/tab-ambito.module#TabAmbitoPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'tabPrincipales',
                pathMatch: 'full'
            }
        ]
    }
];
let AsambleistasPageModule = class AsambleistasPageModule {
};
AsambleistasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_asambleistas_page__WEBPACK_IMPORTED_MODULE_6__["AsambleistasPage"]]
    })
], AsambleistasPageModule);



/***/ }),

/***/ "./src/app/components/asambleistas/asambleistas.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/asambleistas/asambleistas.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stycky {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #ffffff;\n  margin-bottom: 10px;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phbmRyZXMvRXNjcml0b3Jpby9Qcm95ZWN0b3MtZGUtU29mdHdhcmUvQXBwL2FwcC1hc2FtYmxlYS9zcmMvYXBwL2NvbXBvbmVudHMvYXNhbWJsZWlzdGFzL2FzYW1ibGVpc3Rhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYXNhbWJsZWlzdGFzL2FzYW1ibGVpc3Rhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FzYW1ibGVpc3Rhcy9hc2FtYmxlaXN0YXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eWNreXtcclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcbiIsIi5zdHlja3kge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgei1pbmRleDogOTk5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/asambleistas/asambleistas.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/asambleistas/asambleistas.page.ts ***!
  \**************************************************************/
/*! exports provided: AsambleistasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsambleistasPage", function() { return AsambleistasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _properties_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../properties/properties */ "./src/app/properties/properties.ts");



let AsambleistasPage = class AsambleistasPage {
    /*
    assemblyMan: AssemblyMan[] = [];
    searchAssembly = '';
    photoMan: any;
    periodActive: Period = new Period();
    allPeriod: Period[] = [];
    arrayPeriod: Period[] = [];
    i = 0;
    // @ts-ignore
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

    constructor(public properties: Properties,
                public modalController: ModalController,
                private rest: RestService) {
    }

    ngOnInit() {
        this.getPeriod();
        this.getPeriodAll();
    }

    getPeriod() {
        this.rest.getPeriod().subscribe(respo => {
                this.periodActive =  respo;
            }, error1 => {}, () => {
                this.listAssemblyByPeriod();
            }
        );
    }

    getPeriodAll() {
        let j = 0;
        this.rest.getPeriodAll().subscribe(response => {
                this.allPeriod = response;
                this.allPeriod.forEach(data => {
                    if (!data.name.indexOf('ASAMBLEA NACIONAL')) {
                        this.arrayPeriod[j] = data;
                        j = j + 1;
                    }
                });
            }, error1 => {}, () => {

            }
        );
    }
    onChange(event) {
        this.periodActive = event.target.value;
        this.assemblyMan = [];
        this.i = 0;
        this.infiniteScroll.disabled = false;
        this.listAssemblyByPeriod();
    }
    public loadData(event) {
        setTimeout(() => {
            this.listAssemblyByPeriod(event);
        }, 500);
    }
    listAssemblyByPeriod(event?) {
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
            onlyAlterns: false,
            assembly: 0,
            offset: this.i,
            limit: 30
        }).subscribe( response => {
            if (response.length > 0) {
                if (event !== undefined) {
                    this.assemblyMan.push(...response);
                    if (event) {
                        event.target.complete();
                    }
                } else {
                    this.assemblyMan = response;
                }
            } else {
                if (response.length === 0) {
                    event.target.disabled = true;
                }
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

    getPhoto(data: AssemblyMan) {
        this.rest.getAssemblymanPhoto({
            assemblyMemberId: data.id
        }).subscribe( responsePhoto => {
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
                } else {
                    data['imageChange'] = 0;
                }
            }
        );
    }

    async changeModal(id, image) {
        const modal = await this.modalController.create({
            component: ModalAsambleistaPage,
            componentProps: {
                'periodActive': this.periodActive.id,
                'idAssembly': id,
                'imageChange': image,
                'assembly': this.assemblyMan.filter(data => data.id === id)
            }
        });
        return await modal.present();
    }

    searchItems(event) {
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
    }
    getClear() {
        this.i = 0;
        this.assemblyMan = [];
        this.listAssemblyByPeriod();
    }
    */
    constructor(properties) {
        this.properties = properties;
    }
    ngOnInit() {
    }
};
AsambleistasPage.ctorParameters = () => [
    { type: _properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"] }
];
AsambleistasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-asambleistas',
        template: __webpack_require__(/*! raw-loader!./asambleistas.page.html */ "./node_modules/raw-loader/index.js!./src/app/components/asambleistas/asambleistas.page.html"),
        styles: [__webpack_require__(/*! ./asambleistas.page.scss */ "./src/app/components/asambleistas/asambleistas.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_properties_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"]])
], AsambleistasPage);



/***/ })

}]);
//# sourceMappingURL=components-asambleistas-asambleistas-module-es2015.js.map