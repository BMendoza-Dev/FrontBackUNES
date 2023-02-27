(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class='ion-text-center'>\n      {{properties.titleHome}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"scroll-content\">\n    <ion-img (click)=\"goTour()\" src=\"https://intranet.asambleanacional.gob.ec/intranet/images/appimagen.jpeg\" style=\"width: 100%;\"></ion-img>\n\n    <ion-grid>\n\n      <!--<ion-row *ngIf=\"countLiveSession > 0\" class=\"vertical-align-content\">\n        <ion-col>\n          <ion-img src=\"../assets/images/loop.gif\" style=\"float: right;\" ></ion-img>\n        </ion-col>\n        <ion-col style=\"font-weight: bold; color: #000000; text-align: center;\" (click)=\"verifyActiveTransmissions()\">Sesión en Vivo</ion-col>\n        <ion-col>\n          <ion-img class=\"rotate90\" src=\"../assets/images/loop.gif\" style=\"float: right;\" ></ion-img>\n        </ion-col>\n      </ion-row>-->\n\n      <ion-row>\n        <ion-col (click)=\"goEstructura()\" align-self-center>\n          <ion-img src=\"../assets/images/estructura.svg\" class=\"imageIcon\"></ion-img>\n        </ion-col>\n        <ion-col (click)=\"goSesiones()\" align-self-center>\n          <ion-img src=\"../assets/images/sesiones.svg\" class=\"imageIcon\"></ion-img>\n        </ion-col>\n        <ion-col (click)=\"goVotaciones()\" align-self-center>\n          <ion-img src=\"../assets/images/votaciones.svg\" class=\"imageIcon\"></ion-img>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top: -5px;\">\n        <ion-col (click)=\"goEstructura()\" style=\"text-align: center;\">\n          <ion-text class=\"imageText\">{{properties.titleConformation}}</ion-text>\n        </ion-col>\n        <ion-col (click)=\"goSesiones()\" style=\"text-align: center;\">\n          <ion-text class=\"imageText\">{{properties.titleSessions}}</ion-text>\n        </ion-col>\n        <ion-col (click)=\"goVotaciones()\" style=\"text-align: center;\">\n          <ion-text class=\"imageText\">{{properties.titleVotations}}</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top: 10px;\"></ion-row>\n\n      <ion-row>\n        <ion-col (click)=\"goTemas()\" align-self-center>\n          <ion-img src=\"../assets/images/temas.svg\" class=\"imageIcon\"></ion-img>\n        </ion-col>\n        <ion-col  (click)=\"goAsambleistas()\" align-self-center>\n          <ion-img src=\"../assets/images/asambleistas.svg\" class=\"imageIcon\"></ion-img>\n        </ion-col>\n        <ion-col (click)=\"getTransmissions(true)\" align-self-center>\n          <ion-img  src=\"../assets/images/transmissions.svg\" class=\"imageIcon\" ></ion-img>\n        </ion-col>\n        <!--  <ion-col (click)=\"openPageWhithOutrlBar(env.urlDiary)\" align-self-center>\n           <ion-img src=\"../assets/images/agenda.svg\" class=\"imageIcon\"></ion-img>\n         </ion-col>-->\n       </ion-row>\n\n       <ion-row style=\"margin-top: -5px;\">\n         <ion-col (click)=\"goTemas()\" style=\"text-align: center;\">\n           <ion-text class=\"imageText\">{{properties.titleThemes}}</ion-text>\n         </ion-col>\n         <ion-col  (click)=\"goAsambleistas()\" style=\"text-align: center;\">\n           <ion-text class=\"imageText\">{{properties.titleAssemblyman}}</ion-text>\n         </ion-col>\n         <ion-col  (click)=\"getTransmissions(true)\" style=\"text-align: center;\">\n           <ion-text class=\"imageText\">{{properties.titleLiveTransmission}}</ion-text>\n         </ion-col>\n         <!-- <ion-col  (click)=\"openPageWhithOutrlBar(env.urlDiary)\" style=\"text-align: center;\">\n          <ion-text class=\"imageText\">{{properties.titleSchedule}}</ion-text>\n        </ion-col> -->\n     </ion-row>\n\n     <ion-row style=\"margin-top: 10px;\"></ion-row>\n\n     <!--<ion-row>\n       <ion-col (click)=\"goProyectos()\" align-self-center>\n         <ion-img src=\"../assets/images/proyectos.svg\" class=\"imageIcon\"></ion-img>\n       </ion-col>\n       <ion-col (click)=\"goInspection()\" align-self-center>\n         <ion-img src=\"../assets/images/inspection.svg\" class=\"imageIcon\"></ion-img>\n       </ion-col>\n\n     </ion-row>\n\n     <ion-row style=\"margin-top: -5px;\">\n       <ion-col (click)=\"goProyectos()\" style=\"text-align: center;\">\n         <ion-text class=\"imageText\">{{properties.titleLawProjects}}</ion-text>\n       </ion-col>\n       <ion-col (click)=\"goFavoritos()\" style=\"text-align: center;\">\n         <ion-text class=\"imageText\">{{properties.titleInspection}}</ion-text>\n       </ion-col>\n       <ion-col  (click)=\"goLeyes()\" style=\"text-align: center;\">\n         <ion-text class=\"imageText\">{{properties.titleLaws}}</ion-text>\n       </ion-col>\n     </ion-row>-->\n\n      <ion-row>\n        <ion-col (click)=\"openPage(env.urlPpless)\" align-self-center>\n          <ion-img src=\"../assets/images/proyectos.svg\" class=\"imageIcon\"></ion-img>\n        </ion-col>\n        <ion-col (click)=\"openLeyes(env.urlLeyeAprobadas)\" align-self-center>\n          <ion-img  src=\"../assets/images/leyes_aprobadas.svg\" class=\"imageIcon\"></ion-img>\n        </ion-col>\n        <ion-col (click)=\"openParticipe(env.urlParticipated)\" align-self-center>\n          <ion-img src=\"../assets/images/people-sharp.svg\" class=\"imageIcon\" style=\"width: 4em !important;\"></ion-img>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row style=\"margin-top: -5px;\">\n        <ion-col (click)=\"openPage(env.urlPpless)\" style=\"text-align: center;\">\n          <ion-text class=\"imageText\">{{properties.titleLawProjects}}</ion-text>\n        </ion-col>\n        <ion-col  (click)=\"openLeyes(env.urlLeyeAprobadas)\" style=\"text-align: center;\">\n          <ion-text class=\"imageText\">{{properties.titleLaws}}</ion-text>\n        </ion-col>\n        <ion-col (click)=\"openParticipe(env.urlParticipated)\" style=\"text-align: center;\">\n          <ion-text class=\"imageText\">{{properties.titleParticipates}}</ion-text>\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <div class=\"lower-content\">\n      <ion-grid>\n        <ion-row>\n          <ion-col></ion-col>\n\n          <ion-col>\n            <ion-img (click)=\"goLiveTv()\" src=\"../assets/images/television.png\" style=\"width: 2em;margin:0 auto;\"></ion-img>\n          </ion-col>\n          <ion-col>\n            <ion-img (click)=\"goLiveRadio()\"  src=\"../assets/images/radio.png\" style=\"width: 3em;margin:0 auto;\"></ion-img>\n          </ion-col>\n          <ion-col>\n            <ion-img (click)=\"goNewPage('https://www.facebook.com/asambleanacional/')\" src=\"../assets/images/facebook-04.svg\" style=\"width: 2em;margin:0 auto;\"></ion-img>\n          </ion-col>\n          <ion-col>\n            <ion-img (click)=\"goNewPage('https://twitter.com/AsambleaEcuador')\" src=\"../assets/images/twitter-04.svg\" style=\"width: 2em;margin:0px auto;\"></ion-img>\n          </ion-col>\n          <ion-col>\n            <ion-img (click)=\"goNewPage('https://www.youtube.com/channel/UCtNaMr4K4bZgpvz2bzcyjjw')\" src=\"../assets/images/youtube-04.svg\" style=\"width: 2em;margin:0px auto;\"></ion-img>\n          </ion-col>\n          <ion-col>\n            <ion-img (click)=\"goNewPage('https://www.instagram.com/asambleaecuador/')\" src=\"../assets/images/instagram-04.svg\" style=\"width: 2em;margin:0px auto;\"></ion-img>\n          </ion-col>\n          <ion-col></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-img (click)=\"goNewPage('https://www.asambleanacional.gob.ec')\" src=\"../assets/images/boton web-04.svg\" style=\"height: 70%\"></ion-img>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"1\">\n            <ion-img src=\"../assets/images/location.svg\" style=\"width: 1em;margin:0 auto;\"></ion-img>\n          </ion-col>\n          <ion-col size=\"7\" (click)=\"openMap()\" class=\"linkText\" style=\"font-size: 0.75em; font-weight: bold; padding-top: 10px;\">Av. 6 de Diciembre y Piedrahita</ion-col>\n          <ion-col size=\"1\" style=\"border-left: 2px solid #606060\">\n            <ion-img src=\"../assets/images/phone.svg\" style=\"width: 1em;margin:0 auto;\"></ion-img>\n          </ion-col>\n          <ion-col size=\"3\" (click)=\"goCallNumber()\" class=\"linkText\" style=\"font-size: 0.75em; font-weight: bold; padding-top: 10px;\">02 399 1000</ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n\n  </div>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
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
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n/*\nion-content {\n  --background: url('../../assets/images/fondo-vertical.png') no-repeat 0/100% 100%;\n}\n*/\n\n.imageIcon {\n  width: 3.5em;\n  margin: 0px auto;\n  cursor: pointer;\n}\n\n.imageText {\n  width: 100%;\n  font-size: 0.85em;\n  cursor: pointer;\n  margin-top: -5px !important;\n  color: #484a4b;\n}\n\n.one {\n  background-color: #0067b1;\n  background-image: -webkit-linear-gradient(150deg, #0067b1 75%, #f5cd21 15%);\n  min-height: 100px;\n}\n\n.two {\n  background-color: #c02c33;\n  background-image: -webkit-linear-gradient(150deg, #c02c33 75%, #0067b1 15%);\n  min-height: 100px;\n}\n\n.yl {\n  display: inline-block;\n  min-height: 100px;\n  width: 100%;\n  background-color: #f5cd21;\n}\n\n.vertical-align-content {\n  background-color: #f8f9f9;\n  display: -webkit-box !important;\n  display: flex !important;\n  align-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n}\n\n.rotate90 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n.dvAddress {\n  margin-top: -10px;\n  display: inline-block;\n  width: 70%;\n  height: 56px;\n}\n\n.dvPhone {\n  margin-top: -10px;\n  display: inline-block;\n  width: 30%;\n  height: 56px;\n  padding-top: 12px;\n}\n\n.lower-content {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.scroll-content {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 1;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  will-change: scroll-position;\n  contain: size style layout;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJlc21vcmFsZXMvSW3DoWdlbmVzL2FwcC1hc2FtYmxlYTIvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBOzs7O0NBQUE7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLDJFQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsMkVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRENBO0VBRUUseUJBQUE7RUFDQSwrQkFBQTtFQUFBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtVQUFBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtFQUlBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2ZvbmRvLXZlcnRpY2FsLnBuZycpIG5vLXJlcGVhdCAwLzEwMCUgMTAwJTtcbn1cbiovXG5cbi5pbWFnZUljb257XG4gIHdpZHRoOiAzLjVlbTtcbiAgbWFyZ2luOjBweCBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWFnZVRleHR7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAtNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDg0YTRiO1xufVxuXG4ub25le1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2N2IxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNTBkZWcsICMwMDY3YjEgNzUlLCAjZjVjZDIxIDE1JSk7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuLnR3b3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMmMzMztcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTUwZGVnLCAjYzAyYzMzIDc1JSwgIzAwNjdiMSAxNSUpO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cbi55bHtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1Y2QyMTtcbn1cblxuLnZlcnRpY2FsLWFsaWduLWNvbnRlbnRcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmOTtcbiAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIhaW1wb3J0YW50O1xufVxuXG4ucm90YXRlOTAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5kdkFkZHJlc3N7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNTZweDtcbn1cblxuLmR2UGhvbmV7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogNTZweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG5cbi5sb3dlci1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgd2lsbC1jaGFuZ2U6IHNjcm9sbC1wb3NpdGlvbjtcbiAgY29udGFpbjogc2l6ZSBzdHlsZSBsYXlvdXQ7XG4gIGRpc3BsYXk6IGZsZXg7ICAgICAgICAgICAgIC8vIGFkZGVkIGJ5IG1lXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIC8vIGFkZGVkIGJ5IG1lXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG5cbn1cbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLypcbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZm9uZG8tdmVydGljYWwucG5nJykgbm8tcmVwZWF0IDAvMTAwJSAxMDAlO1xufVxuKi9cbi5pbWFnZUljb24ge1xuICB3aWR0aDogMy41ZW07XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltYWdlVGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAtNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDg0YTRiO1xufVxuXG4ub25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjdiMTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTUwZGVnLCAjMDA2N2IxIDc1JSwgI2Y1Y2QyMSAxNSUpO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxuLnR3byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDJjMzM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE1MGRlZywgI2MwMmMzMyA3NSUsICMwMDY3YjEgMTUlKTtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG5cbi55bCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVjZDIxO1xufVxuXG4udmVydGljYWwtYWxpZ24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5Zjk7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnJvdGF0ZTkwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uZHZBZGRyZXNzIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuXG4uZHZQaG9uZSB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogNTZweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG5cbi5sb3dlci1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgd2lsbC1jaGFuZ2U6IHNjcm9sbC1wb3NpdGlvbjtcbiAgY29udGFpbjogc2l6ZSBzdHlsZSBsYXlvdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
















var HomePage = /** @class */ (function () {
    function HomePage(iab, router, properties, localNotifications, rest, modalController, environmentService, callNumber, platform, toastController) {
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
    HomePage.prototype.ngOnInit = function () {
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
    };
    HomePage.prototype.ionViewWillEnter = function () {
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
    };
    HomePage.prototype.getDateFromString = function (dateS, hourS) {
        var ymd = dateS.split('/');
        var hm = hourS.split(':');
        return new Date(Number(ymd[2]), Number(ymd[1]) - 1, Number(ymd[0]), Number(hm[0]), Number(hm[1]));
    };
    HomePage.prototype.sendNotification = function () {
        // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf'
        this.localNotifications.schedule({
            id: 1,
            text: 'Notificación de prueba',
            sound: null
        });
    };
    HomePage.prototype.goAsambleistas = function () {
        this.router.navigate([_properties_links__WEBPACK_IMPORTED_MODULE_5__["Links"].assemblyman]);
    };
    HomePage.prototype.goVotaciones = function () {
        this.router.navigate([_properties_links__WEBPACK_IMPORTED_MODULE_5__["Links"].votations]);
    };
    HomePage.prototype.goSesiones = function () {
        this.router.navigate([_properties_links__WEBPACK_IMPORTED_MODULE_5__["Links"].sessions]);
    };
    HomePage.prototype.goAgenda = function () {
        var options = {
            zoom: 'no',
            location: 'no',
            toolbar: 'no'
        };
        var browser = this.iab.create(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].urlDiary, '_blank', options);
        browser.show();
    };
    HomePage.prototype.goTemas = function () {
        this.router.navigate([_properties_links__WEBPACK_IMPORTED_MODULE_5__["Links"].themes]);
    };
    HomePage.prototype.goInspection = function () {
        this.router.navigate(['inspection']);
    };
    HomePage.prototype.goProyectos = function () {
        this.router.navigate(['ppless']);
    };
    HomePage.prototype.goLeyes = function () {
        this.router.navigate(['laws']);
    };
    HomePage.prototype.goEstructura = function () {
        this.router.navigate([_properties_links__WEBPACK_IMPORTED_MODULE_5__["Links"].structure]);
    };
    HomePage.prototype.goFavoritos = function () {
        this.router.navigate([_properties_links__WEBPACK_IMPORTED_MODULE_5__["Links"].favorites]);
    };
    HomePage.prototype.goTour = function () {
        this.router.navigate([_properties_links__WEBPACK_IMPORTED_MODULE_5__["Links"].tourVirtual]);
    };
    HomePage.prototype.openPageWhithOutrlBar = function (url) {
        var options = {
            zoom: 'no',
            location: 'no',
            toolbar: 'no'
        };
        var browser = this.iab.create(url, '_blank', options);
        browser.show();
    };
    HomePage.prototype.goNewPage = function (url) {
        /*const browser = this.iab.create(url,'_blank');
        browser.show();*/
        window.open(url, '_system');
    };
    HomePage.prototype.goCallNumber = function () {
        this.callNumber.callNumber("023991000", false)
            .then(function (res) { return console.log('llamando!', res); })
            .catch(function (err) { return console.log('Error de llamada', err); });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var lastTimeBackPress = 0;
        var timePeriodToExit = 2000;
        this.subscription = this.platform.backButton.subscribe(function () {
            if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                navigator["app"].exitApp();
            }
            else {
                _this.presentToast('Para salir de la App presione nuevamente el botón de retroceso');
                lastTimeBackPress = new Date().getTime();
            }
        });
    };
    HomePage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000,
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
    HomePage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
    };
    HomePage.prototype.openMap = function () {
        if (this.platform.is('ios')) {
            window.open('maps://?q=-0.2132337,-78.5003135', '_system');
        }
        else {
            window.open('geo:0,0?q=-0.2132337,-78.5003135', '_system');
        }
    };
    HomePage.prototype.goLiveTv = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_external_tvonline_tvonline_page__WEBPACK_IMPORTED_MODULE_12__["TvonlinePage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.goLiveRadio = function () {
        this.environmentService.setShowRadio(true);
    };
    HomePage.prototype.getTransmissions = function (open) {
        var _this = this;
        this.rest.getFacebookLive().subscribe(function (response) {
            var l = [];
            var l1 = [];
            l = response;
            for (var _i = 0, l_1 = l; _i < l_1.length; _i++) {
                var o = l_1[_i];
                if (o.url.length > 0) {
                    l1.push(o);
                }
            }
            if (l1.length > 0) {
                _this.environmentService.setFacebookList(l1);
            }
            else {
                _this.environmentService.setFacebookList(null);
            }
            if (open) {
                _this.verifyActiveTransmissions();
            }
        }, function (error) {
            _this.environmentService.setFacebookList(null);
        });
    };
    HomePage.prototype.verifyActiveTransmissions = function () {
        var _this = this;
        this.environmentService.getFacebookList().subscribe(function (value) {
            if (value != null && value.length > 0) {
                _this.openTransmissionPage();
            }
            else {
                _this.presentToast('Actualmente no contamos con una transmisión en vivo');
            }
        });
    };
    HomePage.prototype.openTransmissionPage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_external_facebook_facebook_page__WEBPACK_IMPORTED_MODULE_11__["FacebookPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null) { }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.openPage = function (url) {
        window.open(url, '_system');
    };
    HomePage.prototype.openParticipe = function (url) {
        window.open(url, '_system');
    };
    HomePage.prototype.openLeyes = function (url) {
        window.open(url, '_system');
    };
    HomePage.ctorParameters = function () { return [
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
    ]; };
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
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map