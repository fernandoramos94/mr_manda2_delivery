(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tracker-tracker-module"],{

/***/ "KAE8":
/*!*************************************************!*\
  !*** ./src/app/pages/tracker/tracker.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .upper_div {\n  height: 60vh;\n}\n.main_content_div .upper_div #map {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .lower_div {\n  height: 40vh;\n  padding: 20px;\n}\n.main_content_div .lower_div ion-label {\n  display: block;\n}\n.main_content_div .lower_div .head_lbl {\n  font-weight: 600;\n  font-size: 20px;\n  margin-top: 10px;\n}\n.main_content_div .lower_div .driver_detail_div {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .lower_div .driver_detail_div .back_image {\n  height: 50px !important;\n  width: 50px !important;\n  border-radius: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-width: 50px;\n}\n.main_content_div .lower_div .driver_detail_div .boy_name {\n  font-weight: 600;\n}\n.main_content_div .lower_div .driver_detail_div .address {\n  color: gray;\n  width: 80%;\n}\n.main_content_div .lower_div .driver_detail_div ion-button {\n  position: absolute;\n  right: -3px;\n  top: -5px;\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .lower_div .order_detail {\n  font-weight: bold;\n  margin-top: 20px;\n}\n.main_content_div .lower_div .order_status {\n  background: var(--ion-color-primary);\n  position: absolute;\n  right: 20px;\n  color: white;\n  padding: 3px 8px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RyYWNrZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUVKO0FBREk7RUFDSSxZQUFBO0FBR1I7QUFGUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBSVo7QUFESTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBR1I7QUFGUTtFQUNJLGNBQUE7QUFJWjtBQUZRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJWjtBQURRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR1o7QUFGWTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUFJaEI7QUFGWTtFQUNJLGdCQUFBO0FBSWhCO0FBRlk7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQUloQjtBQUZZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFJaEI7QUFBUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFWjtBQUFRO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVaIiwiZmlsZSI6InRyYWNrZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC51cHBlcl9kaXYge1xuICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICNtYXAge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxvd2VyX2RpdiB7XG4gICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkX2xibCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kcml2ZXJfZGV0YWlsX2RpdiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgLmJhY2tfaW1hZ2Uge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3lfbmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hZGRyZXNzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtM3B4O1xuICAgICAgICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9yZGVyX2RldGFpbCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm9yZGVyX3N0YXR1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "OtiO":
/*!***********************************************!*\
  !*** ./src/app/pages/tracker/tracker.page.ts ***!
  \***********************************************/
/*! exports provided: TrackerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerPage", function() { return TrackerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tracker_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tracker.page.html */ "dfCF");
/* harmony import */ var _tracker_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracker.page.scss */ "KAE8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");



/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/





let TrackerPage = class TrackerPage {
    constructor(route, api, util, iab) {
        this.route = route;
        this.api = api;
        this.util = util;
        this.iab = iab;
        this.id = '';
        this.phone = '';
        this.status = '';
        this.totalOrders = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log('data=>', data);
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
                this.getOrder();
            }
        });
    }
    callDriver() {
        this.iab.create('tel:' + this.phone, '_system');
    }
    getOrder() {
        const param = {
            id: this.id
        };
        this.api.post('orders/getById', param).then((datas) => {
            console.log(datas);
            if (datas && datas.status === 200 && datas.data.length) {
                const data = datas.data[0];
                this.totalOrders = JSON.parse(data.orders);
                this.grandTotal = data.grand_total;
                this.status = data.status;
                this.payMethod = data.pay_method === 'cod' ? 'COD' : 'PAID';
                this.getUserInfo(data.uid);
                if (data && data.address) {
                    const add = JSON.parse(data.address);
                    this.address = add.house + ' ' + add.landmark + ' ' + add.address + ' ' + add.pincode;
                    console.log(add);
                    this.myLat = add.lat;
                    this.myLng = add.lng;
                    this.loadMap(parseFloat(localStorage.getItem('lat')), parseFloat(localStorage.getItem('lng')), parseFloat(this.myLat), parseFloat(this.myLng));
                }
            }
            else {
                this.util.back();
            }
        }, error => {
            console.log('error in orders', error);
            this.util.errorToast('Algo ha ido mal');
        }).catch(error => {
            console.log('error in order', error);
            this.util.errorToast('Algo ha ido mal');
        });
    }
    getUserInfo(uid) {
        const param = {
            id: uid
        };
        this.api.post('users/getById', param).then((data) => {
            console.log(data);
            if (data && data.status === 200 && data.data.length) {
                const info = data.data[0];
                console.log('userinfo=====>>>', info);
                this.username = info.first_name + ' ' + info.last_name;
                this.phone = info.mobile;
                this.cover = info.cover;
            }
        }, error => {
            console.log(error);
            this.util.errorToast('Algo ha ido mal');
        }).catch((error) => {
            console.log(error);
            this.util.errorToast('Algo ha ido mal');
        });
    }
    changeMarkerPosition(marker, map) {
        const latlng = new google.maps.LatLng(parseFloat(localStorage.getItem('lat')), parseFloat(localStorage.getItem('lng')));
        map.setCenter(latlng);
        marker.setPosition(latlng);
    }
    loadMap(latOri, lngOri, latDest, lngDest) {
        const directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay = new google.maps.DirectionsRenderer();
        const bounds = new google.maps.LatLngBounds;
        const origin1 = { lat: parseFloat(latOri), lng: parseFloat(lngOri) };
        const destinationA = { lat: latDest, lng: lngDest };
        const maps = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: latOri, lng: lngOri },
            disableDefaultUI: true,
            zoom: 100
        });
        const custPos = new google.maps.LatLng(latOri, lngOri);
        const restPos = new google.maps.LatLng(latDest, lngDest);
        const logo = {
            url: 'assets/pin.png',
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor
        };
        const marker = new google.maps.Marker({
            map: maps,
            position: custPos,
            animation: google.maps.Animation.DROP,
            icon: logo,
        });
        const markerCust = new google.maps.Marker({
            map: maps,
            position: restPos,
            animation: google.maps.Animation.DROP,
            icon: logo,
        });
        marker.setMap(maps);
        markerCust.setMap(maps);
        directionsDisplay.setMap(maps);
        // directionsDisplay.setOptions({ suppressMarkers: true });
        directionsDisplay.setOptions({
            polylineOptions: {
                strokeWeight: 4,
                strokeOpacity: 1,
                strokeColor: '#ff384c'
            },
            suppressMarkers: true
        });
        const geocoder = new google.maps.Geocoder;
        const service = new google.maps.DistanceMatrixService;
        service.getDistanceMatrix({
            origins: [origin1],
            destinations: [destinationA],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        }, function (response, status) {
            if (status !== 'OK') {
                alert('Error was: ' + status);
            }
            else {
                const originList = response.originAddresses;
                const destinationList = response.destinationAddresses;
                const showGeocodedAddressOnMap = function (asDestination) {
                    return function (results, status) {
                        if (status === 'OK') {
                            maps.fitBounds(bounds.extend(results[0].geometry.location));
                        }
                        else {
                            alert('Geocode was not successful due to: ' + status);
                        }
                    };
                };
                directionsService.route({
                    origin: origin1,
                    destination: destinationA,
                    travelMode: 'DRIVING'
                }, function (response, status) {
                    if (status === 'OK') {
                        directionsDisplay.setDirections(response);
                    }
                    else {
                        window.alert('Directions request failed due to ' + status);
                    }
                });
                for (let i = 0; i < originList.length; i++) {
                    const results = response.rows[i].elements;
                    geocoder.geocode({ 'address': originList[i] }, showGeocodedAddressOnMap(false));
                    for (let j = 0; j < results.length; j++) {
                        geocoder.geocode({ 'address': destinationList[j] }, showGeocodedAddressOnMap(true));
                    }
                }
            }
        });
        this.interval = setInterval(() => {
            this.changeMarkerPosition(marker, maps);
        }, 12000);
    }
    ionViewDidLeave() {
        console.log('leaae');
        clearInterval(this.interval);
    }
};
TrackerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] }
];
TrackerPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map', { static: true },] }]
};
TrackerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tracker',
        template: _raw_loader_tracker_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tracker_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]])
], TrackerPage);



