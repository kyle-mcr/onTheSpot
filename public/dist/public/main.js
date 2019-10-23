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
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\r\n    <title></title>\r\n</head>\r\n<body>\r\n        <router-outlet></router-outlet>\r\n</body>\r\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\r\n        integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n    <title> Edit Author </title>\r\n</head>\r\n\r\n<body>\r\n\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"formGroupExampleInput\">Title</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\"  name=\"myobj.name\" [(ngModel)]=\"myobj.name\" placeholder=\"Name\">\r\n            <button class=\"button\" (click)=\"submitForm()\">Submit</button>\r\n            <a class=\"button\" [routerLink]=\"['/']\">Go Back</a>\r\n            </div>\r\n    </form>\r\n\r\n</body>\r\n\r\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\r\n        integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n    <link href='http://fonts.googleapis.com/css?family=Oleo+Script' rel='stylesheet' type='text/css'>\r\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"\r\n        integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"\r\n        integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"\r\n        integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\"\r\n        crossorigin=\"anonymous\"></script>\r\n    <title>Home</title>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"container\">\r\n        <h4>What ingredients do you have?</h4>\r\n        <div class=\"accordion\" id=\"accordionExample\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingOne\">\r\n\r\n                        <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n                            aria-expanded=\"false\" aria-controls=\"collapseOne\">\r\n                            Baking & Grains\r\n                        </button>\r\n             \r\n                </div>\r\n\r\n                <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\"\r\n                    data-parent=\"#accordionExample\">\r\n                    <div class=\"card-body\">\r\n                        \r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"All Purpose Flour\"\r\n                                id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"All Purpose Flour\">\r\n                                All Purpose Flour\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Bread Flour\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Bread Flour\">\r\n                                Bread Flour\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Whole-wheat Flour\"\r\n                                id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Whole-wheat Flour\">\r\n                                Whole-wheat Flour\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Baking Powder\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Baking Powder\">\r\n                                Baking Powder\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Baking Soda\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Baking Soda\">\r\n                                Baking Soda\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Rolled Oats\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Rolled Oats\">\r\n                                Rolled Oats\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Salt\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Salt\">\r\n                                Salt\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Yeast\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Yeast\">\r\n                                Yeast\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"Corn Starch\" id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"Corn Starch\">\r\n                                    Corn Starch\r\n                                </label>\r\n                            </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Cake Mix\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Cake Mix\">\r\n                                Cake Mix\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Coconut Flakes\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Coconut Flakes\">\r\n                                Coconut Flakes\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Cornmeal\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Cornmeal\">\r\n                                Cornmeal\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Cocoa Powder\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Cocoa Powder\">\r\n                                Cocoa Powder\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Nuts\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Nuts\">\r\n                                Nuts\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Almond Meal\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Almond Meal\">\r\n                                Almond Meal\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingTwo\">\r\n                  \r\n                        <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                            Sweeteners & Spices\r\n                        </button>\r\n                \r\n                </div>\r\n\r\n                <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"White Sugar\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"White SUgar\">\r\n                                White Sugar\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Brown Sugar\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Brown Sugar\">\r\n                                Brown Sugar\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Powdered Sugar\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Powdered Sugar\">\r\n                                Powdered Sugar\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"Cinnamon\" id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"Cinnamon\">\r\n                                    Cinnamon\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"Nutmeg\" id=\"defaultCheck1\">\r\n                                    <label class=\"form-check-label\" for=\"Nutmeg\">\r\n                                        Nutmeg\r\n                                    </label>\r\n                                </div>\r\n                                <div class=\"form-check\">\r\n                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"Ginger\" id=\"defaultCheck1\">\r\n                                        <label class=\"form-check-label\" for=\"Ginger\">\r\n                                            Ginger\r\n                                        </label>\r\n                                    </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Honey\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Honey\">\r\n                                Honey\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Maple Syrup\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Maple Syrup\">\r\n                                Maple Syrup\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Molasses\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Molasses\">\r\n                                Molasses\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Rolled Oats\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Rolled Oats\">\r\n                                Rolled Oats\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Agave Nectar\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Agave Nectar\">\r\n                                Agave Nectar\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Corn Syrup\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Corn Syrup\">\r\n                                Corn Syrup\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Artificial Sweetener\"\r\n                                id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Artificial Sweetener\">\r\n                                Artificial Sweetener\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" id=\"headingThree\">\r\n                        <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                            data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                            Dairy\r\n                        </button>\r\n                </div>\r\n                <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Butter\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Butter\">\r\n                                Butter\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"Margarine\" id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"Margarine\">\r\n                                    Margarine\r\n                                </label>\r\n                            </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Eggs\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Eggs\">\r\n                                Eggs\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Cream\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Cream\">\r\n                                Cream\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Buttermilk\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Buttermilk\">\r\n                                Buttermilk\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"Half-and-Half\" id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"Half-and-Half\">\r\n                                    Half-and-Half\r\n                                </label>\r\n                            </div>\r\n                        <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"Powdered Milk\" id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"Powdered Milk\">\r\n                                    Powdered Milk\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"Cream Cheese\" id=\"defaultCheck1\">\r\n                                    <label class=\"form-check-label\" for=\"Cream Cheese\">\r\n                                        Cream Cheese\r\n                                    </label>\r\n                                </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Condensed Milk\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Condensed Milk\">\r\n                                Condensed Milk\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Whipped Cream\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Whipped Cream\">\r\n                                Whipped Cream\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Almond Milk\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Almond Milk\">\r\n                                Almond Milk\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Soy Milk\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Soy Milk\">\r\n                                Soy Milk\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"Skim Milk\" id=\"defaultCheck1\">\r\n                            <label class=\"form-check-label\" for=\"Skim Milk\">\r\n                            Skim Milk\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card\">\r\n                    <div class=\"card-header\" id=\"headingFour\">\r\n                            <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\r\n                                data-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\r\n                                Miscellaneous\r\n                            </button>\r\n                    </div>\r\n    \r\n                    <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordionExample\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"Peanut Butter\"\r\n                                    id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"Peanut Butter\">\r\n                                    Peanut Butter\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"Nutella\" id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"Nutella\">\r\n                                    Nutella\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"Graham Cracker\"\r\n                                    id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"Graham Cracker\">\r\n                                    Graham Cracker\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"Chocolate Syrup\" id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"Chocolate Syrup\">\r\n                                    Chocolate Syrup\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"Marshmallow\" id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"Marshmallow\">\r\n                                    Marshmallow\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"Chocolate Chips\" id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"Chocolate Chips\">\r\n                                    Chocolate Chips\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"Jam\" id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"Jam\">\r\n                                    Jam\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"Jelly\" id=\"defaultCheck1\">\r\n                                    <label class=\"form-check-label\" for=\"Jelly\">\r\n                                        Jelly\r\n                                    </label>\r\n                                </div>\r\n                            <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"Brownie Mix\" id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"Brownniw Mix\">\r\n                                    Brownie Mix\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                    <input class=\"form-check-input\" type=\"checkbox\" value=\"Jello\" id=\"defaultCheck1\">\r\n                                    <label class=\"form-check-label\" for=\"Jello\">\r\n                                        Jello\r\n                                    </label>\r\n                                </div>\r\n                            <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"White Chocolate\" id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"White Chocolate\">\r\n                                    White Chocolate\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"Sprinkles\" id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"Sprinkles\">\r\n                                    Sprinkles\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"Coconut Flakes\" id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"Coconut Flakes\">\r\n                                    Coconut Flakes\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"Apple Sauce\" id=\"defaultCheck1\">\r\n                                <label class=\"form-check-label\" for=\"Apple Sauce\">\r\n                                    Apple Sauce\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n\r\n</body>\r\n\r\n</html>");

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
    { path: '', pathMatch: 'full', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] },
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
/* harmony default export */ __webpack_exports__["default"] = (".form-group{\r\n    width: 80%;\r\n    margin-left:5%;\r\n}\r\n.button{\r\n    background-color: greenyellow;\r\n    padding:3px 15px;\r\n    border: 1px black solid;\r\n    border-radius: 10px;\r\n    box-shadow: 0 8px 6px -6px black;\r\n    margin-top:5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDo1JTtcclxufVxyXG4uYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XHJcbiAgICBwYWRkaW5nOjNweCAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOjVweDtcclxufSJdfQ== */");

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
        this.getData();
        this.myobj = { name: '' };
    }
    getAuthor(id) {
        let observable2 = this.http.findOne(id);
        observable2.subscribe(data => {
            this.myobj = data;
            console.log(this.myobj);
        });
    }
    getData() {
        let observable = this.route.params.subscribe(data => {
            this.id = data['id'];
            this.getAuthor(this.id);
        });
    }
    submitForm() {
        let observable = this.http.edit(this.myobj);
        observable.subscribe(data => {
            console.log(data);
            this.router.navigate(['/']);
        });
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
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.container {\r\n\r\n        background-size: cover;\r\n        min-height: 900px;\r\n        min-width: 100%;\r\n        background-image: url('https://visualcocaine.org/public/uploads/large/81497721030kokdx93yy4rs2fvgviqbxhc53u3x2ppgu7im4mqs2xbpgfvpfsogkj8cjdiinu8so47gf6yui1g89eafqmz3aj9by3zvtb1demhw.jpg');\r\n}\r\nbutton {\r\n\tbackground:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);\r\n\tbackground-color:#ededed;\r\n\tborder-radius:4px;\r\n\tborder:1px solid #d6bcd6;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#4a402b;\r\n\tfont-family:Arial;\r\n\tfont-size:17px;\r\n\tpadding:7px 25px;\r\n\ttext-decoration:none;\r\n    text-shadow:0px 1px 0px #e1e2ed;\r\n    width: 100%;\r\n    \r\n}\r\nbutton:hover {\r\n\tbackground:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);\r\n\tbackground-color:#bab1ba;\r\n}\r\nbutton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n.form-check{\r\n    display: inline-block;\r\n    margin-left:2%;\r\n}\r\n.form-check:hover {\r\n\tbackground:linear-gradient(to bottom, #e9fff0 5%, #ededed 100%);\r\n    background-color:#fafffc;\r\n    border-radius: 5px;\r\n}\r\nh4{\r\n    font: 400 50px/1 'Oleo Script', Helvetica, sans-serif;\r\n    color: white;\r\n    text-shadow: 4px 4px 0px rgba(0,0,0,0.1);\r\n    padding-top: 2%;\r\n    text-shadow: 2px 2px 1px rgba(206,89,55,0.47);\r\n    margin-bottom:2px;\r\n  }\r\n.accordion{\r\n    width: 60%;\r\n    background-size: cover;\r\n    min-height: 900px;\r\n  }\r\n@media only screen and (max-width: 480px) {\r\n    .container {\r\n        background-position: center center;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        height: 100%;\r\n        background-image: url('https://r1.ilikewallpaper.net/pic/201901/stainless-steel-spoon_75665_1125x2436_640.jpg');\r\n    }\r\n    .accordion{\r\n        width:100%;\r\n    }\r\n  \r\n  h4{\r\n    font: 400 40px/1 'Oleo Script', Helvetica, sans-serif;\r\n    color: #2b2b2b;\r\n    text-shadow: 2px 2px 1px rgba(255, 255, 255, 0.47);\r\n    padding-top: 2%;\r\n    margin-bottom:2px;\r\n  }\r\n\r\n}\r\n@media only screen and (min-width: 480px) and (max-width: 1080px) {\r\n    .container {\r\n        background-position: center center;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        height: 100vh;\r\n    }\r\n    .accordion{\r\n        width:80%;\r\n        font-size: 20px;\r\n    }\r\n    .accordion button{\r\n      font-size: 23px;\r\n    }\r\n    .container h4{\r\n        font-size: 65px;\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7O1FBRVEsc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsMkxBQTJMO0FBQ25NO0FBRUE7Q0FDQywrREFBK0Q7Q0FDL0Qsd0JBQXdCO0NBQ3hCLGlCQUFpQjtDQUNqQix3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsb0JBQW9CO0lBQ2pCLCtCQUErQjtJQUMvQixXQUFXOztBQUVmO0FBQ0E7Q0FDQywrREFBK0Q7Q0FDL0Qsd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsT0FBTztBQUNSO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0NBQ0MsK0RBQStEO0lBQzVELHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHFEQUFxRDtJQUNyRCxZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZiw2Q0FBNkM7SUFDN0MsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGlCQUFpQjtFQUNuQjtBQUVGO0lBQ0k7UUFDSSxrQ0FBa0M7UUFDbEMsNEJBQTRCO1FBQzVCLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osK0dBQStHO0lBQ25IO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7O0VBRUY7SUFDRSxxREFBcUQ7SUFDckQsY0FBYztJQUNkLGtEQUFrRDtJQUNsRCxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztBQUVGO0FBQ0E7SUFDSTtRQUNJLGtDQUFrQztRQUNsQyw0QkFBNEI7UUFDNUIsc0JBQXNCO1FBQ3RCLGFBQWE7SUFDakI7SUFDQTtRQUNJLFNBQVM7UUFDVCxlQUFlO0lBQ25CO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5jb250YWluZXIge1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDkwMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdmlzdWFsY29jYWluZS5vcmcvcHVibGljL3VwbG9hZHMvbGFyZ2UvODE0OTc3MjEwMzBrb2tkeDkzeXk0cnMyZnZndmlxYnhoYzUzdTN4MnBwZ3U3aW00bXFzMnhicGdmdnBmc29na2o4Y2pkaWludThzbzQ3Z2Y2eXVpMWc4OWVhZnFtejNhajlieTN6dnRiMWRlbWh3LmpwZycpO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2VkZWRlZCA1JSwgI2JhYjFiYSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiNlZGVkZWQ7XHJcblx0Ym9yZGVyLXJhZGl1czo0cHg7XHJcblx0Ym9yZGVyOjFweCBzb2xpZCAjZDZiY2Q2O1xyXG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdGN1cnNvcjpwb2ludGVyO1xyXG5cdGNvbG9yOiM0YTQwMmI7XHJcblx0Zm9udC1mYW1pbHk6QXJpYWw7XHJcblx0Zm9udC1zaXplOjE3cHg7XHJcblx0cGFkZGluZzo3cHggMjVweDtcclxuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIHRleHQtc2hhZG93OjBweCAxcHggMHB4ICNlMWUyZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYmFiMWJhIDUlLCAjZWRlZGVkIDEwMCUpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6I2JhYjFiYTtcclxufVxyXG5idXR0b246YWN0aXZlIHtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHR0b3A6MXB4O1xyXG59XHJcbi5mb3JtLWNoZWNre1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6MiU7XHJcbn1cclxuLmZvcm0tY2hlY2s6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2U5ZmZmMCA1JSwgI2VkZWRlZCAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZhZmZmYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSBcclxuXHJcbmg0e1xyXG4gICAgZm9udDogNDAwIDUwcHgvMSAnT2xlbyBTY3JpcHQnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzogNHB4IDRweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMXB4IHJnYmEoMjA2LDg5LDU1LDAuNDcpO1xyXG4gICAgbWFyZ2luLWJvdHRvbToycHg7XHJcbiAgfVxyXG4gIC5hY2NvcmRpb257XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDkwMHB4O1xyXG4gIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vcjEuaWxpa2V3YWxscGFwZXIubmV0L3BpYy8yMDE5MDEvc3RhaW5sZXNzLXN0ZWVsLXNwb29uXzc1NjY1XzExMjV4MjQzNl82NDAuanBnJyk7XHJcbiAgICB9XHJcbiAgICAuYWNjb3JkaW9ue1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgaDR7XHJcbiAgICBmb250OiA0MDAgNDBweC8xICdPbGVvIFNjcmlwdCcsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMmIyYjJiO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40Nyk7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjJweDtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB9XHJcbiAgICAuYWNjb3JkaW9ue1xyXG4gICAgICAgIHdpZHRoOjgwJTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuYWNjb3JkaW9uIGJ1dHRvbntcclxuICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciBoNHtcclxuICAgICAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */");

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
        this.myUrl = '';
        this.myobjects = [{ name: "" }];
    }
    ngOnInit() {
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
    constructor(http) {
        this.http = http;
    }
    findAll() {
        return this.http.get('/api/findAll');
    }
    findOne(id) {
        return this.http.get(`/api/findOne/${id}`);
    }
    create(myobj) {
        return this.http.post('/api/create', myobj);
    }
    edit(myobj) {
        return this.http.put(`/api/edit/${myobj._id}`, myobj);
    }
    delete(myobj) {
        return this.http.delete(`/api/delete/${myobj._id}`);
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