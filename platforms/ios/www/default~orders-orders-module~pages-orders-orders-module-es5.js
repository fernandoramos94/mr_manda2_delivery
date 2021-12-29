(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~orders-orders-module~pages-orders-orders-module"], {
    /***/
    "8veL":
    /*!*******************************************************!*\
      !*** ./src/app/pages/orders/orders-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: OrdersPageRoutingModule */

    /***/
    function veL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function () {
        return OrdersPageRoutingModule;
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


      var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orders.page */
      "Ep+G");
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
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
      }];

      var OrdersPageRoutingModule = function OrdersPageRoutingModule() {
        _classCallCheck(this, OrdersPageRoutingModule);
      };

      OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrdersPageRoutingModule);
      /***/
    },

    /***/
    "Ep+G":
    /*!*********************************************!*\
      !*** ./src/app/pages/orders/orders.page.ts ***!
      \*********************************************/

    /*! exports provided: OrdersPage */

    /***/
    function EpG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPage", function () {
        return OrdersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_orders_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./orders.page.html */
      "iVDW");
      /* harmony import */


      var _orders_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./orders.page.scss */
      "F6Pd");
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


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");

      var OrdersPage = /*#__PURE__*/function () {
        function OrdersPage(router, api, util) {
          var _this = this;

          _classCallCheck(this, OrdersPage);

          this.router = router;
          this.api = api;
          this.util = util;
          this.segId = 1;
          this.orders = [];
          this.finish = [];
          this.dummy = Array(10);
          this.getOrders('', false);
          this.util.subscribeNewOrder().subscribe(function () {
            _this.orders = [];
            _this.oldOrders = [];

            _this.getOrders('', false);
          });
        }

        _createClass(OrdersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.getOrders(event, true);
          }
        }, {
          key: "onClick",
          value: function onClick(val) {
            this.segId = val;
          }
        }, {
          key: "getOrders",
          value: function getOrders(event, haveRefresh) {
            var _this2 = this;

            this.orders = [];
            this.oldOrders = [];
            this.finish = [];
            var param = {
              id: localStorage.getItem('uid')
            };
            this.api.post('orders/getByDriverId', param).then(function (data) {
              _this2.dummy = [];

              if (data && data.status === 200 && data.data.length) {
                data.data.forEach(function (element) {
                  element.orders = JSON.parse(element.orders);

                  if (element.status === 'entregada' || element.status === 'cancelada' || element.status === 'rechazada') {
                    _this2.finish.push(element);
                  } else if (element.status == 'en camino') {
                    _this2.oldOrders.push(element);
                  } else {
                    _this2.orders.push(element);
                  }
                });

                if (haveRefresh) {
                  event.target.complete();
                }
              }
            }, function (error) {
              _this2.dummy = [];

              _this2.util.errorToast('Algo ha ido mal');
            })["catch"](function (error) {
              _this2.dummy = [];

              _this2.util.errorToast('Algo ha ido mal');
            });
          }
        }, {
          key: "goToOrderDetail",
          value: function goToOrderDetail(ids) {
            var navData = {
              queryParams: {
                id: ids
              }
            };
            this.router.navigate(['/order-detail'], navData);
          }
        }, {
          key: "getProfilePic",
          value: function getProfilePic(item) {
            return item && item.cover ? item.cover : 'assets/imgs/user.jpg';
          }
        }]);

        return OrdersPage;
      }();

      OrdersPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }];
      };

      OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orders',
        template: _raw_loader_orders_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]])], OrdersPage);
      /***/
    },

    /***/
    "F6Pd":
    /*!***********************************************!*\
      !*** ./src/app/pages/orders/orders.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function F6Pd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Niramit:300,300i,700\");\nion-content, ion-tabs, ion-tab-bar {\n  font-family: \"K2D\", sans-serif;\n  --background: #00b3f0 !important;\n  letter-spacing: 1px;\n}\nion-label {\n  color: white !important;\n  font-size: 14px;\n}\nion-tabs {\n  top: auto !important;\n  height: 57px !important;\n}\nion-tab-bar {\n  color: white;\n}\nion-tab-bar ion-tab-button ion-icon {\n  color: white;\n}\n.active {\n  border-bottom: white 3px solid;\n}\n.segment_div {\n  display: flex;\n  margin-top: 20px;\n  border-bottom: 1px solid lightgray;\n  justify-content: space-around;\n}\n.segment_div ion-label {\n  color: white;\n  padding-bottom: 10px;\n  width: 100%;\n  text-align: center;\n}\n.segment_div .active {\n  border-bottom: 1px solid #00b3f0;\n}\nh2 {\n  color: white;\n}\n.main_content_div {\n  width: 100%;\n}\n.main_content_div .centent_div {\n  padding: 20px;\n  padding-bottom: 57px;\n}\n.main_content_div .centent_div ion-label {\n  display: block;\n}\n.main_content_div .card_div {\n  background: #6fcbfd !important;\n  width: 100%;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding: 15px;\n  margin-bottom: 20px;\n  z-index: 999;\n  display: block;\n  position: relative;\n}\n.main_content_div .card_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .card_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n.main_content_div .card_div .resto_detail .res_name {\n  font-weight: 600;\n  font-size: 15px;\n}\n.main_content_div .card_div .resto_detail .res_location {\n  color: white;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .order_id {\n  position: absolute;\n  right: 5px;\n  font-size: 0.6rem;\n}\n.main_content_div .card_div .resto_detail .order_id ion-label {\n  text-align: right;\n}\n.main_content_div .card_div .order_detail {\n  position: relative;\n}\n.main_content_div .card_div .order_detail .head_gray {\n  color: white;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.main_content_div .card_div .order_detail .small_lbl {\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .card_div .order_detail .border_bottom {\n  border-bottom: 1px dashed lightgray;\n  padding: 5px 0px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .card_div .order_detail .subNames {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.main_content_div .card_div .order_detail .subNames .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .card_div .order_detail .subNames .flex_titles {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.main_content_div .card_div .order_detail .subNames .flex_titles .sub_name {\n  margin: 0px;\n  color: white;\n  font-size: 12px;\n}\n.main_content_div .card_div .order_detail .prize {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n}\n.main_content_div .card_div .order_detail .payment_status {\n  position: absolute;\n  right: -15px;\n  text-transform: uppercase;\n  bottom: -15px;\n  background: var(--ion-color-primary);\n  color: white;\n  font-weight: 600;\n  padding: 8px 12px;\n  border-bottom-right-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkVBQUE7QUFFUjtFQUNJLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUE7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFDSjtBQUNBO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtBQUVKO0FBQUE7RUFFSSxZQUFBO0FBRUo7QUFBUTtFQUNJLFlBQUE7QUFFWjtBQUVBO0VBQ0ksOEJBQUE7QUFDSjtBQUlBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtBQUZKO0FBR0k7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUdJO0VBQ0ksZ0NBQUE7QUFEUjtBQUlBO0VBQ0ksWUFBQTtBQURKO0FBR0E7RUFDSSxXQUFBO0FBQUo7QUFDSTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBQUNSO0FBQVE7RUFDSSxjQUFBO0FBRVo7QUFFSTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQVI7QUFDUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ1o7QUFDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQUNZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUNoQjtBQUVZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQWhCO0FBRVk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUFoQjtBQUdZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFEaEI7QUFFZ0I7RUFDSSxpQkFBQTtBQUFwQjtBQUtRO0VBQ0ksa0JBQUE7QUFIWjtBQUtZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhoQjtBQUtZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBSGhCO0FBTVk7RUFDSSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSmhCO0FBTVk7RUFDSSxtQ0FBQTtFQUNBLG1CQUFBO0FBSmhCO0FBS2dCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBSHBCO0FBS2dCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFIcEI7QUFJb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFGeEI7QUFPWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBTGhCO0FBUVk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFOaEIiLCJmaWxlIjoib3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TmlyYW1pdDozMDAsMzAwaSw3MDAnKTtcblxuaW9uLWNvbnRlbnQsIGlvbi10YWJzLCBpb24tdGFiLWJhcntcbiAgICBmb250LWZhbWlseTogJ0syRCcsIHNhbnMtc2VyaWY7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBiM2YwICFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbmlvbi1sYWJlbHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tdGFic3tcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDU3cHggIWltcG9ydGFudDtcbn1cbmlvbi10YWItYmFye1xuICAgIFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBpb24tdGFiLWJ1dHRvbiB7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuLmFjdGl2ZXtcbiAgICBib3JkZXItYm90dG9tOiB3aGl0ZSAzcHggc29saWQ7XG4gICAgaW9uLWljb24sIGlvbi1sYWJlbHtcbiAgICAgICAgLy9jb2xvcjojMDBiM2YwICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLnNlZ21lbnRfZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMGIzZjA7XG4gICAgfVxufVxuaDJ7XG4gICAgY29sb3I6IHdoaXRlXG59XG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmNlbnRlbnRfZGl2IHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDU3cHg7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkX2RpdiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM2ZmNiZmQgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAubGluZV9kaXYge1xuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yZXN0b19kZXRhaWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAuYmFja19pbWFnZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJlc19uYW1lIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZXNfbG9jYXRpb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vcmRlcl9pZCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9yZGVyX2RldGFpbCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5oZWFkX2dyYXkge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbWFsbF9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYm9yZGVyX2JvdHRvbSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3ViTmFtZXMge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgLmZvb2RfdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmxleF90aXRsZXMge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIC5zdWJfbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByaXplIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucGF5bWVudF9zdGF0dXMge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogLTE1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBib3R0b206IC0xNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "Xlj8":
    /*!***********************************************!*\
      !*** ./src/app/pages/orders/orders.module.ts ***!
      \***********************************************/

    /*! exports provided: OrdersPageModule */

    /***/
    function Xlj8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function () {
        return OrdersPageModule;
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


      var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./orders-routing.module */
      "8veL");
      /* harmony import */


      var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./orders.page */
      "Ep+G");
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


      var OrdersPageModule = function OrdersPageModule() {
        _classCallCheck(this, OrdersPageModule);
      };

      OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"]],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
      })], OrdersPageModule);
      /***/
    },

    /***/
    "iVDW":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function iVDW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>{{\n            segId == 1 ? 'Ordenes nuevas' : segId == 2  ? 'Ordenes aceptadas' : segId == 3 ? 'Ordenes finalizadas' : '' \n        }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div class=\"main_content_div\">\n        <div class=\"centent_div\" *ngIf=\"segId == 1\">\n            <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !orders?.length\">No hay ordenes nuevas</h2>\n\n            <div class=\"card_div\" *ngFor=\"let item of orders\" (click)=\"goToOrderDetail(item.orderId)\">\n\n                <div class=\"resto_detail\">\n                    <div class=\"back_image\"\n                        [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.user_cover+'),url(assets/placeholder.jpg)'}\">\n                    </div>\n                    <div style=\"margin-left: 10px;\">\n                        <ion-label class=\"res_name\">{{item.user_first_name +' '+item.user_last_name}}</ion-label>\n                        <ion-label class=\"res_location\">{{item.time | date: 'MMM d, y, HH:mm:ss'}}</ion-label>\n                    </div>\n\n                    <div class=\"order_id\">\n                        <ion-label>{{util.translate('Orden #')}} {{item.orderId}}</ion-label>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"centent_div\" *ngIf=\"segId == 2\">\n            <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !oldOrders?.length\">No hay ordenes</h2>\n            <div class=\"card_div\" *ngFor=\"let item of oldOrders\" (click)=\"goToOrderDetail(item.orderId)\">\n                <div class=\"resto_detail\">\n                    <div class=\"back_image\"\n                        [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.user_cover+'),url(assets/placeholder.jpg)'}\">\n                    </div>\n                    <div style=\"margin-left: 10px;\">\n                        <ion-label class=\"res_name\">{{item.user_first_name +' '+item.user_last_name}}</ion-label>\n                        <ion-label class=\"res_location\">{{item.time | date: 'MMM d, y, HH:mm:ss'}}</ion-label>\n                    </div>\n\n                    <div class=\"order_id\">\n                        <ion-label>{{util.translate('Orden #')}} {{item.orderId}}</ion-label>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"centent_div\" *ngIf=\"segId == 3\">\n            <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !finish?.length\">No hay ordenes</h2>\n            <div class=\"card_div\" *ngFor=\"let item of finish\" (click)=\"goToOrderDetail(item.orderId)\">\n                <div class=\"resto_detail\">\n                    <div class=\"back_image\"\n                        [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.user_cover+'),url(assets/placeholder.jpg)'}\">\n                    </div>\n                    <div style=\"margin-left: 10px;\">\n                        <ion-label class=\"res_name\">{{item.user_first_name +' '+item.user_last_name}}</ion-label>\n                        <ion-label class=\"res_location\">{{item.time | date: 'MMM d, y, HH:mm:ss'}}</ion-label>\n                    </div>\n\n                    <div class=\"order_id\">\n                        <ion-label>{{util.translate('Orden #')}} {{item.orderId}}</ion-label>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n</ion-content>\n<ion-tabs>\n    <ion-tab-bar slot=\"bottom\" >\n        <ion-tab-button (click)=\"onClick(1)\" [class.active]=\"segId == 1\">\n            <ion-icon name=\"notifications-outline\"></ion-icon>\n            <ion-label>Nuevas</ion-label>\n        </ion-tab-button>\n        <ion-tab-button (click)=\"onClick(2)\" [class.active]=\"segId == 2\">\n            <ion-icon name=\"grid-outline\"></ion-icon>\n            <ion-label>Aceptadas</ion-label>\n        </ion-tab-button>\n        <ion-tab-button (click)=\"onClick(3)\" [class.active]=\"segId == 3\">\n            <ion-icon name=\"bag-outline\"></ion-icon>\n            <ion-label>Finalizadas</ion-label>\n        </ion-tab-button>\n        <ion-tab-button [routerLink]=\"['/profile']\">\n            <ion-icon name=\"person-outline\"></ion-icon>\n            <ion-label>Perfil</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n</ion-tabs>\n    ";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~orders-orders-module~pages-orders-orders-module-es5.js.map