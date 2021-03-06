(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fernandoramostimote/Documents/MrManda2 Repartidor/src/main.ts */"zUnb");


/***/ }),

/***/ "2Rin":
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/




let UtilService = class UtilService {
    constructor(loadingCtrl, alertCtrl, toastCtrl, router, navCtrl, menuCtrl) {
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
        this.countrys = [
            {
                country_code: 'AF',
                country_name: 'Afghanistan',
                dialling_code: '93'
            },
            {
                country_code: 'AL',
                country_name: 'Albania',
                dialling_code: '355'
            },
            {
                country_code: 'DZ',
                country_name: 'Algeria',
                dialling_code: '213'
            },
            {
                country_code: 'AS',
                country_name: 'American Samoa',
                dialling_code: '1'
            },
            {
                country_code: 'AD',
                country_name: 'Andorra',
                dialling_code: '376'
            },
            {
                country_code: 'AO',
                country_name: 'Angola',
                dialling_code: '244'
            },
            {
                country_code: 'AI',
                country_name: 'Anguilla',
                dialling_code: '1'
            },
            {
                country_code: 'AG',
                country_name: 'Antigua',
                dialling_code: '1'
            },
            {
                country_code: 'AR',
                country_name: 'Argentina',
                dialling_code: '54'
            },
            {
                country_code: 'AM',
                country_name: 'Armenia',
                dialling_code: '374'
            },
            {
                country_code: 'AW',
                country_name: 'Aruba',
                dialling_code: '297'
            },
            {
                country_code: 'AU',
                country_name: 'Australia',
                dialling_code: '61'
            },
            {
                country_code: 'AI',
                country_name: 'Austria',
                dialling_code: '43'
            },
            {
                country_code: 'AZ',
                country_name: 'Azerbaijan',
                dialling_code: '994'
            },
            {
                country_code: 'BH',
                country_name: 'Bahrain',
                dialling_code: '973'
            },
            {
                country_code: 'BD',
                country_name: 'Bangladesh',
                dialling_code: '880'
            },
            {
                country_code: 'BB',
                country_name: 'Barbados',
                dialling_code: '1'
            },
            {
                country_code: 'BY',
                country_name: 'Belarus',
                dialling_code: '375'
            },
            {
                country_code: 'BE',
                country_name: 'Belgium',
                dialling_code: '32'
            },
            {
                country_code: 'BZ',
                country_name: 'Belize',
                dialling_code: '501'
            },
            {
                country_code: 'BJ',
                country_name: 'Benin',
                dialling_code: '229'
            },
            {
                country_code: 'BM',
                country_name: 'Bermuda',
                dialling_code: '1'
            },
            {
                country_code: 'BT',
                country_name: 'Bhutan',
                dialling_code: '975'
            },
            {
                country_code: 'BO',
                country_name: 'Bolivia',
                dialling_code: '591'
            },
            {
                country_code: 'BA',
                country_name: 'Bosnia and Herzegovina',
                dialling_code: '387'
            },
            {
                country_code: 'BW',
                country_name: 'Botswana',
                dialling_code: '267'
            },
            {
                country_code: 'BR',
                country_name: 'Brazil',
                dialling_code: '55'
            },
            {
                country_code: 'IO',
                country_name: 'British Indian Ocean Territory',
                dialling_code: '246'
            },
            {
                country_code: 'VG',
                country_name: 'British Virgin Islands',
                dialling_code: '1'
            },
            {
                country_code: 'BN',
                country_name: 'Brunei',
                dialling_code: '673'
            },
            {
                country_code: 'BG',
                country_name: 'Bulgaria',
                dialling_code: '359'
            },
            {
                country_code: 'BF',
                country_name: 'Burkina Faso',
                dialling_code: '226'
            },
            {
                country_code: 'MM',
                country_name: 'Burma Myanmar',
                dialling_code: '95'
            },
            {
                country_code: 'BI',
                country_name: 'Burundi',
                dialling_code: '257'
            },
            {
                country_code: 'KH',
                country_name: 'Cambodia',
                dialling_code: '855'
            },
            {
                country_code: 'CM',
                country_name: 'Cameroon',
                dialling_code: '237'
            },
            {
                country_code: 'CA',
                country_name: 'Canada',
                dialling_code: '1'
            },
            {
                country_code: 'CV',
                country_name: 'Cape Verde',
                dialling_code: '238'
            },
            {
                country_code: 'KY',
                country_name: 'Cayman Islands',
                dialling_code: '1'
            },
            {
                country_code: 'CF',
                country_name: 'Central African Republic',
                dialling_code: '236'
            },
            {
                country_code: 'ID',
                country_name: 'Chad',
                dialling_code: '235'
            },
            {
                country_code: 'CL',
                country_name: 'Chile',
                dialling_code: '56'
            },
            {
                country_code: 'CN',
                country_name: 'China',
                dialling_code: '86'
            },
            {
                country_code: 'CO',
                country_name: 'Colombia',
                dialling_code: '57'
            },
            {
                country_code: 'KM',
                country_name: 'Comoros',
                dialling_code: '269'
            },
            {
                country_code: 'CK',
                country_name: 'Cook Islands',
                dialling_code: '682'
            },
            {
                country_code: 'CR',
                country_name: 'Costa Rica',
                dialling_code: '506'
            },
            {
                country_code: 'CI',
                country_name: `Côte d'Ivoire`,
                dialling_code: '225'
            },
            {
                country_code: 'HR',
                country_name: 'Croatia',
                dialling_code: '385'
            },
            {
                country_code: 'CU',
                country_name: 'Cuba',
                dialling_code: '53'
            },
            {
                country_code: 'CY',
                country_name: 'Cyprus',
                dialling_code: '357'
            },
            {
                country_code: 'CZ',
                country_name: 'Czech Republic',
                dialling_code: '420'
            },
            {
                country_code: 'CD',
                country_name: 'Democratic Republic of Congo',
                dialling_code: '243'
            },
            {
                country_code: 'DK',
                country_name: 'Denmark',
                dialling_code: '45'
            },
            {
                country_code: 'DJ',
                country_name: 'Djibouti',
                dialling_code: '253'
            },
            {
                country_code: 'DM',
                country_name: 'Dominica',
                dialling_code: '1'
            },
            {
                country_code: 'DO',
                country_name: 'Dominican Republic',
                dialling_code: '1'
            },
            {
                country_code: 'EC',
                country_name: 'Ecuador',
                dialling_code: '593'
            },
            {
                country_code: 'EG',
                country_name: 'Egypt',
                dialling_code: '20'
            },
            {
                country_code: 'SV',
                country_name: 'El Salvador',
                dialling_code: '503'
            },
            {
                country_code: 'GQ',
                country_name: 'Equatorial Guinea',
                dialling_code: '240'
            },
            {
                country_code: 'ER',
                country_name: 'Eritrea',
                dialling_code: '291'
            },
            {
                country_code: 'EE',
                country_name: 'Estonia',
                dialling_code: '372'
            },
            {
                country_code: 'ET',
                country_name: 'Ethiopia',
                dialling_code: '251'
            },
            {
                country_code: 'FK',
                country_name: 'Falkland Islands',
                dialling_code: '500'
            },
            {
                country_code: 'FO',
                country_name: 'Faroe Islands',
                dialling_code: '298'
            },
            {
                country_code: 'FM',
                country_name: 'Federated States of Micronesia',
                dialling_code: '691'
            },
            {
                country_code: 'FJ',
                country_name: 'Fiji',
                dialling_code: '679'
            },
            {
                country_code: 'FI',
                country_name: 'Finland',
                dialling_code: '358'
            },
            {
                country_code: 'FR',
                country_name: 'France',
                dialling_code: '33'
            },
            {
                country_code: 'GF',
                country_name: 'French Guiana',
                dialling_code: '594'
            },
            {
                country_code: 'PF',
                country_name: 'French Polynesia',
                dialling_code: '689'
            },
            {
                country_code: 'GA',
                country_name: 'Gabon',
                dialling_code: '241'
            },
            {
                country_code: 'GE',
                country_name: 'Georgia',
                dialling_code: '995'
            },
            {
                country_code: 'DE',
                country_name: 'Germany',
                dialling_code: '49'
            },
            {
                country_code: 'GH',
                country_name: 'Ghana',
                dialling_code: '233'
            },
            {
                country_code: 'GI',
                country_name: 'Gibraltar',
                dialling_code: '350'
            },
            {
                country_code: 'GR',
                country_name: 'Greece',
                dialling_code: '30'
            },
            {
                country_code: 'GL',
                country_name: 'Greenland',
                dialling_code: '299'
            },
            {
                country_code: 'GD',
                country_name: 'Grenada',
                dialling_code: '1'
            },
            {
                country_code: 'GP',
                country_name: 'Guadeloupe',
                dialling_code: '590'
            },
            {
                country_code: 'GU',
                country_name: 'Guam',
                dialling_code: '1'
            },
            {
                country_code: 'GT',
                country_name: 'Guatemala',
                dialling_code: '502'
            },
            {
                country_code: 'GN',
                country_name: 'Guinea',
                dialling_code: '224'
            },
            {
                country_code: 'GW',
                country_name: 'Guinea-Bissau',
                dialling_code: '245'
            },
            {
                country_code: 'GY',
                country_name: 'Guyana',
                dialling_code: '592'
            },
            {
                country_code: 'HT',
                country_name: 'Haiti',
                dialling_code: '509'
            },
            {
                country_code: 'HN',
                country_name: 'Honduras',
                dialling_code: '504'
            },
            {
                country_code: 'HK',
                country_name: 'Hong Kong',
                dialling_code: '852'
            },
            {
                country_code: 'HU',
                country_name: 'Hungary',
                dialling_code: '36'
            },
            {
                country_code: 'IS',
                country_name: 'Iceland',
                dialling_code: '354'
            },
            {
                country_code: 'IN',
                country_name: 'India',
                dialling_code: '91'
            },
            {
                country_code: 'ID',
                country_name: 'Indonesia',
                dialling_code: '62'
            },
            {
                country_code: 'IR',
                country_name: 'Iran',
                dialling_code: '98'
            },
            {
                country_code: 'IQ',
                country_name: 'Iraq',
                dialling_code: '964'
            },
            {
                country_code: 'IE',
                country_name: 'Ireland',
                dialling_code: '353'
            },
            {
                country_code: 'IL',
                country_name: 'Israel',
                dialling_code: '972'
            },
            {
                country_code: 'IT',
                country_name: 'Italy',
                dialling_code: '39'
            },
            {
                country_code: 'JM',
                country_name: 'Jamaica',
                dialling_code: '1'
            },
            {
                country_code: 'JP',
                country_name: 'Japan',
                dialling_code: '81'
            },
            {
                country_code: 'JO',
                country_name: 'Jordan',
                dialling_code: '962'
            },
            {
                country_code: 'KZ',
                country_name: 'Kazakhstan',
                dialling_code: '7'
            },
            {
                country_code: 'KE',
                country_name: 'Kenya',
                dialling_code: '254'
            },
            {
                country_code: 'KI',
                country_name: 'Kiribati',
                dialling_code: '686'
            },
            {
                country_code: 'XK',
                country_name: 'Kosovo',
                dialling_code: '381'
            },
            {
                country_code: 'KW',
                country_name: 'Kuwait',
                dialling_code: '965'
            },
            {
                country_code: 'KG',
                country_name: 'Kyrgyzstan',
                dialling_code: '996'
            },
            {
                country_code: 'LA',
                country_name: 'Laos',
                dialling_code: '856'
            },
            {
                country_code: 'LV',
                country_name: 'Latvia',
                dialling_code: '371'
            },
            {
                country_code: 'LB',
                country_name: 'Lebanon',
                dialling_code: '961'
            },
            {
                country_code: 'LS',
                country_name: 'Lesotho',
                dialling_code: '266'
            },
            {
                country_code: 'LR',
                country_name: 'Liberia',
                dialling_code: '231'
            },
            {
                country_code: 'LY',
                country_name: 'Libya',
                dialling_code: '218'
            },
            {
                country_code: 'LI',
                country_name: 'Liechtenstein',
                dialling_code: '423'
            },
            {
                country_code: 'LT',
                country_name: 'Lithuania',
                dialling_code: '370'
            },
            {
                country_code: 'LU',
                country_name: 'Luxembourg',
                dialling_code: '352'
            },
            {
                country_code: 'MO',
                country_name: 'Macau',
                dialling_code: '853'
            },
            {
                country_code: 'MK',
                country_name: 'Macedonia',
                dialling_code: '389'
            },
            {
                country_code: 'MG',
                country_name: 'Madagascar',
                dialling_code: '261'
            },
            {
                country_code: 'MW',
                country_name: 'Malawi',
                dialling_code: '265'
            },
            {
                country_code: 'MY',
                country_name: 'Malaysia',
                dialling_code: '60'
            },
            {
                country_code: 'MV',
                country_name: 'Maldives',
                dialling_code: '960'
            },
            {
                country_code: 'ML',
                country_name: 'Mali',
                dialling_code: '223'
            },
            {
                country_code: 'MT',
                country_name: 'Malta',
                dialling_code: '356'
            },
            {
                country_code: 'MH',
                country_name: 'Marshall Islands',
                dialling_code: '692'
            },
            {
                country_code: 'MQ',
                country_name: 'Martinique',
                dialling_code: '596'
            },
            {
                country_code: 'MR',
                country_name: 'Mauritania',
                dialling_code: '222'
            },
            {
                country_code: 'MU',
                country_name: 'Mauritius',
                dialling_code: '230'
            },
            {
                country_code: 'YT',
                country_name: 'Mayotte',
                dialling_code: '262'
            },
            {
                country_code: 'MX',
                country_name: 'Mexico',
                dialling_code: '52'
            },
            {
                country_code: 'MD',
                country_name: 'Moldova',
                dialling_code: '373'
            },
            {
                country_code: 'MC',
                country_name: 'Monaco',
                dialling_code: '377'
            },
            {
                country_code: 'MN',
                country_name: 'Mongolia',
                dialling_code: '976'
            },
            {
                country_code: 'ME',
                country_name: 'Montenegro',
                dialling_code: '382'
            },
            {
                country_code: 'MS',
                country_name: 'Montserrat',
                dialling_code: '1'
            },
            {
                country_code: 'MA',
                country_name: 'Morocco',
                dialling_code: '212'
            },
            {
                country_code: 'MZ',
                country_name: 'Mozambique',
                dialling_code: '258'
            },
            {
                country_code: 'NA',
                country_name: 'Namibia',
                dialling_code: '264'
            },
            {
                country_code: 'NR',
                country_name: 'Nauru',
                dialling_code: '674'
            },
            {
                country_code: 'NP',
                country_name: 'Nepal',
                dialling_code: '977'
            },
            {
                country_code: 'NL',
                country_name: 'Netherlands',
                dialling_code: '31'
            },
            {
                country_code: 'AN',
                country_name: 'Netherlands Antilles',
                dialling_code: '599'
            },
            {
                country_code: 'NC',
                country_name: 'New Caledonia',
                dialling_code: '687'
            },
            {
                country_code: 'NZ',
                country_name: 'New Zealand',
                dialling_code: '64'
            },
            {
                country_code: 'NI',
                country_name: 'Nicaragua',
                dialling_code: '505'
            },
            {
                country_code: 'NE',
                country_name: 'Niger',
                dialling_code: '227'
            },
            {
                country_code: 'NG',
                country_name: 'Nigeria',
                dialling_code: '234'
            },
            {
                country_code: 'NU',
                country_name: 'Niue',
                dialling_code: '683'
            },
            {
                country_code: 'NF',
                country_name: 'Norfolk Island',
                dialling_code: '672'
            },
            {
                country_code: 'KP',
                country_name: 'North Korea',
                dialling_code: '850'
            },
            {
                country_code: 'MP',
                country_name: 'Northern Mariana Islands',
                dialling_code: '1'
            },
            {
                country_code: 'NO',
                country_name: 'Norway',
                dialling_code: '47'
            },
            {
                country_code: 'OM',
                country_name: 'Oman',
                dialling_code: '968'
            },
            {
                country_code: 'PK',
                country_name: 'Pakistan',
                dialling_code: '92'
            },
            {
                country_code: 'PW',
                country_name: 'Palau',
                dialling_code: '680'
            },
            {
                country_code: 'PS',
                country_name: 'Palestine',
                dialling_code: '970'
            },
            {
                country_code: 'PA',
                country_name: 'Panama',
                dialling_code: '507'
            },
            {
                country_code: 'PG',
                country_name: 'Papua New Guinea',
                dialling_code: '675'
            },
            {
                country_code: 'PY',
                country_name: 'Paraguay',
                dialling_code: '595'
            },
            {
                country_code: 'PE',
                country_name: 'Peru',
                dialling_code: '51'
            },
            {
                country_code: 'PH',
                country_name: 'Philippines',
                dialling_code: '63'
            },
            {
                country_code: 'PL',
                country_name: 'Poland',
                dialling_code: '48'
            },
            {
                country_code: 'PT',
                country_name: 'Portugal',
                dialling_code: '351'
            },
            {
                country_code: 'PR',
                country_name: 'Puerto Rico',
                dialling_code: '1'
            },
            {
                country_code: 'QA',
                country_name: 'Qatar',
                dialling_code: '974'
            },
            {
                country_code: 'CG',
                country_name: 'Republic of the Congo',
                dialling_code: '242'
            },
            {
                country_code: 'RE',
                country_name: 'Réunion',
                dialling_code: '262'
            },
            {
                country_code: 'RO',
                country_name: 'Romania',
                dialling_code: '40'
            },
            {
                country_code: 'RU',
                country_name: 'Russia',
                dialling_code: '7'
            },
            {
                country_code: 'RW',
                country_name: 'Rwanda',
                dialling_code: '250'
            },
            {
                country_code: 'BL',
                country_name: 'Saint Barthélemy',
                dialling_code: '590'
            },
            {
                country_code: 'SH',
                country_name: 'Saint Helena',
                dialling_code: '290'
            },
            {
                country_code: 'KN',
                country_name: 'Saint Kitts and Nevis',
                dialling_code: '1'
            },
            {
                country_code: 'MF',
                country_name: 'Saint Martin',
                dialling_code: '590'
            },
            {
                country_code: 'PM',
                country_name: 'Saint Pierre and Miquelon',
                dialling_code: '508'
            },
            {
                country_code: 'VC',
                country_name: 'Saint Vincent and the Grenadines',
                dialling_code: '1'
            },
            {
                country_code: 'WS',
                country_name: 'Samoa',
                dialling_code: '685'
            },
            {
                country_code: 'SM',
                country_name: 'San Marino',
                dialling_code: '378'
            },
            {
                country_code: 'ST',
                country_name: 'São Tomé and Príncipe',
                dialling_code: '239'
            },
            {
                country_code: 'SA',
                country_name: 'Saudi Arabia',
                dialling_code: '966'
            },
            {
                country_code: 'SN',
                country_name: 'Senegal',
                dialling_code: '221'
            },
            {
                country_code: 'RS',
                country_name: 'Serbia',
                dialling_code: '381'
            },
            {
                country_code: 'SC',
                country_name: 'Seychelles',
                dialling_code: '248'
            },
            {
                country_code: 'SL',
                country_name: 'Sierra Leone',
                dialling_code: '232'
            },
            {
                country_code: 'SG',
                country_name: 'Singapore',
                dialling_code: '65'
            },
            {
                country_code: 'SK',
                country_name: 'Slovakia',
                dialling_code: '421'
            },
            {
                country_code: 'SI',
                country_name: 'Slovenia',
                dialling_code: '386'
            },
            {
                country_code: 'SB',
                country_name: 'Solomon Islands',
                dialling_code: '677'
            },
            {
                country_code: 'SO',
                country_name: 'Somalia',
                dialling_code: '252'
            },
            {
                country_code: 'ZA',
                country_name: 'South Africa',
                dialling_code: '27'
            },
            {
                country_code: 'KR',
                country_name: 'South Korea',
                dialling_code: '82'
            },
            {
                country_code: 'ES',
                country_name: 'Spain',
                dialling_code: '34'
            },
            {
                country_code: 'LK',
                country_name: 'Sri Lanka',
                dialling_code: '94'
            },
            {
                country_code: 'LC',
                country_name: 'St. Lucia',
                dialling_code: '1'
            },
            {
                country_code: 'SD',
                country_name: 'Sudan',
                dialling_code: '249'
            },
            {
                country_code: 'SR',
                country_name: 'Suriname',
                dialling_code: '597'
            },
            {
                country_code: 'SZ',
                country_name: 'Swaziland',
                dialling_code: '268'
            },
            {
                country_code: 'SE',
                country_name: 'Sweden',
                dialling_code: '46'
            },
            {
                country_code: 'CH',
                country_name: 'Switzerland',
                dialling_code: '41'
            },
            {
                country_code: 'SY',
                country_name: 'Syria',
                dialling_code: '963'
            },
            {
                country_code: 'TW',
                country_name: 'Taiwan',
                dialling_code: '886'
            },
            {
                country_code: 'TJ',
                country_name: 'Tajikistan',
                dialling_code: '992'
            },
            {
                country_code: 'TZ',
                country_name: 'Tanzania',
                dialling_code: '255'
            },
            {
                country_code: 'TH',
                country_name: 'Thailand',
                dialling_code: '66'
            },
            {
                country_code: 'BS',
                country_name: 'The Bahamas',
                dialling_code: '1'
            },
            {
                country_code: 'GM',
                country_name: 'The Gambia',
                dialling_code: '220'
            },
            {
                country_code: 'TL',
                country_name: 'Timor-Leste',
                dialling_code: '670'
            },
            {
                country_code: 'TG',
                country_name: 'Togo',
                dialling_code: '228'
            },
            {
                country_code: 'TK',
                country_name: 'Tokelau',
                dialling_code: '690'
            },
            {
                country_code: 'TO',
                country_name: 'Tonga',
                dialling_code: '676'
            },
            {
                country_code: 'TT',
                country_name: 'Trinidad and Tobago',
                dialling_code: '1'
            },
            {
                country_code: 'TN',
                country_name: 'Tunisia',
                dialling_code: '216'
            },
            {
                country_code: 'TR',
                country_name: 'Turkey',
                dialling_code: '90'
            },
            {
                country_code: 'TM',
                country_name: 'Turkmenistan',
                dialling_code: '993'
            },
            {
                country_code: 'TC',
                country_name: 'Turks and Caicos Islands',
                dialling_code: '1'
            },
            {
                country_code: 'TV',
                country_name: 'Tuvalu',
                dialling_code: '688'
            },
            {
                country_code: 'UG',
                country_name: 'Uganda',
                dialling_code: '256'
            },
            {
                country_code: 'UA',
                country_name: 'Ukraine',
                dialling_code: '380'
            },
            {
                country_code: 'AE',
                country_name: 'United Arab Emirates',
                dialling_code: '971'
            },
            {
                country_code: 'GB',
                country_name: 'United Kingdom',
                dialling_code: '44'
            },
            {
                country_code: 'US',
                country_name: 'United States',
                dialling_code: '1'
            },
            {
                country_code: 'UY',
                country_name: 'Uruguay',
                dialling_code: '598'
            },
            {
                country_code: 'VI',
                country_name: 'US Virgin Islands',
                dialling_code: '1'
            },
            {
                country_code: 'UZ',
                country_name: 'Uzbekistan',
                dialling_code: '998'
            },
            {
                country_code: 'VU',
                country_name: 'Vanuatu',
                dialling_code: '678'
            },
            {
                country_code: 'VA',
                country_name: 'Vatican City',
                dialling_code: '39'
            },
            {
                country_code: 'VE',
                country_name: 'Venezuela',
                dialling_code: '58'
            },
            {
                country_code: 'VN',
                country_name: 'Vietnam',
                dialling_code: '84'
            },
            {
                country_code: 'WF',
                country_name: 'Wallis and Futuna',
                dialling_code: '681'
            },
            {
                country_code: 'YE',
                country_name: 'Yemen',
                dialling_code: '967'
            },
            {
                country_code: 'ZM',
                country_name: 'Zambia',
                dialling_code: '260'
            },
            {
                country_code: 'ZW',
                country_name: 'Zimbabwe',
                dialling_code: '263'
            }
        ];
        this.user_login = '0';
        this.reset_pwd = '0';
        this.appPages = [
            {
                title: 'Home',
                url: 'tabs/tab1',
                icon: 'assets/sidemenu/home.png',
                icon2: 'assets/sidemenu/home2.png',
                icn: 'home-outline'
            },
            {
                title: 'Profile',
                url: 'tabs/tab3',
                icon: 'assets/sidemenu/user.png',
                icon2: 'assets/sidemenu/user2.png',
                icn: 'person-outline'
            },
            {
                title: 'Language',
                url: 'tabs/tab3/languages',
                icon: 'assets/sidemenu/language.png',
                icon2: 'assets/sidemenu/language2.png',
                icn: 'language-outline'
            },
            {
                title: 'Contact Us',
                url: 'tabs/tab3/contacts',
                icon: 'mail-outline',
                icn: 'mail-outline'
            },
            {
                title: 'About',
                url: 'tabs/tab3/about',
                icon: 'assets/sidemenu/info.png',
                icon2: 'assets/sidemenu/info2.png',
                icn: 'alert-circle-outline'
            },
            {
                title: 'FAQs',
                url: 'tabs/tab3/faqs',
                icon: 'assets/sidemenu/contact.png',
                icon2: 'assets/sidemenu/contact2.png',
                icn: 'flag-outline'
            },
            {
                title: 'Help',
                url: 'tabs/tab3/help',
                icon: 'assets/sidemenu/contact.png',
                icon2: 'assets/sidemenu/contact2.png',
                icn: 'help-circle-outline'
            },
        ];
    }
    /*
    Start Loader
    Call this method to Start your Loader
    */
    publishAddress(data) {
        this.address.next(data);
    }
    publishReview(data) {
        this.review.next(data);
    }
    publishProfile(data) {
        this.profile.next(data);
    }
    publishOrder() {
        this.newStatus.next();
    }
    subscribeOrder() {
        return this.newStatus;
    }
    publishNewOrder() {
        this.newOrder.next();
    }
    subscribeNewOrder() {
        return this.newOrder;
    }
    observProfile() {
        return this.profile;
    }
    back() {
        this.navCtrl.back();
    }
    getLanguage() {
        return '';
    }
    getReviewObservable() {
        return this.review;
    }
    publishLocation() {
        this.changeLocation.next();
    }
    subscribeLocation() {
        return this.changeLocation;
    }
    publishLoggedIn(data) {
        this.loggedIn.next(data);
    }
    subscribeLoggedIn() {
        return this.loggedIn;
    }
    translate(str) {
        if (this.translations[str]) {
            return this.translations[str];
        }
        return str;
    }
    openMenu() {
        this.menuCtrl.toggle();
    }
    translateInEN(str) {
        return str;
    }
    getObservable() {
        return this.address;
    }
    publishCoupon(data) {
        this.coupon.next(data);
    }
    getCouponObservable() {
        return this.coupon;
    }
    setOrders(data) {
        this.orders = null;
        this.orders = data;
    }
    gerOrder() {
        return this.orders;
    }
    show(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingCtrl.create({
                message: msg,
                spinner: 'bubbles',
            }).then(a => {
                a.present().then(() => {
                    //console.log('presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    hide() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
        });
    }
    /*
      Show Warning Alert Message
      param : msg = message to display
      Call this method to show Warning Alert,
      */
    showWarningAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Warning',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    showSimpleAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: '',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    /*
     Show Error Alert Message
     param : msg = message to display
     Call this method to show Error Alert,
     */
    showErrorAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Error',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    /*
       param : email = email to verify
       Call this method to get verify email
       */
    getEmailFilter(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
            if (!(emailfilter.test(email))) {
                const alert = yield this.alertCtrl.create({
                    header: 'Warning',
                    message: 'Please enter valid email',
                    buttons: ['OK']
                });
                yield alert.present();
                return false;
            }
            else {
                return true;
            }
        });
    }
    /*
      Show Toast Message on Screen
       param : msg = message to display, color= background
       color of toast example dark,danger,light. position  = position of message example top,bottom
       Call this method to show toast message
       */
    showToast(msg, colors, positon) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
                color: colors,
                position: positon
            });
            toast.present();
        });
    }
    shoNotification(msg, colors, positon) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 4000,
                color: colors,
                position: positon,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        handler: () => {
                            // console.log('Cancel clicked');
                        }
                    }
                ]
            });
            toast.present();
        });
    }
    errorToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
            });
            toast.present();
        });
    }
    apiErrorHandler(err) {
        // console.log('Error got in service =>', err)
        if (err.status === -1) {
            this.showErrorAlert('Failed To Connect With Server');
        }
        else if (err.status === 401) {
            this.showErrorAlert('Unauthorized Request!');
            this.navCtrl.navigateRoot('/login');
        }
        else if (err.status === 500) {
            this.showErrorAlert('Somethimg Went Wrong..');
        }
    }
    // setDetails(data) {
    //   this.details = null;
    //   this.details = data;
    // }
    // getDetails() {
    //   return this.details;
    // }
    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
};
UtilService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
UtilService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], UtilService);



