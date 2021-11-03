function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n \n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-country/select-country.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-country/select-country.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSelectCountrySelectCountryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>{{util.translate('Select country')}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar [placeholder]=\"util.translate('Search')\" type=\"text\" (ionChange)=\"onSearchChange($event)\"\n    [debounce]=\"250\"></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\" *ngIf=\"dummyLoad?.length\">\n    <ion-item *ngFor=\"let item of dummyLoad\">\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf=\"dummy?.length\">\n    <ion-radio-group [(ngModel)]=\"ccCode\">\n      <ion-item *ngFor=\"let item of countries\">\n        <ion-label>+{{item.dialling_code}} {{item.country_name}} </ion-label>\n        <ion-radio [value]=\"item.dialling_code\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"okay()\">\n    <ion-fab-button>\n      <ion-icon name=\"checkmark-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVerifyVerifyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.translate('Verify')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"otpContainer\">\n    <h2 class=\"headerText\"> {{util.translate('Verification')}} </h2>\n    <p class=\"subTitleText\">{{util.translate('We texted you a code to verify')}}\n      <br> {{util.translate('your phone')}} {{mobile}}\n    </p>\n    <div class=\"otpInputs\">\n      <ng-otp-input (onInputChange)=\"onOtpChange($event)\"\n        [config]=\"{length:6,inputStyles:{'width': '30px','height': '30px'}}\">\n      </ng-otp-input>\n    </div>\n    <ion-button class=\"btn_class\" (click)=\"continue()\" type=\"submit\" expand=\"block\">{{util.translate('Continue')}}\n    </ion-button>\n\n    <ion-button (click)=\"resend()\" *ngIf=\"resendCode\" type=\"submit\" expand=\"block\" fill=\"clear\">\n      {{util.translate('Resend code')}}\n    </ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guard/auth.guard */
    "./src/app/guard/auth.guard.ts");
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
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-tabs-tabs-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-tabs-tabs-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/tabs/tabs.module */
        "./src/app/pages/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-login-login-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'forgot-password',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-forgot-password-forgot-password-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/forgot-password/forgot-password.module */
        "./src/app/pages/forgot-password/forgot-password.module.ts")).then(function (m) {
          return m.ForgotPasswordPageModule;
        });
      }
    }, {
      path: 'orders',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-orders-orders-module */
        [__webpack_require__.e("default~orders-orders-module~pages-orders-orders-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null,
        /*! ./pages/orders/orders.module */
        "./src/app/pages/orders/orders.module.ts")).then(function (m) {
          return m.OrdersPageModule;
        });
      }
    }, {
      path: 'order-detail',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-order-detail-order-detail-module */
        [__webpack_require__.e("default~contacts-contacts-module~pages-inbox-inbox-module~pages-order-detail-order-detail-module~rev~7ba3eaa7"), __webpack_require__.e("common"), __webpack_require__.e("pages-order-detail-order-detail-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/order-detail/order-detail.module */
        "./src/app/pages/order-detail/order-detail.module.ts")).then(function (m) {
          return m.OrderDetailPageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-profile-profile-module */
        [__webpack_require__.e("default~pages-profile-profile-module~profile-profile-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null,
        /*! ./pages/profile/profile.module */
        "./src/app/pages/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'edit-profile',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-edit-profile-edit-profile-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-edit-profile-edit-profile-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/edit-profile/edit-profile.module */
        "./src/app/pages/edit-profile/edit-profile.module.ts")).then(function (m) {
          return m.EditProfilePageModule;
        });
      }
    }, {
      path: 'notifications',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-notifications-notifications-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-notifications-notifications-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/notifications/notifications.module */
        "./src/app/pages/notifications/notifications.module.ts")).then(function (m) {
          return m.NotificationsPageModule;
        });
      }
    }, {
      path: 'tracker',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-tracker-tracker-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-tracker-tracker-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/tracker/tracker.module */
        "./src/app/pages/tracker/tracker.module.ts")).then(function (m) {
          return m.TrackerPageModule;
        });
      }
    }, {
      path: 'inbox',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-inbox-inbox-module */
        [__webpack_require__.e("default~contacts-contacts-module~pages-inbox-inbox-module~pages-order-detail-order-detail-module~rev~7ba3eaa7"), __webpack_require__.e("pages-inbox-inbox-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/inbox/inbox.module */
        "./src/app/pages/inbox/inbox.module.ts")).then(function (m) {
          return m.InboxPageModule;
        });
      }
    }, {
      path: 'languages',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-languages-languages-module */
        "languages-languages-module").then(__webpack_require__.bind(null,
        /*! ./pages/languages/languages.module */
        "./src/app/pages/languages/languages.module.ts")).then(function (m) {
          return m.LanguagesPageModule;
        });
      }
    }, {
      path: 'about',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-about-about-module */
        "about-about-module").then(__webpack_require__.bind(null,
        /*! ./pages/about/about.module */
        "./src/app/pages/about/about.module.ts")).then(function (m) {
          return m.AboutPageModule;
        });
      }
    }, {
      path: 'contacts',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-contacts-contacts-module */
        [__webpack_require__.e("default~contacts-contacts-module~pages-inbox-inbox-module~pages-order-detail-order-detail-module~rev~7ba3eaa7"), __webpack_require__.e("contacts-contacts-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/contacts/contacts.module */
        "./src/app/pages/contacts/contacts.module.ts")).then(function (m) {
          return m.ContactsPageModule;
        });
      }
    }, {
      path: 'faqs',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-faqs-faqs-module */
        "faqs-faqs-module").then(__webpack_require__.bind(null,
        /*! ./pages/faqs/faqs.module */
        "./src/app/pages/faqs/faqs.module.ts")).then(function (m) {
          return m.FaqsPageModule;
        });
      }
    }, {
      path: 'reviews',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-reviews-reviews-module */
        [__webpack_require__.e("default~contacts-contacts-module~pages-inbox-inbox-module~pages-order-detail-order-detail-module~rev~7ba3eaa7"), __webpack_require__.e("reviews-reviews-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/reviews/reviews.module */
        "./src/app/pages/reviews/reviews.module.ts")).then(function (m) {
          return m.ReviewsPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n.infoSection {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 50px;\n}\n.infoSection .userPhoto {\n  width: 80px;\n  margin: 20px 0px;\n}\n.infoSection .userName {\n  margin: 0px;\n  padding: 0px;\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n  margin-bottom: 20px;\n}\n.version {\n  margin: 0px;\n  padding: 0px;\n  font-size: 1rem;\n  font-weight: 500;\n  color: black;\n  margin-bottom: 25px;\n  text-align: center;\n  position: absolute;\n  bottom: 0px;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.md ion-item ion-icon {\n  color: black;\n}\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\nion-item {\n  border-bottom: 1px solid lightgray;\n  --padding-start: 30px !important;\n  --min-height: 60px !important;\n}\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n}\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n.imgs {\n  height: 20px;\n  width: 20px;\n  margin-right: 10px;\n}\n.menu_user_image {\n  height: 90px;\n  width: 90px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  margin: auto;\n}\n.username {\n  margin-top: 20px;\n  font-weight: 600;\n  display: block;\n  text-align: center;\n  font-size: 20px;\n}\n.email {\n  margin-top: 5px;\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FsZWphbmRyb2RpYXovRGVza3RvcC9Nck1hbmRhMiBSZXBhcnRpZG9yL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0UsMkVBQUE7QURFRjtBQ0NBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEQ0Y7QUNBRTtFQUVFLFdBQUE7RUFDQSxnQkFBQTtBRENKO0FDQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FEQ0o7QUNFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7QURDRjtBQ1lBO0VBQ0UsbUJBQUE7QURURjtBQ1lBOztFQUVFLGtCQUFBO0FEVEY7QUNnQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtBRGRGO0FDaUJBO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FEakJGO0FDb0JBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEakJGO0FDb0JBO0VBQ0Usc0RBQUE7QURqQkY7QUNvQkE7RUFDRSwrQkFBQTtBRGpCRjtBQ29CQTtFQUdFLFlBQUE7QURuQkY7QUMwQkE7RUFDRSxzQkFBQTtBRHZCRjtBQzhCQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUQzQkY7QUM2QkE7RUFDRSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUQxQkY7QUM0QkE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUR6QkY7QUM0QkE7RUFDRSwrQkFBQTtBRHpCRjtBQzRCQTtFQUNFLGVBQUE7QUR6QkY7QUM2QkE7RUFDRSxrQkFBQTtBRDFCRjtBQzZCQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FEMUJGO0FDNkJBO0VBQ0Usa0JBQUE7QUQxQkY7QUM2QkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBRDNCRjtBQzhCQTtFQUNFLGlDQUFBO0FEM0JGO0FDOEJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRDNCRjtBQzZCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FEMUJGO0FDNkJBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUQxQkY7QUM0QkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEekJGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuLmluZm9TZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuLmluZm9TZWN0aW9uIC51c2VyUGhvdG8ge1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cbi5pbmZvU2VjdGlvbiAudXNlck5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnZlcnNpb24ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDogNTAlO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIC0tcGFkZGluZy1zdGFydDogMzBweCAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uaW1ncyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm1lbnVfdXNlcl9pbWFnZSB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi51c2VybmFtZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmVtYWlsIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbi5pbmZvU2VjdGlvbiB7XG4gIC8vICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIC51c2VyUGhvdG8ge1xuICAgIC8vIGhlaWdodDogMTEwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgfVxuICAudXNlck5hbWUge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuLnZlcnNpb24ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDogNTAlO1xufVxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAvLyAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLy8gLS1wYWRkaW5nLWVuZDogOHB4O1xuICAvLyAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAvLyAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIC8vIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIC8vICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIC8vIHBhZGRpbmc6IDQwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuaW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAtLXBhZGRpbmctc3RhcnQ6IDMwcHggIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmltZ3Mge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWVudV91c2VyX2ltYWdlIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnVzZXJuYW1lIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmVtYWlsIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/native-audio/ngx */
    "./node_modules/@ionic-native/native-audio/ngx/index.js");
    /* harmony import */


    var _services_util_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, geolocation, api, oneSignal, nativeAudio, actionSheetController, util, router, navCtrl) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.geolocation = geolocation;
        this.api = api;
        this.oneSignal = oneSignal;
        this.nativeAudio = nativeAudio;
        this.actionSheetController = actionSheetController;
        this.util = util;
        this.router = router;
        this.navCtrl = navCtrl;
        this.appPages = [];
        this.selectedIndex = 0;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "updateLocation",
        value: function updateLocation(latitude, longitude) {
          var _this = this;

          if (localStorage.getItem('uid')) {
            var uid = localStorage.getItem('uid');

            if (uid && uid !== null && uid !== 'null') {
              var param = {
                id: uid,
                lat: latitude,
                lng: longitude
              };
              this.api.post('drivers/getById', param).then(function (data) {
                console.log('*******************', data);

                if (data && data.status === 200 && data.data && data.data.length) {
                  _this.util.userInfo = data.data[0];
                }
              }, function (error) {
                console.log('==>>', error);
              });
            }
          }
        }
      }, {
        key: "getLocation",
        value: function getLocation() {
          var _this2 = this;

          this.geolocation.getCurrentPosition().then(function (resp) {
            localStorage.setItem('lat', resp.coords.latitude.toString());
            localStorage.setItem('lng', resp.coords.longitude.toString());

            _this2.updateLocation(resp.coords.latitude, resp.coords.longitude);
          })["catch"](function (error) {
            console.log('Error getting location', error);
          });
          var watch = this.geolocation.watchPosition();
          watch.subscribe(function (data) {
            localStorage.setItem('lat', data.coords.latitude.toString());
            localStorage.setItem('lng', data.coords.longitude.toString());

            _this2.updateLocation(data.coords.latitude, data.coords.longitude);
          });
        }
      }, {
        key: "presentActionSheet",
        value: function presentActionSheet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetController.create({
                      header: 'Nueva notificación',
                      mode: 'md',
                      buttons: [{
                        text: this.util.translate('OK'),
                        icon: 'volume-mute',
                        handler: function handler() {
                          console.log('Delete clicked');

                          _this3.nativeAudio.stop('audio').then(function () {
                            return console.log('done');
                          }, function () {
                            return console.log('error');
                          });
                        }
                      }, {
                        text: this.util.translate('Cancel'),
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');

                          _this3.nativeAudio.stop('audio').then(function () {
                            return console.log('done');
                          }, function () {
                            return console.log('error');
                          });
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context.sent;
                    _context.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this4 = this;

          this.platform.ready().then(function () {
            _this4.statusBar.styleDefault();

            _this4.splashScreen.hide();

            if (_this4.platform.is('cordova')) {
              console.log('platform is okk');
              setTimeout(function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var _this5 = this;

                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return this.oneSignal.startInit(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].onesignal.appId, src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].onesignal.googleProjectNumber);

                        case 2:
                          this.oneSignal.getIds().then(function (data) {
                            console.log('-----------------------------------', data);
                            localStorage.setItem('fcm', data.userId);
                            var uid = localStorage.getItem('uid');

                            if (uid && uid !== null && uid !== 'null') {
                              var param = {
                                id: uid,
                                fcm_token: data.userId
                              };

                              _this5.api.post('drivers/edit_profile', param).then(function (data) {
                                console.log('user info=>', data);
                              }, function (error) {
                                console.log(error);
                              });
                            }
                          });
                          this.oneSignal.enableSound(true);
                          _context2.next = 6;
                          return this.oneSignal.endInit();

                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              }, 1000);

              _this4.nativeAudio.preloadSimple('audio', 'assets/alert.mp3').then(function (data) {
                console.log('dupletx', data);
              }, function (error) {
                console.log(error);
              })["catch"](function (error) {
                console.log(error);
              });

              _this4.oneSignal.handleNotificationReceived().subscribe(function (data) {
                console.log('got order', data);

                _this4.nativeAudio.play('audio', function () {
                  return console.log('audio is done playing');
                })["catch"](function (error) {
                  return console.log(error);
                });

                _this4.nativeAudio.setVolumeForComplexAsset('audio', 1);

                _this4.presentActionSheet();
              });

              _this4.oneSignal.inFocusDisplaying(2);
            }

            _this4.appPages = _this4.util.appPages;
            var lng = localStorage.getItem('language');

            if (!lng || lng === null) {
              _this4.api.get('users/getDefaultSettings').then(function (data) {
                console.log('get default settings', data);

                if (data && data.status === 200 && data.data) {
                  var manage = data.data.manage;
                  var language = data.data.lang;

                  if (manage && manage.length > 0) {
                    if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                      _this4.util.appClosed = true;
                      _this4.util.appClosedMessage = manage[0].message;
                    } else {
                      _this4.util.appClosed = false;
                    }
                  } else {
                    _this4.util.appClosed = false;
                  }

                  if (language) {
                    _this4.util.translations = language;
                    localStorage.setItem('language', data.data.file);
                  }

                  var settings = data.data.settings;

                  if (settings && settings.length > 0) {
                    var info = settings[0];
                    _this4.util.direction = info.appDirection;
                    _this4.util.cside = info.currencySide;
                    _this4.util.currecny = info.currencySymbol;
                    _this4.util.logo = info.logo;
                    _this4.util.twillo = info.twillo;
                    _this4.util.delivery = info.delivery;
                    _this4.util.user_login = info.driver_login;
                    _this4.util.reset_pwd = info.reset_pwd;
                    document.documentElement.dir = _this4.util.direction;
                  } else {
                    _this4.util.direction = 'ltr';
                    _this4.util.cside = 'right';
                    _this4.util.currecny = '$';
                    document.documentElement.dir = _this4.util.direction;
                  }

                  var general = data.data.general;
                  console.log('generalllll============================>', general);

                  if (general && general.length > 0) {
                    var _info = general[0];
                    _this4.util.general = _info;
                  }

                  console.log('app is closed', _this4.util.appClosed);
                }

                console.log(_this4.util.translations);
                console.log(_this4.util.direction);
                console.log(_this4.util.cside);
                console.log(_this4.util.appClosed);
                console.log(_this4.util.appClosedMessage);
              }, function (error) {
                console.log('default settings', error);
              });
            } else {
              var param = {
                id: localStorage.getItem('language')
              };

              _this4.api.post('users/getDefaultSettingsById', param).then(function (data) {
                console.log('get default settings by id', data);

                if (data && data.status === 200 && data.data) {
                  var manage = data.data.manage;
                  var language = data.data.lang;

                  if (manage && manage.length > 0) {
                    if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                      _this4.util.appClosed = true;
                      _this4.util.appClosedMessage = manage[0].message;
                    } else {
                      _this4.util.appClosed = false;
                    }
                  } else {
                    _this4.util.appClosed = false;
                  }

                  if (language) {
                    _this4.util.translations = language;
                  }

                  var settings = data.data.settings;
                  console.log('-->', settings);

                  if (settings && settings.length > 0) {
                    var info = settings[0];
                    _this4.util.direction = info.appDirection;
                    _this4.util.cside = info.currencySide;
                    _this4.util.currecny = info.currencySymbol;
                    _this4.util.logo = info.logo;
                    _this4.util.twillo = info.twillo;
                    _this4.util.delivery = info.delivery;
                    _this4.util.user_login = info.driver_login;
                    _this4.util.reset_pwd = info.reset_pwd;
                    document.documentElement.dir = _this4.util.direction;
                    console.log('wont');
                  } else {
                    _this4.util.direction = 'ltr';
                    _this4.util.cside = 'right';
                    _this4.util.currecny = '$';
                    document.documentElement.dir = _this4.util.direction;
                  }

                  var general = data.data.general;
                  console.log('generalllll============================>', general);

                  if (general && general.length > 0) {
                    var _info2 = general[0];
                    _this4.util.general = _info2;
                  }

                  console.log('app is closed', _this4.util.appClosed);
                }

                console.log(_this4.util.translations);
                console.log(_this4.util.direction);
                console.log(_this4.util.cside);
                console.log(_this4.util.appClosed);
                console.log(_this4.util.appClosedMessage);
              }, function (error) {
                console.log('default settings by id', error);
                _this4.util.appClosed = false;
                _this4.util.direction = 'ltr';
                _this4.util.cside = 'right';
                _this4.util.currecny = '$';
                document.documentElement.dir = _this4.util.direction;
              });
            }

            var uid = localStorage.getItem('uid');

            if (uid && uid !== null && uid !== 'null') {
              var _param = {
                id: uid
              };

              _this4.api.post('drivers/getById', _param).then(function (data) {
                console.log('*******************', data);

                if (data && data.status === 200 && data.data && data.data.length) {
                  _this4.util.userInfo = data.data[0];
                }
              }, function (error) {
                console.log('==>>', error);
              });
            }

            _this4.getLocation();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.navCtrl.navigateRoot(['/login']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"]
      }, {
        type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeAudio"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"], _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeAudio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _services_util_service__WEBPACK_IMPORTED_MODULE_10__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/native-audio/ngx */
    "./node_modules/@ionic-native/native-audio/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _pages_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/select-country/select-country.module */
    "./src/app/pages/select-country/select-country.module.ts");
    /* harmony import */


    var _pages_verify_verify_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/verify/verify.module */
    "./src/app/pages/verify/verify.module.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _pages_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_15__["SelectCountryPageModule"], _pages_verify_verify_module__WEBPACK_IMPORTED_MODULE_16__["VerifyPageModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__["OneSignal"], _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_13__["NativeAudio"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_14__["HTTP"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_17__["InAppBrowser"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/guard/auth.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/guard/auth.guard.ts ***!
    \*************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var uid = localStorage.getItem('uid');
          console.log('uid', localStorage.getItem('uid'));

          if (uid && uid != null && uid !== 'null') {
            return true;
          }

          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/pages/select-country/select-country-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/select-country/select-country-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SelectCountryPageRoutingModule */

  /***/
  function srcAppPagesSelectCountrySelectCountryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCountryPageRoutingModule", function () {
      return SelectCountryPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _select_country_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./select-country.page */
    "./src/app/pages/select-country/select-country.page.ts");
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
      component: _select_country_page__WEBPACK_IMPORTED_MODULE_3__["SelectCountryPage"]
    }];

    var SelectCountryPageRoutingModule = function SelectCountryPageRoutingModule() {
      _classCallCheck(this, SelectCountryPageRoutingModule);
    };

    SelectCountryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SelectCountryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/select-country/select-country.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/select-country/select-country.module.ts ***!
    \***************************************************************/

  /*! exports provided: SelectCountryPageModule */

  /***/
  function srcAppPagesSelectCountrySelectCountryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCountryPageModule", function () {
      return SelectCountryPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _select_country_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./select-country-routing.module */
    "./src/app/pages/select-country/select-country-routing.module.ts");
    /* harmony import */


    var _select_country_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select-country.page */
    "./src/app/pages/select-country/select-country.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var SelectCountryPageModule = function SelectCountryPageModule() {
      _classCallCheck(this, SelectCountryPageModule);
    };

    SelectCountryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _select_country_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectCountryPageRoutingModule"]],
      declarations: [_select_country_page__WEBPACK_IMPORTED_MODULE_6__["SelectCountryPage"]]
    })], SelectCountryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/select-country/select-country.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/select-country/select-country.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSelectCountrySelectCountryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsZWN0LWNvdW50cnkvc2VsZWN0LWNvdW50cnkucGFnZS5zY3NzIiwiL1VzZXJzL2FsZWphbmRyb2RpYXovRGVza3RvcC9Nck1hbmRhMiBSZXBhcnRpZG9yL3NyYy9hcHAvcGFnZXMvc2VsZWN0LWNvdW50cnkvc2VsZWN0LWNvdW50cnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbGVjdC1jb3VudHJ5L3NlbGVjdC1jb3VudHJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qLyIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/select-country/select-country.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/select-country/select-country.page.ts ***!
    \*************************************************************/

  /*! exports provided: SelectCountryPage */

  /***/
  function srcAppPagesSelectCountrySelectCountryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCountryPage", function () {
      return SelectCountryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var SelectCountryPage = /*#__PURE__*/function () {
      function SelectCountryPage(modalCtrl, util) {
        var _this6 = this;

        _classCallCheck(this, SelectCountryPage);

        this.modalCtrl = modalCtrl;
        this.util = util;
        this.ccCode = '91';
        this.countries = [];
        this.dummy = [];
        this.dummyLoad = [];
        this.dummyLoad = Array(10);
        setTimeout(function () {
          _this6.dummyLoad = [];
          _this6.dummy = _this6.util.countrys;
          _this6.countries = _this6.dummy;
          console.log(_this6.dummy);
        }, 500);
      }

      _createClass(SelectCountryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "onSearchChange",
        value: function onSearchChange(events) {
          console.log(events);

          if (events.value !== '') {
            this.countries = this.dummy.filter(function (item) {
              return item.country_name.toLowerCase().indexOf(events.detail.value.toLowerCase()) > -1;
            });
          } else {
            this.countries = [];
          }
        }
      }, {
        key: "okay",
        value: function okay() {
          console.log(this.ccCode);
          this.modalCtrl.dismiss(this.ccCode, 'selected');
        }
      }]);

      return SelectCountryPage;
    }();

    SelectCountryPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }];
    };

    SelectCountryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-country',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-country.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-country/select-country.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-country.page.scss */
      "./src/app/pages/select-country/select-country.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])], SelectCountryPage);
    /***/
  },

  /***/
  "./src/app/pages/verify/verify-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/verify/verify-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: VerifyPageRoutingModule */

  /***/
  function srcAppPagesVerifyVerifyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyPageRoutingModule", function () {
      return VerifyPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verify.page */
    "./src/app/pages/verify/verify.page.ts");
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
      component: _verify_page__WEBPACK_IMPORTED_MODULE_3__["VerifyPage"]
    }];

    var VerifyPageRoutingModule = function VerifyPageRoutingModule() {
      _classCallCheck(this, VerifyPageRoutingModule);
    };

    VerifyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerifyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/verify/verify.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/verify/verify.module.ts ***!
    \***********************************************/

  /*! exports provided: VerifyPageModule */

  /***/
  function srcAppPagesVerifyVerifyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function () {
      return VerifyPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./verify-routing.module */
    "./src/app/pages/verify/verify-routing.module.ts");
    /* harmony import */


    var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verify.page */
    "./src/app/pages/verify/verify.page.ts");
    /* harmony import */


    var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-otp-input */
    "./node_modules/ng-otp-input/fesm2015/ng-otp-input.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var VerifyPageModule = function VerifyPageModule() {
      _classCallCheck(this, VerifyPageModule);
    };

    VerifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyPageRoutingModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"]],
      declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
    })], VerifyPageModule);
    /***/
  },

  /***/
  "./src/app/pages/verify/verify.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/verify/verify.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVerifyVerifyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.otpContainer {\n  margin-top: 50%;\n}\n.otpContainer .headerText {\n  text-align: center;\n  font-weight: bolder;\n  font-size: 2rem;\n}\n.otpContainer .subTitleText {\n  text-align: center;\n  font-weight: bold;\n  color: gray;\n  font-size: 1rem;\n}\n.otpContainer .otpInputs {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}\n.otpContainer .btn_class {\n  color: white;\n  margin: 30px 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiLCIvVXNlcnMvYWxlamFuZHJvZGlhei9EZXNrdG9wL01yTWFuZGEyIFJlcGFydGlkb3Ivc3JjL2FwcC9wYWdlcy92ZXJpZnkvdmVyaWZ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLGVBQUE7QURFSjtBQ0RJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURHUjtBQ0RJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FER1I7QUNESTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FER1I7QUNESTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBREdSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGZvb2RpZXMgYXBwXG4gIENyZWF0ZWQgOiAyOC1GZWItMjAyMVxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5vdHBDb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1MCU7XG59XG4ub3RwQ29udGFpbmVyIC5oZWFkZXJUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDJyZW07XG59XG4ub3RwQ29udGFpbmVyIC5zdWJUaXRsZVRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLm90cENvbnRhaW5lciAub3RwSW5wdXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4ub3RwQ29udGFpbmVyIC5idG5fY2xhc3Mge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMzBweCA1MHB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm90cENvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNTAlO1xuICAgIC5oZWFkZXJUZXh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICAgIC5zdWJUaXRsZVRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAub3RwSW5wdXRzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuICAgIC5idG5fY2xhc3Mge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogMzBweCA1MHB4O1xuICAgIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/verify/verify.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/verify/verify.page.ts ***!
    \*********************************************/

  /*! exports provided: VerifyPage */

  /***/
  function srcAppPagesVerifyVerifyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyPage", function () {
      return VerifyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var VerifyPage = /*#__PURE__*/function () {
      function VerifyPage(api, util, navParam, navCtrl, modalCtrl) {
        var _this7 = this;

        _classCallCheck(this, VerifyPage);

        this.api = api;
        this.util = util;
        this.navParam = navParam;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.textCode = '';
        this.userCode = '';
        this.resendCode = false;
        console.log('cc code', this.navParam.get('code'));
        this.sendOTP();
        setTimeout(function () {
          _this7.resendCode = true;
        }, 30000);
      }

      _createClass(VerifyPage, [{
        key: "sendOTP",
        value: function sendOTP() {
          var _this8 = this;

          this.mobile = this.navParam.get('code') + this.navParam.get('phone');
          console.log('send on this number------<<<<<<<', this.mobile);
          console.log(this.mobile);
          var message = this.util.translate('Your Foodies app verification code : ');
          var param = {
            msg: message,
            to: this.mobile
          };
          console.log(param);
          this.util.show();
          this.api.post('users/twilloMessage', param).then(function (data) {
            console.log(data);
            _this8.id = data.data.id;

            _this8.util.hide();
          }, function (error) {
            console.log(error);

            _this8.util.hide();

            _this8.util.errorToast('Algo ha ido mal');
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onOtpChange",
        value: function onOtpChange(event) {
          console.log(event);
          this.userCode = event;
        }
      }, {
        key: "resend",
        value: function resend() {
          this.sendOTP();
        }
      }, {
        key: "continue",
        value: function _continue() {
          var _this9 = this;

          console.log(this.userCode);

          if (this.userCode === '' || !this.userCode) {
            this.util.errorToast(this.util.translate('Not valid code'));
            return false;
          }

          if (this.userCode) {
            var param = {
              id: this.id,
              otp: this.userCode
            };
            this.util.show();
            this.api.post('users/verifyOTP', param).then(function (data) {
              console.log(data);

              _this9.util.hide();

              if (data && data.status === 200) {
                _this9.modalCtrl.dismiss('', 'ok');
              } else {
                if (data && data.status === 500 && data.data && data.data.message) {
                  _this9.util.errorToast(data.data.message);

                  return false;
                }

                _this9.util.errorToast('Algo ha ido mal');

                return false;
              }
            }, function (error) {
              _this9.util.hide();

              console.log(error);

              _this9.util.errorToast('Algo ha ido mal');
            });
          } else {
            this.util.errorToast(this.util.translate('Not valid code'));
            return false;
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.modalCtrl.dismiss();
        }
      }]);

      return VerifyPage;
    }();

    VerifyPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    VerifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verify',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verify.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verify.page.scss */
      "./src/app/pages/verify/verify.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], VerifyPage);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ApiService = /*#__PURE__*/function () {
      function ApiService(http, nativeHttp) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.nativeHttp = nativeHttp;
        this.baseUrl = '';
        this.mediaURL = '';
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
        this.mediaURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mediaURL;
      }

      _createClass(ApiService, [{
        key: "translate",
        value: function translate(str) {
          return str;
        }
      }, {
        key: "alerts",
        value: function alerts(title, message, type) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(title, message, type);
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(files) {
          var formData = new FormData();
          Array.from(files).forEach(function (f) {
            return formData.append('userfile', f);
          });
          return this.http.post(this.baseUrl + 'users/upload_image', formData);
        }
      }, {
        key: "instaPay",
        value: function instaPay(url, body, key, token) {
          return this.nativeHttp.post(url, body, {
            'X-Api-Key': "".concat(key),
            'X-Auth-Token': "".concat(token)
          });
        }
      }, {
        key: "getCurrencyCode",
        value: function getCurrencyCode() {
          return 'none';
        }
      }, {
        key: "getCurrecySymbol",
        value: function getCurrecySymbol() {
          return 'none';
        }
      }, {
        key: "sendNotification",
        value: function sendNotification(msg, title, id) {
          var body = {
            app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onesignal.appId,
            include_player_ids: [id],
            headings: {
              en: title
            },
            contents: {
              en: msg
            },
            data: {
              task: msg
            }
          };
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', "Basic ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onesignal.restKey))
          };
          return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
        }
      }, {
        key: "JSON_to_URLEncoded",
        value: function JSON_to_URLEncoded(element, key, list) {
          var new_list = list || [];

          if (typeof element === 'object') {
            for (var idx in element) {
              this.JSON_to_URLEncoded(element[idx], key ? key + '[' + idx + ']' : idx, new_list);
            }
          } else {
            new_list.push(key + '=' + encodeURIComponent(element));
          }

          return new_list.join('&');
        }
      }, {
        key: "post",
        value: function post(url, body) {
          var _this10 = this;

          return new Promise(function (resolve, reject) {
            var header = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Basic', "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken))
            };

            var param = _this10.JSON_to_URLEncoded(body);

            console.log(param);

            _this10.http.post(_this10.baseUrl + url, param, header).subscribe(function (data) {
              resolve(data);
            }, function (error) {
              resolve(error);
            }); // return this.http.post(this.baseUrl + url, param, header);

          });
        }
      }, {
        key: "get",
        value: function get(url) {
          var _this11 = this;

          return new Promise(function (resolve, reject) {
            var header = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Basic', "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken)) // .set('responseType', 'blob')

            };

            _this11.http.get(_this11.baseUrl + url, header).subscribe(function (data) {
              resolve(data);
            }, function (error) {
              resolve(error);
            });
          });
        }
      }, {
        key: "externalGet",
        value: function externalGet(url) {
          var _this12 = this;

          return new Promise(function (resolve, reject) {
            var header = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Basic', "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken))
            };

            _this12.http.get(url, header).subscribe(function (data) {
              resolve(data);
            }, function (error) {
              resolve(error);
            });
          });
        }
      }, {
        key: "nativePost",
        value: function nativePost(url, post) {
          console.log(this.baseUrl + url, post);
          return this.nativeHttp.post(this.baseUrl + url, post, {
            Basic: "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken)
          });
        }
      }, {
        key: "httpGet",
        value: function httpGet(url, key) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer ".concat(key))
          };
          return this.http.get(url, header);
        }
      }, {
        key: "externalPost",
        value: function externalPost(url, body, key) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer ".concat(key))
          };
          var order = this.JSON_to_URLEncoded(body);
          console.log(order);
          return this.http.post(url, order, header);
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/services/util.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/util.service.ts ***!
    \******************************************/

  /*! exports provided: UtilService */

  /***/
  function srcAppServicesUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var UtilService = /*#__PURE__*/function () {
      function UtilService(loadingCtrl, alertCtrl, toastCtrl, router, navCtrl, menuCtrl) {
        _classCallCheck(this, UtilService);

        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.isLoading = false;
        this.address = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.coupon = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.review = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.newStatus = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.changeLocation = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.profile = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.newOrder = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.translations = [];
        this.appClosedMessage = '';
        this.appPages = [];
        this.cityAddress = '';
        this.favIds = [];
        this.countrys = [{
          country_code: 'AF',
          country_name: 'Afghanistan',
          dialling_code: '93'
        }, {
          country_code: 'AL',
          country_name: 'Albania',
          dialling_code: '355'
        }, {
          country_code: 'DZ',
          country_name: 'Algeria',
          dialling_code: '213'
        }, {
          country_code: 'AS',
          country_name: 'American Samoa',
          dialling_code: '1'
        }, {
          country_code: 'AD',
          country_name: 'Andorra',
          dialling_code: '376'
        }, {
          country_code: 'AO',
          country_name: 'Angola',
          dialling_code: '244'
        }, {
          country_code: 'AI',
          country_name: 'Anguilla',
          dialling_code: '1'
        }, {
          country_code: 'AG',
          country_name: 'Antigua',
          dialling_code: '1'
        }, {
          country_code: 'AR',
          country_name: 'Argentina',
          dialling_code: '54'
        }, {
          country_code: 'AM',
          country_name: 'Armenia',
          dialling_code: '374'
        }, {
          country_code: 'AW',
          country_name: 'Aruba',
          dialling_code: '297'
        }, {
          country_code: 'AU',
          country_name: 'Australia',
          dialling_code: '61'
        }, {
          country_code: 'AI',
          country_name: 'Austria',
          dialling_code: '43'
        }, {
          country_code: 'AZ',
          country_name: 'Azerbaijan',
          dialling_code: '994'
        }, {
          country_code: 'BH',
          country_name: 'Bahrain',
          dialling_code: '973'
        }, {
          country_code: 'BD',
          country_name: 'Bangladesh',
          dialling_code: '880'
        }, {
          country_code: 'BB',
          country_name: 'Barbados',
          dialling_code: '1'
        }, {
          country_code: 'BY',
          country_name: 'Belarus',
          dialling_code: '375'
        }, {
          country_code: 'BE',
          country_name: 'Belgium',
          dialling_code: '32'
        }, {
          country_code: 'BZ',
          country_name: 'Belize',
          dialling_code: '501'
        }, {
          country_code: 'BJ',
          country_name: 'Benin',
          dialling_code: '229'
        }, {
          country_code: 'BM',
          country_name: 'Bermuda',
          dialling_code: '1'
        }, {
          country_code: 'BT',
          country_name: 'Bhutan',
          dialling_code: '975'
        }, {
          country_code: 'BO',
          country_name: 'Bolivia',
          dialling_code: '591'
        }, {
          country_code: 'BA',
          country_name: 'Bosnia and Herzegovina',
          dialling_code: '387'
        }, {
          country_code: 'BW',
          country_name: 'Botswana',
          dialling_code: '267'
        }, {
          country_code: 'BR',
          country_name: 'Brazil',
          dialling_code: '55'
        }, {
          country_code: 'IO',
          country_name: 'British Indian Ocean Territory',
          dialling_code: '246'
        }, {
          country_code: 'VG',
          country_name: 'British Virgin Islands',
          dialling_code: '1'
        }, {
          country_code: 'BN',
          country_name: 'Brunei',
          dialling_code: '673'
        }, {
          country_code: 'BG',
          country_name: 'Bulgaria',
          dialling_code: '359'
        }, {
          country_code: 'BF',
          country_name: 'Burkina Faso',
          dialling_code: '226'
        }, {
          country_code: 'MM',
          country_name: 'Burma Myanmar',
          dialling_code: '95'
        }, {
          country_code: 'BI',
          country_name: 'Burundi',
          dialling_code: '257'
        }, {
          country_code: 'KH',
          country_name: 'Cambodia',
          dialling_code: '855'
        }, {
          country_code: 'CM',
          country_name: 'Cameroon',
          dialling_code: '237'
        }, {
          country_code: 'CA',
          country_name: 'Canada',
          dialling_code: '1'
        }, {
          country_code: 'CV',
          country_name: 'Cape Verde',
          dialling_code: '238'
        }, {
          country_code: 'KY',
          country_name: 'Cayman Islands',
          dialling_code: '1'
        }, {
          country_code: 'CF',
          country_name: 'Central African Republic',
          dialling_code: '236'
        }, {
          country_code: 'ID',
          country_name: 'Chad',
          dialling_code: '235'
        }, {
          country_code: 'CL',
          country_name: 'Chile',
          dialling_code: '56'
        }, {
          country_code: 'CN',
          country_name: 'China',
          dialling_code: '86'
        }, {
          country_code: 'CO',
          country_name: 'Colombia',
          dialling_code: '57'
        }, {
          country_code: 'KM',
          country_name: 'Comoros',
          dialling_code: '269'
        }, {
          country_code: 'CK',
          country_name: 'Cook Islands',
          dialling_code: '682'
        }, {
          country_code: 'CR',
          country_name: 'Costa Rica',
          dialling_code: '506'
        }, {
          country_code: 'CI',
          country_name: "C\xF4te d'Ivoire",
          dialling_code: '225'
        }, {
          country_code: 'HR',
          country_name: 'Croatia',
          dialling_code: '385'
        }, {
          country_code: 'CU',
          country_name: 'Cuba',
          dialling_code: '53'
        }, {
          country_code: 'CY',
          country_name: 'Cyprus',
          dialling_code: '357'
        }, {
          country_code: 'CZ',
          country_name: 'Czech Republic',
          dialling_code: '420'
        }, {
          country_code: 'CD',
          country_name: 'Democratic Republic of Congo',
          dialling_code: '243'
        }, {
          country_code: 'DK',
          country_name: 'Denmark',
          dialling_code: '45'
        }, {
          country_code: 'DJ',
          country_name: 'Djibouti',
          dialling_code: '253'
        }, {
          country_code: 'DM',
          country_name: 'Dominica',
          dialling_code: '1'
        }, {
          country_code: 'DO',
          country_name: 'Dominican Republic',
          dialling_code: '1'
        }, {
          country_code: 'EC',
          country_name: 'Ecuador',
          dialling_code: '593'
        }, {
          country_code: 'EG',
          country_name: 'Egypt',
          dialling_code: '20'
        }, {
          country_code: 'SV',
          country_name: 'El Salvador',
          dialling_code: '503'
        }, {
          country_code: 'GQ',
          country_name: 'Equatorial Guinea',
          dialling_code: '240'
        }, {
          country_code: 'ER',
          country_name: 'Eritrea',
          dialling_code: '291'
        }, {
          country_code: 'EE',
          country_name: 'Estonia',
          dialling_code: '372'
        }, {
          country_code: 'ET',
          country_name: 'Ethiopia',
          dialling_code: '251'
        }, {
          country_code: 'FK',
          country_name: 'Falkland Islands',
          dialling_code: '500'
        }, {
          country_code: 'FO',
          country_name: 'Faroe Islands',
          dialling_code: '298'
        }, {
          country_code: 'FM',
          country_name: 'Federated States of Micronesia',
          dialling_code: '691'
        }, {
          country_code: 'FJ',
          country_name: 'Fiji',
          dialling_code: '679'
        }, {
          country_code: 'FI',
          country_name: 'Finland',
          dialling_code: '358'
        }, {
          country_code: 'FR',
          country_name: 'France',
          dialling_code: '33'
        }, {
          country_code: 'GF',
          country_name: 'French Guiana',
          dialling_code: '594'
        }, {
          country_code: 'PF',
          country_name: 'French Polynesia',
          dialling_code: '689'
        }, {
          country_code: 'GA',
          country_name: 'Gabon',
          dialling_code: '241'
        }, {
          country_code: 'GE',
          country_name: 'Georgia',
          dialling_code: '995'
        }, {
          country_code: 'DE',
          country_name: 'Germany',
          dialling_code: '49'
        }, {
          country_code: 'GH',
          country_name: 'Ghana',
          dialling_code: '233'
        }, {
          country_code: 'GI',
          country_name: 'Gibraltar',
          dialling_code: '350'
        }, {
          country_code: 'GR',
          country_name: 'Greece',
          dialling_code: '30'
        }, {
          country_code: 'GL',
          country_name: 'Greenland',
          dialling_code: '299'
        }, {
          country_code: 'GD',
          country_name: 'Grenada',
          dialling_code: '1'
        }, {
          country_code: 'GP',
          country_name: 'Guadeloupe',
          dialling_code: '590'
        }, {
          country_code: 'GU',
          country_name: 'Guam',
          dialling_code: '1'
        }, {
          country_code: 'GT',
          country_name: 'Guatemala',
          dialling_code: '502'
        }, {
          country_code: 'GN',
          country_name: 'Guinea',
          dialling_code: '224'
        }, {
          country_code: 'GW',
          country_name: 'Guinea-Bissau',
          dialling_code: '245'
        }, {
          country_code: 'GY',
          country_name: 'Guyana',
          dialling_code: '592'
        }, {
          country_code: 'HT',
          country_name: 'Haiti',
          dialling_code: '509'
        }, {
          country_code: 'HN',
          country_name: 'Honduras',
          dialling_code: '504'
        }, {
          country_code: 'HK',
          country_name: 'Hong Kong',
          dialling_code: '852'
        }, {
          country_code: 'HU',
          country_name: 'Hungary',
          dialling_code: '36'
        }, {
          country_code: 'IS',
          country_name: 'Iceland',
          dialling_code: '354'
        }, {
          country_code: 'IN',
          country_name: 'India',
          dialling_code: '91'
        }, {
          country_code: 'ID',
          country_name: 'Indonesia',
          dialling_code: '62'
        }, {
          country_code: 'IR',
          country_name: 'Iran',
          dialling_code: '98'
        }, {
          country_code: 'IQ',
          country_name: 'Iraq',
          dialling_code: '964'
        }, {
          country_code: 'IE',
          country_name: 'Ireland',
          dialling_code: '353'
        }, {
          country_code: 'IL',
          country_name: 'Israel',
          dialling_code: '972'
        }, {
          country_code: 'IT',
          country_name: 'Italy',
          dialling_code: '39'
        }, {
          country_code: 'JM',
          country_name: 'Jamaica',
          dialling_code: '1'
        }, {
          country_code: 'JP',
          country_name: 'Japan',
          dialling_code: '81'
        }, {
          country_code: 'JO',
          country_name: 'Jordan',
          dialling_code: '962'
        }, {
          country_code: 'KZ',
          country_name: 'Kazakhstan',
          dialling_code: '7'
        }, {
          country_code: 'KE',
          country_name: 'Kenya',
          dialling_code: '254'
        }, {
          country_code: 'KI',
          country_name: 'Kiribati',
          dialling_code: '686'
        }, {
          country_code: 'XK',
          country_name: 'Kosovo',
          dialling_code: '381'
        }, {
          country_code: 'KW',
          country_name: 'Kuwait',
          dialling_code: '965'
        }, {
          country_code: 'KG',
          country_name: 'Kyrgyzstan',
          dialling_code: '996'
        }, {
          country_code: 'LA',
          country_name: 'Laos',
          dialling_code: '856'
        }, {
          country_code: 'LV',
          country_name: 'Latvia',
          dialling_code: '371'
        }, {
          country_code: 'LB',
          country_name: 'Lebanon',
          dialling_code: '961'
        }, {
          country_code: 'LS',
          country_name: 'Lesotho',
          dialling_code: '266'
        }, {
          country_code: 'LR',
          country_name: 'Liberia',
          dialling_code: '231'
        }, {
          country_code: 'LY',
          country_name: 'Libya',
          dialling_code: '218'
        }, {
          country_code: 'LI',
          country_name: 'Liechtenstein',
          dialling_code: '423'
        }, {
          country_code: 'LT',
          country_name: 'Lithuania',
          dialling_code: '370'
        }, {
          country_code: 'LU',
          country_name: 'Luxembourg',
          dialling_code: '352'
        }, {
          country_code: 'MO',
          country_name: 'Macau',
          dialling_code: '853'
        }, {
          country_code: 'MK',
          country_name: 'Macedonia',
          dialling_code: '389'
        }, {
          country_code: 'MG',
          country_name: 'Madagascar',
          dialling_code: '261'
        }, {
          country_code: 'MW',
          country_name: 'Malawi',
          dialling_code: '265'
        }, {
          country_code: 'MY',
          country_name: 'Malaysia',
          dialling_code: '60'
        }, {
          country_code: 'MV',
          country_name: 'Maldives',
          dialling_code: '960'
        }, {
          country_code: 'ML',
          country_name: 'Mali',
          dialling_code: '223'
        }, {
          country_code: 'MT',
          country_name: 'Malta',
          dialling_code: '356'
        }, {
          country_code: 'MH',
          country_name: 'Marshall Islands',
          dialling_code: '692'
        }, {
          country_code: 'MQ',
          country_name: 'Martinique',
          dialling_code: '596'
        }, {
          country_code: 'MR',
          country_name: 'Mauritania',
          dialling_code: '222'
        }, {
          country_code: 'MU',
          country_name: 'Mauritius',
          dialling_code: '230'
        }, {
          country_code: 'YT',
          country_name: 'Mayotte',
          dialling_code: '262'
        }, {
          country_code: 'MX',
          country_name: 'Mexico',
          dialling_code: '52'
        }, {
          country_code: 'MD',
          country_name: 'Moldova',
          dialling_code: '373'
        }, {
          country_code: 'MC',
          country_name: 'Monaco',
          dialling_code: '377'
        }, {
          country_code: 'MN',
          country_name: 'Mongolia',
          dialling_code: '976'
        }, {
          country_code: 'ME',
          country_name: 'Montenegro',
          dialling_code: '382'
        }, {
          country_code: 'MS',
          country_name: 'Montserrat',
          dialling_code: '1'
        }, {
          country_code: 'MA',
          country_name: 'Morocco',
          dialling_code: '212'
        }, {
          country_code: 'MZ',
          country_name: 'Mozambique',
          dialling_code: '258'
        }, {
          country_code: 'NA',
          country_name: 'Namibia',
          dialling_code: '264'
        }, {
          country_code: 'NR',
          country_name: 'Nauru',
          dialling_code: '674'
        }, {
          country_code: 'NP',
          country_name: 'Nepal',
          dialling_code: '977'
        }, {
          country_code: 'NL',
          country_name: 'Netherlands',
          dialling_code: '31'
        }, {
          country_code: 'AN',
          country_name: 'Netherlands Antilles',
          dialling_code: '599'
        }, {
          country_code: 'NC',
          country_name: 'New Caledonia',
          dialling_code: '687'
        }, {
          country_code: 'NZ',
          country_name: 'New Zealand',
          dialling_code: '64'
        }, {
          country_code: 'NI',
          country_name: 'Nicaragua',
          dialling_code: '505'
        }, {
          country_code: 'NE',
          country_name: 'Niger',
          dialling_code: '227'
        }, {
          country_code: 'NG',
          country_name: 'Nigeria',
          dialling_code: '234'
        }, {
          country_code: 'NU',
          country_name: 'Niue',
          dialling_code: '683'
        }, {
          country_code: 'NF',
          country_name: 'Norfolk Island',
          dialling_code: '672'
        }, {
          country_code: 'KP',
          country_name: 'North Korea',
          dialling_code: '850'
        }, {
          country_code: 'MP',
          country_name: 'Northern Mariana Islands',
          dialling_code: '1'
        }, {
          country_code: 'NO',
          country_name: 'Norway',
          dialling_code: '47'
        }, {
          country_code: 'OM',
          country_name: 'Oman',
          dialling_code: '968'
        }, {
          country_code: 'PK',
          country_name: 'Pakistan',
          dialling_code: '92'
        }, {
          country_code: 'PW',
          country_name: 'Palau',
          dialling_code: '680'
        }, {
          country_code: 'PS',
          country_name: 'Palestine',
          dialling_code: '970'
        }, {
          country_code: 'PA',
          country_name: 'Panama',
          dialling_code: '507'
        }, {
          country_code: 'PG',
          country_name: 'Papua New Guinea',
          dialling_code: '675'
        }, {
          country_code: 'PY',
          country_name: 'Paraguay',
          dialling_code: '595'
        }, {
          country_code: 'PE',
          country_name: 'Peru',
          dialling_code: '51'
        }, {
          country_code: 'PH',
          country_name: 'Philippines',
          dialling_code: '63'
        }, {
          country_code: 'PL',
          country_name: 'Poland',
          dialling_code: '48'
        }, {
          country_code: 'PT',
          country_name: 'Portugal',
          dialling_code: '351'
        }, {
          country_code: 'PR',
          country_name: 'Puerto Rico',
          dialling_code: '1'
        }, {
          country_code: 'QA',
          country_name: 'Qatar',
          dialling_code: '974'
        }, {
          country_code: 'CG',
          country_name: 'Republic of the Congo',
          dialling_code: '242'
        }, {
          country_code: 'RE',
          country_name: 'Réunion',
          dialling_code: '262'
        }, {
          country_code: 'RO',
          country_name: 'Romania',
          dialling_code: '40'
        }, {
          country_code: 'RU',
          country_name: 'Russia',
          dialling_code: '7'
        }, {
          country_code: 'RW',
          country_name: 'Rwanda',
          dialling_code: '250'
        }, {
          country_code: 'BL',
          country_name: 'Saint Barthélemy',
          dialling_code: '590'
        }, {
          country_code: 'SH',
          country_name: 'Saint Helena',
          dialling_code: '290'
        }, {
          country_code: 'KN',
          country_name: 'Saint Kitts and Nevis',
          dialling_code: '1'
        }, {
          country_code: 'MF',
          country_name: 'Saint Martin',
          dialling_code: '590'
        }, {
          country_code: 'PM',
          country_name: 'Saint Pierre and Miquelon',
          dialling_code: '508'
        }, {
          country_code: 'VC',
          country_name: 'Saint Vincent and the Grenadines',
          dialling_code: '1'
        }, {
          country_code: 'WS',
          country_name: 'Samoa',
          dialling_code: '685'
        }, {
          country_code: 'SM',
          country_name: 'San Marino',
          dialling_code: '378'
        }, {
          country_code: 'ST',
          country_name: 'São Tomé and Príncipe',
          dialling_code: '239'
        }, {
          country_code: 'SA',
          country_name: 'Saudi Arabia',
          dialling_code: '966'
        }, {
          country_code: 'SN',
          country_name: 'Senegal',
          dialling_code: '221'
        }, {
          country_code: 'RS',
          country_name: 'Serbia',
          dialling_code: '381'
        }, {
          country_code: 'SC',
          country_name: 'Seychelles',
          dialling_code: '248'
        }, {
          country_code: 'SL',
          country_name: 'Sierra Leone',
          dialling_code: '232'
        }, {
          country_code: 'SG',
          country_name: 'Singapore',
          dialling_code: '65'
        }, {
          country_code: 'SK',
          country_name: 'Slovakia',
          dialling_code: '421'
        }, {
          country_code: 'SI',
          country_name: 'Slovenia',
          dialling_code: '386'
        }, {
          country_code: 'SB',
          country_name: 'Solomon Islands',
          dialling_code: '677'
        }, {
          country_code: 'SO',
          country_name: 'Somalia',
          dialling_code: '252'
        }, {
          country_code: 'ZA',
          country_name: 'South Africa',
          dialling_code: '27'
        }, {
          country_code: 'KR',
          country_name: 'South Korea',
          dialling_code: '82'
        }, {
          country_code: 'ES',
          country_name: 'Spain',
          dialling_code: '34'
        }, {
          country_code: 'LK',
          country_name: 'Sri Lanka',
          dialling_code: '94'
        }, {
          country_code: 'LC',
          country_name: 'St. Lucia',
          dialling_code: '1'
        }, {
          country_code: 'SD',
          country_name: 'Sudan',
          dialling_code: '249'
        }, {
          country_code: 'SR',
          country_name: 'Suriname',
          dialling_code: '597'
        }, {
          country_code: 'SZ',
          country_name: 'Swaziland',
          dialling_code: '268'
        }, {
          country_code: 'SE',
          country_name: 'Sweden',
          dialling_code: '46'
        }, {
          country_code: 'CH',
          country_name: 'Switzerland',
          dialling_code: '41'
        }, {
          country_code: 'SY',
          country_name: 'Syria',
          dialling_code: '963'
        }, {
          country_code: 'TW',
          country_name: 'Taiwan',
          dialling_code: '886'
        }, {
          country_code: 'TJ',
          country_name: 'Tajikistan',
          dialling_code: '992'
        }, {
          country_code: 'TZ',
          country_name: 'Tanzania',
          dialling_code: '255'
        }, {
          country_code: 'TH',
          country_name: 'Thailand',
          dialling_code: '66'
        }, {
          country_code: 'BS',
          country_name: 'The Bahamas',
          dialling_code: '1'
        }, {
          country_code: 'GM',
          country_name: 'The Gambia',
          dialling_code: '220'
        }, {
          country_code: 'TL',
          country_name: 'Timor-Leste',
          dialling_code: '670'
        }, {
          country_code: 'TG',
          country_name: 'Togo',
          dialling_code: '228'
        }, {
          country_code: 'TK',
          country_name: 'Tokelau',
          dialling_code: '690'
        }, {
          country_code: 'TO',
          country_name: 'Tonga',
          dialling_code: '676'
        }, {
          country_code: 'TT',
          country_name: 'Trinidad and Tobago',
          dialling_code: '1'
        }, {
          country_code: 'TN',
          country_name: 'Tunisia',
          dialling_code: '216'
        }, {
          country_code: 'TR',
          country_name: 'Turkey',
          dialling_code: '90'
        }, {
          country_code: 'TM',
          country_name: 'Turkmenistan',
          dialling_code: '993'
        }, {
          country_code: 'TC',
          country_name: 'Turks and Caicos Islands',
          dialling_code: '1'
        }, {
          country_code: 'TV',
          country_name: 'Tuvalu',
          dialling_code: '688'
        }, {
          country_code: 'UG',
          country_name: 'Uganda',
          dialling_code: '256'
        }, {
          country_code: 'UA',
          country_name: 'Ukraine',
          dialling_code: '380'
        }, {
          country_code: 'AE',
          country_name: 'United Arab Emirates',
          dialling_code: '971'
        }, {
          country_code: 'GB',
          country_name: 'United Kingdom',
          dialling_code: '44'
        }, {
          country_code: 'US',
          country_name: 'United States',
          dialling_code: '1'
        }, {
          country_code: 'UY',
          country_name: 'Uruguay',
          dialling_code: '598'
        }, {
          country_code: 'VI',
          country_name: 'US Virgin Islands',
          dialling_code: '1'
        }, {
          country_code: 'UZ',
          country_name: 'Uzbekistan',
          dialling_code: '998'
        }, {
          country_code: 'VU',
          country_name: 'Vanuatu',
          dialling_code: '678'
        }, {
          country_code: 'VA',
          country_name: 'Vatican City',
          dialling_code: '39'
        }, {
          country_code: 'VE',
          country_name: 'Venezuela',
          dialling_code: '58'
        }, {
          country_code: 'VN',
          country_name: 'Vietnam',
          dialling_code: '84'
        }, {
          country_code: 'WF',
          country_name: 'Wallis and Futuna',
          dialling_code: '681'
        }, {
          country_code: 'YE',
          country_name: 'Yemen',
          dialling_code: '967'
        }, {
          country_code: 'ZM',
          country_name: 'Zambia',
          dialling_code: '260'
        }, {
          country_code: 'ZW',
          country_name: 'Zimbabwe',
          dialling_code: '263'
        }];
        this.user_login = '0';
        this.reset_pwd = '0';
        this.appPages = [{
          title: 'Home',
          url: 'tabs/tab1',
          icon: 'assets/sidemenu/home.png',
          icon2: 'assets/sidemenu/home2.png',
          icn: 'home-outline'
        }, {
          title: 'Profile',
          url: 'tabs/tab3',
          icon: 'assets/sidemenu/user.png',
          icon2: 'assets/sidemenu/user2.png',
          icn: 'person-outline'
        }, {
          title: 'Language',
          url: 'tabs/tab3/languages',
          icon: 'assets/sidemenu/language.png',
          icon2: 'assets/sidemenu/language2.png',
          icn: 'language-outline'
        }, {
          title: 'Contact Us',
          url: 'tabs/tab3/contacts',
          icon: 'mail-outline',
          icn: 'mail-outline'
        }, {
          title: 'About',
          url: 'tabs/tab3/about',
          icon: 'assets/sidemenu/info.png',
          icon2: 'assets/sidemenu/info2.png',
          icn: 'alert-circle-outline'
        }, {
          title: 'FAQs',
          url: 'tabs/tab3/faqs',
          icon: 'assets/sidemenu/contact.png',
          icon2: 'assets/sidemenu/contact2.png',
          icn: 'flag-outline'
        }, {
          title: 'Help',
          url: 'tabs/tab3/help',
          icon: 'assets/sidemenu/contact.png',
          icon2: 'assets/sidemenu/contact2.png',
          icn: 'help-circle-outline'
        }];
      }
      /*
      Start Loader
      Call this method to Start your Loader
      */


      _createClass(UtilService, [{
        key: "publishAddress",
        value: function publishAddress(data) {
          this.address.next(data);
        }
      }, {
        key: "publishReview",
        value: function publishReview(data) {
          this.review.next(data);
        }
      }, {
        key: "publishProfile",
        value: function publishProfile(data) {
          this.profile.next(data);
        }
      }, {
        key: "publishOrder",
        value: function publishOrder() {
          this.newStatus.next();
        }
      }, {
        key: "subscribeOrder",
        value: function subscribeOrder() {
          return this.newStatus;
        }
      }, {
        key: "publishNewOrder",
        value: function publishNewOrder() {
          this.newOrder.next();
        }
      }, {
        key: "subscribeNewOrder",
        value: function subscribeNewOrder() {
          return this.newOrder;
        }
      }, {
        key: "observProfile",
        value: function observProfile() {
          return this.profile;
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "getLanguage",
        value: function getLanguage() {
          return '';
        }
      }, {
        key: "getReviewObservable",
        value: function getReviewObservable() {
          return this.review;
        }
      }, {
        key: "publishLocation",
        value: function publishLocation() {
          this.changeLocation.next();
        }
      }, {
        key: "subscribeLocation",
        value: function subscribeLocation() {
          return this.changeLocation;
        }
      }, {
        key: "publishLoggedIn",
        value: function publishLoggedIn(data) {
          this.loggedIn.next(data);
        }
      }, {
        key: "subscribeLoggedIn",
        value: function subscribeLoggedIn() {
          return this.loggedIn;
        }
      }, {
        key: "translate",
        value: function translate(str) {
          if (this.translations[str]) {
            return this.translations[str];
          }

          return str;
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.menuCtrl.toggle();
        }
      }, {
        key: "translateInEN",
        value: function translateInEN(str) {
          return str;
        }
      }, {
        key: "getObservable",
        value: function getObservable() {
          return this.address;
        }
      }, {
        key: "publishCoupon",
        value: function publishCoupon(data) {
          this.coupon.next(data);
        }
      }, {
        key: "getCouponObservable",
        value: function getCouponObservable() {
          return this.coupon;
        }
      }, {
        key: "setOrders",
        value: function setOrders(data) {
          this.orders = null;
          this.orders = data;
        }
      }, {
        key: "gerOrder",
        value: function gerOrder() {
          return this.orders;
        }
      }, {
        key: "show",
        value: function show(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this13 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.isLoading = true;
                    _context3.next = 3;
                    return this.loadingCtrl.create({
                      message: msg,
                      spinner: 'bubbles'
                    }).then(function (a) {
                      a.present().then(function () {
                        //console.log('presented');
                        if (!_this13.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort presenting');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context3.abrupt("return", _context3.sent);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "hide",
        value: function hide() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.isLoading = false;
                    _context4.next = 3;
                    return this.loadingCtrl.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 3:
                    return _context4.abrupt("return", _context4.sent);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
        /*
          Show Warning Alert Message
          param : msg = message to display
          Call this method to show Warning Alert,
          */

      }, {
        key: "showWarningAlert",
        value: function showWarningAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "showSimpleAlert",
        value: function showSimpleAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertCtrl.create({
                      header: '',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context6.sent;
                    _context6.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
        /*
         Show Error Alert Message
         param : msg = message to display
         Call this method to show Error Alert,
         */

      }, {
        key: "showErrorAlert",
        value: function showErrorAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.alertCtrl.create({
                      header: 'Error',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context7.sent;
                    _context7.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
        /*
           param : email = email to verify
           Call this method to get verify email
           */

      }, {
        key: "getEmailFilter",
        value: function getEmailFilter(email) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var emailfilter, alert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

                    if (emailfilter.test(email)) {
                      _context8.next = 10;
                      break;
                    }

                    _context8.next = 4;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: 'Please enter valid email',
                      buttons: ['OK']
                    });

                  case 4:
                    alert = _context8.sent;
                    _context8.next = 7;
                    return alert.present();

                  case 7:
                    return _context8.abrupt("return", false);

                  case 10:
                    return _context8.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
        /*
          Show Toast Message on Screen
           param : msg = message to display, color= background
           color of toast example dark,danger,light. position  = position of message example top,bottom
           Call this method to show toast message
           */

      }, {
        key: "showToast",
        value: function showToast(msg, colors, positon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var toast;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000,
                      color: colors,
                      position: positon
                    });

                  case 2:
                    toast = _context9.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "shoNotification",
        value: function shoNotification(msg, colors, positon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var toast;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 4000,
                      color: colors,
                      position: positon,
                      buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        handler: function handler() {// console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    toast = _context10.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "errorToast",
        value: function errorToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var toast;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000
                    });

                  case 2:
                    toast = _context11.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "apiErrorHandler",
        value: function apiErrorHandler(err) {
          // console.log('Error got in service =>', err)
          if (err.status === -1) {
            this.showErrorAlert('Failed To Connect With Server');
          } else if (err.status === 401) {
            this.showErrorAlert('Unauthorized Request!');
            this.navCtrl.navigateRoot('/login');
          } else if (err.status === 500) {
            this.showErrorAlert('Somethimg Went Wrong..');
          }
        } // setDetails(data) {
        //   this.details = null;
        //   this.details = data;
        // }
        // getDetails() {
        //   return this.details;
        // }

      }, {
        key: "makeid",
        value: function makeid(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
        }
      }]);

      return UtilService;
    }();

    UtilService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], UtilService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true,
      baseURL: 'https://api.mrmandados.xyz/index.php/',
      mediaURL: 'https://api.mrmandados.xyz/uploads/',
      onesignal: {
        appId: '50504fb7-0f02-41c5-8ccf-0d7e43b3247c',
        googleProjectNumber: '176229806393',
        restKey: 'M2Q4ZTdmYWMtMDkxYS00OTk4LWE0ZGMtNWYzMTI1YmYzZjky'
      },
      authToken: '050902'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 foodies app
      Created : 28-Feb-2021
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/alejandrodiaz/Desktop/MrManda2 Repartidor/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map