(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class='ion-text-center'>\r\n      {{properties.titleHome}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"scroll-content\">\r\n    <ion-img (click)=\"goTour()\" src=\"../assets/images/superior4.jpeg\" style=\"width: 100%;\"></ion-img>\r\n\r\n    <ion-grid>\r\n\r\n      <!--<ion-row *ngIf=\"countLiveSession > 0\" class=\"vertical-align-content\">\r\n        <ion-col>\r\n          <ion-img src=\"../assets/images/loop.gif\" style=\"float: right;\" ></ion-img>\r\n        </ion-col>\r\n        <ion-col style=\"font-weight: bold; color: #000000; text-align: center;\" (click)=\"verifyActiveTransmissions()\">Sesión en Vivo</ion-col>\r\n        <ion-col>\r\n          <ion-img class=\"rotate90\" src=\"../assets/images/loop.gif\" style=\"float: right;\" ></ion-img>\r\n        </ion-col>\r\n      </ion-row>-->\r\n\r\n      <ion-row>\r\n        <ion-col (click)=\"goEstructura()\" align-self-center>\r\n          <ion-img src=\"../assets/images/estructura.svg\" class=\"imageIcon\"></ion-img>\r\n        </ion-col>\r\n        <ion-col (click)=\"goSesiones()\" align-self-center>\r\n          <ion-img src=\"../assets/images/sesiones.svg\" class=\"imageIcon\"></ion-img>\r\n        </ion-col>\r\n        <ion-col (click)=\"goVotaciones()\" align-self-center>\r\n          <ion-img src=\"../assets/images/votaciones.svg\" class=\"imageIcon\"></ion-img>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top: -5px;\">\r\n        <ion-col (click)=\"goEstructura()\" style=\"text-align: center;\">\r\n          <ion-text class=\"imageText\">{{properties.titleConformation}}</ion-text>\r\n        </ion-col>\r\n        <ion-col (click)=\"goSesiones()\" style=\"text-align: center;\">\r\n          <ion-text class=\"imageText\">{{properties.titleSessions}}</ion-text>\r\n        </ion-col>\r\n        <ion-col (click)=\"goVotaciones()\" style=\"text-align: center;\">\r\n          <ion-text class=\"imageText\">{{properties.titleVotations}}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top: 10px;\"></ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col (click)=\"goTemas()\" align-self-center>\r\n          <ion-img src=\"../assets/images/temas.svg\" class=\"imageIcon\"></ion-img>\r\n        </ion-col>\r\n        <ion-col  (click)=\"goAsambleistas()\" align-self-center>\r\n          <ion-img src=\"../assets/images/asambleistas.svg\" class=\"imageIcon\"></ion-img>\r\n        </ion-col>\r\n        <ion-col (click)=\"openPageWhithOutrlBar(env.urlDiary)\" align-self-center>\r\n          <ion-img src=\"../assets/images/agenda.svg\" class=\"imageIcon\"></ion-img>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top: -5px;\">\r\n        <ion-col (click)=\"goTemas()\" style=\"text-align: center;\">\r\n          <ion-text class=\"imageText\">{{properties.titleThemes}}</ion-text>\r\n        </ion-col>\r\n        <ion-col  (click)=\"goAsambleistas()\" style=\"text-align: center;\">\r\n          <ion-text class=\"imageText\">{{properties.titleAssemblyman}}</ion-text>\r\n        </ion-col>\r\n        <ion-col  (click)=\"openPageWhithOutrlBar(env.urlDiary)\" style=\"text-align: center;\">\r\n          <ion-text class=\"imageText\">{{properties.titleSchedule}}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top: 10px;\"></ion-row>\r\n\r\n      <!--<ion-row>\r\n        <ion-col (click)=\"goProyectos()\" align-self-center>\r\n          <ion-img src=\"../assets/images/proyectos.svg\" class=\"imageIcon\"></ion-img>\r\n        </ion-col>\r\n        <ion-col (click)=\"goInspection()\" align-self-center>\r\n          <ion-img src=\"../assets/images/inspection.svg\" class=\"imageIcon\"></ion-img>\r\n        </ion-col>\r\n        <ion-col (click)=\"goLeyes()\" align-self-center>\r\n          <ion-img  src=\"../assets/images/leyes_aprobadas.svg\" class=\"imageIcon\"></ion-img>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top: -5px;\">\r\n        <ion-col (click)=\"goProyectos()\" style=\"text-align: center;\">\r\n          <ion-text class=\"imageText\">{{properties.titleLawProjects}}</ion-text>\r\n        </ion-col>\r\n        <ion-col (click)=\"goFavoritos()\" style=\"text-align: center;\">\r\n          <ion-text class=\"imageText\">{{properties.titleInspection}}</ion-text>\r\n        </ion-col>\r\n        <ion-col  (click)=\"goLeyes()\" style=\"text-align: center;\">\r\n          <ion-text class=\"imageText\">{{properties.titleLaws}}</ion-text>\r\n        </ion-col>\r\n      </ion-row>-->\r\n\r\n      <ion-row>\r\n        <ion-col (click)=\"goLiveTv()\" align-self-center>\r\n          <ion-img src=\"../assets/images/tv.svg\" class=\"imageIcon\"></ion-img>\r\n        </ion-col>\r\n        <ion-col (click)=\"goLiveRadio()\" align-self-center>\r\n          <ion-img src=\"../assets/images/radio.svg\" class=\"imageIcon\" style=\"width: 5em !important;\"></ion-img>\r\n        </ion-col>\r\n        <ion-col (click)=\"getTransmissions(true)\" align-self-center>\r\n          <ion-img  src=\"../assets/images/transmissions.svg\" class=\"imageIcon\" ></ion-img>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top: -5px;\">\r\n        <ion-col (click)=\"goLiveTv()\" style=\"text-align: center;\">\r\n          <ion-text class=\"imageText\">{{properties.titleLiveTv}}</ion-text>\r\n        </ion-col>\r\n        <ion-col (click)=\"goLiveRadio()\" style=\"text-align: center;\">\r\n          <ion-text class=\"imageText\">{{properties.titleLiveRadio}}</ion-text>\r\n        </ion-col>\r\n        <ion-col  (click)=\"getTransmissions(true)\" style=\"text-align: center;\">\r\n          <ion-text class=\"imageText\">{{properties.titleLiveTransmission}}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n    <div class=\"lower-content\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col></ion-col>\r\n          <ion-col>\r\n            <ion-img (click)=\"goNewPage('https://www.facebook.com/asambleanacional/')\" src=\"../assets/images/facebook-04.svg\" style=\"width: 2em;margin:0 auto;\"></ion-img>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-img (click)=\"goNewPage('https://twitter.com/AsambleaEcuador')\" src=\"../assets/images/twitter-04.svg\" style=\"width: 2em;margin:0px auto;\"></ion-img>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-img (click)=\"goNewPage('https://www.youtube.com/channel/UCtNaMr4K4bZgpvz2bzcyjjw')\" src=\"../assets/images/youtube-04.svg\" style=\"width: 2em;margin:0px auto;\"></ion-img>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-img (click)=\"goNewPage('https://www.instagram.com/asambleaecuador/')\" src=\"../assets/images/instagram-04.svg\" style=\"width: 2em;margin:0px auto;\"></ion-img>\r\n          </ion-col>\r\n          <ion-col></ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-img (click)=\"goNewPage('https://www.asambleanacional.gob.ec')\" src=\"../assets/images/boton web-04.svg\" style=\"height: 70%\"></ion-img>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"1\">\r\n            <ion-img src=\"../assets/images/location.svg\" style=\"width: 1em;margin:0 auto;\"></ion-img>\r\n          </ion-col>\r\n          <ion-col size=\"7\" (click)=\"openMap()\" class=\"linkText\" style=\"font-size: 0.75em; font-weight: bold; padding-top: 10px;\">Av. 6 de Diciembre y Piedrahita</ion-col>\r\n          <ion-col size=\"1\" style=\"border-left: 2px solid #606060\">\r\n            <ion-img src=\"../assets/images/phone.svg\" style=\"width: 1em;margin:0 auto;\"></ion-img>\r\n          </ion-col>\r\n          <ion-col size=\"3\" (click)=\"goCallNumber()\" class=\"linkText\" style=\"font-size: 0.75em; font-weight: bold; padding-top: 10px;\">02 399 1000</ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n/*\nion-content {\n  --background: url('../../assets/images/fondo-vertical.png') no-repeat 0/100% 100%;\n}\n*/\n\n.imageIcon {\n  width: 3.5em;\n  margin: 0px auto;\n  cursor: pointer;\n}\n\n.imageText {\n  width: 100%;\n  font-size: 0.85em;\n  cursor: pointer;\n  margin-top: -5px !important;\n  color: #484a4b;\n}\n\n.one {\n  background-color: #0067b1;\n  background-image: -webkit-linear-gradient(150deg, #0067b1 75%, #f5cd21 15%);\n  min-height: 100px;\n}\n\n.two {\n  background-color: #c02c33;\n  background-image: -webkit-linear-gradient(150deg, #c02c33 75%, #0067b1 15%);\n  min-height: 100px;\n}\n\n.yl {\n  display: inline-block;\n  min-height: 100px;\n  width: 100%;\n  background-color: #f5cd21;\n}\n\n.vertical-align-content {\n  background-color: #f8f9f9;\n  display: -webkit-box !important;\n  display: flex !important;\n  align-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n}\n\n.rotate90 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n.dvAddress {\n  margin-top: -10px;\n  display: inline-block;\n  width: 70%;\n  height: 56px;\n}\n\n.dvPhone {\n  margin-top: -10px;\n  display: inline-block;\n  width: 30%;\n  height: 56px;\n  padding-top: 12px;\n}\n\n.lower-content {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.scroll-content {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 1;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  will-change: scroll-position;\n  contain: size style layout;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phbmRyZXMvRXNjcml0b3Jpby9Qcm95ZWN0b3MtZGUtU29mdHdhcmUvQXBwL2FwcC1hc2FtYmxlYS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7Ozs7Q0FBQTs7QUFNQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsMkVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREVBO0VBQ0UseUJBQUE7RUFDQSwyRUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDRUY7O0FEQ0E7RUFFRSx5QkFBQTtFQUNBLCtCQUFBO0VBQUEsd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO1VBQUEsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0VBSUEseUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLypcbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZm9uZG8tdmVydGljYWwucG5nJykgbm8tcmVwZWF0IDAvMTAwJSAxMDAlO1xufVxuKi9cblxuLmltYWdlSWNvbntcbiAgd2lkdGg6IDMuNWVtO1xuICBtYXJnaW46MHB4IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltYWdlVGV4dHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IC01cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM0ODRhNGI7XG59XG5cbi5vbmV7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY3YjE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE1MGRlZywgIzAwNjdiMSA3NSUsICNmNWNkMjEgMTUlKTtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG4udHdve1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAyYzMzO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNTBkZWcsICNjMDJjMzMgNzUlLCAjMDA2N2IxIDE1JSk7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuLnlse1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVjZDIxO1xufVxuXG4udmVydGljYWwtYWxpZ24tY29udGVudFxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWY5O1xuICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciFpbXBvcnRhbnQ7XG59XG5cbi5yb3RhdGU5MCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmR2QWRkcmVzc3tcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuXG4uZHZQaG9uZXtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiA1NnB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuLmxvd2VyLWNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICB3aWxsLWNoYW5nZTogc2Nyb2xsLXBvc2l0aW9uO1xuICBjb250YWluOiBzaXplIHN0eWxlIGxheW91dDtcbiAgZGlzcGxheTogZmxleDsgICAgICAgICAgICAgLy8gYWRkZWQgYnkgbWVcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgLy8gYWRkZWQgYnkgbWVcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcblxufVxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKlxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9mb25kby12ZXJ0aWNhbC5wbmcnKSBuby1yZXBlYXQgMC8xMDAlIDEwMCU7XG59XG4qL1xuLmltYWdlSWNvbiB7XG4gIHdpZHRoOiAzLjVlbTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1hZ2VUZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IC01cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM0ODRhNGI7XG59XG5cbi5vbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2N2IxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNTBkZWcsICMwMDY3YjEgNzUlLCAjZjVjZDIxIDE1JSk7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuXG4udHdvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMmMzMztcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTUwZGVnLCAjYzAyYzMzIDc1JSwgIzAwNjdiMSAxNSUpO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxuLnlsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWNkMjE7XG59XG5cbi52ZXJ0aWNhbC1hbGlnbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmOTtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ucm90YXRlOTAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5kdkFkZHJlc3Mge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDU2cHg7XG59XG5cbi5kdlBob25lIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiA1NnB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuLmxvd2VyLWNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICB3aWxsLWNoYW5nZTogc2Nyb2xsLXBvc2l0aW9uO1xuICBjb250YWluOiBzaXplIHN0eWxlIGxheW91dDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _properties_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../properties/properties */ "./src/app/properties/properties.ts");
/* harmony import */ var _properties_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../properties/links */ "./src/app/properties/links.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _service_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/rest.service */ "./src/app/service/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_environment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/environment.service */ "./src/app/service/environment.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _components_external_facebook_facebook_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/external/facebook/facebook.page */ "./src/app/components/external/facebook/facebook.page.ts");
/* harmony import */ var _components_external_tvonline_tvonline_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/external/tvonline/tvonline.page */ "./src/app/components/external/tvonline/tvonline.page.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
















let HomePage = class HomePage {
    constructor(iab, router, properties, localNotifications, rest, modalController, environmentService, callNumber, platform, toastController) {
        this.iab = iab;
        this.router = router;
        this.properties = properties;
        this.localNotifications = localNotifications;
        this.rest = rest;
        this.modalController = modalController;
        this.environmentService = environmentService;
        this.callNumber = callNumber;
        this.platform = platform;
        this.toastController = toastController;
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"];
    }
    ngOnInit() {
        /*this.environmentService.getFacebookList().subscribe(value => {
            this.urlLiveSession = '';
            this.countLiveSession = 0;
            if( value != null ) {
                this.countLiveSession = value.length;
                if ( value.length == 1 ) {
                    this.urlLiveSession = 'https://www.facebook.com/plugins/video.php?' +
                        'href=https%3A%2F%2Fwww.facebook.com%2Fasambleanacional%2Fvideos%2F' +
                        value[0].url + '%2F&show_text=0';
                }
            }
        });*/
    }
    ionViewWillEnter() {
        /*
        if ( environment.idFacebookLive !== '' ) {
            this.urlLiveSession = 'https://www.facebook.com/plugins/video.php?' +
                'href=https%3A%2F%2Fwww.facebook.com%2Fasambleanacional%2Fvideos%2F' +
                environment.idFacebookLive + '%2F&show_text=0';
        } else {
            this.urlLiveSession = '';
        }
        */
        /*
        this.urlLiveSession = '';
        this.rest.getParameterValueFromName({
            pattern: 'FACEBOOK_LIVE_URL'
        }).subscribe(response => {
            if ( response[0] !== undefined ) {
                if ( response[0].value.length > 0 ) {
                    this.urlLiveSession = response[0].value;
                    // no va
                    const fechaActual = new Date();
                    if ( localStorage.getItem('liveSessionDate') !== null  && localStorage.getItem('liveSessionDate').length > 0 ) {
                        const fechaAnteriorStringSplit = localStorage.getItem('liveSessionDate').split(' ');
                        if ( fechaAnteriorStringSplit[0] !== fechaActual.toLocaleDateString() ) {
                            console.log('SI');
                        }
                        const fechaAnterior = this.getDateFromString(fechaAnteriorStringSplit[0], fechaAnteriorStringSplit[1]);
                        let diff = Number(fechaActual) - Number(fechaAnterior);
                        diff = Math.abs(diff);
                        diff = Math.floor((diff / 1000) / 60);
                        console.log(diff);
                        this.urlLiveSession = response[0].value;
                    } else {
                        localStorage.setItem('liveSessionDate', fechaActual.toLocaleDateString() +
                            ' ' + fechaActual.getHours() + ':' + fechaActual.getMinutes());
                    }
                    // end no va
                }
            }
        });
        */
        /*
        const fechaAnteriorStringSplit = localStorage.getItem('liveSessionDate').split(' ');
        const fechaAnterior = this.getDateFromString(fechaAnteriorStringSplit[0], fechaAnteriorStringSplit[1]);
        const fechaActual = new Date();
        let diff = Math.abs(  fechaActual - fechaAnterior );
        diff = Math.floor((diff / 1000) / 60);
        */
        // localStorage.setItem('liveSessionDate', fechaActualString);
        // this.sendNotification();
    }
    getDateFromString(dateS, hourS) {
        const ymd = dateS.split('/');
        const hm = hourS.split(':');
        return new Date(Number(ymd[2]), Number(ymd[1]) - 1, Number(ymd[0]), Number(hm[0]), Number(hm[1]));
    }
    sendNotification() {
        // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf'
        this.localNotifications.schedule({
            id: 1,
            text: 'Notificación de prueba',
            sound: null
        });
    }
    goAsambleistas() {
        this.router.navigate([_properties_links__WEBPACK_IMPORTED_MODULE_5__["Links"].assemblyman]);
    }
    goVotaciones() {
        this.router.navigate([_properties_links__WEBPACK_IMPORTED_MODULE_5__["Links"].votations]);
    }
    goSesiones() {
        this.router.navigate([_properties_links__WEBPACK_IMPORTED_MODULE_5__["Links"].sessions]);
    }
    goAgenda() {
        const options = {
            zoom: 'no',
            location: 'no',
            toolbar: 'no'
        };
        const browser = this.iab.create(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].urlDiary, '_blank', options);
        browser.show();
    }
    goTemas() {
        this.router.navigate([_properties_links__WEBPACK_IMPORTED_MODULE_5__["Links"].themes]);
    }
    goInspection() {
        this.router.navigate(['inspection']);
    }
    goProyectos() {
        this.router.navigate(['ppless']);
    }
    goLeyes() {
        this.router.navigate(['laws']);
    }
    goEstructura() {
        this.router.navigate([_properties_links__WEBPACK_IMPORTED_MODULE_5__["Links"].structure]);
    }
    goFavoritos() {
        this.router.navigate([_properties_links__WEBPACK_IMPORTED_MODULE_5__["Links"].favorites]);
    }
    goTour() {
        this.router.navigate([_properties_links__WEBPACK_IMPORTED_MODULE_5__["Links"].tourVirtual]);
    }
    openPageWhithOutrlBar(url) {
        const options = {
            zoom: 'no',
            location: 'no',
            toolbar: 'no'
        };
        const browser = this.iab.create(url, '_blank', options);
        browser.show();
    }
    goNewPage(url) {
        /*const browser = this.iab.create(url,'_blank');
        browser.show();*/
        window.open(url, '_system');
    }
    goCallNumber() {
        this.callNumber.callNumber("023991000", false)
            .then(res => console.log('llamando!', res))
            .catch(err => console.log('Error de llamada', err));
    }
    ionViewDidEnter() {
        let lastTimeBackPress = 0;
        const timePeriodToExit = 2000;
        this.subscription = this.platform.backButton.subscribe(() => {
            if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                navigator["app"].exitApp();
            }
            else {
                this.presentToast('Para salir de la App presione nuevamente el botón de retroceso');
                lastTimeBackPress = new Date().getTime();
            }
        });
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    openMap() {
        if (this.platform.is('ios')) {
            window.open('maps://?q=-0.2132337,-78.5003135', '_system');
        }
        else {
            window.open('geo:0,0?q=-0.2132337,-78.5003135', '_system');
        }
    }
    goLiveTv() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_external_tvonline_tvonline_page__WEBPACK_IMPORTED_MODULE_12__["TvonlinePage"]
            });
            return yield modal.present();
        });
    }
    goLiveRadio() {
        this.environmentService.setShowRadio(true);
    }
    getTransmissions(open) {
        this.rest.getFacebookLive().subscribe(response => {
            let l = [];
            let l1 = [];
            l = response;
            for (const o of l) {
                if (o.url.length > 0) {
                    l1.push(o);
                }
            }
            if (l1.length > 0) {
                this.environmentService.setFacebookList(l1);
            }
            else {
                this.environmentService.setFacebookList(null);
            }
            if (open) {
                this.verifyActiveTransmissions();
            }
        }, error => {
            this.environmentService.setFacebookList(null);
        });
    }
    verifyActiveTransmissions() {
        this.environmentService.getFacebookList().subscribe(value => {
            if (value != null && value.length > 0) {
                this.openTransmissionPage();
            }
            else {
                this.presentToast('Actualmente no contamos con una transmisión en vivo');
            }
        });
    }
    openTransmissionPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_external_facebook_facebook_page__WEBPACK_IMPORTED_MODULE_11__["FacebookPage"]
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) { }
            });
            return yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _properties_properties__WEBPACK_IMPORTED_MODULE_4__["Properties"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__["LocalNotifications"] },
    { type: _service_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _service_environment_service__WEBPACK_IMPORTED_MODULE_9__["EnvironmentService"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _properties_properties__WEBPACK_IMPORTED_MODULE_4__["Properties"],
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__["LocalNotifications"],
        _service_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
        _service_environment_service__WEBPACK_IMPORTED_MODULE_9__["EnvironmentService"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__["CallNumber"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map