/***/ }),

/***/ "2vAW":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-country/select-country.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>{{util.translate('Select country')}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar [placeholder]=\"util.translate('Search')\" type=\"text\" (ionChange)=\"onSearchChange($event)\"\n    [debounce]=\"250\"></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\" *ngIf=\"dummyLoad?.length\">\n    <ion-item *ngFor=\"let item of dummyLoad\">\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf=\"dummy?.length\">\n    <ion-radio-group [(ngModel)]=\"ccCode\">\n      <ion-item *ngFor=\"let item of countries\">\n        <ion-label>+{{item.dialling_code}} {{item.country_name}} </ion-label>\n        <ion-radio [value]=\"item.dialling_code\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"okay()\">\n    <ion-fab-button>\n      <ion-icon name=\"checkmark-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "2wkC":
/*!***********************************************************************!*\
  !*** ./src/app/pages/select-country/select-country-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SelectCountryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCountryPageRoutingModule", function() { return SelectCountryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _select_country_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-country.page */ "hxji");

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
        component: _select_country_page__WEBPACK_IMPORTED_MODULE_3__["SelectCountryPage"]
    }
];
let SelectCountryPageRoutingModule = class SelectCountryPageRoutingModule {
};
SelectCountryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectCountryPageRoutingModule);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
const environment = {
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


/***/ }),

