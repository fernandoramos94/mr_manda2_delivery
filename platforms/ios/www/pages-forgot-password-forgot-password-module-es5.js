(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-password-forgot-password-module"], {
    /***/
    "7CEM":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/forgot-password/forgot-password.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ForgotPasswordPageModule */

    /***/
    function CEM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () {
        return ForgotPasswordPageModule;
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


      var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-password-routing.module */
      "uf9z");
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot-password.page */
      "cZHL");
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


      var ForgotPasswordPageModule = function ForgotPasswordPageModule() {
        _classCallCheck(this, ForgotPasswordPageModule);
      };

      ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
      })], ForgotPasswordPageModule);
      /***/
    },

    /***/
    "A5aJ":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/forgot-password/forgot-password.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function A5aJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  width: 100%;\n  padding: 30px;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  padding: 10px;\n}\n.main_content_div .iconDiv {\n  text-align: center;\n}\n.main_content_div .iconDiv .icon {\n  width: 60px;\n}\n.main_content_div .form_div {\n  padding: 25px;\n  position: relative;\n}\n.main_content_div .form_div .main_head {\n  display: block;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n  font-size: 30px;\n  margin: 10px;\n}\n.main_content_div .form_div ion-label {\n  font-size: 12px;\n  color: white;\n}\n.main_content_div .form_div .forgot {\n  display: block;\n  text-align: center;\n  color: white;\n}\n.main_content_div .form_div ion-input {\n  border-radius: 20px;\n  margin-bottom: 15px;\n  --padding-start: 8px;\n  --padding-end: 10px;\n  border: 1px solid lightgray;\n}\n.main_content_div .form_div ion-button {\n  margin-top: 20px;\n  --border-radius: 20px;\n  --background: var(--ion-color-primary);\n  --color: white;\n}\n.main_content_div .form_div .tri {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 15px solid white;\n  position: absolute;\n  top: -15px;\n}\n.main_content_div .form_div .lbl {\n  margin-top: 20px;\n  color: white;\n  display: block;\n  text-align: center;\n}\n.main_content_div .form_div .signup_span {\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUVKO0FBQUk7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBRVI7QUFBSTtFQUVJLGtCQUFBO0FBQ1I7QUFBUTtFQUVJLFdBQUE7QUFDWjtBQUdJO0VBQ0ksYUFBQTtFQUVBLGtCQUFBO0FBRlI7QUFHUTtFQUNJLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFEWjtBQUdRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFEWjtBQUlRO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUZaO0FBSVE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBRlo7QUFLUTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7QUFIWjtBQUtRO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFIWjtBQUtRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSFo7QUFLUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFIWiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0NSU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICAgIC5pY29uRGl2IHtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogODBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mb3JtX2RpdiB7XG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAubWFpbl9oZWFkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3Jnb3Qge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAudHJpIHtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLTE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxibCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnNpZ251cF9zcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "cZHL":
    /*!***************************************************************!*\
      !*** ./src/app/pages/forgot-password/forgot-password.page.ts ***!
      \***************************************************************/

    /*! exports provided: ForgotPasswordPage */

    /***/
    function cZHL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
        return ForgotPasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forgot-password.page.html */
      "hnog");
      /* harmony import */


      var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forgot-password.page.scss */
      "A5aJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../select-country/select-country.page */
      "hxji");
      /* harmony import */


      var _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../verify/verify.page */
      "TCp9");
      /*
        Authors : initappz (Rahul Jograna)
        Website : https://initappz.com/
        App Name : ionic 5 foodies app
        Created : 28-Feb-2021
        This App Template Source code is licensed as per the
        terms found in the Website https://initappz.com/license
        Copyright and Good Faith Purchasers © 2020-present initappz.
      */


      var ForgotPasswordPage = /*#__PURE__*/function () {
        function ForgotPasswordPage(api, util, navCtrl, menuController, modalController, alertController) {
          _classCallCheck(this, ForgotPasswordPage);

          this.api = api;
          this.util = util;
          this.navCtrl = navCtrl;
          this.menuController = menuController;
          this.modalController = modalController;
          this.alertController = alertController;
          this.cc = '+91';
          this.ccCode = '+91';
          this.div_type = 1;
          this.sent = false;
          this.email = '';
          this.otp = '';
          this.password = '';
          this.repass = '';
          this.verified = false;
        }

        _createClass(ForgotPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "sendOTP",
          value: function sendOTP() {
            var _this = this;

            console.log(this.email, ';sendOTPDriver');

            if (!this.email) {
              this.util.showToast(this.util.translate('email is required'), 'dark', 'bottom');
              return false;
            }

            var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

            if (!emailfilter.test(this.email)) {
              this.util.showToast(this.util.translate('Please enter valid email'), 'dark', 'bottom');
              return false;
            }

            this.loggedIn = true;
            var param = {
              email: this.email
            };
            this.api.post('drivers/sendOTP', param).then(function (data) {
              console.log(data);
              _this.loggedIn = false;

              if (data && data.status === 200) {
                _this.id = data.data.id;
                _this.loggedIn = false;
                _this.div_type = 2;
              } else {
                if (data && data.status === 500 && data.data && data.data.message) {
                  _this.util.errorToast(data.data.message);

                  return false;
                }

                _this.util.errorToast('Algo ha ido mal');

                return false;
              }
            }, function (error) {
              console.log(error);
              _this.loggedIn = false;

              _this.util.errorToast('Algo ha ido mal');
            });
          }
        }, {
          key: "verifyOTP",
          value: function verifyOTP() {
            var _this2 = this;

            // this.div_type = 3;
            if (!this.otp || this.otp === '') {
              this.util.showToast(this.util.translate('otp is required'), 'dark', 'bottom');
              return false;
            }

            this.loggedIn = true;
            var param = {
              id: this.id,
              otp: this.otp
            };
            this.api.post('users/verifyOTP', param).then(function (data) {
              console.log(data);
              _this2.loggedIn = false;

              if (data && data.status === 200) {
                _this2.loggedIn = false;
                _this2.div_type = 3;
              } else {
                if (data && data.status === 500 && data.data && data.data.message) {
                  _this2.util.errorToast(data.data.message);

                  return false;
                }

                _this2.util.errorToast('Algo ha ido mal');

                return false;
              }
            }, function (error) {
              console.log(error);
              _this2.loggedIn = false;

              _this2.util.errorToast('Algo ha ido mal');
            });
          }
        }, {
          key: "sendEmail",
          value: function sendEmail() {
            var _this3 = this;

            console.log('pwddd0<<<<<<', this.password);

            if (!this.password || !this.repass || this.password === '' || this.repass === '') {
              this.util.errorToast(this.util.translate('All Field are required'));
              return false;
            }

            var param = {
              email: this.email,
              pwd: this.password
            };
            this.loggedIn = true;
            this.api.post('drivers/update_password', param).then(function (data) {
              console.log(data);
              _this3.loggedIn = false;

              if (data && data.status === 200) {
                _this3.loggedIn = false;

                _this3.util.errorToast(_this3.util.translate('Password Updated'));

                _this3.back();
              } else {
                if (data && data.status === 500 && data.data && data.data.message) {
                  _this3.util.errorToast(data.data.message);

                  return false;
                }

                _this3.util.errorToast('Algo ha ido mal');

                return false;
              }
            }, function (error) {
              console.log(error);
              _this3.loggedIn = false;

              _this3.util.errorToast('Algo ha ido mal');
            });
          }
        }, {
          key: "resetPasswordWithPhone",
          value: function resetPasswordWithPhone() {
            var _this4 = this;

            console.log('pwddd0<<<<<<', this.password);

            if (!this.password || !this.repass || this.password === '' || this.repass === '') {
              this.util.errorToast(this.util.translate('All Field are required'));
              return false;
            }

            var param = {
              phone: this.phone,
              pwd: this.password
            };
            this.loggedIn = true;
            this.api.post('drivers/resetPasswordWithPhone', param).then(function (data) {
              console.log(data);
              _this4.loggedIn = false;

              if (data && data.status === 200) {
                _this4.loggedIn = false;

                _this4.util.errorToast(_this4.util.translate('Password Updated'));

                _this4.back();
              } else {
                if (data && data.status === 500 && data.data && data.data.message) {
                  _this4.util.errorToast(data.data.message);

                  return false;
                }

                _this4.util.errorToast('Algo ha ido mal');

                return false;
              }
            }, function (error) {
              console.log(error);
              _this4.loggedIn = false;

              _this4.util.errorToast('Algo ha ido mal');
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.back();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuController.enable(false);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.menuController.enable(true);
          }
        }, {
          key: "openCountry",
          value: function openCountry() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('open ccode');
                      _context.next = 3;
                      return this.modalController.create({
                        component: _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_7__["SelectCountryPage"],
                        backdropDismiss: false,
                        showBackdrop: true
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log(data);

                        if (data && data.role === 'selected') {
                          console.log('ok');
                          _this5.cc = '+' + data.data;
                          _this5.ccCode = '+' + data.data;
                        }
                      });
                      _context.next = 7;
                      return modal.present();

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "sendOTPOnMobile",
          value: function sendOTPOnMobile() {
            var _this6 = this;

            var param = {
              phone: this.phone
            };
            this.loggedIn = true;
            this.api.post('drivers/validatePhoneForReset', param).then(function (data) {
              _this6.loggedIn = false;
              console.log('data', data);

              if (data && data.status === 200) {
                console.log('all done...');

                _this6.presentAlertConfirm();
              } else if (data && data.status === 500) {
                _this6.util.errorToast(data.data.message);
              } else {
                _this6.util.errorToast('Algo ha ido mal');
              }
            }, function (error) {
              console.log(error);
              _this6.loggedIn = false;

              _this6.util.errorToast('Algo ha ido mal');
            })["catch"](function (error) {
              console.log(error);
              _this6.loggedIn = false;

              _this6.util.errorToast('Algo ha ido mal');
            });
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Confirm Informations',
                        message: 'We will send verification code to your mobile number  ' + this.ccCode + this.phone,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Send',
                          handler: function handler() {
                            console.log('Confirm Okay');

                            _this7.openModal();
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this8 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__["VerifyPage"],
                        componentProps: {
                          code: this.ccCode,
                          phone: this.phone
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log(data);

                        if (data && data.role === 'ok') {
                          console.log('verification done...');
                          _this8.div_type = 3;
                        }
                      });
                      modal.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return ForgotPasswordPage;
      }();

      ForgotPasswordPage.ctorParameters = function () {
        return [{
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], ForgotPasswordPage);
      /***/
    },

    /***/
    "hnog":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hnog(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Restaurar contraseña</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"iconDiv\">\n      <img src=\"assets/icon.png\" alt=\"\" class=\"icon\">\n    </div>\n    <div class=\"form_div\" *ngIf=\"util.reset_pwd ==='0'\">\n      <ion-label class=\"main_head\"> Restaurar contraseña </ion-label>\n      <div *ngIf=\"div_type === 1\">\n        <ion-input type=\"email\" [placeholder]=\"('Correo')\" [(ngModel)]=\"email\">\n          <ion-icon name=\"mail\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"sendOTP()\">\n          <span *ngIf=\"!loggedIn\"> Enviar código </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n      </div>\n\n      <div *ngIf=\"div_type === 2\">\n        <ion-input type=\"number\" [placeholder]=\"('Código')\" [(ngModel)]=\"otp\">\n          <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"verifyOTP()\">\n          <span *ngIf=\"!loggedIn\"> Verificar </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n      </div>\n\n      <div *ngIf=\"div_type === 3\">\n        <ion-input type=\"password\" [placeholder]=\"('Nueva contraseña')\" [(ngModel)]=\"password\">\n          <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n        <ion-input type=\"password\" [placeholder]=\"('Confirmar contraseña')\" [(ngModel)]=\"repass\">\n          <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"sendEmail()\">\n          <span *ngIf=\"!loggedIn\"> Restaurar contraseña </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n      </div>\n    </div>\n\n    <div class=\"form_div\" *ngIf=\"util.reset_pwd === '1'\">\n      <ion-label class=\"main_head\"> Restaurar contraseá </ion-label>\n      <div *ngIf=\"div_type === 1\">\n        <ion-row>\n          <ion-col size=\"3\" (click)=\"openCountry()\">\n            <ion-input style=\"font-size: 12px;\" [(ngModel)]=\"cc\" disabled=\"true\" type=\"text\">\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"9\">\n            <ion-input [(ngModel)]=\"phone\" type=\"number\" placeholder=\"Teléfono\">\n            </ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"sendOTPOnMobile()\">\n          <span *ngIf=\"!loggedIn\"> Enviar código </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n      </div>\n\n      <div *ngIf=\"div_type === 3\">\n        <ion-input type=\"password\" [placeholder]=\"('Nueva contraseña')\" [(ngModel)]=\"password\">\n          <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n        <ion-input type=\"password\" [placeholder]=\"('Confirmar contraseña')\" [(ngModel)]=\"repass\">\n          <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"resetPasswordWithPhone()\">\n          <span *ngIf=\"!loggedIn\"> Restaurar </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n      </div>\n\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "uf9z":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/forgot-password/forgot-password-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ForgotPasswordPageRoutingModule */

    /***/
    function uf9z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function () {
        return ForgotPasswordPageRoutingModule;
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


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot-password.page */
      "cZHL");
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
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
      }];

      var ForgotPasswordPageRoutingModule = function ForgotPasswordPageRoutingModule() {
        _classCallCheck(this, ForgotPasswordPageRoutingModule);
      };

      ForgotPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotPasswordPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-forgot-password-forgot-password-module-es5.js.map