/***/ }),

/***/ "akYc":
/*!*************************************************!*\
  !*** ./src/app/pages/tracker/tracker.module.ts ***!
  \*************************************************/
/*! exports provided: TrackerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerPageModule", function() { return TrackerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tracker_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tracker-routing.module */ "yKY6");
/* harmony import */ var _tracker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tracker.page */ "OtiO");
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







let TrackerPageModule = class TrackerPageModule {
};
TrackerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _tracker_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrackerPageRoutingModule"]
        ],
        declarations: [_tracker_page__WEBPACK_IMPORTED_MODULE_6__["TrackerPage"]]
    })
], TrackerPageModule);



/***/ }),

/***/ "dfCF":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracker/tracker.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('Tracking')}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"upper_div\">\n      <div #map id=\"map\" class=\"map\"></div>\n    </div>\n    <div class=\"lower_div\">\n      <ion-label class=\"head_lbl\">{{util.translate('Order on the Way')}}</ion-label>\n\n      <div class=\"driver_detail_div\">\n        <div class=\"back_image\"\n          [ngStyle]=\"{'background-image':'url('+api.mediaURL+cover+'),url(assets/placeholder.jpg)'}\"></div>\n        <div style=\"padding-left: 20px;\">\n          <ion-label class=\"boy_name\">{{username}}</ion-label>\n          <ion-label class=\"address\">{{address}}</ion-label>\n          <ion-button (click)=\"callDriver()\" size=\"small\" fill=\"outline\">\n            {{util.translate('CALL')}}\n          </ion-button>\n        </div>\n      </div>\n\n      <ion-label class=\"order_detail\">{{totalOrders.length}} {{util.translate('Items to deliver')}}\n        <span style=\"color: var(--ion-color-primary);position: absolute;right: 20px;\"\n          *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{grandTotal}}</span>\n        <span style=\"color: var(--ion-color-primary);position: absolute;right: 20px;\"\n          *ngIf=\"util.cside ==='right'\">{{grandTotal}} {{util.currecny}} </span>\n      </ion-label>\n      <ion-label class=\"order_detail\">{{util.translate('Order Status')}}<span class=\"order_status\"> {{status}} </span>\n      </ion-label>\n      <ion-label class=\"order_detail\">{{util.translate('Payment')}}<span class=\"order_status\"> {{payMethod}} </span>\n      </ion-label>\n\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "yKY6":
/*!*********************************************************!*\
  !*** ./src/app/pages/tracker/tracker-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TrackerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerPageRoutingModule", function() { return TrackerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tracker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracker.page */ "OtiO");

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
        component: _tracker_page__WEBPACK_IMPORTED_MODULE_3__["TrackerPage"]
    }
];
let TrackerPageRoutingModule = class TrackerPageRoutingModule {
};
TrackerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrackerPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-tracker-tracker-module-es2015.js.map