/***/ "CTwn":
/*!***********************************************!*\
  !*** ./src/app/pages/verify/verify.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.otpContainer {\n  margin-top: 50%;\n}\n.otpContainer .headerText {\n  text-align: center;\n  font-weight: bolder;\n  font-size: 2rem;\n}\n.otpContainer .subTitleText {\n  text-align: center;\n  font-weight: bold;\n  color: gray;\n  font-size: 1rem;\n}\n.otpContainer .otpInputs {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}\n.otpContainer .btn_class {\n  color: white;\n  margin: 30px 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZlcmlmeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxlQUFBO0FBRUo7QUFESTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBR1I7QUFESTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUdSO0FBREk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUdSO0FBREk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFHUiIsImZpbGUiOiJ2ZXJpZnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ub3RwQ29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgLmhlYWRlclRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gICAgLnN1YlRpdGxlVGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC5vdHBJbnB1dHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG4gICAgLmJ0bl9jbGFzcyB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luOiAzMHB4IDUwcHg7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "DB8z":
/*!*******************************************************!*\
  !*** ./src/app/pages/verify/verify-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: VerifyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPageRoutingModule", function() { return VerifyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verify.page */ "TCp9");

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
        component: _verify_page__WEBPACK_IMPORTED_MODULE_3__["VerifyPage"]
    }
];
let VerifyPageRoutingModule = class VerifyPageRoutingModule {
};
VerifyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerifyPageRoutingModule);



