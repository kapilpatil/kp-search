(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"navbar navbar-dark bg-dark box-shadow\">\n        <div class=\"container d-flex justify-content-between\">\n            <a href=\"#\" class=\"navbar-brand d-flex align-items-center\">\n\n                <strong>United Airlines</strong>\n            </a>\n\n        </div>\n    </div>\n</header>\n<main role=\"main\">\n\n    <div class=\"container containerUnitedairline\">\n        <div class=\"row\" *ngIf=\"!searchComplete\">\n            <div class=\"col-md-12\">\n                <form class=\"needs-validation\" novalidate [formGroup]=\"flightSearchForm\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12 mb-3\">\n                            <span class=\"switchsearch\" *ngIf=\"!searchflightnumber\" (click)=\"switchsearch()\">Search with flight Number</span>\n                            <span class=\"switchsearch\" *ngIf=\"!searchorigindes\" (click)=\"switchsearch()\">Search with Origin/Destination</span>\n                        </div>\n                    </div>\n                    <div class=\"mb-3\" *ngIf=\"searchflightnumber\">\n                        <label for=\"flightnumber\" class=\"required\">Flight Number</label>\n                        <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">#</span>\n                            </div>\n                            <input type=\"text\" pInputText class=\"form-control\" formControlName=\"flightNumber\" placeholder=\"Flight Number\">\n                            <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                                Your flightnumber is required.\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\" *ngIf=\"searchorigindes\">\n                        <div class=\"col-md-6 mb-3\">\n                            <label for=\"origin\" class=\"required\">Origin</label>\n                            <input type=\"text\" pInputText class=\"form-control\" placeholder=\"Origin\" formControlName=\"origin\">\n                            <div class=\"invalid-feedback\">\n                                Valid origin is required.\n                            </div>\n                        </div>\n                        <div class=\"col-md-6 mb-3\">\n                            <label for=\"destination\" class=\"required\">Destination</label>\n                            <input type=\"text\" pInputText class=\"form-control\" placeholder=\"Destination\" formControlName=\"destination\">\n                            <div class=\"invalid-feedback\">\n                                Valid destination is required.\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-6 mb-3\">\n                            <label for=\"origin\">From</label><br>\n\n                            <p-calendar [inline]=\"true\" [minDate]=\"today\" formControlName=\"fromdate\"></p-calendar>\n\n\n\n                            <!--  <p-calendar [showIcon]=\"true\" [maxDate]=\"maxCatchupDateValue\" readonlyInput=\"true\" dateFormat=\"mm/dd/yy\" formControlName=\"catupDate\" placeholder=\"MM/DD/YYYY\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1970:2030\"></p-calendar>-->\n\n                            <div class=\"invalid-feedback\">\n                                Valid fromdate is required.\n                            </div>\n                        </div>\n                        <div class=\"col-md-6 mb-3\">\n                            <label for=\"destination\">To</label><br>\n                            <p-calendar [inline]=\"true\" formControlName=\"todate\" [minDate]=\"this.flightSearchForm.get('fromdate').value\"></p-calendar>\n                            <div class=\"invalid-feedback\">\n                                Valid todate is required.\n                            </div>\n                        </div>\n                    </div>\n\n\n\n                    <hr class=\"mb-4\">\n                    <button pButton icon=\"pi pi-check\" iconPos=\"left\" class=\"btn btn-primary btn-lg btn-block\" type=\"button\" [disabled]=\"!flightSearchForm.valid\" (click)=\"searchflight()\">Continue to Flight Search</button>\n\n                </form>\n            </div>\n        </div>\n\n        <div class=\"col-md-12 mb-3\" *ngIf=\"searchComplete\">\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-3\">\n\n                    <span class=\"switchsearch\" (click)=\"searchComplete=!searchComplete\">Return to search</span>\n                </div>\n                <div class=\"col-md-12 mb-3\">\n                    <h4>Search Results</h4>\n                </div>\n            </div>\n\n\n            <p-table [value]=\"searchResults\" class=\"tableclass\">\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th>Name</th>\n                        <th>arrival</th>\n                        <th>carrier</th>\n                        <th>departure</th>\n                        <th>destination</th>\n                        <th>distance</th>\n                        <th>flightNumber</th>\n                        <th>origin</th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-record>\n                    <tr>\n                        <td>{{record.aircraft}}</td>\n                        <td>{{record.arrival | date:'MM/dd/yyyy'}}</td>\n                        <td>{{record.carrier}}</td>\n                        <td>{{record.departure | date:'MM/dd/yyyy'}}</td>\n                        <td>{{record.destination}}</td>\n                        <td>{{record.distance}}</td>\n                        <td>{{record.flightNumber}}</td>\n                        <td>{{record.origin}}</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n\n        </div>\n    </div>\n</main>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.title = 'app';
        this.searchflightnumber = false;
        this.searchorigindes = true;
        this.today = new Date();
        this.searchComplete = true;
        this.searchResults = [];
        this.searchForm();
    }
    AppComponent.prototype.searchForm = function () {
        var _this = this;
        this.flightSearchForm = this.fb.group({
            flightNumber: [null],
            destination: [null],
            origin: [null],
            fromdate: [null],
            todate: [null]
        }, {
            validator: function (group) {
                if (_this.searchflightnumber) {
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required((group.controls.flightNumber));
                }
                if (_this.searchorigindes) {
                    return _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required((group.controls.destination));
                }
                return null;
            }
        });
    };
    AppComponent.prototype.searchflight = function () {
        var _this = this;
        var form = this.flightSearchForm.value;
        var params = "ori=" + form.origin + "&des=" + form.destination + "&from=" + form.fromdate + "&to=" + form.todate;
        if (this.searchflightnumber) {
            params = "flightNumber=" + form.flightNumber + "&from=" + form.fromdate + "&to=" + form.todate;
        }
        this.service.search(params).subscribe(function (data) {
            //  debugger;
            _this.searchComplete = true;
            _this.searchResults = data;
        }, function (error) {
            alert('Service failed; Please check stubs.');
        });
    };
    AppComponent.prototype.switchsearch = function () {
        this.searchflightnumber = !this.searchflightnumber;
        this.searchorigindes = !this.searchorigindes;
        this.flightSearchForm.patchValue({
            flightNumber: '', destination: '', origin: ''
        });
        /* this.flightSearchForm.get('flightNumber').clearValidators();
         this.flightSearchForm.get('origin').clearValidators();
         this.flightSearchForm.get('destination').clearValidators();
     
         if (this.searchflightnumber) {
           this.flightSearchForm.get('flightNumber').setValidators([Validators.required, Validators.minLength(4)]);
           this.flightSearchForm.get('flightNumber').updateValueAndValidity();
         }else {
           this.flightSearchForm.get('origin').setValidators([Validators.required, Validators.minLength(3)]);
           this.flightSearchForm.get('origin').updateValueAndValidity();
           this.flightSearchForm.get('destination').setValidators([Validators.required, Validators.minLength(3)]);
            this.flightSearchForm.get('destination').updateValueAndValidity();
         }*/
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _app_service__WEBPACK_IMPORTED_MODULE_2__["FlightSearchService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["DataTableModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["DialogModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__["FlightSearchService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: FlightSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightSearchService", function() { return FlightSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/Rx';
var FlightSearchService = /** @class */ (function () {
    function FlightSearchService(http) {
        this.http = http;
    }
    FlightSearchService.prototype.search = function (params) {
        var url = "http://localhost:8882/searchFlights?" + params;
        return this.http.get(url); //.pipe(map((response: any) => response.json()));
        //.pipe(map((res: Response) => { return res; }))
        /*.catch((err: Response | any) => {
            return Observable.throw(err.statusText);
        });*/
    };
    FlightSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FlightSearchService);
    return FlightSearchService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\kapil\simpleFlightSearch\angular6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map