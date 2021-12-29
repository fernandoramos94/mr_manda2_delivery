(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-profile-profile-module~profile-profile-module"], {
    /***/
    "723k":
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.module.ts ***!
      \*************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "x0XS");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "uxLX");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /*
        Authors : initappz (Rahul Jograna)
        Website : https://initappz.com/
        App Name : ionic 5 foodies app
        Created : 28-Feb-2021
        This App Template Source code is licensed as per the
        terms found in the Website https://initappz.com/license
        Copyright and Good Faith Purchasers © 2020-present initappz.
      */


      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "EGjV":
    /*!*************************************************!*\
      !*** ./src/app/pages/profile/profile.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function EGjV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_div {\n  padding: 23px;\n  background: var(--ion-color-primary);\n}\n.main_div .menuBtn {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.main_div .menuBtn .menuIcon {\n  width: 25px;\n}\n.main_div .profilePic {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  border: 4px solid white;\n}\n.main_div .user_img {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-primary);\n  margin: auto;\n  margin-bottom: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 90px;\n  position: relative;\n}\n.main_div .username {\n  margin: 0px;\n  margin-top: 10px;\n  font-size: 1.3rem;\n  font-weight: bold;\n  color: white;\n}\n.main_div .email {\n  margin: 0px;\n  margin-bottom: 10px;\n  font-size: 1rem;\n  color: white;\n}\n.options {\n  padding: 10px;\n}\n.options ion-item {\n  border-bottom: 1px solid lightgray;\n  height: 60px;\n  display: flex;\n}\n.options ion-item ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksYUFBQTtFQUNBLG9DQUFBO0FBRUo7QUFESTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFHUjtBQUZRO0VBRUksV0FBQTtBQUdaO0FBQUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFFUjtBQUFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRVI7QUFBSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRVI7QUFDSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ1I7QUFHQTtFQUNJLGFBQUE7QUFBSjtBQUNJO0VBQ0ksa0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNSO0FBQ1E7RUFDSSwrQkFBQTtFQUNBLGVBQUE7QUFDWiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fZGl2IHtcbiAgICBwYWRkaW5nOiAyM3B4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAubWVudUJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIC5tZW51SWNvbiB7XG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJvZmlsZVBpYyB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcbiAgICB9XG4gICAgLnVzZXJfaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnVzZXJuYW1lIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5lbWFpbCB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cbi5vcHRpb25zIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "VVTS":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function VVTS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header  class=\"ion-no-border\" *ngIf=\"!util.appClosed\">\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"back()\">\n              <ion-icon slot=\"icon-only\" color=\"light\" name=\"chevron-back-outline\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!util.appClosed\">\n  <div class=\"main_div\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <div class=\"user_img\" [ngStyle]=\"{'background-image':'url('+getProfile()+'),url(assets/placeholder.jpg)'}\">\n        </div>\n      </ion-col>\n      <ion-col size=\"8\">\n        <p class=\"username\">{{getName()}}</p>\n        <p class=\"email\">{{getEmail()}}</p>\n        <ion-button (click)=\"editProfile()\" shape=\"round\" size=\"small\" color=\"light\"> Editar perfil\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"options\">\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"orders()\">\n      <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n      <ion-label>Ordenes </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"reviews()\">\n      <ion-icon name=\"cash-outline\" slot=\"start\"></ion-icon>\n      <ion-label>Calificaciones </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"reset()\">\n      <ion-icon name=\"key-outline\" slot=\"start\"></ion-icon>\n      <ion-label> Cambiar contraseña </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n\n\n\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"logout()\">\n      <ion-icon name=\"power-outline\" slot=\"start\"></ion-icon>\n      <ion-label> Cerrar sesión </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "uxLX":
    /*!***********************************************!*\
      !*** ./src/app/pages/profile/profile.page.ts ***!
      \***********************************************/

    /*! exports provided: ProfilePage */

    /***/
    function uxLX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "VVTS");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "EGjV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /*
        Authors : initappz (Rahul Jograna)
        Website : https://initappz.com/
        App Name : ionic 5 foodies app
        Created : 28-Feb-2021
        This App Template Source code is licensed as per the
        terms found in the Website https://initappz.com/license
        Copyright and Good Faith Purchasers © 2020-present initappz.
      */


      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(router, api, navCtrl, util) {
          _classCallCheck(this, ProfilePage);

          this.router = router;
          this.api = api;
          this.navCtrl = navCtrl;
          this.util = util;
          this.seg_id = 1;
          this.photo = 'assets/imgs/user.png';
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeSegment",
          value: function changeSegment(val) {
            this.seg_id = val;
          }
        }, {
          key: "goToselectRestaurants",
          value: function goToselectRestaurants() {
            this.router.navigate(['/choose-restaurant']);
          }
        }, {
          key: "editProfile",
          value: function editProfile() {
            this.router.navigate(['/edit-profile']);
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            return this.util.userInfo && this.util.userInfo.cover ? this.api.mediaURL + this.util.userInfo.cover : 'assets/user.png';
          }
        }, {
          key: "getName",
          value: function getName() {
            return this.util.userInfo && this.util.userInfo.first_name ? this.util.userInfo.first_name + ' ' + this.util.userInfo.last_name : '';
          }
        }, {
          key: "getEmail",
          value: function getEmail() {
            return this.util.userInfo && this.util.userInfo.email ? this.util.userInfo.email : '';
          }
        }, {
          key: "orders",
          value: function orders() {
            this.navCtrl.navigateRoot(['']);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.router.navigate(['forgot-password']);
          }
        }, {
          key: "goToAbout",
          value: function goToAbout() {
            this.navCtrl.navigateRoot(['tabs/tab3/about']);
          }
        }, {
          key: "goToContact",
          value: function goToContact() {
            this.navCtrl.navigateRoot(['tabs/tab3/contacts']);
          }
        }, {
          key: "goLangs",
          value: function goLangs() {
            this.navCtrl.navigateRoot(['tabs/tab3/languages']);
          }
        }, {
          key: "goFaqs",
          value: function goFaqs() {
            this.navCtrl.navigateRoot(['tabs/tab3/faqs']);
          }
        }, {
          key: "goHelp",
          value: function goHelp() {
            this.navCtrl.navigateRoot(['tabs/tab3/help']);
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            this.navCtrl.navigateRoot(['/login']);
          }
        }, {
          key: "reviews",
          value: function reviews() {
            this.router.navigate(['reviews']);
          }
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.back();
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]])], ProfilePage);
      /***/
    },

    /***/
    "x0XS":
    /*!*********************************************************!*\
      !*** ./src/app/pages/profile/profile-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function x0XS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "uxLX");
      /*
        Authors : initappz (Rahul Jograna)
        Website : https://initappz.com/
        App Name : ionic 5 foodies app
        Created : 28-Feb-2021
        This App Template Source code is licensed as per the
        terms found in the Website https://initappz.com/license
        Copyright and Good Faith Purchasers © 2020-present initappz.
      */


      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-profile-profile-module~profile-profile-module-es5.js.map