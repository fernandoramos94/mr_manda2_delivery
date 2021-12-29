(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-header {\n  --box-shadow: none;\n}\nion-footer {\n  --box-shadow: none;\n}\nion-toolbar {\n  border-color: none !important;\n}\nion-toolbar ion-title {\n  --color: white;\n}\n.login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 20%;\n  margin-bottom: 20px;\n}\n.login-logo .logo_icon {\n  width: 110px !important;\n}\n.login-logo .login-name {\n  margin: 0px;\n  font-size: 1.5rem;\n}\n.login-logo .subTitle {\n  margin: 0px;\n  font-size: 1rem;\n}\n.frgTag {\n  text-align: right;\n  color: var(--ion-color-primary);\n}\n.btn_class {\n  color: white;\n  height: 50px;\n  --border-radius: 5px;\n}\n.login-logo img {\n  max-width: 150px;\n}\n.list {\n  margin-bottom: 0;\n}\nion-list {\n  --ion-background-color: transparent;\n  margin: 0px;\n}\nion-item {\n  --ion-background-color: #f3f3f3;\n  border-radius: 5px !important;\n  margin-top: 10px;\n}\n.createAcc {\n  text-align: center;\n}\n.createAcc .registerTag {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n.btns {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0px;\n}\n.btns .flagActive {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-primary);\n  margin: 0px 10px;\n}\n.btns .flagDeactive {\n  height: 45px;\n  width: 45px;\n  margin: 0px 10px;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLGtCQUFBO0FBRUo7QUFBQTtFQUNJLGtCQUFBO0FBR0o7QUFEQTtFQUNJLDZCQUFBO0FBSUo7QUFISTtFQUNJLGNBQUE7QUFLUjtBQUZBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFLSjtBQUpJO0VBQ0ksdUJBQUE7QUFNUjtBQUpJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBTVI7QUFKSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBTVI7QUFIQTtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7QUFNSjtBQUpBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQU9KO0FBTEE7RUFDSSxnQkFBQTtBQVFKO0FBTkE7RUFDSSxnQkFBQTtBQVNKO0FBUEE7RUFDSSxtQ0FBQTtFQUNBLFdBQUE7QUFVSjtBQVJBO0VBQ0ksK0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBV0o7QUFSQTtFQUNJLGtCQUFBO0FBV0o7QUFWSTtFQUNJLCtCQUFBO0VBRUEsaUJBQUE7QUFXUjtBQVJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBV0o7QUFWSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0FBWVI7QUFWSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBWVIiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24taGVhZGVyIHtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24tZm9vdGVyIHtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24tdG9vbGJhciB7XG4gICAgYm9yZGVyLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgfVxufVxuLmxvZ2luLWxvZ28ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcmlnaHQ6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgLmxvZ29faWNvbiB7XG4gICAgICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubG9naW4tbmFtZSB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gICAgLnN1YlRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG59XG4uZnJnVGFnIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmJ0bl9jbGFzcyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5sb2dpbi1sb2dvIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbn1cbi5saXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaW9uLWxpc3Qge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbjogMHB4O1xufVxuaW9uLWl0ZW0ge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNyZWF0ZUFjYyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5yZWdpc3RlclRhZyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuLmJ0bnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIC5mbGFnQWN0aXZlIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgfVxuICAgIC5mbGFnRGVhY3RpdmUge1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-content class=\"ion-padding\">\n  <div class=\"login-logo\">\n    <img src=\"assets/imgs/icon.png\" class=\"logo_icon\" alt=\"foodies\">\n    <p class=\"login-name\">Iniciar sesión</p>\n \n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate *ngIf=\"util.user_login ==='0'\">\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.email\" type=\"email\" [placeholder]=\"('Correo')\" name=\"email\"\n          #email=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n         Correo es requerido\n        </p>\n      </ion-text>\n\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" [placeholder]=\"('Contraseña')\"\n          type=\"password\" #password=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Contraseña es requerida\n        </p>\n      </ion-text>\n    </ion-list>\n\n    <ion-row class=\"ion-no-margin ion-no-padding\">\n      <ion-col class=\"ion-no-margin ion-no-padding\">\n        <p class=\"frgTag\" (click)=\"resetPass()\">Olvidaste tu contraseña?</p>\n        <ion-button class=\"btn_class\" (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\" [disabled]=\"isLogin\">\n          <span *ngIf=\"!isLogin\">INICIAR</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n  <form #loginForm=\"ngForm\" novalidate *ngIf=\"util.user_login ==='1'\">\n    <ion-list lines=\"none\">\n      <ion-row>\n        <ion-col size=\"3\" (click)=\"openCountry()\">\n          <ion-item lines=\"none\">\n            <ion-input style=\"font-size: 12px;\" [(ngModel)]=\"mobile.ccCode\" disabled=\"true\" type=\"text\" name=\"ccode\"\n              #ccode=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"9\">\n          <ion-item lines=\"none\">\n            <ion-input [(ngModel)]=\"mobile.phone\" type=\"number\" [placeholder]=\"util.translate('Mobile Number')\"\n              name=\"mobile\" #phone=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n          <ion-text color=\"danger\">\n            <p [hidden]=\"phone.valid || submitted == false\" class=\"ion-padding-start\">\n              {{util.translate('Phone number is required')}}\n            </p>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"mobile.password\" name=\"password\" [placeholder]=\"util.translate('Password')\"\n          type=\"password\" #password=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          {{util.translate('Password is required')}}\n        </p>\n      </ion-text>\n    </ion-list>\n\n    <ion-row class=\"ion-no-margin ion-no-padding\">\n      <ion-col class=\"ion-no-margin ion-no-padding\">\n        <p class=\"frgTag\" (click)=\"resetPass()\">{{util.translate('Forgot Password?')}}</p>\n        <ion-button class=\"btn_class\" (click)=\"onPhoneLogin(loginForm)\" type=\"submit\" expand=\"block\"\n          [disabled]=\"isLogin\">\n          <span *ngIf=\"!isLogin\"> {{util.translate('Log In')}}</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n\n  <form #loginForm=\"ngForm\" novalidate *ngIf=\"util.user_login ==='2'\">\n    <ion-list lines=\"none\">\n      <ion-row>\n        <ion-col size=\"3\" (click)=\"openCountry()\">\n          <ion-item lines=\"none\">\n            <ion-input style=\"font-size: 12px;\" [(ngModel)]=\"mobileLogin.ccCode\" disabled=\"true\" type=\"text\"\n              name=\"ccode\" #ccode=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"9\">\n          <ion-item lines=\"none\">\n            <ion-input [(ngModel)]=\"mobileLogin.phone\" type=\"number\" [placeholder]=\"util.translate('Mobile Number')\"\n              name=\"mobile\" #phone=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n            </ion-input>\n          </ion-item>\n          <ion-text color=\"danger\">\n            <p [hidden]=\"phone.valid || submitted == false\" class=\"ion-padding-start\">\n              {{util.translate('Phone number is required')}}\n            </p>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n\n    </ion-list>\n\n    <ion-row class=\"ion-no-margin ion-no-padding\">\n      <ion-col class=\"ion-no-margin ion-no-padding\">\n        <p class=\"frgTag\" (click)=\"resetPass()\">{{util.translate('Forgot Password?')}}</p>\n        <ion-button class=\"btn_class\" (click)=\"onOTPLogin(loginForm)\" type=\"submit\" expand=\"block\" [disabled]=\"isLogin\">\n          <span *ngIf=\"!isLogin\"> {{util.translate('Log In')}}</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n\n</ion-content>");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/



const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../select-country/select-country.page */ "hxji");
/* harmony import */ var _verify_verify_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../verify/verify.page */ "TCp9");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");



