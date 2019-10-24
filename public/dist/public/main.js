(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<html lang=\"en\">\r\n\r\n    <head>\r\n        <meta charset=\"UTF-8\">\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n        <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n        <link href='http://fonts.googleapis.com/css?family=Oleo+Script' rel='stylesheet' type='text/css'>\r\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\r\n            integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n        <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"\r\n            integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\r\n            crossorigin=\"anonymous\"></script>\r\n        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"\r\n            integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\"\r\n            crossorigin=\"anonymous\"></script>\r\n        <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"\r\n            integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\"\r\n            crossorigin=\"anonymous\"></script>\r\n        <title>Document</title>\r\n    </head>\r\n    \r\n    <body>\r\n    \r\n        <router-outlet></router-outlet>\r\n    \r\n    </body>\r\n    \r\n    </html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <h4>What Ingredients Do You Have?</h4>\r\n    <form ngForm #checkForm=\"ngForm\" (submit)=\"getClicked(checkForm)\">\r\n        <div class=\"accordion d-inline-block\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingOne\">\r\n                    <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n                        aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                        Baking and Grain\r\n                    </button>\r\n                </div>\r\n\r\n                <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n                    <div class=\"card-body\">\r\n                        <div *ngFor=\"let i of igs[0]\">\r\n                            <label><input type=\"checkbox\" name=\"igsinform[i.value]\" [(ngModel)]=\"igsinform[i.value]\"\r\n                                    aria-label=\"Checkbox for following text input\">{{i.name}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingTwo\">\r\n                    <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\r\n                        aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n                        Sweeteners and Spices\r\n                    </button>\r\n                </div>\r\n\r\n                <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n                    <div class=\"card-body\">\r\n                        <div *ngFor=\"let i of igs[1]\">\r\n\r\n                            <label><input type=\"checkbox\" name=\"igsinform[i.value]\" [(ngModel)]=\"igsinform[i.value]\"\r\n                                    aria-label=\"Checkbox for following text input\">{{i.name}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingThree\">\r\n                    <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\"\r\n                        aria-expanded=\"true\" aria-controls=\"collapseThree\">\r\n                        Dairy\r\n                    </button>\r\n                </div>\r\n\r\n                <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\r\n                    <div class=\"card-body\">\r\n                        <div *ngFor=\"let i of igs[2]\">\r\n\r\n                            <label><input type=\"checkbox\" name=\"igsinform[i.value]\" [(ngModel)]=\"igsinform[i.value]\"\r\n                                    aria-label=\"Checkbox for following text input\">{{i.name}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingFour\">\r\n                    <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseFour\"\r\n                        aria-expanded=\"true\" aria-controls=\"collapseFour\">\r\n                        Misc\r\n                    </button>\r\n                </div>\r\n\r\n                <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordionExample\">\r\n                    <div class=\"card-body\">\r\n                        <div *ngFor=\"let i of igs[3]\">\r\n\r\n                            <label><input type=\"checkbox\" name=\"igsinform[i.value]\" [(ngModel)]=\"igsinform[i.value]\"\r\n                                    aria-label=\"Checkbox for following text input\">{{i.name}}</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <button id=\"subbtn\" class=\"btn\" type=\"submit\">submit</button>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"recipesFound\" class=\"results pb-4\">\r\n            <h4 class=\"display-4 ml-4\">Recipes!</h4>\r\n            <div *ngFor=\"let i of recipesFound\" class=\"result mt-2 ml-4\">\r\n                <h5>{{i.title}}</h5>\r\n                <div class=\"ingredss\">\r\n                    <img *ngIf=\"i.thumbnail\" src=\"{{i.thumbnail}}\" alt=\"\">\r\n                    <img *ngIf=\"!i.thumbnail\"\r\n                        src=\"http://lehighvalleymarketplace.com/wp-content/uploads/2010/11/bakingbasics.jpg\" alt=\"\">\r\n                    <p><b>Ingredients needed:</b> {{i.ingredients}}</p>\r\n                </div>\r\n                <a href=\"{{i.href}}\" target=\"_blank\">link to recipe</a>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n\r\n\r\n    <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");





