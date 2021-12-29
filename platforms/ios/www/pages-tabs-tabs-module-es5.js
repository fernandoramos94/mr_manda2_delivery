(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"], {
    /***/
    "1vg1":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function vg1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"fast-food-outline\"></ion-icon>\n      <ion-label>Ordenes</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Perfil</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs> -->";
      /***/
    },

    /***/
    "Gg5j":
    /*!*******************************************!*\
      !*** ./src/app/pages/tabs/tabs.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function Gg5j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-icon {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksZUFBQTtBQUVKIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "MM9G":
    /*!***************************************************!*\
      !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function MM9G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
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


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "TA0h");
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
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'tab1',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | orders-orders-module */
              "default~orders-orders-module~pages-orders-orders-module").then(__webpack_require__.bind(null,
              /*! ../orders/orders.module */
              "Xlj8")).then(function (m) {
                return m.OrdersPageModule;
              });
            }
          }]
        }, {
          path: 'tab3',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | profile-profile-module */
              "default~pages-profile-profile-module~profile-profile-module").then(__webpack_require__.bind(null,
              /*! ../profile/profile.module */
              "723k")).then(function (m) {
                return m.ProfilePageModule;
              });
            }
          }, {
            path: 'about',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | about-about-module */
              "about-about-module").then(__webpack_require__.bind(null,
              /*! ../about/about.module */
              "UoYK")).then(function (m) {
                return m.AboutPageModule;
              });
            }
          }, {
            path: 'contacts',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | contacts-contacts-module */
              [__webpack_require__.e("default~contacts-contacts-module~pages-inbox-inbox-module~pages-order-detail-order-detail-module~rev~7ba3eaa7"), __webpack_require__.e("contacts-contacts-module")]).then(__webpack_require__.bind(null,
              /*! ../contacts/contacts.module */
              "EWb5")).then(function (m) {
                return m.ContactsPageModule;
              });
            }
          }, {
            path: 'languages',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | languages-languages-module */
              "languages-languages-module").then(__webpack_require__.bind(null,
              /*! ../languages/languages.module */
              "+8HC")).then(function (m) {
                return m.LanguagesPageModule;
              });
            }
          }, {
            path: 'faqs',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | faqs-faqs-module */
              "faqs-faqs-module").then(__webpack_require__.bind(null,
              /*! ../faqs/faqs.module */
              "IeLZ")).then(function (m) {
                return m.FaqsPageModule;
              });
            }
          }, {
            path: 'help',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | help-help-module */
              "help-help-module").then(__webpack_require__.bind(null,
              /*! ../help/help.module */
              "6RTz")).then(function (m) {
                return m.HelpPageModule;
              });
            }
          }, {
            path: 'review',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | reviews-reviews-module */
              [__webpack_require__.e("default~contacts-contacts-module~pages-inbox-inbox-module~pages-order-detail-order-detail-module~rev~7ba3eaa7"), __webpack_require__.e("reviews-reviews-module")]).then(__webpack_require__.bind(null,
              /*! ../reviews/reviews.module */
              "b5pT")).then(function (m) {
                return m.ReviewsPageModule;
              });
            }
          }]
        }, {
          path: '',
          redirectTo: '/tabs/tab1',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    },

    /***/
    "TA0h":
    /*!*****************************************!*\
      !*** ./src/app/pages/tabs/tabs.page.ts ***!
      \*****************************************/

    /*! exports provided: TabsPage */

    /***/
    function TA0h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "1vg1");
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabs.page.scss */
      "Gg5j");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /*
        Authors : initappz (Rahul Jograna)
        Website : https://initappz.com/
        App Name : ionic 5 foodies app
        Created : 28-Feb-2021
        This App Template Source code is licensed as per the
        terms found in the Website https://initappz.com/license
        Copyright and Good Faith Purchasers © 2020-present initappz.
      */


      var TabsPage = function TabsPage() {
        _classCallCheck(this, TabsPage);
      };

      TabsPage.ctorParameters = function () {
        return [];
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TabsPage);
      /***/
    },

    /***/
    "qiIP":
    /*!*******************************************!*\
      !*** ./src/app/pages/tabs/tabs.module.ts ***!
      \*******************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function qiIP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "MM9G");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "TA0h");
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


      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-tabs-tabs-module-es5.js.map