/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/









let LoginPage = class LoginPage {
    constructor(router, api, util, navCtrl, oneSignal, menuController, modalController, modalCtrl) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.oneSignal = oneSignal;
        this.menuController = menuController;
        this.modalController = modalController;
        this.modalCtrl = modalCtrl;
        this.login = { email: '', password: '' };
        this.mobile = { ccCode: '', phone: '', password: '' };
        this.mobileLogin = { ccCode: '', phone: '' };
        this.submitted = false;
        this.isLogin = false;
        console.log('--------------- user login', this.util.user_login);
        this.mobile.ccCode = '+91';
        this.mobileLogin.ccCode = '+91';
        this.oneSignal.getIds().then((data) => {
            console.log('iddddd==========', data);
            localStorage.setItem('fcm', data.userId);
        });
    }
    ngOnInit() {
    }
    onLogin(form) {
        console.log('form', form);
        this.submitted = true;
        if (form.valid) {
            const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailfilter.test(this.login.email)) {
                this.util.showToast(this.util.translate('Please enter valid email'), 'danger', 'bottom');
                return false;
            }
            console.log('login');
            this.isLogin = true;
            this.api.post('drivers/login', this.login).then((data) => {
                this.isLogin = false;
                console.log(data);
                if (data && data.status === 200) {
                    if (data.data.status === '1') {
                        localStorage.setItem('uid', data.data.id);
                        this.util.userInfo = data.data;
                        this.menuController.enable(true);
                        const fcm = localStorage.getItem('fcm');
                        if (fcm && fcm !== null && fcm !== 'null') {
                            const updateParam = {
                                id: data.data.id,
                                fcm_token: fcm
                            };
                            this.api.post('drivers/edit_profile', updateParam).then((data) => {
                                console.log('user info=>', data);
                            }, error => {
                                console.log(error);
                            });
                        }
                        console.log('--');
                        this.navCtrl.navigateRoot(['']);
                    }
                    else {
                        console.log('not valid');
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                            title: this.util.translate('Error'),
                            text: this.util.translate('Your are blocked please contact administrator'),
                            icon: 'error',
                            showConfirmButton: true,
                            showCancelButton: true,
                            confirmButtonText: this.util.translate('Need Help?'),
                            backdrop: false,
                            background: 'white'
                        }).then(status => {
                            if (status && status.value) {
                                const inboxParam = {
                                    queryParams: {
                                        id: 0,
                                        name: this.util.translate('Support'),
                                        uid: data.data.id
                                    }
                                };
                                this.router.navigate(['inbox'], inboxParam);
                            }
                        });
                    }
                }
                else if (data && data.status === 500) {
                    this.util.errorToast(data.data.message);
                }
                else {
                    this.util.errorToast('Algo ha ido mal');
                }
            }, error => {
                console.log(error);
                this.isLogin = false;
                this.util.errorToast('Algo ha ido mal');
            });
        }
    }
    onPhoneLogin(form) {
        console.log('form', form, this.mobile);
        console.log(this.mobile.ccCode + this.mobile.phone);
        this.submitted = true;
        if (form.valid) {
            const param = {
                cc: this.mobile.ccCode,
                mobile: this.mobile.phone,
                password: this.mobile.password
            };
            console.log('param', param);
            this.isLogin = true;
            this.api.post('drivers/loginWithPhoneAndPassword', param).then((data) => {
                this.isLogin = false;
                console.log(data);
                if (data && data.status === 200) {
                    if (data.data.status === '1') {
                        localStorage.setItem('uid', data.data.id);
                        this.util.userInfo = data.data;
                        const fcm = localStorage.getItem('fcm');
                        if (fcm && fcm !== null && fcm !== 'null') {
                            const updateParam = {
                                id: data.data.id,
                                fcm_token: fcm
                            };
                            this.api.post('driver/edit_profile', updateParam).then((data) => {
                                console.log('user info=>', data);
                            }, error => {
                                console.log(error);
                            });
                        }
                        this.navCtrl.navigateRoot(['']);
                    }
                    else {
                        console.log('not valid');
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                            title: this.util.translate('Error'),
                            text: this.util.translate('Your are blocked please contact administrator'),
                            icon: 'error',
                            showConfirmButton: true,
                            showCancelButton: true,
                            confirmButtonText: this.util.translate('Need Help?'),
                            backdrop: false,
                            background: 'white'
                        }).then(status => {
                            if (status && status.value) {
                                // localStorage.setItem('helpId', data.data.id);
                                // this.router.navigate(['inbox']);
                                const inboxParam = {
                                    queryParams: {
                                        id: 0,
                                        name: 'Support',
                                        uid: data.data.id
                                    }
                                };
                                this.router.navigate(['inbox'], inboxParam);
                            }
                        });
                    }
                }
                else if (data && data.status === 500) {
                    this.util.errorToast(data.data.message);
                }
                else {
                    this.util.errorToast('Algo ha ido mal');
                }
            }, error => {
                console.log(error);
                this.isLogin = false;
                this.util.errorToast('Algo ha ido mal');
            }).catch(error => {
                console.log(error);
                this.isLogin = false;
                this.util.errorToast('Algo ha ido mal');
            });
        }
    }
    onOTPLogin(form) {
        console.log(this.mobileLogin);
        this.submitted = true;
        if (form.valid) {
            const param = {
                mobile: this.mobileLogin.phone,
                cc: this.mobileLogin.ccCode
            };
            this.isLogin = true;
            this.api.post('drivers/checkMobileNumber', param).then((data) => {
                this.isLogin = false;
                console.log(data);
                if (data && data.status === 200) {
                    console.log('open modal');
                    this.openModal(data.data.id);
                }
                else if (data && data.status === 500) {
                    this.util.errorToast(data.data.message);
                }
                else {
                    this.util.errorToast('Algo ha ido mal');
                }
            }, error => {
                console.log(error);
                this.isLogin = false;
                this.util.errorToast('Algo ha ido mal');
            }).catch(error => {
                console.log(error);
                this.isLogin = false;
                this.util.errorToast('Algo ha ido mal');
            });
        }
    }
    openModal(uid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('uid', uid);
            const modal = yield this.modalCtrl.create({
                component: _verify_verify_page__WEBPACK_IMPORTED_MODULE_10__["VerifyPage"],
                componentProps: { code: this.mobileLogin.ccCode, phone: this.mobileLogin.phone }
            });
            modal.onDidDismiss().then((data) => {
                console.log(data);
                if (data && data.role === 'ok') {
                    const param = {
                        id: uid
                    };
                    this.api.post('drivers/getById', param).then((data) => {
                        console.log('user data', data);
                        if (data && data.status === 200 && data.data && data.data.length) {
                            this.util.userInfo = data.data[0];
                            if (data.data[0].status === '1') {
                                localStorage.setItem('uid', uid);
                                const fcm = localStorage.getItem('fcm');
                                if (fcm && fcm !== null && fcm !== 'null') {
                                    const updateParam = {
                                        id: uid,
                                        fcm_token: fcm
                                    };
                                    this.api.post('drivers/edit_profile', updateParam).then((data) => {
                                        console.log('user info=>', data);
                                    }, error => {
                                        console.log(error);
                                    });
                                }
                                this.navCtrl.navigateRoot(['']);
                            }
                            else {
                                console.log('not valid');
                                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                                    title: this.util.translate('Error'),
                                    text: this.util.translate('Your are blocked please contact administrator'),
                                    icon: 'error',
                                    showConfirmButton: true,
                                    showCancelButton: true,
                                    confirmButtonText: this.util.translate('Need Help?'),
                                    backdrop: false,
                                    background: 'white'
                                }).then(status => {
                                    if (status && status.value) {
                                        const inboxParam = {
                                            queryParams: {
                                                id: 0,
                                                name: 'Support',
                                                uid: uid
                                            }
                                        };
                                        this.router.navigate(['inbox'], inboxParam);
                                    }
                                });
                            }
                        }
                        else if (data && data.status === 500) {
                            this.util.errorToast(data.data.message);
                        }
                        else {
                            this.util.errorToast('Algo ha ido mal');
                        }
                    }, error => {
                        localStorage.removeItem('uid');
                        console.log(error);
                    });
                }
            });
            modal.present();
        });
    }
    resetPass() {
        this.router.navigate(['/forgot-password']);
    }
    register() {
        this.router.navigate(['register']);
    }
    ionViewWillEnter() {
        this.menuController.enable(false);
    }
    ionViewWillLeave() {
        this.menuController.enable(true);
    }
    openCountry() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('open ccode');
            const modal = yield this.modalController.create({
                component: _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_9__["SelectCountryPage"],
                backdropDismiss: false,
                showBackdrop: true,
            });
            modal.onDidDismiss().then((data) => {
                console.log(data);
                if (data && data.role === 'selected') {
                    console.log('ok');
                    this.mobile.ccCode = '+' + data.data;
                    this.mobileLogin.ccCode = '+' + data.data;
                }
            });
            yield modal.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map