const routes = [
    { path: 'onthespot', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/onthespot' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'public';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");



 // <-- import FormsModule.






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let EditComponent = class EditComponent {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
    }
};
EditComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")).default]
    })
], EditComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n#subbtn{\r\n  width: 250px;\r\nmargin: auto; \r\n background: rgb(38, 165, 0);\r\n}\r\n#subbtn {\r\n  background:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);\r\n  background-color:#ededed;\r\n  border-radius:4px;\r\n  border:1px solid #d6bcd6;\r\n  display:inline-block;\r\n  cursor:pointer;\r\n  color:#4a402b;\r\n  font-family:Arial;\r\n  font-size:17px;\r\n  padding:7px 25px;\r\n  text-decoration:none;\r\n width: 93%;\r\n}\r\n#subbtn:hover {\r\n  background:linear-gradient(to bottom, #00ff37 5%, #0c7c08 100%);\r\n  background-color:#bab1ba;\r\n}\r\n#subbtn:active {\r\n  position:relative;\r\n  top:1px;\r\n}\r\n.container {\r\n        padding-bottom: 3%;\r\n        background-size: cover;\r\n        min-height: 900px;\r\n        min-width: 100%;\r\n        background-image: url('https://visualcocaine.org/public/uploads/large/81497721030kokdx93yy4rs2fvgviqbxhc53u3x2ppgu7im4mqs2xbpgfvpfsogkj8cjdiinu8so47gf6yui1g89eafqmz3aj9by3zvtb1demhw.jpg');\r\n}\r\nbutton {\r\n\tbackground:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);\r\n\tbackground-color:#ededed;\r\n\tborder-radius:4px;\r\n\tborder:1px solid #d6bcd6;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n  color:#4a402b;\r\n  text-decoration: none;\r\n\tfont-family:Arial;\r\n\tfont-size:17px;\r\n\tpadding:7px 25px;\r\n\ttext-decoration:none;\r\n    text-shadow:0px 1px 0px #e1e2ed;\r\n    width: 100%;\r\n    \r\n}\r\nbutton:hover {\r\n\tbackground:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);\r\n  background-color:#bab1ba;\r\n  text-decoration: none;\r\n\r\n}\r\nbutton:active {\r\n\tposition:relative;\r\n  top:1px;\r\n  text-decoration: none;\r\n\r\n}\r\n.form-check{\r\n    display: inline-block;\r\n    margin-left:2%;\r\n}\r\n.form-check:hover {\r\n\tbackground:linear-gradient(to bottom, #e9fff0 5%, #ededed 100%);\r\n    background-color:#fafffc;\r\n    border-radius: 5px;\r\n}\r\n.card{\r\n  background: rgb(255, 245, 245, 0.4);\r\n}\r\n.card-body{\r\n  font-size: 20px;\r\n  color: #4a402b;\r\n  font-weight: bold;\r\n  background: rgb(243, 232, 232,0.45);\r\n}\r\nh4{\r\n    font: 400 50px/1 'Oleo Script', Helvetica, sans-serif;\r\n    color: white;\r\n    text-shadow: 4px 4px 0px rgba(0,0,0,0.1);\r\n    padding-top: 2%;\r\n    text-shadow: 2px 2px 1px rgba(206,89,55,0.47);\r\n    margin-bottom:2px;\r\n  }\r\n.accordion{\r\n    width: 35%;\r\n    background-size: cover;\r\n    display: inline-block;\r\n  }\r\n.result{\r\n    display: inline-block;\r\n    width: 45%;\r\n    vertical-align: top;\r\n  }\r\n.results{\r\n    width:60%;\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin-left: 3%;\r\n  }\r\n.results img{\r\n    height: 130px;\r\n    width: 130px;\r\n    border-radius: 20px;\r\n  }\r\n.result a{\r\n    padding: 1px 18px 1px 18px;\r\n    background: rgba(206,89,55,0.47);\r\n    border-radius: 6px;\r\n    margin-top: 2%;\r\n    text-decoration: none;\r\n    color: black;\r\n  }\r\n.result a:hover {\r\n    background:linear-gradient(to bottom, #00ff37 5%, #0c7c08 100%);\r\n    background-color:#bab1ba;\r\n  }\r\n.result a:active {\r\n    position:relative;\r\n    top:1px;\r\n  }\r\n.result p, .result img{\r\n    vertical-align: top;\r\n    display: inline-block;\r\n  }\r\n.result p{\r\n    margin-top: -20px;\r\n    width: 50%;\r\n    font-size: 16px;\r\n    margin-left: 2%;\r\n  }\r\n.result h5{\r\n    font-size: 21px;\r\n    height: 55px;\r\n    margin-top: 3%;\r\n  }\r\n.ingredss{\r\n    margin-bottom: 3%;\r\n  }\r\n@media only screen and (max-width: 480px) {\r\n    .container {\r\n        background-position: center center;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        height: 100%;\r\n        background-image: url('https://r1.ilikewallpaper.net/pic/201901/stainless-steel-spoon_75665_1125x2436_640.jpg');\r\n    }\r\n    .accordion{\r\n        width:100%;\r\n    }\r\n    .results{\r\n      width: 100%;\r\n    }\r\n    .result{\r\n      width: 90%;\r\n    }\r\n    .results p{\r\n      width: 100%;\r\n    }\r\n  \r\n  h4{\r\n    font: 400 40px/1 'Oleo Script', Helvetica, sans-serif;\r\n    color: #2b2b2b;\r\n    text-shadow: 2px 2px 1px rgba(255, 255, 255, 0.47);\r\n    padding-top: 2%;\r\n    margin-bottom:2px;\r\n  }\r\n\r\n}\r\n@media only screen and (min-width: 480px) and (max-width: 1080px) {\r\n    .container {\r\n        background-position: center center;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        height: 100vh;\r\n    }\r\n    .accordion{\r\n        width:85%;\r\n        font-size: 20px;\r\n    }\r\n    .accordion button{\r\n      font-size: 23px;\r\n    }\r\n    .container h4{\r\n        font-size: 65px;\r\n    }\r\n    .results{\r\n      width: 85%;\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxZQUFZO0FBQ2QsWUFBWTtDQUNYLDJCQUEyQjtBQUM1QjtBQUNBO0VBQ0UsK0RBQStEO0VBQy9ELHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtDQUNyQixVQUFVO0FBQ1g7QUFDQTtFQUNFLCtEQUErRDtFQUMvRCx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixPQUFPO0FBQ1Q7QUFDQTtRQUNRLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZiwyTEFBMkw7QUFDbk07QUFFQTtDQUNDLCtEQUErRDtDQUMvRCx3QkFBd0I7Q0FDeEIsaUJBQWlCO0NBQ2pCLHdCQUF3QjtDQUN4QixvQkFBb0I7Q0FDcEIsY0FBYztFQUNiLGFBQWE7RUFDYixxQkFBcUI7Q0FDdEIsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsb0JBQW9CO0lBQ2pCLCtCQUErQjtJQUMvQixXQUFXOztBQUVmO0FBQ0E7Q0FDQywrREFBK0Q7RUFDOUQsd0JBQXdCO0VBQ3hCLHFCQUFxQjs7QUFFdkI7QUFDQTtDQUNDLGlCQUFpQjtFQUNoQixPQUFPO0VBQ1AscUJBQXFCOztBQUV2QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFDQTtDQUNDLCtEQUErRDtJQUM1RCx3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1DQUFtQztBQUNyQztBQUNBO0lBQ0kscURBQXFEO0lBQ3JELFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsZUFBZTtJQUNmLDZDQUE2QztJQUM3QyxpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsU0FBUztJQUNULDBDQUEwQztJQUMxQyxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7QUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDtBQUNBO0lBQ0UsK0RBQStEO0lBQy9ELHdCQUF3QjtFQUMxQjtBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLE9BQU87RUFDVDtBQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixlQUFlO0lBQ2YsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFFRjtJQUNJO1FBQ0ksa0NBQWtDO1FBQ2xDLDRCQUE0QjtRQUM1QixzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLCtHQUErRztJQUNuSDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsV0FBVztJQUNiOztFQUVGO0lBQ0UscURBQXFEO0lBQ3JELGNBQWM7SUFDZCxrREFBa0Q7SUFDbEQsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7QUFFRjtBQUNBO0lBQ0k7UUFDSSxrQ0FBa0M7UUFDbEMsNEJBQTRCO1FBQzVCLHNCQUFzQjtRQUN0QixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsZUFBZTtJQUNuQjtJQUNBO01BQ0UsZUFBZTtJQUNqQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO01BQ0UsVUFBVTtJQUNaO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbiNzdWJidG57XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG5tYXJnaW46IGF1dG87IFxyXG4gYmFja2dyb3VuZDogcmdiKDM4LCAxNjUsIDApO1xyXG59XHJcbiNzdWJidG4ge1xyXG4gIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VkZWRlZCA1JSwgI2JhYjFiYSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNlZGVkZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czo0cHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjZDZiY2Q2O1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gIGNvbG9yOiM0YTQwMmI7XHJcbiAgZm9udC1mYW1pbHk6QXJpYWw7XHJcbiAgZm9udC1zaXplOjE3cHg7XHJcbiAgcGFkZGluZzo3cHggMjVweDtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuIHdpZHRoOiA5MyU7XHJcbn1cclxuI3N1YmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDBmZjM3IDUlLCAjMGM3YzA4IDEwMCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2JhYjFiYTtcclxufVxyXG4jc3ViYnRuOmFjdGl2ZSB7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgdG9wOjFweDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBtaW4taGVpZ2h0OiA5MDBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3Zpc3VhbGNvY2FpbmUub3JnL3B1YmxpYy91cGxvYWRzL2xhcmdlLzgxNDk3NzIxMDMwa29rZHg5M3l5NHJzMmZ2Z3ZpcWJ4aGM1M3UzeDJwcGd1N2ltNG1xczJ4YnBnZnZwZnNvZ2tqOGNqZGlpbnU4c280N2dmNnl1aTFnODllYWZxbXozYWo5YnkzenZ0YjFkZW1ody5qcGcnKTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlZGVkZWQgNSUsICNiYWIxYmEgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojZWRlZGVkO1xyXG5cdGJvcmRlci1yYWRpdXM6NHB4O1xyXG5cdGJvcmRlcjoxcHggc29saWQgI2Q2YmNkNjtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRjdXJzb3I6cG9pbnRlcjtcclxuICBjb2xvcjojNGE0MDJiO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRmb250LWZhbWlseTpBcmlhbDtcclxuXHRmb250LXNpemU6MTdweDtcclxuXHRwYWRkaW5nOjdweCAyNXB4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgdGV4dC1zaGFkb3c6MHB4IDFweCAwcHggI2UxZTJlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNiYWIxYmEgNSUsICNlZGVkZWQgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojYmFiMWJhO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbn1cclxuYnV0dG9uOmFjdGl2ZSB7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcbiAgdG9wOjFweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcbi5mb3JtLWNoZWNre1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6MiU7XHJcbn1cclxuLmZvcm0tY2hlY2s6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2U5ZmZmMCA1JSwgI2VkZWRlZCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZhZmZmYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSBcclxuLmNhcmR7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjQ1LCAyNDUsIDAuNCk7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM0YTQwMmI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI0MywgMjMyLCAyMzIsMC40NSk7XHJcbn1cclxuaDR7XHJcbiAgICBmb250OiA0MDAgNTBweC8xICdPbGVvIFNjcmlwdCcsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtc2hhZG93OiA0cHggNHB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxcHggcmdiYSgyMDYsODksNTUsMC40Nyk7XHJcbiAgICBtYXJnaW4tYm90dG9tOjJweDtcclxuICB9XHJcbiAgLmFjY29yZGlvbntcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAucmVzdWx0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG4gIC5yZXN1bHRze1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICB9XHJcbiAgLnJlc3VsdHMgaW1ne1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIC5yZXN1bHQgYXtcclxuICAgIHBhZGRpbmc6IDFweCAxOHB4IDFweCAxOHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMDYsODksNTUsMC40Nyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLnJlc3VsdCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwZmYzNyA1JSwgIzBjN2MwOCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2JhYjFiYTtcclxuICB9XHJcbiAgLnJlc3VsdCBhOmFjdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDoxcHg7XHJcbiAgfVxyXG4gIC5yZXN1bHQgcCwgLnJlc3VsdCBpbWd7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAucmVzdWx0IHB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgfVxyXG4gIC5yZXN1bHQgaDV7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICB9XHJcbiAgLmluZ3JlZHNze1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgfVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9yMS5pbGlrZXdhbGxwYXBlci5uZXQvcGljLzIwMTkwMS9zdGFpbmxlc3Mtc3RlZWwtc3Bvb25fNzU2NjVfMTEyNXgyNDM2XzY0MC5qcGcnKTtcclxuICAgIH1cclxuICAgIC5hY2NvcmRpb257XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuICAgIC5yZXN1bHRze1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5yZXN1bHR7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAucmVzdWx0cyBwe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICBoNHtcclxuICAgIGZvbnQ6IDQwMCA0MHB4LzEgJ09sZW8gU2NyaXB0JywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMyYjJiMmI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ3KTtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206MnB4O1xyXG4gIH1cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDEwODBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxuICAgIC5hY2NvcmRpb257XHJcbiAgICAgICAgd2lkdGg6ODUlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5hY2NvcmRpb24gYnV0dG9ue1xyXG4gICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgIH1cclxuICAgIC5yZXN1bHRze1xyXG4gICAgICB3aWR0aDogODUlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.igs = [
            [{ name: "All Purpose Flour", value: "flour", isChecked: false },
                { name: "Baking Soda", value: "baking soda", isChecked: false },
                { name: "Baking Powder", value: "baking powder", isChecked: false },
                { name: "Rolled Oats", value: "rolled oat", isChecked: false },
                { name: "Yeast", value: "yeast", isChecked: false },
                { name: "Cornstarch", value: "cornstarch", isChecked: false },
                { name: "Cake Mix", value: "cake mix", isChecked: false },
                { name: "Coconut Flakes", value: "flaked coconut", isChecked: false },
                { name: "Cocoa Powder", value: "cocoa powder", isChecked: false },
                { name: "Nuts", value: "nuts", isChecked: false },
                { name: "Vanilla Extract", value: "vanilla extract", isChecked: false },
            ], [
                { name: "Sugar", value: "sugar", isChecked: false },
                { name: "Brown Sugar", value: "brown sugar", isChecked: false },
                { name: "Powdered Sugar", value: " powdered sugar", isChecked: false },
                { name: "Cinnamon", value: "cinnamon", isChecked: false },
                { name: "Nutmeg", value: "nutmeg", isChecked: false },
                { name: "Ginger", value: "ginger", isChecked: false },
                { name: "Honey", value: "honey", isChecked: false },
                { name: "Maple Syrup", value: "maple syrup", isChecked: false },
                { name: "Molasses", value: "molasses", isChecked: false },
                { name: "Agave Nectar", value: "agave nectar", isChecked: false },
                { name: "Corn Syrup", value: "corn syrup", isChecked: false },
                { name: "Artificial Sweetener", value: "sugar substitute", isChecked: false },
            ], [
                { name: "Butter", value: "butter", isChecked: false },
                { name: "Margarine", value: "margarine", isChecked: false },
                { name: "Eggs", value: "eggs", isChecked: false },
                { name: "Cream", value: "cream", isChecked: false },
                { name: "Buttermilk", value: "buttermilk", isChecked: false },
                { name: "Half and Half", value: "half and half", isChecked: false },
                { name: "Powdered Milk", value: "powdered milk", isChecked: false },
                { name: "Cream Cheese", value: "cream cheese", isChecked: false },
                { name: "Condensed Milk", value: "condensed milk", isChecked: false },
                { name: "Whipped Cream", value: "whipped cream", isChecked: false },
                { name: "Soy Milk", value: "soy milk", isChecked: false },
                { name: "Skim Milk", value: "skim milk", isChecked: false },
            ], [
                { name: "Peanut Butter", value: "peanut butter", isChecked: false },
                { name: "Graham Crackers", value: "graham crackers", isChecked: false },
                { name: "Chocolate Syrup", value: "chocolate syrup", isChecked: false },
                { name: "Marshmallows", value: "marshmallows", isChecked: false },
                { name: "Chocolate Chips", value: "milk chocolate chips", isChecked: false },
                { name: "Raspberry Jam", value: "raspberry jam", isChecked: false },
                { name: "Jelly", value: "jelly", isChecked: false },
                { name: "Jello", value: "jello", isChecked: false },
                { name: "White Chocolate", value: "white chocolate", isChecked: false },
                { name: "Sprinkles", value: "sprinkles", isChecked: false },
                { name: "Apples", value: "apple", isChecked: false },
            ]
        ];
        this.igsinform = {};
        this.newArry = [];
        this.newString = '';
    }
    ngOnInit() {
        this.populate();
    }
    // populates ngModel for twowaybinding with fields of igs
    populate() {
        for (let i = 0; i < this.igs.length; i++) {
            this.igsinform[this.igs[i].value] = this.igs[i].isChecked;
        }
    }
    getClicked() {
        this.recipesFound = [];
        for (let key in this.igsinform) {
            if (this.igsinform[key] == true) {
                this.newArry.push(key);
            }
        }
        this.newString = this.newArry.join(",");
        this.getRecipes();
    }
    getRecipes() {
        let istr = this.newString;
        let qstr = "dessert";
        let recipes = this.http.getRecipes(istr, qstr);
        recipes.subscribe((data) => {
            let a = JSON.parse(data);
            for (let i = 0; i < a.results.length; i++) {
                this.recipesFound.push(a.results[i]);
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    getRecipes(istr, qstr) {
        return this._http.get(`/api/${istr}/${qstr}`);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andre\OneDrive\Projects\on_the_spot\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map