/***/ }),

/***/ "FbwC":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.translate('Verify')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"otpContainer\">\n    <h2 class=\"headerText\"> {{util.translate('Verification')}} </h2>\n    <p class=\"subTitleText\">{{util.translate('We texted you a code to verify')}}\n      <br> {{util.translate('your phone')}} {{mobile}}\n    </p>\n    <div class=\"otpInputs\">\n      <ng-otp-input (onInputChange)=\"onOtpChange($event)\"\n        [config]=\"{length:6,inputStyles:{'width': '30px','height': '30px'}}\">\n      </ng-otp-input>\n    </div>\n    <ion-button class=\"btn_class\" (click)=\"continue()\" type=\"submit\" expand=\"block\">{{util.translate('Continue')}}\n    </ion-button>\n\n    <ion-button (click)=\"resend()\" *ngIf=\"resendCode\" type=\"submit\" expand=\"block\" fill=\"clear\">\n      {{util.translate('Resend code')}}\n    </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let ApiService = class ApiService {
    constructor(http, nativeHttp) {
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.baseUrl = '';
        this.mediaURL = '';
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
        this.mediaURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mediaURL;
    }
    translate(str) {
        return str;
    }
    alerts(title, message, type) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(title, message, type);
    }
    uploadFile(files) {
        const formData = new FormData();
        Array.from(files).forEach(f => formData.append('userfile', f));
        return this.http.post(this.baseUrl + 'users/upload_image', formData);
    }
    instaPay(url, body, key, token) {
        return this.nativeHttp.post(url, body, {
            'X-Api-Key': `${key}`,
            'X-Auth-Token': `${token}`
        });
    }
    getCurrencyCode() {
        return 'none';
    }
    getCurrecySymbol() {
        return 'none';
    }
    sendNotification(msg, title, id) {
        const body = {
            app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onesignal.appId,
            include_player_ids: [id],
            headings: { en: title },
            contents: { en: msg },
            data: { task: msg }
        };
        const header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/json')
                .set('Authorization', `Basic ${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onesignal.restKey}`)
        };
        return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
    }
    JSON_to_URLEncoded(element, key, list) {
        let new_list = list || [];
        if (typeof element === 'object') {
            for (let idx in element) {
                this.JSON_to_URLEncoded(element[idx], key ? key + '[' + idx + ']' : idx, new_list);
            }
        }
        else {
            new_list.push(key + '=' + encodeURIComponent(element));
        }
        return new_list.join('&');
    }
    post(url, body) {
        return new Promise((resolve, reject) => {
            const header = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    .set('Basic', `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken}`)
            };
            const param = this.JSON_to_URLEncoded(body);
            this.http.post(this.baseUrl + url, param, header).subscribe((data) => {
                resolve(data);
            }, error => {
                resolve(error);
            });
            // return this.http.post(this.baseUrl + url, param, header);
        });
    }
    get(url) {
        return new Promise((resolve, reject) => {
            const header = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    .set('Basic', `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken}`)
                // .set('responseType', 'blob')
            };
            this.http.get(this.baseUrl + url, header).subscribe((data) => {
                resolve(data);
            }, error => {
                resolve(error);
            });
        });
    }
    externalGet(url) {
        return new Promise((resolve, reject) => {
            const header = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    .set('Basic', `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken}`)
            };
            this.http.get(url, header).subscribe((data) => {
                resolve(data);
            }, error => {
                resolve(error);
            });
        });
    }
    nativePost(url, post) {
        return this.nativeHttp.post(this.baseUrl + url, post, {
            Basic: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken}`
        });
    }
    httpGet(url, key) {
        const header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('Authorization', `Bearer ${key}`)
        };
        return this.http.get(url, header);
    }
    externalPost(url, body, key) {
        const header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('Authorization', `Bearer ${key}`)
        };
        const order = this.JSON_to_URLEncoded(body);
        return this.http.post(url, order, header);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]])
], ApiService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "fLLL");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/util.service */ "2Rin");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");



/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/











let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, geolocation, api, oneSignal, nativeAudio, actionSheetController, util, router, navCtrl) {
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
    updateLocation(latitude, longitude) {
        if (localStorage.getItem('uid')) {
            const uid = localStorage.getItem('uid');
            if (uid && uid !== null && uid !== 'null') {
                const param = {
                    id: uid,
                    lat: latitude,
                    lng: longitude
                };
                this.api.post('drivers/getById', param).then((data) => {
                    if (data && data.status === 200 && data.data && data.data.length) {
                        this.util.userInfo = data.data[0];
                    }
                }, error => {
                    console.log('==>>', error);
                });
            }
        }
    }
    getLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            localStorage.setItem('lat', resp.coords.latitude.toString());
            localStorage.setItem('lng', resp.coords.longitude.toString());
            this.updateLocation(resp.coords.latitude, resp.coords.longitude);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        const watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            localStorage.setItem('lat', data.coords.latitude.toString());
            localStorage.setItem('lng', data.coords.longitude.toString());
            this.updateLocation(data.coords.latitude, data.coords.longitude);
        });
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Nueva notificación',
                mode: 'md',
                buttons: [{
                        text: this.util.translate('OK'),
                        icon: 'volume-mute',
                        handler: () => {
                            this.nativeAudio.stop('audio').then(() => console.log('done'), () => console.log('error'));
                        }
                    }, {
                        text: this.util.translate('Cancel'),
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            this.nativeAudio.stop('audio').then(() => console.log('done'), () => console.log('error'));
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.backgroundColorByHexString('#00b3f0');
            this.splashScreen.hide();
            if (this.platform.is('cordova')) {
                setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    yield this.oneSignal.startInit(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].onesignal.appId, src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].onesignal.googleProjectNumber);
                    this.oneSignal.getIds().then((data) => {
                        localStorage.setItem('fcm', data.userId);
                        const uid = localStorage.getItem('uid');
                        if (uid && uid !== null && uid !== 'null') {
                            const param = {
                                id: uid,
                                fcm_token: data.userId
                            };
                            this.api.post('drivers/edit_profile', param).then((data) => {
                            }, error => {
                                console.log(error);
                            });
                        }
                    });
                    this.oneSignal.enableSound(true);
                    yield this.oneSignal.endInit();
                }), 1000);
                this.nativeAudio.preloadSimple('audio', 'assets/alert.mp3').then((data) => {
                }, error => {
                }).catch(error => {
                });
                this.oneSignal.handleNotificationReceived().subscribe(data => {
                    this.nativeAudio.play('audio', () => console.log('audio is done playing')).catch(error => console.log(error));
                    this.nativeAudio.setVolumeForComplexAsset('audio', 1);
                    this.presentActionSheet();
                });
                this.oneSignal.inFocusDisplaying(2);
            }
            this.appPages = this.util.appPages;
            const lng = localStorage.getItem('language');
            if (!lng || lng === null) {
                this.api.get('users/getDefaultSettings').then((data) => {
                    if (data && data.status === 200 && data.data) {
                        const manage = data.data.manage;
                        const language = data.data.lang;
                        if (manage && manage.length > 0) {
                            if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                                this.util.appClosed = true;
                                this.util.appClosedMessage = manage[0].message;
                            }
                            else {
                                this.util.appClosed = false;
                            }
                        }
                        else {
                            this.util.appClosed = false;
                        }
                        if (language) {
                            this.util.translations = language;
                            localStorage.setItem('language', data.data.file);
                        }
                        const settings = data.data.settings;
                        if (settings && settings.length > 0) {
                            const info = settings[0];
                            this.util.direction = info.appDirection;
                            this.util.cside = info.currencySide;
                            this.util.currecny = info.currencySymbol;
                            this.util.logo = info.logo;
                            this.util.twillo = info.twillo;
                            this.util.delivery = info.delivery;
                            this.util.user_login = info.driver_login;
                            this.util.reset_pwd = info.reset_pwd;
                            document.documentElement.dir = this.util.direction;
                        }
                        else {
                            this.util.direction = 'ltr';
                            this.util.cside = 'right';
                            this.util.currecny = '$';
                            document.documentElement.dir = this.util.direction;
                        }
                        const general = data.data.general;
                        if (general && general.length > 0) {
                            const info = general[0];
                            this.util.general = info;
                        }
                    }
                }, error => {
                    console.log('default settings', error);
                });
            }
            else {
                const param = {
                    id: localStorage.getItem('language')
                };
                this.api.post('users/getDefaultSettingsById', param).then((data) => {
                    if (data && data.status === 200 && data.data) {
                        const manage = data.data.manage;
                        const language = data.data.lang;
                        if (manage && manage.length > 0) {
                            if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                                this.util.appClosed = true;
                                this.util.appClosedMessage = manage[0].message;
                            }
                            else {
                                this.util.appClosed = false;
                            }
                        }
                        else {
                            this.util.appClosed = false;
                        }
                        if (language) {
                            this.util.translations = language;
                        }
                        const settings = data.data.settings;
                        if (settings && settings.length > 0) {
                            const info = settings[0];
                            this.util.direction = info.appDirection;
                            this.util.cside = info.currencySide;
                            this.util.currecny = info.currencySymbol;
                            this.util.logo = info.logo;
                            this.util.twillo = info.twillo;
                            this.util.delivery = info.delivery;
                            this.util.user_login = info.driver_login;
                            this.util.reset_pwd = info.reset_pwd;
                            document.documentElement.dir = this.util.direction;
                        }
                        else {
                            this.util.direction = 'ltr';
                            this.util.cside = 'right';
                            this.util.currecny = '$';
                            document.documentElement.dir = this.util.direction;
                        }
                        const general = data.data.general;
                        if (general && general.length > 0) {
                            const info = general[0];
                            this.util.general = info;
                        }
                    }
                }, error => {
                    this.util.appClosed = false;
                    this.util.direction = 'ltr';
                    this.util.cside = 'right';
                    this.util.currecny = '$';
                    document.documentElement.dir = this.util.direction;
                });
            }
            const uid = localStorage.getItem('uid');
            if (uid && uid !== null && uid !== 'null') {
                const param = {
                    id: uid
                };
                this.api.post('drivers/getById', param).then((data) => {
                    if (data && data.status === 200 && data.data && data.data.length) {
                        this.util.userInfo = data.data[0];
                    }
                }, error => {
                });
            }
            this.getLocation();
        });
    }
    logout() {
        localStorage.clear();
        this.navCtrl.navigateRoot(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"] },
    { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeAudio"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
        _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"],
        _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_11__["NativeAudio"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _services_util_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], AppComponent);



/***/ }),

/***/ "TCp9":
/*!*********************************************!*\
  !*** ./src/app/pages/verify/verify.page.ts ***!
  \*********************************************/
/*! exports provided: VerifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPage", function() { return VerifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verify_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verify.page.html */ "FbwC");
/* harmony import */ var _verify_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify.page.scss */ "CTwn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");



/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/




let VerifyPage = class VerifyPage {
    constructor(api, util, navParam, navCtrl, modalCtrl) {
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
        setTimeout(() => {
            this.resendCode = true;
        }, 30000);
    }
    sendOTP() {
        this.mobile = this.navParam.get('code') + this.navParam.get('phone');
        const message = this.util.translate('Your Foodies app verification code : ');
        const param = {
            msg: message,
            to: this.mobile
        };
        this.util.show();
        this.api.post('users/twilloMessage', param).then((data) => {
            console.log(data);
            this.id = data.data.id;
            this.util.hide();
        }, error => {
            console.log(error);
            this.util.hide();
            this.util.errorToast('Algo ha ido mal');
        });
    }
    ngOnInit() {
    }
    onOtpChange(event) {
        console.log(event);
        this.userCode = event;
    }
    resend() {
        this.sendOTP();
    }
    continue() {
        console.log(this.userCode);
        if (this.userCode === '' || !this.userCode) {
            this.util.errorToast(this.util.translate('Not valid code'));
            return false;
        }
        if (this.userCode) {
            const param = {
                id: this.id,
                otp: this.userCode
            };
            this.util.show();
            this.api.post('users/verifyOTP', param).then((data) => {
                console.log(data);
                this.util.hide();
                if (data && data.status === 200) {
                    this.modalCtrl.dismiss('', 'ok');
                }
                else {
                    if (data && data.status === 500 && data.data && data.data.message) {
                        this.util.errorToast(data.data.message);
                        return false;
                    }
                    this.util.errorToast('Algo ha ido mal');
                    return false;
                }
            }, error => {
                this.util.hide();
                console.log(error);
                this.util.errorToast('Algo ha ido mal');
            });
        }
        else {
            this.util.errorToast(this.util.translate('Not valid code'));
            return false;
        }
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
VerifyPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
VerifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verify',
        template: _raw_loader_verify_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verify_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], VerifyPage);



/***/ }),

/***/ "UWHZ":
/*!***********************************************!*\
  !*** ./src/app/pages/verify/verify.module.ts ***!
  \***********************************************/
/*! exports provided: VerifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function() { return VerifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verify-routing.module */ "DB8z");
/* harmony import */ var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify.page */ "TCp9");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ "9OaD");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/







let VerifyPageModule = class VerifyPageModule {
};
VerifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyPageRoutingModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"]
        ],
        declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
    })
], VerifyPageModule);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n \n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "fLLL");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _pages_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/select-country/select-country.module */ "rDR3");
/* harmony import */ var _pages_verify_verify_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/verify/verify.module */ "UWHZ");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/

















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _pages_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_15__["SelectCountryPageModule"],
            _pages_verify_verify_module__WEBPACK_IMPORTED_MODULE_16__["VerifyPageModule"]
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"],
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__["OneSignal"],
            _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_13__["NativeAudio"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_14__["HTTP"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_17__["InAppBrowser"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "cT6d":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/


let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        const uid = localStorage.getItem('uid');
        if (uid && uid != null && uid !== 'null') {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "eqCj":
/*!***************************************************************!*\
  !*** ./src/app/pages/select-country/select-country.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlbGVjdC1jb3VudHJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7O0NBQUEiLCJmaWxlIjoic2VsZWN0LWNvdW50cnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4iXX0= */");

/***/ }),

/***/ "hxji":
/*!*************************************************************!*\
  !*** ./src/app/pages/select-country/select-country.page.ts ***!
  \*************************************************************/
/*! exports provided: SelectCountryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCountryPage", function() { return SelectCountryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_country_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select-country.page.html */ "2vAW");
/* harmony import */ var _select_country_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-country.page.scss */ "eqCj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");



/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/



let SelectCountryPage = class SelectCountryPage {
    constructor(modalCtrl, util) {
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.ccCode = '91';
        this.countries = [];
        this.dummy = [];
        this.dummyLoad = [];
        this.dummyLoad = Array(10);
        setTimeout(() => {
            this.dummyLoad = [];
            this.dummy = this.util.countrys;
            this.countries = this.dummy;
            console.log(this.dummy);
        }, 500);
    }
    ngOnInit() {
    }
    close() {
        this.modalCtrl.dismiss();
    }
    onSearchChange(events) {
        console.log(events);
        if (events.value !== '') {
            this.countries = this.dummy.filter((item) => {
                return item.country_name.toLowerCase().indexOf(events.detail.value.toLowerCase()) > -1;
            });
        }
        else {
            this.countries = [];
        }
    }
    okay() {
        console.log(this.ccCode);
        this.modalCtrl.dismiss(this.ccCode, 'selected');
    }
};
SelectCountryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
];
SelectCountryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-select-country',
        template: _raw_loader_select_country_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_country_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
], SelectCountryPage);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "rDR3":
/*!***************************************************************!*\
  !*** ./src/app/pages/select-country/select-country.module.ts ***!
  \***************************************************************/
/*! exports provided: SelectCountryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCountryPageModule", function() { return SelectCountryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _select_country_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-country-routing.module */ "2wkC");
/* harmony import */ var _select_country_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-country.page */ "hxji");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let SelectCountryPageModule = class SelectCountryPageModule {
};
SelectCountryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_country_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectCountryPageRoutingModule"]
        ],
        declarations: [_select_country_page__WEBPACK_IMPORTED_MODULE_6__["SelectCountryPage"]]
    })
], SelectCountryPageModule);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/auth.guard */ "cT6d");

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
        path: 'tabs',
        loadChildren: () => Promise.all(/*! import() | pages-tabs-tabs-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-tabs-tabs-module")]).then(__webpack_require__.bind(null, /*! ./pages/tabs/tabs.module */ "qiIP")).then(m => m.TabsPageModule),
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | pages-login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "F4UR")).then(m => m.LoginPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() | pages-forgot-password-forgot-password-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null, /*! ./pages/forgot-password/forgot-password.module */ "7CEM")).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | pages-orders-orders-module */[__webpack_require__.e("default~orders-orders-module~pages-orders-orders-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./pages/orders/orders.module */ "Xlj8")).then(m => m.OrdersPageModule),
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'order-detail',
        loadChildren: () => Promise.all(/*! import() | pages-order-detail-order-detail-module */[__webpack_require__.e("default~contacts-contacts-module~pages-inbox-inbox-module~pages-order-detail-order-detail-module~rev~7ba3eaa7"), __webpack_require__.e("common"), __webpack_require__.e("pages-order-detail-order-detail-module")]).then(__webpack_require__.bind(null, /*! ./pages/order-detail/order-detail.module */ "982l")).then(m => m.OrderDetailPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() | pages-profile-profile-module */[__webpack_require__.e("default~pages-profile-profile-module~profile-profile-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./pages/profile/profile.module */ "723k")).then(m => m.ProfilePageModule)
    },
    {
        path: 'edit-profile',
        loadChildren: () => Promise.all(/*! import() | pages-edit-profile-edit-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-edit-profile-edit-profile-module")]).then(__webpack_require__.bind(null, /*! ./pages/edit-profile/edit-profile.module */ "k578")).then(m => m.EditProfilePageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => Promise.all(/*! import() | pages-notifications-notifications-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-notifications-notifications-module")]).then(__webpack_require__.bind(null, /*! ./pages/notifications/notifications.module */ "4sOm")).then(m => m.NotificationsPageModule)
    },
    {
        path: 'tracker',
        loadChildren: () => Promise.all(/*! import() | pages-tracker-tracker-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-tracker-tracker-module")]).then(__webpack_require__.bind(null, /*! ./pages/tracker/tracker.module */ "akYc")).then(m => m.TrackerPageModule)
    },
    {
        path: 'inbox',
        loadChildren: () => Promise.all(/*! import() | pages-inbox-inbox-module */[__webpack_require__.e("default~contacts-contacts-module~pages-inbox-inbox-module~pages-order-detail-order-detail-module~rev~7ba3eaa7"), __webpack_require__.e("pages-inbox-inbox-module")]).then(__webpack_require__.bind(null, /*! ./pages/inbox/inbox.module */ "+duN")).then(m => m.InboxPageModule)
    },
    {
        path: 'languages',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-languages-languages-module */ "languages-languages-module").then(__webpack_require__.bind(null, /*! ./pages/languages/languages.module */ "+8HC")).then(m => m.LanguagesPageModule)
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ./pages/about/about.module */ "UoYK")).then(m => m.AboutPageModule)
    },
    {
        path: 'contacts',
        loadChildren: () => Promise.all(/*! import() | pages-contacts-contacts-module */[__webpack_require__.e("default~contacts-contacts-module~pages-inbox-inbox-module~pages-order-detail-order-detail-module~rev~7ba3eaa7"), __webpack_require__.e("contacts-contacts-module")]).then(__webpack_require__.bind(null, /*! ./pages/contacts/contacts.module */ "EWb5")).then(m => m.ContactsPageModule)
    },
    {
        path: 'faqs',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-faqs-faqs-module */ "faqs-faqs-module").then(__webpack_require__.bind(null, /*! ./pages/faqs/faqs.module */ "IeLZ")).then(m => m.FaqsPageModule)
    },
    {
        path: 'reviews',
        loadChildren: () => Promise.all(/*! import() | pages-reviews-reviews-module */[__webpack_require__.e("default~contacts-contacts-module~pages-inbox-inbox-module~pages-order-detail-order-detail-module~rev~7ba3eaa7"), __webpack_require__.e("reviews-reviews-module")]).then(__webpack_require__.bind(null, /*! ./pages/reviews/reviews.module */ "b5pT")).then(m => m.ReviewsPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n.infoSection {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 50px;\n}\n.infoSection .userPhoto {\n  width: 80px;\n  margin: 20px 0px;\n}\n.infoSection .userName {\n  margin: 0px;\n  padding: 0px;\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n  margin-bottom: 20px;\n}\n.version {\n  margin: 0px;\n  padding: 0px;\n  font-size: 1rem;\n  font-weight: 500;\n  color: black;\n  margin-bottom: 25px;\n  text-align: center;\n  position: absolute;\n  bottom: 0px;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.md ion-item ion-icon {\n  color: black;\n}\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\nion-item {\n  border-bottom: 1px solid lightgray;\n  --padding-start: 30px !important;\n  --min-height: 60px !important;\n}\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n}\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n.imgs {\n  height: 20px;\n  width: 20px;\n  margin-right: 10px;\n}\n.menu_user_image {\n  height: 90px;\n  width: 90px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  margin: auto;\n}\n.username {\n  margin-top: 20px;\n  font-weight: 600;\n  display: block;\n  text-align: center;\n  font-size: 20px;\n}\n.email {\n  margin-top: 5px;\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNFLDJFQUFBO0FBRUY7QUFDQTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQUU7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0FBQ0Y7QUFZQTtFQUNFLG1CQUFBO0FBVEY7QUFZQTs7RUFFRSxrQkFBQTtBQVRGO0FBZ0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFkRjtBQWlCQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQWpCRjtBQW9CQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWpCRjtBQW9CQTtFQUNFLHNEQUFBO0FBakJGO0FBb0JBO0VBQ0UsK0JBQUE7QUFqQkY7QUFvQkE7RUFHRSxZQUFBO0FBbkJGO0FBMEJBO0VBQ0Usc0JBQUE7QUF2QkY7QUE4QkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBM0JGO0FBNkJBO0VBQ0Usa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FBMUJGO0FBNEJBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBekJGO0FBNEJBO0VBQ0UsK0JBQUE7QUF6QkY7QUE0QkE7RUFDRSxlQUFBO0FBekJGO0FBNkJBO0VBQ0Usa0JBQUE7QUExQkY7QUE2QkE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQTFCRjtBQTZCQTtFQUNFLGtCQUFBO0FBMUJGO0FBNkJBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUEzQkY7QUE4QkE7RUFDRSxpQ0FBQTtBQTNCRjtBQThCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUEzQkY7QUE2QkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQTFCRjtBQTZCQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBMUJGO0FBNEJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQXpCRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGZvb2RpZXMgYXBwXG4gIENyZWF0ZWQgOiAyOC1GZWItMjAyMVxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG4uaW5mb1NlY3Rpb24ge1xuICAvLyAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICAudXNlclBob3RvIHtcbiAgICAvLyBoZWlnaHQ6IDExMHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gIH1cbiAgLnVzZXJOYW1lIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbi52ZXJzaW9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxlZnQ6IDUwJTtcbn1cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLy8gLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC8vIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLy8gLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLy8gLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICAvLyBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICAvLyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICAvLyBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICAvLyBwYWRkaW5nOiA0MHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgLy8gY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5pbWdzIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm1lbnVfdXNlcl9pbWFnZSB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi51c2VybmFtZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5lbWFpbCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map