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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_entity_sightseeing_sightseeing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/entity/sightseeing/sightseeing.component */ "./src/app/components/entity/sightseeing/sightseeing.component.ts");
/* harmony import */ var _components_entity_activity_activity_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/entity/activity/activity.component */ "./src/app/components/entity/activity/activity.component.ts");
/* harmony import */ var _components_entity_restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/entity/restaurant/restaurant.component */ "./src/app/components/entity/restaurant/restaurant.component.ts");
/* harmony import */ var _components_entity_list_sightseeing_sightseeing_full_list_sightseeing_full_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/entity-list/sightseeing/sightseeing-full-list/sightseeing-full-list.component */ "./src/app/components/entity-list/sightseeing/sightseeing-full-list/sightseeing-full-list.component.ts");
/* harmony import */ var _components_entity_list_restaurant_restaurant_full_list_restaurant_full_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/entity-list/restaurant/restaurant-full-list/restaurant-full-list.component */ "./src/app/components/entity-list/restaurant/restaurant-full-list/restaurant-full-list.component.ts");
/* harmony import */ var _components_entity_list_hotel_hotel_full_list_hotel_full_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/entity-list/hotel/hotel-full-list/hotel-full-list.component */ "./src/app/components/entity-list/hotel/hotel-full-list/hotel-full-list.component.ts");
/* harmony import */ var _components_city_list_city_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/city-list/city-list.component */ "./src/app/components/city-list/city-list.component.ts");
/* harmony import */ var _components_city_city_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/city/city.component */ "./src/app/components/city/city.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_entity_list_activity_activity_full_list_activity_full_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/entity-list/activity/activity-full-list/activity-full-list.component */ "./src/app/components/entity-list/activity/activity-full-list/activity-full-list.component.ts");
/* harmony import */ var _components_entity_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/entity/hotel/hotel.component */ "./src/app/components/entity/hotel/hotel.component.ts");















const routes = [
    { path: 'cities/:id/hotels/:idEntity', component: _components_entity_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_12__["HotelComponent"] },
    { path: 'cities/:id/restaurants/:idEntity', component: _components_entity_restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_2__["RestaurantComponent"] },
    { path: 'cities/:id/activities/:idEntity', component: _components_entity_activity_activity_component__WEBPACK_IMPORTED_MODULE_1__["ActivityComponent"] },
    { path: 'cities/:id/sightseeing/:idEntity', component: _components_entity_sightseeing_sightseeing_component__WEBPACK_IMPORTED_MODULE_0__["SightseeingComponent"] },
    { path: 'cities/:id/hotels', component: _components_entity_list_hotel_hotel_full_list_hotel_full_list_component__WEBPACK_IMPORTED_MODULE_5__["HotelFullListComponent"] },
    { path: 'cities/:id/restaurants', component: _components_entity_list_restaurant_restaurant_full_list_restaurant_full_list_component__WEBPACK_IMPORTED_MODULE_4__["RestaurantFullListComponent"] },
    { path: 'cities/:id/activities', component: _components_entity_list_activity_activity_full_list_activity_full_list_component__WEBPACK_IMPORTED_MODULE_11__["ActivityFullListComponent"] },
    { path: 'cities/:id/sightseeing', component: _components_entity_list_sightseeing_sightseeing_full_list_sightseeing_full_list_component__WEBPACK_IMPORTED_MODULE_3__["SightseeingFullListComponent"] },
    { path: 'cities/:id', component: _components_city_city_component__WEBPACK_IMPORTED_MODULE_7__["CityComponent"] },
    { path: 'cities', component: _components_city_list_city_list_component__WEBPACK_IMPORTED_MODULE_6__["CityListComponent"] },
    { path: '', component: _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "uk-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _components_review_review_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/review/review.component */ "./src/app/components/review/review.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_city_city_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/city/city.component */ "./src/app/components/city/city.component.ts");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _components_city_list_city_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/city-list/city-list.component */ "./src/app/components/city-list/city-list.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_entry_filter_entry_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/entry-filter/entry-filter.component */ "./src/app/components/entry-filter/entry-filter.component.ts");
/* harmony import */ var _components_subnav_subnav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/subnav/subnav.component */ "./src/app/components/subnav/subnav.component.ts");
/* harmony import */ var _components_entity_carousel_entity_carousel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/entity-carousel/entity-carousel.component */ "./src/app/components/entity-carousel/entity-carousel.component.ts");
/* harmony import */ var _components_entity_list_hotel_carousel_hotel_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/entity-list/hotel/carousel/hotel-list.component */ "./src/app/components/entity-list/hotel/carousel/hotel-list.component.ts");
/* harmony import */ var _components_entity_list_restaurant_carousel_restaurant_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/entity-list/restaurant/carousel/restaurant-list.component */ "./src/app/components/entity-list/restaurant/carousel/restaurant-list.component.ts");
/* harmony import */ var _components_entity_list_activity_carousel_activity_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/entity-list/activity/carousel/activity-list.component */ "./src/app/components/entity-list/activity/carousel/activity-list.component.ts");
/* harmony import */ var _components_entity_list_sightseeing_carousel_sightseeing_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/entity-list/sightseeing/carousel/sightseeing-list.component */ "./src/app/components/entity-list/sightseeing/carousel/sightseeing-list.component.ts");
/* harmony import */ var _components_entity_list_hotel_hotel_full_list_hotel_full_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/entity-list/hotel/hotel-full-list/hotel-full-list.component */ "./src/app/components/entity-list/hotel/hotel-full-list/hotel-full-list.component.ts");
/* harmony import */ var _components_entity_list_restaurant_restaurant_full_list_restaurant_full_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/entity-list/restaurant/restaurant-full-list/restaurant-full-list.component */ "./src/app/components/entity-list/restaurant/restaurant-full-list/restaurant-full-list.component.ts");
/* harmony import */ var _components_entity_list_activity_activity_full_list_activity_full_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/entity-list/activity/activity-full-list/activity-full-list.component */ "./src/app/components/entity-list/activity/activity-full-list/activity-full-list.component.ts");
/* harmony import */ var _components_entity_list_sightseeing_sightseeing_full_list_sightseeing_full_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/entity-list/sightseeing/sightseeing-full-list/sightseeing-full-list.component */ "./src/app/components/entity-list/sightseeing/sightseeing-full-list/sightseeing-full-list.component.ts");
/* harmony import */ var _components_entity_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/entity/hotel/hotel.component */ "./src/app/components/entity/hotel/hotel.component.ts");
/* harmony import */ var _components_entity_activity_activity_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/entity/activity/activity.component */ "./src/app/components/entity/activity/activity.component.ts");
/* harmony import */ var _components_entity_restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/entity/restaurant/restaurant.component */ "./src/app/components/entity/restaurant/restaurant.component.ts");
/* harmony import */ var _components_entity_sightseeing_sightseeing_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/entity/sightseeing/sightseeing.component */ "./src/app/components/entity/sightseeing/sightseeing.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/review-list/review-list.component */ "./src/app/components/review-list/review-list.component.ts");
/* harmony import */ var _components_entity_slideshow_entity_slideshow_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/entity-slideshow/entity-slideshow.component */ "./src/app/components/entity-slideshow/entity-slideshow.component.ts");
/* harmony import */ var _components_price_level_price_level_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/price-level/price-level.component */ "./src/app/components/price-level/price-level.component.ts");
/* harmony import */ var _components_review_edit_review_edit_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/review-edit/review-edit.component */ "./src/app/components/review-edit/review-edit.component.ts");

































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbRatingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbDatepickerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["SearchBarComponent"],
        _components_city_city_component__WEBPACK_IMPORTED_MODULE_8__["CityComponent"],
        _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbComponent"],
        _components_city_list_city_list_component__WEBPACK_IMPORTED_MODULE_10__["CityListComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
        _components_entry_filter_entry_filter_component__WEBPACK_IMPORTED_MODULE_12__["EntryFilterComponent"],
        _components_subnav_subnav_component__WEBPACK_IMPORTED_MODULE_13__["SubnavComponent"],
        _components_entity_list_hotel_carousel_hotel_list_component__WEBPACK_IMPORTED_MODULE_15__["HotelListComponent"],
        _components_entity_carousel_entity_carousel_component__WEBPACK_IMPORTED_MODULE_14__["EntityCarouselComponent"],
        _components_entity_list_restaurant_carousel_restaurant_list_component__WEBPACK_IMPORTED_MODULE_16__["RestaurantListComponent"],
        _components_entity_list_activity_carousel_activity_list_component__WEBPACK_IMPORTED_MODULE_17__["ActivityListComponent"],
        _components_entity_list_sightseeing_carousel_sightseeing_list_component__WEBPACK_IMPORTED_MODULE_18__["SightseeingListComponent"],
        _components_entity_list_hotel_hotel_full_list_hotel_full_list_component__WEBPACK_IMPORTED_MODULE_19__["HotelFullListComponent"],
        _components_entity_list_restaurant_restaurant_full_list_restaurant_full_list_component__WEBPACK_IMPORTED_MODULE_20__["RestaurantFullListComponent"],
        _components_entity_list_activity_activity_full_list_activity_full_list_component__WEBPACK_IMPORTED_MODULE_21__["ActivityFullListComponent"],
        _components_entity_list_sightseeing_sightseeing_full_list_sightseeing_full_list_component__WEBPACK_IMPORTED_MODULE_22__["SightseeingFullListComponent"],
        _components_entity_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_23__["HotelComponent"],
        _components_entity_activity_activity_component__WEBPACK_IMPORTED_MODULE_24__["ActivityComponent"],
        _components_entity_restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_25__["RestaurantComponent"],
        _components_entity_sightseeing_sightseeing_component__WEBPACK_IMPORTED_MODULE_26__["SightseeingComponent"],
        _components_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_28__["ReviewListComponent"],
        _components_entity_slideshow_entity_slideshow_component__WEBPACK_IMPORTED_MODULE_29__["EntitySlideshowComponent"],
        _components_review_review_component__WEBPACK_IMPORTED_MODULE_0__["ReviewComponent"],
        _components_price_level_price_level_component__WEBPACK_IMPORTED_MODULE_30__["PriceLevelComponent"],
        _components_review_edit_review_edit_component__WEBPACK_IMPORTED_MODULE_31__["ReviewEditComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbRatingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbDatepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["SearchBarComponent"],
                    _components_city_city_component__WEBPACK_IMPORTED_MODULE_8__["CityComponent"],
                    _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbComponent"],
                    _components_city_list_city_list_component__WEBPACK_IMPORTED_MODULE_10__["CityListComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                    _components_entry_filter_entry_filter_component__WEBPACK_IMPORTED_MODULE_12__["EntryFilterComponent"],
                    _components_subnav_subnav_component__WEBPACK_IMPORTED_MODULE_13__["SubnavComponent"],
                    _components_entity_list_hotel_carousel_hotel_list_component__WEBPACK_IMPORTED_MODULE_15__["HotelListComponent"],
                    _components_entity_carousel_entity_carousel_component__WEBPACK_IMPORTED_MODULE_14__["EntityCarouselComponent"],
                    _components_entity_list_restaurant_carousel_restaurant_list_component__WEBPACK_IMPORTED_MODULE_16__["RestaurantListComponent"],
                    _components_entity_list_activity_carousel_activity_list_component__WEBPACK_IMPORTED_MODULE_17__["ActivityListComponent"],
                    _components_entity_list_sightseeing_carousel_sightseeing_list_component__WEBPACK_IMPORTED_MODULE_18__["SightseeingListComponent"],
                    _components_entity_list_hotel_hotel_full_list_hotel_full_list_component__WEBPACK_IMPORTED_MODULE_19__["HotelFullListComponent"],
                    _components_entity_list_restaurant_restaurant_full_list_restaurant_full_list_component__WEBPACK_IMPORTED_MODULE_20__["RestaurantFullListComponent"],
                    _components_entity_list_activity_activity_full_list_activity_full_list_component__WEBPACK_IMPORTED_MODULE_21__["ActivityFullListComponent"],
                    _components_entity_list_sightseeing_sightseeing_full_list_sightseeing_full_list_component__WEBPACK_IMPORTED_MODULE_22__["SightseeingFullListComponent"],
                    _components_entity_hotel_hotel_component__WEBPACK_IMPORTED_MODULE_23__["HotelComponent"],
                    _components_entity_activity_activity_component__WEBPACK_IMPORTED_MODULE_24__["ActivityComponent"],
                    _components_entity_restaurant_restaurant_component__WEBPACK_IMPORTED_MODULE_25__["RestaurantComponent"],
                    _components_entity_sightseeing_sightseeing_component__WEBPACK_IMPORTED_MODULE_26__["SightseeingComponent"],
                    _components_review_list_review_list_component__WEBPACK_IMPORTED_MODULE_28__["ReviewListComponent"],
                    _components_entity_slideshow_entity_slideshow_component__WEBPACK_IMPORTED_MODULE_29__["EntitySlideshowComponent"],
                    _components_review_review_component__WEBPACK_IMPORTED_MODULE_0__["ReviewComponent"],
                    _components_price_level_price_level_component__WEBPACK_IMPORTED_MODULE_30__["PriceLevelComponent"],
                    _components_review_edit_review_edit_component__WEBPACK_IMPORTED_MODULE_31__["ReviewEditComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbRatingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbDatepickerModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.ts ***!
  \***************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/cities/"]; };
function BreadcrumbComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Germany");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a0) { return [a0]; };
function BreadcrumbComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, "/cities/" + ctx_r50.cityId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r50.cityName);
} }
function BreadcrumbComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, "/cities/" + ctx_r51.cityId + "/" + ctx_r51.entityType.toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.entityType);
} }
function BreadcrumbComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, "/cities/" + ctx_r52.cityId + "/" + ctx_r52.entityType.toLowerCase() + "/" + ctx_r52.entityId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r52.entityName);
} }
class BreadcrumbComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { showCountry: "showCountry", cityName: "cityName", cityId: "cityId", entityType: "entityType", entityId: "entityId", entityName: "entityName" }, decls: 5, vars: 4, consts: [[1, "uk-margin-remove-left", "uk-breadcrumb"], [4, "ngIf"], [3, "routerLink"], [1, "uk-disabled", 3, "routerLink"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_li_1_Template, 3, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_Template, 3, 4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BreadcrumbComponent_li_3_Template, 3, 4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BreadcrumbComponent_li_4_Template, 3, 4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCountry === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cityId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: ['./breadcrumb.component.css']
            }]
    }], function () { return []; }, { showCountry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cityName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cityId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], entityType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], entityId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], entityName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/city-list/city-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/city-list/city-list.component.ts ***!
  \*************************************************************/
/*! exports provided: CityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityListComponent", function() { return CityListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/get-city.service */ "./src/app/services/get-city.service.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function (a0) { return [a0]; };
function CityListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r36 = ctx.$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "/cities/" + city_r36.cityId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r35.imageUrlList[city_r36.cityId - 1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r36.name);
} }
class CityListComponent {
    constructor(cityService) {
        this.cityService = cityService;
    }
    ngOnInit() {
        this.cityService.getCityData().subscribe(cities => this.cities = cities);
        this.imageUrlList = this.cityService.cityImageUrls;
    }
}
CityListComponent.ɵfac = function CityListComponent_Factory(t) { return new (t || CityListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_1__["GetCityService"])); };
CityListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CityListComponent, selectors: [["app-city-list"]], decls: 4, vars: 4, consts: [[3, "showCountry", "cityName", "cityId"], [1, "uk-position-center"], ["uk-grid", "", 1, "uk-child-width-1-3@m", "uk-grid-match"], [4, "ngFor", "ngForOf"], [3, "routerLink"], ["tabindex", "0", 1, "uk-inline-clip", "uk-transition-toggle", "uk-transition-fade-cover", "uk-light"], ["alt", "", 1, "resize-cities", 3, "src"], [1, "uk-transition-slide-bottom-small"], [1, "uk-margin-remove"]], template: function CityListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CityListComponent_div_3_Template, 8, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCountry", false)("cityName", null)("cityId", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2l0eS1saXN0L2NpdHktbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-city-list',
                templateUrl: './city-list.component.html',
                styleUrls: ['./city-list.component.css']
            }]
    }], function () { return [{ type: src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_1__["GetCityService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/city/city.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/city/city.component.ts ***!
  \***************************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_get_city_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/get-city.service */ "./src/app/services/get-city.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _entity_carousel_entity_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity-carousel/entity-carousel.component */ "./src/app/components/entity-carousel/entity-carousel.component.ts");






class CityComponent {
    constructor(cityService, route, router) {
        this.cityService = cityService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.cityService.cities.subscribe(cities => {
            this.cityId = Number(this.route.snapshot.paramMap.get('id'));
            if (cities.filter(city => city.cityId === this.cityId).length !== 0) {
                this.cities = cities;
                this.cityName = this.cityService.getCityNameById(cities, this.cityId);
            }
            else {
                this.router.navigate(['cities/']);
            }
        });
    }
}
CityComponent.ɵfac = function CityComponent_Factory(t) { return new (t || CityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_get_city_service__WEBPACK_IMPORTED_MODULE_1__["GetCityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CityComponent, selectors: [["app-city"]], decls: 3, vars: 3, consts: [[3, "showCountry", "cityName", "cityId"], [1, "uk-margin-medium-top", "uk-container-default", "uk-align-center"]], template: function CityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-entity-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCountry", true)("cityName", ctx.cityName)("cityId", ctx.cityId);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"], _entity_carousel_entity_carousel_component__WEBPACK_IMPORTED_MODULE_4__["EntityCarouselComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2l0eS9jaXR5LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-city',
                templateUrl: './city.component.html',
                styleUrls: ['./city.component.css']
            }]
    }], function () { return [{ type: _services_get_city_service__WEBPACK_IMPORTED_MODULE_1__["GetCityService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/entity-carousel/entity-carousel.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/entity-carousel/entity-carousel.component.ts ***!
  \*************************************************************************/
/*! exports provided: EntityCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityCarouselComponent", function() { return EntityCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _entity_list_hotel_carousel_hotel_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entity-list/hotel/carousel/hotel-list.component */ "./src/app/components/entity-list/hotel/carousel/hotel-list.component.ts");
/* harmony import */ var _entity_list_restaurant_carousel_restaurant_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entity-list/restaurant/carousel/restaurant-list.component */ "./src/app/components/entity-list/restaurant/carousel/restaurant-list.component.ts");
/* harmony import */ var _entity_list_activity_carousel_activity_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity-list/activity/carousel/activity-list.component */ "./src/app/components/entity-list/activity/carousel/activity-list.component.ts");
/* harmony import */ var _entity_list_sightseeing_carousel_sightseeing_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity-list/sightseeing/carousel/sightseeing-list.component */ "./src/app/components/entity-list/sightseeing/carousel/sightseeing-list.component.ts");






class EntityCarouselComponent {
    constructor() {
    }
    ngOnInit() { }
}
EntityCarouselComponent.ɵfac = function EntityCarouselComponent_Factory(t) { return new (t || EntityCarouselComponent)(); };
EntityCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntityCarouselComponent, selectors: [["app-entity-carousel"]], decls: 19, vars: 0, consts: [["uk-slider", ""], ["tabindex", "-1", 1, "uk-position-relative", "uk-visible-toggle"], [1, "uk-slider-container"], [1, "uk-grid-match", "uk-slider-items", "uk-child-width-1-3@m", "uk-grid"], [1, "uk-hidden@m", "uk-light"], ["href", "#", "uk-slidenav-previous", "", "uk-slider-item", "previous", 1, "uk-position-center-left", "uk-position-small"], ["href", "#", "uk-slidenav-next", "", "uk-slider-item", "next", 1, "uk-position-center-right", "uk-position-small"], [1, "uk-visible@m"], ["href", "#", "uk-slidenav-previous", "", "uk-slider-item", "previous", 1, "uk-position-center-left-out", "uk-position-small"], ["href", "#", "uk-slidenav-next", "", "uk-slider-item", "next", 1, "uk-position-center-right-out", "uk-position-small"], [1, "uk-slider-nav", "uk-dotnav", "uk-flex-center", "uk-margin"]], template: function EntityCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-hotel-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-restaurant-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-activity-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-sightseeing-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_entity_list_hotel_carousel_hotel_list_component__WEBPACK_IMPORTED_MODULE_1__["HotelListComponent"], _entity_list_restaurant_carousel_restaurant_list_component__WEBPACK_IMPORTED_MODULE_2__["RestaurantListComponent"], _entity_list_activity_carousel_activity_list_component__WEBPACK_IMPORTED_MODULE_3__["ActivityListComponent"], _entity_list_sightseeing_carousel_sightseeing_list_component__WEBPACK_IMPORTED_MODULE_4__["SightseeingListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5LWNhcm91c2VsL2VudGl0eS1jYXJvdXNlbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntityCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-entity-carousel',
                templateUrl: './entity-carousel.component.html',
                styleUrls: ['./entity-carousel.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/entity-list/activity/activity-full-list/activity-full-list.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/entity-list/activity/activity-full-list/activity-full-list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ActivityFullListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityFullListComponent", function() { return ActivityFullListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_model_entry_filter_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/entry-filter-object */ "./src/app/model/entry-filter-object.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/get-city.service */ "./src/app/services/get-city.service.ts");
/* harmony import */ var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _subnav_subnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../subnav/subnav.component */ "./src/app/components/subnav/subnav.component.ts");
/* harmony import */ var _entry_filter_entry_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../entry-filter/entry-filter.component */ "./src/app/components/entry-filter/entry-filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _price_level_price_level_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../price-level/price-level.component */ "./src/app/components/price-level/price-level.component.ts");












const _c0 = function (a0) { return [a0]; };
function ActivityFullListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-price-level", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r40 = ctx.$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, "/cities/" + ctx_r39.cityId + "/activities/" + activity_r40.activityId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r39.urlList[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r40.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 6, activity_r40.averageRating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("priceLevel", activity_r40.priceLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r40.description);
} }
class ActivityFullListComponent {
    constructor(route, cityService, entityService, filterService) {
        this.route = route;
        this.cityService = cityService;
        this.entityService = entityService;
        this.filterService = filterService;
        this.filterObject = new src_app_model_entry_filter_object__WEBPACK_IMPORTED_MODULE_1__["EntryFilterObject"]();
    }
    ngOnInit() {
        this.cityId = Number(this.route.snapshot.paramMap.get('id'));
        this.urlList = this.entityService.entityImageUrls.activityImageUrls;
        this.cityService.cities.subscribe(cities => {
            this.cities = cities;
            this.cityName = this.cityService.getCityNameById(this.cities, this.cityId);
        });
        this.entityService.getActivities(this.cityId).subscribe(activities => this.activities = activities);
        this.filterObject.entryType = this.route.snapshot.url[2].path;
    }
    handleSubmit(receivedFilterObject) {
        receivedFilterObject.cityId = this.cityId;
        this.filterObject = receivedFilterObject;
        this.filterObject.entryType = this.route.snapshot.url[2].path;
        this.filterService.filterResults(receivedFilterObject)
            .subscribe(a => this.activities = a);
    }
}
ActivityFullListComponent.ɵfac = function ActivityFullListComponent_Factory(t) { return new (t || ActivityFullListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__["GetCityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"])); };
ActivityFullListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivityFullListComponent, selectors: [["app-activity-full-list"]], decls: 6, vars: 6, consts: [[3, "showCountry", "cityName", "cityId", "entityType"], [1, "uk-margin-medium-top"], [3, "cityId"], [3, "submitFilterObjekt"], ["uk-grid", "", "uk-scrollspy", "cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: false", 1, "uk-margin-medium-top", "uk-child-width-1-3@s"], [4, "ngFor", "ngForOf"], [1, "uk-link-reset", 3, "routerLink"], [1, "uk-card", "uk-box-shadow-hover-xlarge", "uk-card-default"], [1, "uk-card-media-top"], ["alt", "", 3, "src"], [1, "uk-card-body"], ["uk-grid", "", 1, "uk-margin-remove-left", "uk-grid-match", "uk-grid-small", "uk-text-left"], [1, "uk-width-3-5@s", "uk-width-2-3@s", "uk-margin-right"], [1, "uk-card-title"], [1, "uk-child-width-expand"], [1, "uk-flex", "uk-flex-middle", "uk-flex-right"], ["uk-icon", "icon: star; ratio: 1.5"], [1, "uk-flex", "uk-flex-middle", "uk-flex-left", "uk-margin-small-left"], [1, "uk-text-lead"], [1, "uk-width-1-6@s"], [3, "priceLevel"]], template: function ActivityFullListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-subnav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-entry-filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitFilterObjekt", function ActivityFullListComponent_Template_app_entry_filter_submitFilterObjekt_3_listener($event) { return ctx.handleSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ActivityFullListComponent_div_5_Template, 21, 11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCountry", true)("cityName", ctx.cityName)("cityId", ctx.cityId)("entityType", "Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cityId", ctx.cityId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activities);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], _subnav_subnav_component__WEBPACK_IMPORTED_MODULE_7__["SubnavComponent"], _entry_filter_entry_filter_component__WEBPACK_IMPORTED_MODULE_8__["EntryFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _price_level_price_level_component__WEBPACK_IMPORTED_MODULE_10__["PriceLevelComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5LWxpc3QvYWN0aXZpdHkvYWN0aXZpdHktZnVsbC1saXN0L2FjdGl2aXR5LWZ1bGwtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityFullListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activity-full-list',
                templateUrl: './activity-full-list.component.html',
                styleUrls: ['./activity-full-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__["GetCityService"] }, { type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] }, { type: _services_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/entity-list/activity/carousel/activity-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/entity-list/activity/carousel/activity-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ActivityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityListComponent", function() { return ActivityListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0) { return [a0]; };
function ActivityListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r70 = ctx.$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "/cities/" + ctx_r69.cityId + "/activities/" + activity_r70.activityId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r70.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 4, activity_r70.averageRating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r69.urlList[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ActivityListComponent {
    constructor(route, entityService) {
        this.route = route;
        this.entityService = entityService;
    }
    ngOnInit() {
        this.cityId = Number(this.route.snapshot.paramMap.get('id'));
        this.urlList = this.entityService.entityImageUrls.activityImageUrls;
        this.entityService.getActivities(this.cityId).subscribe(activities => {
            this.activities = lodash__WEBPACK_IMPORTED_MODULE_1__["shuffle"](activities).slice(0, 5);
        });
    }
}
ActivityListComponent.ɵfac = function ActivityListComponent_Factory(t) { return new (t || ActivityListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"])); };
ActivityListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivityListComponent, selectors: [["app-activity-list"]], decls: 11, vars: 7, consts: [["uk-grid", "", 1, "uk-grid-collapse", "uk-child-width-expand@s"], [1, "uk-flex", "uk-flex-middle", "uk-flex-center"], [1, "uk-link-reset", 3, "routerLink"], [1, "uk-margin-remove-bottom", "uk-margin-medium-left", "uk-text-light"], [1, "uk-flex", "uk-flex-middle", "uk-flex-right"], [1, "uk-link-muted", 3, "routerLink"], [1, "uk-margin-remove-bottom", "uk-margin-right", "uk-text-small"], [4, "ngFor", "ngForOf"], ["uk-grid", "", 1, "uk-grid-collapse", "uk-child-width-expand@s", "uk-grid-match", "uk-margin-small-top", "uk-margin-remove-left", "uk-box-shadow-hover-medium", "uk-background-muted"], [1, "uk-flex", "uk-flex-middle", "uk-margin-medium-left"], [1, "uk-text-lead", "uk-text-small", "uk-text-center"], [1, "uk-grid-collapse", "uk-child-width-expand@s"], ["uk-icon", "icon: star; ratio: 0.9"], [1, "uk-flex", "uk-flex-middle", "uk-flex-left", "uk-margin-small-left"], [1, "uk-text-lead", "uk-text-small"], [1, "uk-padding-remove-left", "uk-flex-first"], ["alt", "Image", 3, "src"]], template: function ActivityListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ActivityListComponent_div_10_Template, 15, 9, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "/cities/" + ctx.cityId + "/activities"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "/cities/" + ctx.cityId + "/activities"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activities);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5LWxpc3QvYWN0aXZpdHkvY2Fyb3VzZWwvYWN0aXZpdHktbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activity-list',
                templateUrl: './activity-list.component.html',
                styleUrls: ['./activity-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/entity-list/hotel/carousel/hotel-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/entity-list/hotel/carousel/hotel-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HotelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelListComponent", function() { return HotelListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0) { return [a0]; };
function HotelListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hotel_r66 = ctx.$implicit;
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "/cities/" + ctx_r65.cityId + "/hotels/" + hotel_r66.hotelId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r66.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 4, hotel_r66.averageRating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r65.urlList[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class HotelListComponent {
    constructor(route, entityService) {
        this.route = route;
        this.entityService = entityService;
    }
    ngOnInit() {
        this.cityId = Number(this.route.snapshot.paramMap.get('id'));
        this.urlList = this.entityService.entityImageUrls.hotelImageUrls;
        this.entityService.getHotels(this.cityId).subscribe(hotels => {
            this.hotels = lodash__WEBPACK_IMPORTED_MODULE_1__["shuffle"](hotels).slice(0, 5);
        });
    }
}
HotelListComponent.ɵfac = function HotelListComponent_Factory(t) { return new (t || HotelListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"])); };
HotelListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HotelListComponent, selectors: [["app-hotel-list"]], decls: 11, vars: 7, consts: [["uk-grid", "", 1, "uk-grid-collapse", "uk-child-width-expand@s"], [1, "uk-flex", "uk-flex-middle", "uk-flex-center"], [1, "uk-link-reset", 3, "routerLink"], [1, "uk-margin-remove-bottom", "uk-margin-medium-left", "uk-text-light"], [1, "uk-flex", "uk-flex-middle", "uk-flex-right"], [1, "uk-link-muted", 3, "routerLink"], [1, "uk-margin-remove-bottom", "uk-margin-right", "uk-text-small"], [4, "ngFor", "ngForOf"], ["uk-grid", "", 1, "uk-grid-collapse", "uk-child-width-expand@s", "uk-grid-match", "uk-margin-small-top", "uk-margin-remove-left", "uk-box-shadow-hover-medium", "uk-background-muted"], [1, "uk-flex", "uk-flex-middle", "uk-margin-medium-left"], [1, "uk-text-lead", "uk-text-small", "uk-text-center"], [1, "uk-grid-collapse", "uk-child-width-expand@s"], ["uk-icon", "icon: star; ratio: 0.9"], [1, "uk-flex", "uk-flex-middle", "uk-flex-left", "uk-margin-small-left"], [1, "uk-text-lead", "uk-text-small"], [1, "uk-padding-remove-left", "uk-flex-first"], ["alt", "Image", 3, "src"]], template: function HotelListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hotels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HotelListComponent_div_10_Template, 15, 9, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "/cities/" + ctx.cityId + "/hotels"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "/cities/" + ctx.cityId + "/hotels"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hotels);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5LWxpc3QvaG90ZWwvY2Fyb3VzZWwvaG90ZWwtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotelListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hotel-list',
                templateUrl: './hotel-list.component.html',
                styleUrls: ['./hotel-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/entity-list/hotel/hotel-full-list/hotel-full-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/entity-list/hotel/hotel-full-list/hotel-full-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: HotelFullListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelFullListComponent", function() { return HotelFullListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_model_entry_filter_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/entry-filter-object */ "./src/app/model/entry-filter-object.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/get-city.service */ "./src/app/services/get-city.service.ts");
/* harmony import */ var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _subnav_subnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../subnav/subnav.component */ "./src/app/components/subnav/subnav.component.ts");
/* harmony import */ var _entry_filter_entry_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../entry-filter/entry-filter.component */ "./src/app/components/entry-filter/entry-filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _price_level_price_level_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../price-level/price-level.component */ "./src/app/components/price-level/price-level.component.ts");












const _c0 = function (a0) { return [a0]; };
function HotelFullListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-price-level", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hotel_r34 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, "/cities/" + ctx_r33.cityId + "/hotels/" + hotel_r34.hotelId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r33.urlList[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r34.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 6, hotel_r34.averageRating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("priceLevel", hotel_r34.priceLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r34.description);
} }
class HotelFullListComponent {
    constructor(route, cityService, entityService, filterService) {
        this.route = route;
        this.cityService = cityService;
        this.entityService = entityService;
        this.filterService = filterService;
        this.filterObject = new src_app_model_entry_filter_object__WEBPACK_IMPORTED_MODULE_1__["EntryFilterObject"]();
    }
    ngOnInit() {
        this.cityId = Number(this.route.snapshot.paramMap.get('id'));
        this.urlList = this.entityService.entityImageUrls.hotelImageUrls;
        this.cityService.cities.subscribe(cities => {
            this.cities = cities;
            this.cityName = this.cityService.getCityNameById(this.cities, this.cityId);
        });
        this.entityService.getHotels(this.cityId).subscribe(hotels => this.hotels = hotels);
        this.filterObject.entryType = this.route.snapshot.url[2].path;
    }
    handleSubmit(receivedFilterObject) {
        receivedFilterObject.cityId = this.cityId;
        this.filterObject = receivedFilterObject;
        this.filterObject.entryType = this.route.snapshot.url[2].path;
        this.filterService.filterResults(receivedFilterObject)
            .subscribe(hotels => this.hotels = hotels);
    }
}
HotelFullListComponent.ɵfac = function HotelFullListComponent_Factory(t) { return new (t || HotelFullListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__["GetCityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"])); };
HotelFullListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HotelFullListComponent, selectors: [["app-hotel-full-list"]], decls: 6, vars: 6, consts: [[3, "showCountry", "cityName", "cityId", "entityType"], [1, "uk-margin-medium-top"], [3, "cityId"], [3, "submitFilterObjekt"], ["uk-scrollspy", "cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: false", "uk-grid", "", 1, "uk-margin-medium-top", "uk-child-width-1-3@s"], [4, "ngFor", "ngForOf"], [1, "uk-link-reset", 3, "routerLink"], [1, "uk-card", "uk-box-shadow-hover-xlarge", "uk-card-default"], [1, "uk-card-media-top"], ["alt", "", 3, "src"], [1, "uk-card-body"], ["uk-grid", "", 1, "uk-margin-remove-left", "uk-grid-match", "uk-grid-small", "uk-text-left"], [1, "uk-width-3-5@s", "uk-width-2-3@s", "uk-margin-right"], [1, "uk-card-title"], [1, "uk-child-width-expand"], [1, "uk-flex", "uk-flex-middle", "uk-flex-right"], ["uk-icon", "icon: star; ratio: 1.5"], [1, "uk-flex", "uk-flex-middle", "uk-flex-left", "uk-margin-small-left"], [1, "uk-text-lead"], [1, "uk-width-1-6@s"], [3, "priceLevel"]], template: function HotelFullListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-subnav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-entry-filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitFilterObjekt", function HotelFullListComponent_Template_app_entry_filter_submitFilterObjekt_3_listener($event) { return ctx.handleSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HotelFullListComponent_div_5_Template, 21, 11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCountry", true)("cityName", ctx.cityName)("cityId", ctx.cityId)("entityType", "Hotels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cityId", ctx.cityId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hotels);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], _subnav_subnav_component__WEBPACK_IMPORTED_MODULE_7__["SubnavComponent"], _entry_filter_entry_filter_component__WEBPACK_IMPORTED_MODULE_8__["EntryFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _price_level_price_level_component__WEBPACK_IMPORTED_MODULE_10__["PriceLevelComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5LWxpc3QvaG90ZWwvaG90ZWwtZnVsbC1saXN0L2hvdGVsLWZ1bGwtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotelFullListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hotel-full-list',
                templateUrl: './hotel-full-list.component.html',
                styleUrls: ['./hotel-full-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__["GetCityService"] }, { type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] }, { type: src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/entity-list/restaurant/carousel/restaurant-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/entity-list/restaurant/carousel/restaurant-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RestaurantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantListComponent", function() { return RestaurantListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0) { return [a0]; };
function RestaurantListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const restaurant_r68 = ctx.$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "/cities/" + ctx_r67.cityId + "/restaurants/" + restaurant_r68.restaurantId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](restaurant_r68.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 4, restaurant_r68.averageRating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r67.urlList[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class RestaurantListComponent {
    constructor(route, entityService) {
        this.route = route;
        this.entityService = entityService;
    }
    ngOnInit() {
        this.cityId = Number(this.route.snapshot.paramMap.get('id'));
        this.urlList = this.entityService.entityImageUrls.restaurantImageUrls;
        this.entityService.getRestaurants(this.cityId).subscribe(restaurants => {
            this.restaurants = lodash__WEBPACK_IMPORTED_MODULE_1__["shuffle"](restaurants).slice(0, 5);
        });
    }
}
RestaurantListComponent.ɵfac = function RestaurantListComponent_Factory(t) { return new (t || RestaurantListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"])); };
RestaurantListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RestaurantListComponent, selectors: [["app-restaurant-list"]], decls: 11, vars: 7, consts: [["uk-grid", "", 1, "uk-grid-collapse", "uk-child-width-expand@s"], [1, "uk-flex", "uk-flex-middle", "uk-flex-center"], [1, "uk-link-reset", 3, "routerLink"], [1, "uk-margin-remove-bottom", "uk-margin-medium-left", "uk-text-light"], [1, "uk-flex", "uk-flex-middle", "uk-flex-right"], [1, "uk-link-muted", 3, "routerLink"], [1, "uk-margin-remove-bottom", "uk-margin-right", "uk-text-small"], [4, "ngFor", "ngForOf"], ["uk-grid", "", 1, "uk-grid-match", "uk-grid-collapse", "uk-child-width-expand@s", "uk-margin-small-top", "uk-margin-remove-left", "uk-box-shadow-hover-medium", "uk-background-muted"], [1, "uk-flex", "uk-flex-middle", "uk-margin-medium-left"], [1, "uk-text-lead", "uk-text-small", "uk-text-center"], [1, "uk-grid-collapse", "uk-child-width-expand@s"], ["uk-icon", "icon: star; ratio: 0.9"], [1, "uk-flex", "uk-flex-middle", "uk-flex-left", "uk-margin-small-left"], [1, "uk-text-lead", "uk-text-small"], [1, "uk-padding-remove-left", "uk-flex-first"], ["alt", "Image", 3, "src"]], template: function RestaurantListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Restaurants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RestaurantListComponent_div_10_Template, 15, 9, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "/cities/" + ctx.cityId + "/restaurants"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "/cities/" + ctx.cityId + "/restaurants"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.restaurants);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5LWxpc3QvcmVzdGF1cmFudC9jYXJvdXNlbC9yZXN0YXVyYW50LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestaurantListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-restaurant-list',
                templateUrl: './restaurant-list.component.html',
                styleUrls: ['./restaurant-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/entity-list/restaurant/restaurant-full-list/restaurant-full-list.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/entity-list/restaurant/restaurant-full-list/restaurant-full-list.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RestaurantFullListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantFullListComponent", function() { return RestaurantFullListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_model_entry_filter_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/entry-filter-object */ "./src/app/model/entry-filter-object.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/get-city.service */ "./src/app/services/get-city.service.ts");
/* harmony import */ var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _subnav_subnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../subnav/subnav.component */ "./src/app/components/subnav/subnav.component.ts");
/* harmony import */ var _entry_filter_entry_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../entry-filter/entry-filter.component */ "./src/app/components/entry-filter/entry-filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _price_level_price_level_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../price-level/price-level.component */ "./src/app/components/price-level/price-level.component.ts");












const _c0 = function (a0) { return [a0]; };
function RestaurantFullListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-price-level", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const restaurant_r32 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, "/cities/" + ctx_r31.cityId + "/restaurants/" + restaurant_r32.restaurantId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r31.urlList[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](restaurant_r32.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 6, restaurant_r32.averageRating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("priceLevel", restaurant_r32.priceLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](restaurant_r32.description);
} }
class RestaurantFullListComponent {
    constructor(route, cityService, entityService, filterService) {
        this.route = route;
        this.cityService = cityService;
        this.entityService = entityService;
        this.filterService = filterService;
        this.filterObject = new src_app_model_entry_filter_object__WEBPACK_IMPORTED_MODULE_1__["EntryFilterObject"]();
    }
    ngOnInit() {
        this.cityId = Number(this.route.snapshot.paramMap.get('id'));
        this.urlList = this.entityService.entityImageUrls.restaurantImageUrls;
        this.cityService.cities.subscribe(cities => {
            this.cities = cities;
            this.cityName = this.cityService.getCityNameById(this.cities, this.cityId);
        });
        this.entityService.getRestaurants(this.cityId).subscribe(restaurants => this.restaurants = restaurants);
        this.filterObject.entryType = this.route.snapshot.url[2].path;
    }
    handleSubmit(receivedFilterObject) {
        receivedFilterObject.cityId = this.cityId;
        this.filterObject = receivedFilterObject;
        this.filterObject.entryType = this.route.snapshot.url[2].path;
        this.filterService.filterResults(receivedFilterObject)
            .subscribe(restaurants => this.restaurants = restaurants);
    }
}
RestaurantFullListComponent.ɵfac = function RestaurantFullListComponent_Factory(t) { return new (t || RestaurantFullListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__["GetCityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"])); };
RestaurantFullListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RestaurantFullListComponent, selectors: [["app-restaurant-full-list"]], decls: 6, vars: 6, consts: [[3, "showCountry", "cityName", "cityId", "entityType"], [1, "uk-margin-medium-top"], [3, "cityId"], [3, "submitFilterObjekt"], ["uk-grid", "", "uk-scrollspy", "cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: false", 1, "uk-margin-medium-top", "uk-child-width-1-3@s"], [4, "ngFor", "ngForOf"], [1, "uk-link-reset", 3, "routerLink"], [1, "uk-card", "uk-box-shadow-hover-xlarge", "uk-card-default"], [1, "uk-card-media-top"], ["alt", "", 3, "src"], [1, "uk-card-body"], ["uk-grid", "", 1, "uk-margin-remove-left", "uk-grid-match", "uk-grid-small", "uk-text-left"], [1, "uk-width-3-5@s", "uk-width-2-3@s", "uk-margin-right"], [1, "uk-card-title"], [1, "uk-child-width-expand"], [1, "uk-flex", "uk-flex-middle", "uk-flex-right"], ["uk-icon", "icon: star; ratio: 1.5"], [1, "uk-flex", "uk-flex-middle", "uk-flex-left", "uk-margin-small-left"], [1, "uk-text-lead"], [1, "uk-width-1-6@s"], [3, "priceLevel"]], template: function RestaurantFullListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-subnav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-entry-filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitFilterObjekt", function RestaurantFullListComponent_Template_app_entry_filter_submitFilterObjekt_3_listener($event) { return ctx.handleSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RestaurantFullListComponent_div_5_Template, 21, 11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCountry", true)("cityName", ctx.cityName)("cityId", ctx.cityId)("entityType", "Restaurants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cityId", ctx.cityId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.restaurants);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], _subnav_subnav_component__WEBPACK_IMPORTED_MODULE_7__["SubnavComponent"], _entry_filter_entry_filter_component__WEBPACK_IMPORTED_MODULE_8__["EntryFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _price_level_price_level_component__WEBPACK_IMPORTED_MODULE_10__["PriceLevelComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5LWxpc3QvcmVzdGF1cmFudC9yZXN0YXVyYW50LWZ1bGwtbGlzdC9yZXN0YXVyYW50LWZ1bGwtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestaurantFullListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-restaurant-full-list',
                templateUrl: './restaurant-full-list.component.html',
                styleUrls: ['./restaurant-full-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__["GetCityService"] }, { type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] }, { type: src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/entity-list/sightseeing/carousel/sightseeing-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/entity-list/sightseeing/carousel/sightseeing-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SightseeingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightseeingListComponent", function() { return SightseeingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function (a0) { return [a0]; };
function SightseeingListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sightseeing_r72 = ctx.$implicit;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "/cities/" + ctx_r71.cityId + "/sightseeing/" + sightseeing_r72.sightseeingId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sightseeing_r72.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 4, sightseeing_r72.averageRating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r71.urlList[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class SightseeingListComponent {
    constructor(route, entityService) {
        this.route = route;
        this.entityService = entityService;
    }
    ngOnInit() {
        this.cityId = Number(this.route.snapshot.paramMap.get('id'));
        this.urlList = this.entityService.entityImageUrls.sightseeingImageUrls;
        this.entityService.getSightseeings(this.cityId).subscribe(sightseeings => {
            this.sightseeings = lodash__WEBPACK_IMPORTED_MODULE_1__["shuffle"](sightseeings).slice(0, 5);
        });
    }
}
SightseeingListComponent.ɵfac = function SightseeingListComponent_Factory(t) { return new (t || SightseeingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"])); };
SightseeingListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SightseeingListComponent, selectors: [["app-sightseeing-list"]], decls: 11, vars: 7, consts: [["uk-grid", "", 1, "uk-grid-collapse", "uk-child-width-expand@s"], [1, "uk-flex", "uk-flex-middle", "uk-flex-center"], [1, "uk-link-reset", 3, "routerLink"], [1, "uk-margin-remove-bottom", "uk-margin-medium-left", "uk-text-light"], [1, "uk-flex", "uk-flex-middle", "uk-flex-right"], [1, "uk-link-muted", 3, "routerLink"], [1, "uk-margin-remove-bottom", "uk-margin-right", "uk-text-small"], [4, "ngFor", "ngForOf"], ["uk-grid", "", 1, "uk-grid-match", "uk-grid-collapse", "uk-child-width-expand@s", "uk-margin-small-top", "uk-margin-remove-left", "uk-box-shadow-hover-medium", "uk-background-muted"], [1, "uk-flex", "uk-flex-middle", "uk-margin-medium-left"], [1, "uk-text-lead", "uk-text-small", "uk-text-center"], [1, "uk-grid-collapse", "uk-child-width-expand@s"], ["uk-icon", "icon: star; ratio: 0.9"], [1, "uk-flex", "uk-flex-middle", "uk-flex-left", "uk-margin-small-left"], [1, "uk-text-lead", "uk-text-small"], [1, "uk-padding-remove-left", "uk-flex-first"], ["alt", "Image", 3, "src"]], template: function SightseeingListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sightseeing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SightseeingListComponent_div_10_Template, 15, 9, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "/cities/" + ctx.cityId + "/sightseeing"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "/cities/" + ctx.cityId + "/sightseeing"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sightseeings);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5LWxpc3Qvc2lnaHRzZWVpbmcvY2Fyb3VzZWwvc2lnaHRzZWVpbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SightseeingListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sightseeing-list',
                templateUrl: './sightseeing-list.component.html',
                styleUrls: ['./sightseeing-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_3__["EntityService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/entity-list/sightseeing/sightseeing-full-list/sightseeing-full-list.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/entity-list/sightseeing/sightseeing-full-list/sightseeing-full-list.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SightseeingFullListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightseeingFullListComponent", function() { return SightseeingFullListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_model_entry_filter_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/entry-filter-object */ "./src/app/model/entry-filter-object.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/get-city.service */ "./src/app/services/get-city.service.ts");
/* harmony import */ var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _subnav_subnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../subnav/subnav.component */ "./src/app/components/subnav/subnav.component.ts");
/* harmony import */ var _entry_filter_entry_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../entry-filter/entry-filter.component */ "./src/app/components/entry-filter/entry-filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = function (a0) { return [a0]; };
function SightseeingFullListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sightseeing_r30 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, "/cities/" + ctx_r29.cityId + "/sightseeing/" + sightseeing_r30.sightseeingId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r29.urlList[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sightseeing_r30.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 5, sightseeing_r30.averageRating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sightseeing_r30.description);
} }
class SightseeingFullListComponent {
    constructor(route, cityService, entityService, filterService) {
        this.route = route;
        this.cityService = cityService;
        this.entityService = entityService;
        this.filterService = filterService;
        this.filterObject = new src_app_model_entry_filter_object__WEBPACK_IMPORTED_MODULE_1__["EntryFilterObject"]();
    }
    ngOnInit() {
        this.cityId = Number(this.route.snapshot.paramMap.get('id'));
        this.urlList = this.entityService.entityImageUrls.sightseeingImageUrls;
        this.cityService.cities.subscribe(cities => {
            this.cities = cities;
            this.cityName = this.cityService.getCityNameById(this.cities, this.cityId);
        });
        this.entityService.getSightseeings(this.cityId).subscribe(sightseeings => this.sightseeings = sightseeings);
        this.filterObject.entryType = this.route.snapshot.url[2].path;
    }
    handleSubmit(receivedFilterObject) {
        receivedFilterObject.cityId = this.cityId;
        this.filterObject = receivedFilterObject;
        this.filterObject.entryType = this.route.snapshot.url[2].path;
        this.filterService.filterResults(receivedFilterObject)
            .subscribe(sightseeings => this.sightseeings = sightseeings);
    }
}
SightseeingFullListComponent.ɵfac = function SightseeingFullListComponent_Factory(t) { return new (t || SightseeingFullListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__["GetCityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"])); };
SightseeingFullListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SightseeingFullListComponent, selectors: [["app-sightseeing-full-list"]], decls: 6, vars: 6, consts: [[3, "showCountry", "cityName", "cityId", "entityType"], [1, "uk-margin-medium-top"], [3, "cityId"], [3, "submitFilterObjekt"], ["uk-grid", "", "uk-scrollspy", "cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: false", 1, "uk-margin-medium-top", "uk-child-width-1-3@s"], [4, "ngFor", "ngForOf"], [1, "uk-link-reset", 3, "routerLink"], [1, "uk-card", "uk-box-shadow-hover-xlarge", "uk-card-default"], [1, "uk-card-media-top"], ["alt", "", 3, "src"], [1, "uk-card-body"], ["uk-grid", "", 1, "uk-margin-remove-left", "uk-grid-match", "uk-grid-small", "uk-text-left"], [1, "uk-width-3-5@s", "uk-width-2-3@s", "uk-margin-right"], [1, "uk-card-title"], [1, "uk-width-1-5@s", "uk-hidden@s"], [1, "uk-child-width-expand"], [1, "uk-flex", "uk-flex-middle", "uk-flex-right"], ["uk-icon", "icon: star; ratio: 1.5"], [1, "uk-flex", "uk-flex-middle", "uk-flex-left", "uk-margin-small-left"], [1, "uk-text-lead"]], template: function SightseeingFullListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-subnav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-entry-filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitFilterObjekt", function SightseeingFullListComponent_Template_app_entry_filter_submitFilterObjekt_3_listener($event) { return ctx.handleSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SightseeingFullListComponent_div_5_Template, 20, 10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCountry", true)("cityName", ctx.cityName)("cityId", ctx.cityId)("entityType", "Sightseeing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cityId", ctx.cityId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sightseeings);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], _subnav_subnav_component__WEBPACK_IMPORTED_MODULE_7__["SubnavComponent"], _entry_filter_entry_filter_component__WEBPACK_IMPORTED_MODULE_8__["EntryFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5LWxpc3Qvc2lnaHRzZWVpbmcvc2lnaHRzZWVpbmctZnVsbC1saXN0L3NpZ2h0c2VlaW5nLWZ1bGwtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SightseeingFullListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sightseeing-full-list',
                templateUrl: './sightseeing-full-list.component.html',
                styleUrls: ['./sightseeing-full-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__["GetCityService"] }, { type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] }, { type: src_app_services_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/entity-slideshow/entity-slideshow.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/entity-slideshow/entity-slideshow.component.ts ***!
  \***************************************************************************/
/*! exports provided: EntitySlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitySlideshowComponent", function() { return EntitySlideshowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function EntitySlideshowComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const url_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", url_r80, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class EntitySlideshowComponent {
    constructor(entityService) {
        this.entityService = entityService;
    }
    ngOnInit() {
        if (this.entityType === 'hotel') {
            this.entitySlideShowImageUrls = this.entityService.entitySlideshowImageUrls.hotelImageUrls;
        }
        else if (this.entityType === 'restaurant') {
            this.entitySlideShowImageUrls = this.entityService.entitySlideshowImageUrls.restaurantImageUrls;
        }
        else if (this.entityType === 'activity') {
            this.entitySlideShowImageUrls = this.entityService.entitySlideshowImageUrls.activityImageUrls;
        }
        else if (this.entityType === 'sightseeing') {
            this.entitySlideShowImageUrls = this.entityService.entitySlideshowImageUrls.sightseeingImageUrls;
        }
    }
}
EntitySlideshowComponent.ɵfac = function EntitySlideshowComponent_Factory(t) { return new (t || EntitySlideshowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_1__["EntityService"])); };
EntitySlideshowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntitySlideshowComponent, selectors: [["app-entity-slideshow"]], inputs: { entityType: "entityType" }, decls: 7, vars: 1, consts: [[1, "uk-slider"], ["tabindex", "-1", "uk-slider", "center: true", 1, "uk-position-relative", "uk-visible-toggle", "uk-light"], [1, "uk-slider-items", "uk-grid"], ["class", "uk-width-3-4", 4, "ngFor", "ngForOf"], ["href", "#", "uk-slidenav-previous", "", "uk-slider-item", "previous", 1, "uk-position-center-left", "uk-position-small", "uk-hidden-hover"], ["href", "#", "uk-slidenav-next", "", "uk-slider-item", "next", 1, "uk-position-center-right", "uk-position-small", "uk-hidden-hover"], [1, "uk-slider-nav", "uk-dotnav", "uk-flex-center"], [1, "uk-width-3-4"], [1, "uk-panel"], ["alt", "", 3, "src"]], template: function EntitySlideshowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EntitySlideshowComponent_li_3_Template, 3, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.entitySlideShowImageUrls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5LXNsaWRlc2hvdy9lbnRpdHktc2xpZGVzaG93LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntitySlideshowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-entity-slideshow',
                templateUrl: './entity-slideshow.component.html',
                styleUrls: ['./entity-slideshow.component.css']
            }]
    }], function () { return [{ type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_1__["EntityService"] }]; }, { entityType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/entity/activity/activity.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/entity/activity/activity.component.ts ***!
  \******************************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/get-city.service */ "./src/app/services/get-city.service.ts");
/* harmony import */ var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/review.service */ "./src/app/services/review.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../review-list/review-list.component */ "./src/app/components/review-list/review-list.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../review/review.component */ "./src/app/components/review/review.component.ts");
/* harmony import */ var _entity_slideshow_entity_slideshow_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../entity-slideshow/entity-slideshow.component */ "./src/app/components/entity-slideshow/entity-slideshow.component.ts");












function ActivityComponent_app_breadcrumb_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-breadcrumb", 4);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCountry", true)("cityName", ctx_r18.cityName)("cityId", ctx_r18.cityId)("entityType", "Activities")("entityName", ctx_r18.activity.name);
} }
const _c0 = function (a0) { return [a0]; };
function ActivityComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "in Germany");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-review", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "From our users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-entity-slideshow", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.activity.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 12, ctx_r19.activity.averageRating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, "/cities/" + ctx_r19.cityId + "/activities"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r19.activity.ranking, " of 100 things to do");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entityType", "activities")("headline", ctx_r19.activity.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r19.activity.streetAddress, ", ", ctx_r19.cityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.activity.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.activity.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.activity.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entityType", "activity");
} }
function ActivityComponent_hr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 24);
} }
class ActivityComponent {
    constructor(route, router, cityService, entityService, reviewService) {
        this.route = route;
        this.router = router;
        this.cityService = cityService;
        this.entityService = entityService;
        this.reviewService = reviewService;
    }
    ngOnInit() {
        this.cityId = Number(this.route.snapshot.paramMap.get('id'));
        this.activityId = Number(this.route.snapshot.paramMap.get('idEntity'));
        this.reviewService.listenToTriggerRefreshReviews().subscribe(() => {
            this.updateOverallRatingOnAddReview();
        });
        this.cityService.cities.subscribe(cities => {
            this.cities = cities;
            this.cityName = this.cityService.getCityNameById(this.cities, this.cityId);
        });
        const activity = this.entityService.getActivityById(this.activityId);
        const activities = this.entityService.getActivities(this.cityId);
        const activityReviews = this.reviewService.getReviewsOfActivity(this.activityId);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([activity, activities, activityReviews]).subscribe(data => {
            this.activity = data[0];
            this.activities = data[1];
            this.activityReviews = data[2];
        }, error => this.router.navigate([`cities/${this.cityId}`]));
    }
    updateOverallRatingOnAddReview() {
        this.entityService.getActivityById(this.activityId).subscribe(activity => this.activity = activity);
    }
}
ActivityComponent.ɵfac = function ActivityComponent_Factory(t) { return new (t || ActivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__["GetCityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"])); };
ActivityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivityComponent, selectors: [["app-activity"]], decls: 5, vars: 4, consts: [[3, "showCountry", "cityName", "cityId", "entityType", "entityName", 4, "ngIf"], [4, "ngIf"], ["class", "uk-divider-icon", 4, "ngIf"], [3, "reviews"], [3, "showCountry", "cityName", "cityId", "entityType", "entityName"], ["data-src", "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", "uk-img", "", 1, "uk-height-medium", "uk-flex", "uk-flex-center", "uk-flex-middle", "uk-background-cover", "uk-light"], ["uk-grid", "", 1, "uk-margin-medium-top", "uk-margin-remove-left", "uk-margin-remove-right"], [1, "uk-padding-remove-left", "uk-width-1-3@s", "uk-flex-first"], [1, "uk-padding-remove-right", "uk-margin-small-right", "uk-card", "uk-card-body"], ["uk-icon", "icon: star; ratio: 1.7"], [1, "uk-margin-small-left", "uk-text-middle", "uk-text-large", "uk-text-emphasis"], [1, "uk-heading-medium", "uk-text-light", "uk-align-right", "uk-margin-remove-adjacent", "uk-margin-bottom"], ["uk-grid", "", 1, "uk-grid-collapse", "uk-child-width-expand@s"], [1, "uk-flex-column"], [1, "uk-link-muted", "uk-text-center", 3, "routerLink"], [1, "uk-align-center", "uk-margin-remove-bottom"], [1, "uk-flex", "uk-flex-middle", "uk-flex-center"], [3, "entityType", "headline"], [1, "uk-flex-column", "uk-card", "uk-card-body", "uk-text-center"], [1, "uk-padding-xsmall-left", "uk-width-2-3@s"], [1, "uk-padding-remove-left", "uk-padding-remove-bottom", "uk-margin-small-left", "uk-card", "uk-card-body"], [1, "uk-card-title"], [1, "uk-margin-medium-top", "uk-margin-medium-bottom"], [3, "entityType"], [1, "uk-divider-icon"]], template: function ActivityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ActivityComponent_app_breadcrumb_0_Template, 1, 5, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActivityComponent_div_1_Template, 46, 17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ActivityComponent_hr_2_Template, 1, 0, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-review-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activity && ctx.activities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activity && ctx.activities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activity && ctx.activities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reviews", ctx.activityReviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_7__["ReviewListComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _review_review_component__WEBPACK_IMPORTED_MODULE_9__["ReviewComponent"], _entity_slideshow_entity_slideshow_component__WEBPACK_IMPORTED_MODULE_10__["EntitySlideshowComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5L2FjdGl2aXR5L2FjdGl2aXR5LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activity',
                templateUrl: './activity.component.html',
                styleUrls: ['./activity.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__["GetCityService"] }, { type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] }, { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/entity/hotel/hotel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/entity/hotel/hotel.component.ts ***!
  \************************************************************/
/*! exports provided: HotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelComponent", function() { return HotelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/get-city.service */ "./src/app/services/get-city.service.ts");
/* harmony import */ var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/review.service */ "./src/app/services/review.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../review-list/review-list.component */ "./src/app/components/review-list/review-list.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../review/review.component */ "./src/app/components/review/review.component.ts");
/* harmony import */ var _entity_slideshow_entity_slideshow_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../entity-slideshow/entity-slideshow.component */ "./src/app/components/entity-slideshow/entity-slideshow.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");













function HotelComponent_app_breadcrumb_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-breadcrumb", 4);
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCountry", true)("cityName", ctx_r41.cityName)("cityId", ctx_r41.cityId)("entityType", "Hotels")("entityName", ctx_r41.hotel.name);
} }
function HotelComponent_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quality of sleep");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngb-rating", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function HotelComponent_div_1_div_29_Template_ngb_rating_rateChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.qualityOfSleepRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngb-rating", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function HotelComponent_div_1_div_29_Template_ngb_rating_rateChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.locationRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngb-rating", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function HotelComponent_div_1_div_29_Template_ngb_rating_rateChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.serviceRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r44.qualityOfSleepRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r44.locationRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r44.serviceRating);
} }
const _c0 = function (a0) { return [a0]; };
function HotelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " in Germany");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-review", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HotelComponent_div_1_div_29_Template, 19, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Facilities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-entity-slideshow", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.hotel.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 13, ctx_r42.hotel.averageRating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, "/cities/" + ctx_r42.cityId + "/hotels"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r42.hotel.ranking, " of 100 hotels ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entityType", "hotels")("headline", ctx_r42.hotel.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.hotelReviews.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r42.hotel.streetAddress, ", ", ctx_r42.cityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.hotel.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.hotel.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.hotel.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entityType", "hotel");
} }
function HotelComponent_hr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 32);
} }
class HotelComponent {
    constructor(route, router, cityService, entityService, reviewService) {
        this.route = route;
        this.router = router;
        this.cityService = cityService;
        this.entityService = entityService;
        this.reviewService = reviewService;
        this.qualityOfSleepRating = 0;
        this.locationRating = 0;
        this.serviceRating = 0;
    }
    ngOnInit() {
        this.cityId = Number(this.route.snapshot.paramMap.get('id'));
        this.hotelId = Number(this.route.snapshot.paramMap.get('idEntity'));
        this.reviewService.listenToTriggerRefreshReviews().subscribe(() => {
            this.updateOverallRatingOnAddReview();
        });
        this.cityService.cities.subscribe(cities => {
            this.cities = cities;
            this.cityName = this.cityService.getCityNameById(this.cities, this.cityId);
        });
        const hotel = this.entityService.getHotelById(this.hotelId);
        const hotels = this.entityService.getHotels(this.cityId);
        const hotelReviews = this.reviewService.getReviewsOfHotel(this.hotelId);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([hotel, hotels, hotelReviews]).subscribe(data => {
            this.hotel = data[0];
            this.hotels = data[1];
            this.hotelReviews = data[2];
            this.calculateAverageFacilityRatings();
        }, error => this.router.navigate([`cities/${this.cityId}`]));
    }
    calculateAverageFacilityRatings() {
        for (const review of this.hotelReviews) {
            this.qualityOfSleepRating += review.qualityOfSleepRating / this.hotelReviews.length;
            this.locationRating += review.locationRating / this.hotelReviews.length;
            this.serviceRating += review.serviceRating / this.hotelReviews.length;
        }
    }
    updateOverallRatingOnAddReview() {
        this.entityService.getHotelById(this.hotelId).subscribe(hotel => this.hotel = hotel);
    }
}
HotelComponent.ɵfac = function HotelComponent_Factory(t) { return new (t || HotelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__["GetCityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"])); };
HotelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HotelComponent, selectors: [["app-hotel"]], decls: 5, vars: 4, consts: [[3, "showCountry", "cityName", "cityId", "entityType", "entityName", 4, "ngIf"], [4, "ngIf"], ["class", "uk-divider-icon", 4, "ngIf"], [3, "reviews"], [3, "showCountry", "cityName", "cityId", "entityType", "entityName"], ["data-src", "https://images.unsplash.com/photo-1551525212-a1dc18871d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80", "uk-img", "", 1, "uk-height-medium", "uk-flex", "uk-flex-center", "uk-flex-middle", "uk-background-cover", "uk-light"], ["uk-grid", "", 1, "uk-margin-medium-top", "uk-margin-remove-left", "uk-margin-remove-right"], [1, "uk-padding-remove-left", "uk-width-1-3@s", "uk-flex-first"], [1, "uk-padding-remove-right", "uk-margin-small-right", "uk-card", "uk-card-body"], ["uk-icon", "icon: star; ratio: 1.7"], [1, "uk-margin-small-left", "uk-text-middle", "uk-text-large", "uk-text-emphasis"], [1, "uk-heading-medium", "uk-text-light", "uk-align-right", "uk-margin-remove-adjacent", "uk-margin-bottom"], ["uk-grid", "", 1, "uk-grid-collapse", "uk-child-width-expand@s"], [1, "uk-flex-column"], [1, "uk-link-muted", "uk-text-center", 3, "routerLink"], [1, "uk-align-center", "uk-margin-remove-bottom"], [1, "uk-flex", "uk-flex-middle", "uk-flex-center"], [3, "entityType", "headline"], [1, "uk-margin-medium-top", "uk-padding-remove-horizontal", "container"], ["class", "uk-grid-small uk-child-width-expand@s uk-text-center", "uk-grid", "", 4, "ngIf"], [1, "uk-flex-column", "uk-card", "uk-card-body", "uk-text-center"], [1, "uk-padding-xsmall-left", "uk-width-2-3@s"], [1, "uk-padding-remove-left", "uk-padding-remove-bottom", "uk-margin-small-left", "uk-card", "uk-card-body"], [1, "uk-card-title"], [1, "uk-margin-medium-top", "uk-margin-medium-bottom"], [3, "entityType"], ["uk-grid", "", 1, "uk-grid-small", "uk-child-width-expand@s", "uk-text-center"], [1, "uk-margin-small-right", "uk-margin-small-left", "uk-flex", "uk-flex-column"], [1, "uk-text-nowrap", "uk-flex", "uk-flex-center"], ["max", "5", "readonly", "true", 3, "rate", "rateChange"], [1, "uk-flex", "uk-flex-column"], [1, "uk-margin-small-left"], [1, "uk-divider-icon"]], template: function HotelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HotelComponent_app_breadcrumb_0_Template, 1, 5, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HotelComponent_div_1_Template, 48, 18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HotelComponent_hr_2_Template, 1, 0, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-review-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hotel && ctx.hotels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hotel && ctx.hotels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hotel && ctx.hotels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reviews", ctx.hotelReviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_7__["ReviewListComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _review_review_component__WEBPACK_IMPORTED_MODULE_9__["ReviewComponent"], _entity_slideshow_entity_slideshow_component__WEBPACK_IMPORTED_MODULE_10__["EntitySlideshowComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbRating"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5L2hvdGVsL2hvdGVsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hotel',
                templateUrl: './hotel.component.html',
                styleUrls: ['./hotel.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__["GetCityService"] }, { type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] }, { type: _services_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/entity/restaurant/restaurant.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/entity/restaurant/restaurant.component.ts ***!
  \**********************************************************************/
/*! exports provided: RestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantComponent", function() { return RestaurantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/get-city.service */ "./src/app/services/get-city.service.ts");
/* harmony import */ var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/review.service */ "./src/app/services/review.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../review-list/review-list.component */ "./src/app/components/review-list/review-list.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../review/review.component */ "./src/app/components/review/review.component.ts");
/* harmony import */ var _entity_slideshow_entity_slideshow_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../entity-slideshow/entity-slideshow.component */ "./src/app/components/entity-slideshow/entity-slideshow.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");













function RestaurantComponent_app_breadcrumb_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-breadcrumb", 4);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCountry", true)("cityName", ctx_r21.cityName)("cityId", ctx_r21.cityId)("entityType", "Restaurants")("entityName", ctx_r21.restaurant.name);
} }
function RestaurantComponent_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Food");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngb-rating", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function RestaurantComponent_div_1_div_29_Template_ngb_rating_rateChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.foodRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ngb-rating", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function RestaurantComponent_div_1_div_29_Template_ngb_rating_rateChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.serviceRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngb-rating", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function RestaurantComponent_div_1_div_29_Template_ngb_rating_rateChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.valueForMoneyRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r24.foodRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r24.serviceRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r24.valueForMoneyRating);
} }
const _c0 = function (a0) { return [a0]; };
function RestaurantComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " in Germany");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-review", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RestaurantComponent_div_1_div_29_Template, 19, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Facilities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-entity-slideshow", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.restaurant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 13, ctx_r22.restaurant.averageRating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, "/cities/" + ctx_r22.cityId + "/restaurants"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r22.restaurant.ranking, " of 100 restaurants ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entityType", "restaurants")("headline", ctx_r22.restaurant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.restaurantReviews.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r22.restaurant.streetAddress, ", ", ctx_r22.cityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.restaurant.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.restaurant.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.restaurant.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entityType", "restaurant");
} }
function RestaurantComponent_hr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 32);
} }
class RestaurantComponent {
    constructor(route, router, cityService, entityService, reviewService) {
        this.route = route;
        this.router = router;
        this.cityService = cityService;
        this.entityService = entityService;
        this.reviewService = reviewService;
        this.foodRating = 0;
        this.valueForMoneyRating = 0;
        this.serviceRating = 0;
    }
    ngOnInit() {
        this.cityId = Number(this.route.snapshot.paramMap.get('id'));
        this.restaurantId = Number(this.route.snapshot.paramMap.get('idEntity'));
        this.reviewService.listenToTriggerRefreshReviews().subscribe(() => {
            this.updateOverallRatingOnAddReview();
        });
        this.cityService.cities.subscribe(cities => {
            this.cities = cities;
            this.cityName = this.cityService.getCityNameById(this.cities, this.cityId);
        });
        const restaurant = this.entityService.getRestaurantById(this.restaurantId);
        const restaurants = this.entityService.getRestaurants(this.cityId);
        const restaurantReviews = this.reviewService.getReviewsOfRestaurant(this.restaurantId);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([restaurant, restaurants, restaurantReviews]).subscribe(data => {
            this.restaurant = data[0];
            this.restaurants = data[1];
            this.restaurantReviews = data[2];
            this.calculateAverageFacilityRatings();
        }, error => this.router.navigate([`cities/${this.cityId}`]));
    }
    calculateAverageFacilityRatings() {
        const reviewArraySize = this.restaurantReviews.length;
        for (const review of this.restaurantReviews) {
            this.foodRating += review.foodRating / reviewArraySize;
            this.valueForMoneyRating += review.valueForMoneyRating / reviewArraySize;
            this.serviceRating += review.serviceRating / reviewArraySize;
        }
    }
    updateOverallRatingOnAddReview() {
        this.entityService.getRestaurantById(this.restaurantId).subscribe(restaurant => this.restaurant = restaurant);
    }
}
RestaurantComponent.ɵfac = function RestaurantComponent_Factory(t) { return new (t || RestaurantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__["GetCityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"])); };
RestaurantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RestaurantComponent, selectors: [["app-restaurant"]], decls: 5, vars: 4, consts: [[3, "showCountry", "cityName", "cityId", "entityType", "entityName", 4, "ngIf"], [4, "ngIf"], ["class", "uk-divider-icon", 4, "ngIf"], [3, "reviews"], [3, "showCountry", "cityName", "cityId", "entityType", "entityName"], ["data-src", "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", "uk-img", "", 1, "uk-height-medium", "uk-flex", "uk-flex-center", "uk-flex-middle", "uk-background-cover", "uk-light"], ["uk-grid", "", 1, "uk-margin-medium-top", "uk-margin-remove-left", "uk-margin-remove-right"], [1, "uk-padding-remove-left", "uk-width-1-3@s", "uk-flex-first"], [1, "uk-padding-remove-right", "uk-margin-small-right", "uk-card", "uk-card-body"], ["uk-icon", "icon: star; ratio: 1.7"], [1, "uk-margin-small-left", "uk-text-middle", "uk-text-large", "uk-text-emphasis"], [1, "uk-heading-medium", "uk-text-light", "uk-align-right", "uk-margin-remove-adjacent", "uk-margin-bottom"], ["uk-grid", "", 1, "uk-grid-collapse", "uk-child-width-expand@s"], [1, "uk-flex-column"], [1, "uk-link-muted", "uk-text-center", 3, "routerLink"], [1, "uk-align-center", "uk-margin-remove-bottom"], [1, "uk-flex", "uk-flex-middle", "uk-flex-center"], [3, "entityType", "headline"], [1, "uk-margin-medium-top", "uk-padding-remove-horizontal", "container"], ["class", "uk-grid-small uk-child-width-expand@s uk-text-center", "uk-grid", "", 4, "ngIf"], [1, "uk-flex-column", "uk-card", "uk-card-body", "uk-text-center"], [1, "uk-padding-xsmall-left", "uk-width-2-3@s"], [1, "uk-padding-remove-left", "uk-padding-remove-bottom", "uk-margin-small-left", "uk-card", "uk-card-body"], [1, "uk-card-title"], [1, "uk-margin-medium-top", "uk-margin-medium-bottom"], [3, "entityType"], ["uk-grid", "", 1, "uk-grid-small", "uk-child-width-expand@s", "uk-text-center"], [1, "uk-margin-small-right", "uk-margin-small-left", "uk-flex", "uk-flex-column"], [1, "uk-text-nowrap", "uk-flex", "uk-flex-center"], ["max", "5", "readonly", "true", 3, "rate", "rateChange"], [1, "uk-flex", "uk-flex-column"], [1, "uk-margin-small-left"], [1, "uk-divider-icon"]], template: function RestaurantComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RestaurantComponent_app_breadcrumb_0_Template, 1, 5, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RestaurantComponent_div_1_Template, 48, 18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RestaurantComponent_hr_2_Template, 1, 0, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-review-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.restaurant && ctx.restaurants);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.restaurant && ctx.restaurants);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.restaurant && ctx.restaurants);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reviews", ctx.restaurantReviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_7__["ReviewListComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _review_review_component__WEBPACK_IMPORTED_MODULE_9__["ReviewComponent"], _entity_slideshow_entity_slideshow_component__WEBPACK_IMPORTED_MODULE_10__["EntitySlideshowComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbRating"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5L3Jlc3RhdXJhbnQvcmVzdGF1cmFudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestaurantComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-restaurant',
                templateUrl: './restaurant.component.html',
                styleUrls: ['./restaurant.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__["GetCityService"] }, { type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] }, { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/entity/sightseeing/sightseeing.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/entity/sightseeing/sightseeing.component.ts ***!
  \************************************************************************/
/*! exports provided: SightseeingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightseeingComponent", function() { return SightseeingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/get-city.service */ "./src/app/services/get-city.service.ts");
/* harmony import */ var src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/entity.service */ "./src/app/services/entity.service.ts");
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/review.service */ "./src/app/services/review.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../review-list/review-list.component */ "./src/app/components/review-list/review-list.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../review/review.component */ "./src/app/components/review/review.component.ts");
/* harmony import */ var _entity_slideshow_entity_slideshow_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../entity-slideshow/entity-slideshow.component */ "./src/app/components/entity-slideshow/entity-slideshow.component.ts");












function SightseeingComponent_app_breadcrumb_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-breadcrumb", 4);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCountry", true)("cityName", ctx_r15.cityName)("cityId", ctx_r15.cityId)("entityType", "Sightseeing")("entityName", ctx_r15.sightseeing.name);
} }
const _c0 = function (a0) { return [a0]; };
function SightseeingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "in Germany");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-review", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "From our users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-entity-slideshow", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.sightseeing.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 12, ctx_r16.sightseeing.averageRating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, "/cities/" + ctx_r16.cityId + "/sightseeing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx_r16.sightseeing.ranking, " of 100 things to see ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entityType", "sightseeings")("headline", ctx_r16.sightseeing.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r16.sightseeing.streetAddress, ", ", ctx_r16.cityName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.sightseeing.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.sightseeing.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.sightseeing.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entityType", "sightseeing");
} }
function SightseeingComponent_hr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 24);
} }
class SightseeingComponent {
    constructor(route, router, cityService, entityService, reviewService) {
        this.route = route;
        this.router = router;
        this.cityService = cityService;
        this.entityService = entityService;
        this.reviewService = reviewService;
    }
    ngOnInit() {
        this.cityId = Number(this.route.snapshot.paramMap.get('id'));
        this.sightseeingId = Number(this.route.snapshot.paramMap.get('idEntity'));
        this.reviewService.listenToTriggerRefreshReviews().subscribe(() => {
            this.updateOverallRatingOnAddReview();
        });
        this.cityService.cities.subscribe(cities => {
            this.cities = cities;
            this.cityName = this.cityService.getCityNameById(this.cities, this.cityId);
        });
        const sightseeing = this.entityService.getSightseeingById(this.sightseeingId);
        const sightseeings = this.entityService.getSightseeings(this.cityId);
        const sightseeingReviews = this.reviewService.getReviewsOfSightseeing(this.sightseeingId);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([sightseeing, sightseeings, sightseeingReviews]).subscribe(data => {
            this.sightseeing = data[0];
            this.sightseeings = data[1];
            this.sightseeingReviews = data[2];
        }, error => this.router.navigate([`cities/${this.cityId}`]));
    }
    updateOverallRatingOnAddReview() {
        this.entityService.getSightseeingById(this.sightseeingId).subscribe(sightseeing => this.sightseeing = sightseeing);
    }
}
SightseeingComponent.ɵfac = function SightseeingComponent_Factory(t) { return new (t || SightseeingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__["GetCityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"])); };
SightseeingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SightseeingComponent, selectors: [["app-sightseeing"]], decls: 5, vars: 4, consts: [[3, "showCountry", "cityName", "cityId", "entityType", "entityName", 4, "ngIf"], [4, "ngIf"], ["class", "uk-divider-icon", 4, "ngIf"], [3, "reviews"], [3, "showCountry", "cityName", "cityId", "entityType", "entityName"], ["data-src", "https://images.unsplash.com/photo-1567760848351-64554cd104ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", "uk-img", "", 1, "uk-height-medium", "uk-flex", "uk-flex-center", "uk-flex-middle", "uk-background-cover", "uk-light"], ["uk-grid", "", 1, "uk-margin-medium-top", "uk-margin-remove-left", "uk-margin-remove-right"], [1, "uk-padding-remove-left", "uk-width-1-3@s", "uk-flex-first"], [1, "uk-padding-remove-right", "uk-margin-small-right", "uk-card", "uk-card-body"], ["uk-icon", "icon: star; ratio: 1.7"], [1, "uk-margin-small-left", "uk-text-middle", "uk-text-large", "uk-text-emphasis"], [1, "uk-heading-medium", "uk-text-light", "uk-align-right", "uk-margin-remove-adjacent", "uk-margin-bottom"], ["uk-grid", "", 1, "uk-grid-collapse", "uk-child-width-expand@s"], [1, "uk-flex-column"], [1, "uk-link-muted", "uk-text-center", 3, "routerLink"], [1, "uk-align-center", "uk-margin-remove-bottom"], [1, "uk-flex", "uk-flex-middle", "uk-flex-center"], [3, "entityType", "headline"], [1, "uk-flex-column", "uk-card", "uk-card-body", "uk-text-center"], [1, "uk-padding-xsmall-left", "uk-width-2-3@s"], [1, "uk-padding-remove-left", "uk-padding-remove-bottom", "uk-margin-small-left", "uk-card", "uk-card-body"], [1, "uk-card-title"], [1, "uk-margin-medium-top", "uk-margin-medium-bottom"], [3, "entityType"], [1, "uk-divider-icon"]], template: function SightseeingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SightseeingComponent_app_breadcrumb_0_Template, 1, 5, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SightseeingComponent_div_1_Template, 46, 17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SightseeingComponent_hr_2_Template, 1, 0, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-review-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sightseeing && ctx.sightseeings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sightseeing && ctx.sightseeings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sightseeing && ctx.sightseeings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reviews", ctx.sightseeingReviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_7__["ReviewListComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _review_review_component__WEBPACK_IMPORTED_MODULE_9__["ReviewComponent"], _entity_slideshow_entity_slideshow_component__WEBPACK_IMPORTED_MODULE_10__["EntitySlideshowComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5L3NpZ2h0c2VlaW5nL3NpZ2h0c2VlaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SightseeingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sightseeing',
                templateUrl: './sightseeing.component.html',
                styleUrls: ['./sightseeing.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_get_city_service__WEBPACK_IMPORTED_MODULE_3__["GetCityService"] }, { type: src_app_services_entity_service__WEBPACK_IMPORTED_MODULE_4__["EntityService"] }, { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/entry-filter/entry-filter.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/entry-filter/entry-filter.component.ts ***!
  \*******************************************************************/
/*! exports provided: EntryFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryFilterComponent", function() { return EntryFilterComponent; });
/* harmony import */ var _model_filter_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../model/filter_options */ "./src/app/model/filter_options.ts");
/* harmony import */ var _model_entry_filter_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../model/entry-filter-object */ "./src/app/model/entry-filter-object.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function EntryFilterComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EntryFilterComponent_li_26_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r58.filterObject.ranking = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Top ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r57 = ctx.$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", option_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r53.filterObject.ranking);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r57, "");
} }
function EntryFilterComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EntryFilterComponent_li_34_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r61.filterObject.priceLevel = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r60 = ctx.$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", option_r60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r54.filterObject.priceLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r60, "");
} }
function EntryFilterComponent_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", option_r63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r63, " ");
} }
function EntryFilterComponent_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const direction_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", direction_r64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", direction_r64, " ");
} }
class EntryFilterComponent {
    constructor() {
        this.filterObject = new _model_entry_filter_object__WEBPACK_IMPORTED_MODULE_1__["EntryFilterObject"]();
        this.optionStars = _model_filter_options__WEBPACK_IMPORTED_MODULE_0__["STARS"];
        this.optionsRanking = _model_filter_options__WEBPACK_IMPORTED_MODULE_0__["RANKING"];
        this.optionsPriceLevel = _model_filter_options__WEBPACK_IMPORTED_MODULE_0__["PRICE_LEVEL"];
        this.optionsSortBy = _model_filter_options__WEBPACK_IMPORTED_MODULE_0__["SORT_BY"];
        this.optionsSortDirection = _model_filter_options__WEBPACK_IMPORTED_MODULE_0__["SORT_DIRECTION"];
        this.submitFilterObjekt = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnInit() {
        this.filterObject.categoryToSortBy = 'Rating';
        this.filterObject.sortDirection = 'Descending';
    }
    submitFilter() {
        this.submitFilterObjekt.emit(this.filterObject);
    }
    resetFilter() {
        this.filterObject.averageRating = undefined;
        this.filterObject.ranking = undefined;
        this.filterObject.priceLevel = undefined;
    }
}
EntryFilterComponent.ɵfac = function EntryFilterComponent_Factory(t) { return new (t || EntryFilterComponent)(); };
EntryFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EntryFilterComponent, selectors: [["app-entry-filter"]], outputs: { submitFilterObjekt: "submitFilterObjekt" }, decls: 74, vars: 7, consts: [["type", "button", "uk-toggle", "target: #offcanvas-nav-primary", "id", "showFilters", 1, "uk-button", "uk-button-default", "uk-margin-small-right"], ["type", "button", "uk-toggle", "target: #offcanvas-nav-sort", "id", "showSorting", 1, "uk-button", "uk-button-default", "uk-margin-small-right"], ["id", "offcanvas-nav-primary", "uk-offcanvas", "overlay: true"], [1, "uk-offcanvas-bar", "uk-width-medium"], ["type", "button", "uk-close", "", 1, "uk-offcanvas-close"], [1, "uk-margin"], [1, "uk-nav", "uk-nav-default"], [1, "uk-nav-header", "uk-text-center"], [1, "uk-nav-sub"], [1, "uk-nav-divider", "uk-margin-large-bottom"], [1, "uk-margin-small"], ["uk-icon", "icon: star"], [1, "uk-form-label", "uk-margin-small-left"], [1, "uk-form-controls", "uk-form-controls-text"], ["max", "5", 3, "rate", "rateChange"], [1, "uk-nav-divider", "uk-margin-large"], ["uk-icon", "icon: hashtag"], ["uk-scrollspy-nav", "closest: li; scroll: true", 1, "uk-nav", "uk-nav-default"], ["class", "uk-active", 4, "ngFor", "ngForOf"], ["uk-icon", "icon: credit-card"], [1, "uk-nav-divider", "uk-margin-large-top"], [1, "uk-flex", "uk-flex-center"], [1, "uk-button", "uk-button-sidebar", 3, "click"], ["id", "offcanvas-nav-sort", "uk-offcanvas", "overlay: true"], [1, "uk-offcanvas-bar"], ["uk-icon", "icon: table"], [1, "uk-form-label", "uk-margin-left"], [1, "uk-form-controls"], ["id", "form-stacked-select", 1, "uk-select", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "uk-active"], ["type", "radio", "name", "checkedRanking", 1, "uk-radio", 3, "value", "ngModel", "ngModelChange"], ["type", "radio", "name", "checkedprice", 1, "uk-radio", 3, "value", "ngModel", "ngModelChange"], [3, "ngValue"]], template: function EntryFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ngb-rating", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("rateChange", function EntryFilterComponent_Template_ngb_rating_rateChange_18_listener($event) { return ctx.filterObject.averageRating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Ranking");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, EntryFilterComponent_li_26_Template, 6, 3, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Price Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, EntryFilterComponent_li_34_Template, 4, 3, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EntryFilterComponent_Template_a_click_37_listener() { return ctx.submitFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EntryFilterComponent_Template_a_click_40_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Sort by");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EntryFilterComponent_Template_select_ngModelChange_55_listener($event) { return ctx.filterObject.categoryToSortBy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, EntryFilterComponent_option_56_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EntryFilterComponent_Template_select_ngModelChange_66_listener($event) { return ctx.filterObject.sortDirection = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, EntryFilterComponent_option_67_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EntryFilterComponent_Template_a_click_70_listener() { return ctx.submitFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rate", ctx.filterObject.averageRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.optionsRanking);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.optionsPriceLevel);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filterObject.categoryToSortBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.optionsSortBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.filterObject.sortDirection);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.optionsSortDirection);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbRating"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: [".uk-button-sidebar[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  color:  #e5e5e5;\r\n  border: 1px solid #e5e5e5;\r\n  width: 98.45px;\r\n  height: 30px;\r\n\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  -webkit-appearance: button;\r\n  -webkit-writing-mode: horizontal-tb !important;\r\n  text-rendering: auto;\r\n  color: buttontext;\r\n  letter-spacing: normal;\r\n  word-spacing: normal;\r\n  text-transform: none;\r\n  text-indent: 0px;\r\n  text-shadow: none;\r\n  display: inline-block;\r\n  text-align: center;\r\n  align-items: flex-start;\r\n  cursor: default;\r\n  background-color: buttonface;\r\n  box-sizing: border-box;\r\n  margin: 0em;\r\n  font: 400 13.3333px Arial;\r\n  padding: 1px 6px;\r\n  border-width: 2px;\r\n  border-style: outset;\r\n  border-color: buttonface;\r\n  -o-border-image: initial;\r\n     border-image: initial;\r\n}\r\n\r\n.uk-button[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  border: none;\r\n  overflow: visible;\r\n  font: inherit;\r\n  color: inherit;\r\n  text-transform: none;\r\n  -webkit-appearance: none;\r\n  border-radius: 0;\r\n  display: inline-block;\r\n  box-sizing: border-box;\r\n  padding: 0px;\r\n  vertical-align: middle;\r\n  font-size: 14px;\r\n  line-height: 38px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  transition: .1s ease-in-out;\r\n  transition-property: color,background-color,border-color;\r\n  width: 98.5px;\r\n}\r\n\r\n.uk-button[_ngcontent-%COMP%]:not(:disabled) {\r\n  cursor: pointer;\r\n}\r\n\r\n.uk-button-default[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  color: #222;\r\n  border: 1px solid #e5e5e5;\r\n}\r\n\r\n.uk-margin-small-right[_ngcontent-%COMP%] {\r\n  margin-right: 10px !important;\r\n}\r\n\r\n.uk-switcher[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.uk-margin[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  font-family: ProximaNova,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;\r\n  font-size: 15px;\r\n  font-weight: normal;\r\n  line-height: 1.5;\r\n  -webkit-text-size-adjust: 100%;\r\n  background: #fff;\r\n  color: #666;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  text-rendering: optimizeLegibility;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbnRyeS1maWx0ZXIvZW50cnktZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsOENBQThDO0VBQzlDLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4Qix3QkFBcUI7S0FBckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0Isd0RBQXdEO0VBQ3hELGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUlBO0VBQ0UsNkdBQTZHO0VBQzdHLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsa0NBQWtDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbnRyeS1maWx0ZXIvZW50cnktZmlsdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnVrLWJ1dHRvbi1zaWRlYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogICNlNWU1ZTU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICB3aWR0aDogOTguNDVweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcblxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG4gIC13ZWJraXQtd3JpdGluZy1tb2RlOiBob3Jpem9udGFsLXRiICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgY29sb3I6IGJ1dHRvbnRleHQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB0ZXh0LWluZGVudDogMHB4O1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJ1dHRvbmZhY2U7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDBlbTtcclxuICBmb250OiA0MDAgMTMuMzMzM3B4IEFyaWFsO1xyXG4gIHBhZGRpbmc6IDFweCA2cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBidXR0b25mYWNlO1xyXG4gIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxufVxyXG5cclxuLnVrLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMzhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdHJhbnNpdGlvbjogLjFzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLGJhY2tncm91bmQtY29sb3IsYm9yZGVyLWNvbG9yO1xyXG4gIHdpZHRoOiA5OC41cHg7XHJcbn1cclxuXHJcbi51ay1idXR0b246bm90KDpkaXNhYmxlZCkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnVrLWJ1dHRvbi1kZWZhdWx0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzIyMjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG59XHJcblxyXG4udWstbWFyZ2luLXNtYWxsLXJpZ2h0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVrLXN3aXRjaGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4udWstbWFyZ2luIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtZmFtaWx5OiBQcm94aW1hTm92YSwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCxzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EntryFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-entry-filter',
                templateUrl: './entry-filter.component.html',
                styleUrls: ['./entry-filter.component.css']
            }]
    }], function () { return []; }, { submitFilterObjekt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return [""]; };
class NavbarComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 12, vars: 2, consts: [["uk-navbar", "", "uk-sticky", "top", 1, "uk-background-default"], [1, "uk-navbar-left"], [1, "uk-navbar-item", "uk-logo", 3, "routerLink"], [1, "uk-navbar-right"], [1, "uk-navbar-item"], ["uk-grid", "", 1, "uk-grid-small", "uk-grid"], [1, "uk-first-column"], ["uk-icon", "icon: user", 1, "uk-icon-button", "uk-icon"], [1, "uk-button", "uk-button-default"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "G3 Advisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/price-level/price-level.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/price-level/price-level.component.ts ***!
  \*****************************************************************/
/*! exports provided: PriceLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceLevelComponent", function() { return PriceLevelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PriceLevelComponent {
    constructor() {
    }
    ngOnInit() {
        if (this.priceLevel === 3) {
            this.priceLevelSymbol = '€€€';
        }
        else if (this.priceLevel === 2) {
            this.priceLevelSymbol = '€€';
        }
        else {
            this.priceLevelSymbol = '€';
        }
    }
}
PriceLevelComponent.ɵfac = function PriceLevelComponent_Factory(t) { return new (t || PriceLevelComponent)(); };
PriceLevelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PriceLevelComponent, selectors: [["app-price-level"]], inputs: { priceLevel: "priceLevel" }, decls: 2, vars: 1, template: function PriceLevelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.priceLevelSymbol);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpY2UtbGV2ZWwvcHJpY2UtbGV2ZWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PriceLevelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-price-level',
                templateUrl: './price-level.component.html',
                styleUrls: ['./price-level.component.css']
            }]
    }], function () { return []; }, { priceLevel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/review-edit/review-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/review-edit/review-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReviewEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewEditComponent", function() { return ReviewEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/review.service */ "./src/app/services/review.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");








function ReviewEditComponent_form_11_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Service Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-rating", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ReviewEditComponent_form_11_div_27_Template_ngb_rating_rateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r88.serviceRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r83.serviceRating);
} }
function ReviewEditComponent_form_11_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Location Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-rating", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ReviewEditComponent_form_11_div_28_Template_ngb_rating_rateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r90.locationRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r84.locationRating);
} }
function ReviewEditComponent_form_11_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quality of Sleep");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-rating", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ReviewEditComponent_form_11_div_29_Template_ngb_rating_rateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r92.qualityOfSleepRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r85.qualityOfSleepRating);
} }
function ReviewEditComponent_form_11_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Food Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-rating", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ReviewEditComponent_form_11_div_30_Template_ngb_rating_rateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r94.foodRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r86.foodRating);
} }
function ReviewEditComponent_form_11_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Price Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-rating", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ReviewEditComponent_form_11_div_31_Template_ngb_rating_rateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r96.valueForMoneyRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r87.valueForMoneyRating);
} }
function ReviewEditComponent_form_11_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ReviewEditComponent_form_11_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r98.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Your Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Date of Visit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Overall Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ngb-rating", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ReviewEditComponent_form_11_Template_ngb_rating_rateChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.generalRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ReviewEditComponent_form_11_div_27_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ReviewEditComponent_form_11_div_28_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ReviewEditComponent_form_11_div_29_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ReviewEditComponent_form_11_div_30_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ReviewEditComponent_form_11_div_31_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r81.reviewForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r81.generalRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.entityType === "hotels" || ctx_r81.entityType === "restaurants");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.entityType === "hotels");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.entityType === "hotels");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.entityType === "restaurants");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.entityType === "restaurants");
} }
function ReviewEditComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewEditComponent_div_12_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r101.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r82.reviewForm.valid);
} }
class ReviewEditComponent {
    constructor(hotelReviewFormBuilder, activityReviewFormBuilder, sightseeingReviewFormBuilder, restaurantReviewFormBuilder, route, reviewService) {
        this.hotelReviewFormBuilder = hotelReviewFormBuilder;
        this.activityReviewFormBuilder = activityReviewFormBuilder;
        this.sightseeingReviewFormBuilder = sightseeingReviewFormBuilder;
        this.restaurantReviewFormBuilder = restaurantReviewFormBuilder;
        this.route = route;
        this.reviewService = reviewService;
        this.generalRating = 0;
        this.serviceRating = 0;
        this.locationRating = 0;
        this.qualityOfSleepRating = 0;
        this.foodRating = 0;
        this.valueForMoneyRating = 0;
        this.localDate = new Date();
        this.submitted = true;
    }
    ngOnInit() {
        this.entityId = Number(this.route.snapshot.paramMap.get('idEntity'));
        this.reviewService.getReviewToEdit().subscribe(review => {
            this.reviewInput = review;
            if (this.entityType === 'hotels') {
                this.reloadHotelReviewForm(review);
            }
            else if (this.entityType === 'restaurants') {
                this.reloadRestaurantReviewForm(review);
            }
            else if (this.entityType === 'activities') {
                this.reloadActivityReviewForm(review);
            }
            else if (this.entityType === 'sightseeing') {
                this.reloadSightseeingReviewForm(review);
            }
        });
    }
    onSubmit() {
        this.submitted = true;
        this.editReview();
    }
    editReview() {
        if (this.entityType === 'hotels') {
            this.reviewService.editHotelReview(this.reviewForm.value, this.entityId, this.reviewInput.id)
                .subscribe(() => this.reviewService.triggerRefreshReviews(), error => alert('You have submitted a review with one or more invalid fields. Please try again.'));
        }
        else if (this.entityType === 'restaurants') {
            this.reviewService.editRestaurantReview(this.reviewForm.value, this.entityId, this.reviewInput.id)
                .subscribe(() => this.reviewService.triggerRefreshReviews(), error => alert('You have submitted a review with one or more invalid fields. Please try again.'));
        }
        else if (this.entityType === 'activities') {
            this.reviewService.editActivityReview(this.reviewForm.value, this.entityId, this.reviewInput.id)
                .subscribe(() => this.reviewService.triggerRefreshReviews(), error => alert('You have submitted a review with one or more invalid fields. Please try again.'));
        }
        else if (this.entityType === 'sightseeing') {
            this.reviewService.editSightSeeingReview(this.reviewForm.value, this.entityId, this.reviewInput.id)
                .subscribe(() => this.reviewService.triggerRefreshReviews(), error => alert('You have submitted a review with one or more invalid fields. Please try again.'));
        }
    }
    reloadHotelReviewForm(hotelReview) {
        this.reviewForm = this.hotelReviewFormBuilder.group({
            title: [hotelReview.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewText: [hotelReview.reviewText, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: [hotelReview.author, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            visitingDate: [hotelReview.visitingDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewCreationDate: [hotelReview.reviewCreationDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            rating: [hotelReview.rating, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            serviceRating: [hotelReview.serviceRating, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            locationRating: [hotelReview.locationRating, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            qualityOfSleepRating: [hotelReview.qualityOfSleepRating, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    reloadRestaurantReviewForm(restaurantReview) {
        this.reviewForm = this.restaurantReviewFormBuilder.group({
            title: [restaurantReview.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewText: [restaurantReview.reviewText, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: [restaurantReview.author, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            visitingDate: [restaurantReview.visitingDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewCreationDate: [restaurantReview.reviewCreationDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            rating: [restaurantReview.rating, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            serviceRating: [restaurantReview.serviceRating, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            foodRating: [restaurantReview.foodRating, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            valueForMoneyRating: [restaurantReview.valueForMoneyRating, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    reloadActivityReviewForm(activityReview) {
        this.reviewForm = this.activityReviewFormBuilder.group({
            title: [activityReview.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewText: [activityReview.reviewText, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: [activityReview.author, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            visitingDate: [activityReview.visitingDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewCreationDate: [activityReview.reviewCreationDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            rating: [activityReview.rating, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    reloadSightseeingReviewForm(sightseeingReview) {
        this.reviewForm = this.sightseeingReviewFormBuilder.group({
            title: [sightseeingReview.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewText: [sightseeingReview.reviewText, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: [sightseeingReview.author, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            visitingDate: [sightseeingReview.visitingDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewCreationDate: [sightseeingReview.reviewCreationDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            rating: [sightseeingReview.rating, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
}
ReviewEditComponent.ɵfac = function ReviewEditComponent_Factory(t) { return new (t || ReviewEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"])); };
ReviewEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewEditComponent, selectors: [["app-review-edit"]], inputs: { entityType: "entityType", headline: "headline" }, decls: 13, vars: 3, consts: [[1, "uk-iconnav"], ["href", "#my-id2", "uk-icon", "icon: file-edit", "uk-tooltip", "Edit Review", "uk-toggle", ""], ["id", "my-id2", "uk-modal", ""], [1, "uk-modal-dialog"], ["type", "button", "uk-close", "", 1, "uk-modal-close-default"], [1, "uk-modal-header"], [1, "uk-modal-title"], [1, "uk-modal-body"], [1, "uk-fieldset"], ["class", "uk-form-horizontal uk-margin-large", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "uk-modal-footer uk-text-right", 4, "ngIf"], [1, "uk-form-horizontal", "uk-margin-large", 3, "formGroup", "ngSubmit"], [1, "uk-margin"], [1, "uk-form-label"], [1, "uk-form-controls"], ["formControlName", "title", "type", "text", 1, "uk-input"], ["formControlName", "reviewText", 1, "uk-textarea", "uk-form-width-expand"], ["formControlName", "author", "type", "text", 1, "uk-input"], ["formControlName", "visitingDate", "type", "text", 1, "uk-input"], ["formControlName", "reviewCreationDate", "type", "hidden", "placeholder", "", 1, "uk-input"], [1, "uk-form-controls", "uk-form-controls-text"], ["formControlName", "rating", "max", "5", 3, "rate", "rateChange"], ["class", "uk-margin", 4, "ngIf"], ["formControlName", "serviceRating", "max", "5", 3, "rate", "rateChange"], ["formControlName", "locationRating", "max", "5", 3, "rate", "rateChange"], ["formControlName", "qualityOfSleepRating", "max", "5", 3, "rate", "rateChange"], ["formControlName", "foodRating", "max", "5", 3, "rate", "rateChange"], ["formControlName", "valueForMoneyRating", "max", "5", 3, "rate", "rateChange"], [1, "uk-modal-footer", "uk-text-right"], ["type", "button", 1, "uk-button", "uk-button-default", "uk-modal-close"], ["type", "submit", 1, "uk-button", "uk-button-default", "uk-modal-close", 3, "disabled", "click"]], template: function ReviewEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "fieldset", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReviewEditComponent_form_11_Template, 32, 7, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ReviewEditComponent_div_12_Template, 5, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviewForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbRating"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3LWVkaXQvcmV2aWV3LWVkaXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-review-edit',
                templateUrl: './review-edit.component.html',
                styleUrls: ['./review-edit.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"] }]; }, { entityType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/review-list/review-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/review-list/review-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReviewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewListComponent", function() { return ReviewListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/review.service */ "./src/app/services/review.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _review_edit_review_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../review-edit/review-edit.component */ "./src/app/components/review-edit/review-edit.component.ts");






function ReviewListComponent_div_0_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-review-edit", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewListComponent_div_0_li_5_Template_app_review_edit_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const review_r75 = ctx.$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r76.clickHandler(review_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewListComponent_div_0_li_5_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const review_r75 = ctx.$implicit; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r78.deleteReviewById(review_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r75 = ctx.$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, review_r75.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r75.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, review_r75.reviewCreationDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 11, review_r75.rating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entityType", ctx_r74.entityType)("headline", "Edit Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r75.reviewText);
} }
function ReviewListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReviewListComponent_div_0_li_5_Template, 30, 14, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r73.reviews);
} }
class ReviewListComponent {
    constructor(reviewService, route) {
        this.reviewService = reviewService;
        this.route = route;
    }
    ngOnInit() {
        this.entityType = this.route.snapshot.url[2].path;
        this.entityId = Number(this.route.snapshot.paramMap.get('idEntity'));
        this.reviewService.listenToTriggerRefreshReviews().subscribe(() => {
            this.reloadReviews(this.entityType);
        });
    }
    deleteReviewById(review) {
        if (this.entityType === 'hotels') {
            this.reviewService.deleteHotelReviewById(review.id)
                .subscribe(() => this.reviewService.triggerRefreshReviews());
        }
        else if (this.entityType === 'restaurants') {
            this.reviewService.deleteRestaurantReviewById(review.id)
                .subscribe(() => this.reviewService.triggerRefreshReviews());
        }
        else if (this.entityType === 'activities') {
            this.reviewService.deleteActivityReviewById(review.id)
                .subscribe(() => this.reviewService.triggerRefreshReviews());
        }
        else if (this.entityType === 'sightseeing') {
            this.reviewService.deleteSightseeingReviewById(review.id)
                .subscribe(() => this.reviewService.triggerRefreshReviews());
        }
    }
    clickHandler(review) {
        this.reviewService.setReviewToEdit(review);
    }
    reloadReviews(entityType) {
        if (this.entityType === 'hotels') {
            this.reviewService.getReviewsOfHotel(this.entityId).subscribe(reviews => this.reviews = reviews);
        }
        else if (this.entityType === 'restaurants') {
            this.reviewService.getReviewsOfRestaurant(this.entityId).subscribe(reviews => this.reviews = reviews);
        }
        else if (this.entityType === 'activities') {
            this.reviewService.getReviewsOfActivity(this.entityId).subscribe(reviews => this.reviews = reviews);
        }
        else if (this.entityType === 'sightseeing') {
            this.reviewService.getReviewsOfSightseeing(this.entityId).subscribe(reviews => this.reviews = reviews);
        }
    }
}
ReviewListComponent.ɵfac = function ReviewListComponent_Factory(t) { return new (t || ReviewListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ReviewListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewListComponent, selectors: [["app-review-list"]], inputs: { reviews: "reviews" }, decls: 1, vars: 1, consts: [["class", "uk-flex uk-flex-center", "uk-grid", "", 4, "ngIf"], ["uk-grid", "", 1, "uk-flex", "uk-flex-center"], [1, "uk-margin-medium-top", "uk-width-1-2"], [1, "uk-comment-list"], [4, "ngFor", "ngForOf"], [1, "uk-comment"], ["uk-grid", "", 1, "uk-comment-header", "uk-grid-medium", "uk-flex-middle"], [1, "uk-width-auto"], ["src", "https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80", "width", "80", "height", "80", "alt", "", 1, "uk-comment-avatar", "uk-border-rounded"], [1, "uk-width-expand"], [1, "uk-comment-title"], [1, "uk-comment-meta", "uk-subnav", "uk-subnav-divider"], [1, "uk-margin-remove"], [1, "uk-child-width-expand"], [1, "uk-flex", "uk-flex-middle", "uk-flex-right"], ["uk-icon", "icon: star; ratio: 0.9"], [1, "uk-flex", "uk-flex-middle", "uk-flex-left", "uk-margin-small-left"], [1, "uk-text"], [1, "uk-iconnav"], [3, "entityType", "headline", "click"], ["uk-icon", "icon: trash", "uk-tooltip", "Delete review", 3, "click"], [1, "uk-comment-body"]], template: function ReviewListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReviewListComponent_div_0_Template, 6, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _review_edit_review_edit_component__WEBPACK_IMPORTED_MODULE_4__["ReviewEditComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3LWxpc3QvcmV2aWV3LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-review-list',
                templateUrl: './review-list.component.html',
                styleUrls: ['./review-list.component.css']
            }]
    }], function () { return [{ type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { reviews: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/review/review.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/review/review.component.ts ***!
  \*******************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/review.service */ "./src/app/services/review.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ReviewComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Service Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-rating", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ReviewComponent_div_37_Template_ngb_rating_rateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.serviceRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r0.serviceRating);
} }
function ReviewComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Location Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-rating", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ReviewComponent_div_38_Template_ngb_rating_rateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.locationRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r1.locationRating);
} }
function ReviewComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quality of Sleep");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-rating", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ReviewComponent_div_39_Template_ngb_rating_rateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.qualityOfSleepRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r2.qualityOfSleepRating);
} }
function ReviewComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Food Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-rating", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ReviewComponent_div_40_Template_ngb_rating_rateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.foodRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r3.foodRating);
} }
function ReviewComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Price Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-rating", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ReviewComponent_div_41_Template_ngb_rating_rateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.valueForMoneyRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx_r4.valueForMoneyRating);
} }
class ReviewComponent {
    constructor(hotelReviewFormBuilder, activityReviewFormBuilder, sightseeingReviewFormBuilder, restaurantReviewFormBuilder, route, reviewService) {
        this.hotelReviewFormBuilder = hotelReviewFormBuilder;
        this.activityReviewFormBuilder = activityReviewFormBuilder;
        this.sightseeingReviewFormBuilder = sightseeingReviewFormBuilder;
        this.restaurantReviewFormBuilder = restaurantReviewFormBuilder;
        this.route = route;
        this.reviewService = reviewService;
        this.buttonName = 'Leave Review';
        this.generalRating = 0;
        this.serviceRating = 0;
        this.locationRating = 0;
        this.qualityOfSleepRating = 0;
        this.foodRating = 0;
        this.valueForMoneyRating = 0;
        this.localDate = new Date();
        this.submitted = false;
    }
    ngOnInit() {
        this.entityId = Number(this.route.snapshot.paramMap.get('idEntity'));
        this.loadForm();
    }
    onSubmit() {
        if (this.reviewForm.invalid) {
            return;
        }
        this.saveReview();
        this.loadForm();
    }
    get f() {
        return this.reviewForm.controls;
    }
    saveReview() {
        if (this.entityType === 'hotels') {
            this.reviewService.addHotelReview(this.reviewForm.value, this.entityId)
                .subscribe(() => this.reviewService.triggerRefreshReviews(), error => alert('You have submitted a review with one or more invalid fields. Please try again.'));
        }
        else if (this.entityType === 'restaurants') {
            this.reviewService.addRestaurantReview(this.reviewForm.value, this.entityId)
                .subscribe(() => this.reviewService.triggerRefreshReviews(), error => alert('You have submitted a review with one or more invalid fields. Please try again.'));
        }
        else if (this.entityType === 'activities') {
            this.reviewService.addActivityReview(this.reviewForm.value, this.entityId)
                .subscribe(() => this.reviewService.triggerRefreshReviews(), error => alert('You have submitted a review with one or more invalid fields. Please try again.'));
        }
        else if (this.entityType === 'sightseeings') {
            this.reviewService.addSightseeingReview(this.reviewForm.value, this.entityId)
                .subscribe(() => this.reviewService.triggerRefreshReviews(), error => alert('You have submitted a review with one or more invalid fields. Please try again.'));
        }
    }
    loadForm() {
        if (this.entityType === 'hotels') {
            this.loadHotelReviewForm();
        }
        else if (this.entityType === 'restaurants') {
            this.loadRestaurantReviewForm();
        }
        else if (this.entityType === 'activities') {
            this.loadActivityReviewForm();
        }
        else if (this.entityType === 'sightseeings') {
            this.loadSightseeingReviewForm();
        }
    }
    loadHotelReviewForm() {
        this.reviewForm = this.hotelReviewFormBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewText: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            visitingDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewCreationDate: [this.localDate],
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            serviceRating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            locationRating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            qualityOfSleepRating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    loadActivityReviewForm() {
        this.reviewForm = this.activityReviewFormBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewText: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            visitingDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewCreationDate: [this.localDate],
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    loadSightseeingReviewForm() {
        this.reviewForm = this.sightseeingReviewFormBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewText: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            visitingDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewCreationDate: [this.localDate],
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    loadRestaurantReviewForm() {
        this.reviewForm = this.restaurantReviewFormBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewText: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            visitingDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewCreationDate: [this.localDate],
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            serviceRating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            foodRating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            valueForMoneyRating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
}
ReviewComponent.ɵfac = function ReviewComponent_Factory(t) { return new (t || ReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"])); };
ReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewComponent, selectors: [["app-review"]], inputs: { entityType: "entityType", headline: "headline" }, decls: 47, vars: 10, consts: [["href", "#my-id", "uk-toggle", "", 1, "uk-button", "uk-button-default", "uk-button-small", "uk-float-right"], ["id", "my-id", "uk-modal", ""], [1, "uk-modal-dialog"], ["type", "button", "uk-close", "", 1, "uk-modal-close-default"], [1, "uk-modal-header"], [1, "uk-modal-title"], [1, "uk-modal-body"], [1, "uk-fieldset"], [1, "uk-form-horizontal", "uk-margin-large", 3, "formGroup", "ngSubmit"], [1, "uk-margin"], [1, "uk-form-label"], [1, "uk-form-controls"], ["formControlName", "title", "type", "text", "id", "userName", 1, "uk-input"], ["formControlName", "reviewText", "placeholder", "Please tell us what you think", 1, "uk-textarea", "uk-form-width-expand"], ["formControlName", "author", "type", "text", 1, "uk-input"], ["formControlName", "visitingDate", "type", "text", "placeholder", "yyyy-mm-dd", 1, "uk-input"], ["formControlName", "reviewCreationDate", "type", "hidden", "placeholder", "", 1, "uk-input"], [1, "uk-form-controls", "uk-form-controls-text"], ["formControlName", "rating", "max", "5", 3, "rate", "rateChange"], ["class", "uk-margin", 4, "ngIf"], [1, "uk-modal-footer", "uk-text-right"], ["type", "button", 1, "uk-button", "uk-button-default", "uk-modal-close"], ["type", "submit", 1, "uk-button", "uk-button-default", "uk-modal-close", 3, "disabled", "click"], ["formControlName", "serviceRating", "max", "5", 3, "rate", "rateChange"], ["formControlName", "locationRating", "max", "5", 3, "rate", "rateChange"], ["formControlName", "qualityOfSleepRating", "max", "5", 3, "rate", "rateChange"], ["formControlName", "foodRating", "max", "5", 3, "rate", "rateChange"], ["formControlName", "valueForMoneyRating", "max", "5", 3, "rate", "rateChange"]], template: function ReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fieldset", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ReviewComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Date of Visit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Overall Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ngb-rating", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ReviewComponent_Template_ngb_rating_rateChange_36_listener($event) { return ctx.generalRating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ReviewComponent_div_37_Template, 5, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ReviewComponent_div_38_Template, 5, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ReviewComponent_div_39_Template, 5, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ReviewComponent_div_40_Template, 5, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ReviewComponent_div_41_Template, 5, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewComponent_Template_button_click_45_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reviewForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.generalRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityType === "hotels" || ctx.entityType === "restaurants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityType === "hotels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityType === "hotels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityType === "restaurants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.entityType === "restaurants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.reviewForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbRating"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-review',
                templateUrl: './review.component.html',
                styleUrls: ['./review.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"] }]; }, { entityType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_get_city_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/get-city.service */ "./src/app/services/get-city.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class SearchBarComponent {
    constructor(cityService, router) {
        this.cityService = cityService;
        this.router = router;
    }
    ngOnInit() {
        this.cityService.cities.subscribe(cities => this.cities = cities);
    }
    onEnter(userInput) {
        const searchedCityCapitalized = this.capitalizeFirstLetter(userInput);
        try {
            const searchedCityId = this.cityService.getCityIdByName(this.cities, searchedCityCapitalized);
            this.router.navigate([`cities/${searchedCityId}`]);
        }
        catch (_a) {
            this.router.navigate([`cities`]);
        }
    }
    onClick(userInput) {
        this.onEnter(userInput);
    }
    goToRandomCity() {
        const min = 1;
        const max = this.cities.length;
        const randCityId = Math.floor(Math.random() * (max - min + 1) + min);
        this.router.navigate([`cities/${randCityId}`]);
    }
    capitalizeFirstLetter(userInput) {
        const firstCharUpperCase = userInput.charAt(0).toUpperCase();
        return firstCharUpperCase + userInput.substring(1).toLowerCase();
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_get_city_service__WEBPACK_IMPORTED_MODULE_1__["GetCityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], decls: 15, vars: 0, consts: [[1, "uk-margin", "uk-position-center"], [1, "uk-search", "uk-search-large", "uk-first-column"], ["uk-search-icon", "", 1, "uk-search-toggle", 3, "click"], ["uk-search-icon", "", 1, "uk-icon", "uk-search-icon"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "data-svg", "search-large"], ["fill", "none", "stroke", "#000", "stroke-width", "1.1", "cx", "9", "cy", "9", "r", "7"], ["fill", "none", "stroke", "#000", "stroke-width", "1.1", "d", "M14,14 L18,18 L14,14 Z"], ["type", "search", "placeholder", "  Where do we go?", 1, "uk-search-input", "uk-text-break", 3, "keyup.enter"], ["userInput", ""], [1, "uk-margin-medium-top", "uk-margin-medium-bottom", "uk-text-muted"], [1, "uk-text-center"], [1, "uk-align-center", "uk-button", "uk-button-default", "uk-button-large", "uk-text-lighter", 3, "click"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.onClick(_r37.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SearchBarComponent_Template_input_keyup_enter_7_listener($event) { return ctx.onEnter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "or let me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_Template_button_click_13_listener() { return ctx.goToRandomCity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Surprise You!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-bar',
                templateUrl: './search-bar.component.html',
                styleUrls: ['./search-bar.component.css']
            }]
    }], function () { return [{ type: _services_get_city_service__WEBPACK_IMPORTED_MODULE_1__["GetCityService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/subnav/subnav.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/subnav/subnav.component.ts ***!
  \*******************************************************/
/*! exports provided: SubnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubnavComponent", function() { return SubnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["uk-active"]; };
const _c1 = function () { return { exact: true }; };
const _c2 = function (a0) { return [a0]; };
class SubnavComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
}
SubnavComponent.ɵfac = function SubnavComponent_Factory(t) { return new (t || SubnavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
SubnavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubnavComponent, selectors: [["app-subnav"]], inputs: { cityId: "cityId" }, decls: 14, vars: 28, consts: [[1, "uk-flex", "uk-flex-center@s"], ["uk-margin", "", 1, "uk-subnav", "uk-subnav-divider"], [3, "routerLinkActive", "routerLinkActiveOptions"], [3, "routerLink"]], template: function SubnavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hotels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Restaurants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sightseeing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, "/cities/" + ctx.cityId + "/hotels"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c2, "/cities/" + ctx.cityId + "/restaurants"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c2, "/cities/" + ctx.cityId + "/activities"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c2, "/cities/" + ctx.cityId + "/sightseeing"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VibmF2L3N1Ym5hdi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubnavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subnav',
                templateUrl: './subnav.component.html',
                styleUrls: ['./subnav.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { cityId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/model/entry-filter-object.ts":
/*!**********************************************!*\
  !*** ./src/app/model/entry-filter-object.ts ***!
  \**********************************************/
/*! exports provided: EntryFilterObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryFilterObject", function() { return EntryFilterObject; });
class EntryFilterObject {
    constructor() { }
}


/***/ }),

/***/ "./src/app/model/filter_options.ts":
/*!*****************************************!*\
  !*** ./src/app/model/filter_options.ts ***!
  \*****************************************/
/*! exports provided: STARS, RANKING, PRICE_LEVEL, SORT_BY, SORT_DIRECTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARS", function() { return STARS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANKING", function() { return RANKING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICE_LEVEL", function() { return PRICE_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_BY", function() { return SORT_BY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_DIRECTION", function() { return SORT_DIRECTION; });
const STARS = [
    1,
    2,
    3,
    4,
    5
];
const RANKING = [
    10,
    20,
    30,
    40,
    50
];
const PRICE_LEVEL = [
    '€',
    '€-€€',
    '€-€€€'
];
const SORT_BY = [
    'Rating',
    'Name',
    'Price'
];
const SORT_DIRECTION = [
    'Ascending',
    'Descending'
];


/***/ }),

/***/ "./src/app/services/entity.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/entity.service.ts ***!
  \********************************************/
/*! exports provided: EntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return EntityService; });
/* harmony import */ var _assets_entitySlideshowImageUrls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../assets/entitySlideshowImageUrls */ "./src/assets/entitySlideshowImageUrls.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_entityImageUrls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/entityImageUrls */ "./src/assets/entityImageUrls.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





const apiRoot = 'https://g3-advisor.herokuapp.com/';
class EntityService {
    constructor(http) {
        this.http = http;
        const entityImageUrls = new src_assets_entityImageUrls__WEBPACK_IMPORTED_MODULE_2__["EntityImageUrls"]();
        this.entityImageUrls = entityImageUrls;
        const entitySlideshowImageUrls = new _assets_entitySlideshowImageUrls__WEBPACK_IMPORTED_MODULE_0__["EntitySlideShowImageUrls"]();
        this.entitySlideshowImageUrls = entitySlideshowImageUrls;
    }
    getHotels(cityId) {
        return this.http.get(`${apiRoot}/hotels/?cityId=${cityId}`);
    }
    getHotelById(hotelId) {
        return this.http.get(`${apiRoot}/hotels/${hotelId}`);
    }
    getRestaurants(cityId) {
        return this.http.get(`${apiRoot}/restaurants/?cityId=${cityId}`);
    }
    getRestaurantById(restaurantId) {
        return this.http.get(`${apiRoot}/restaurants/${restaurantId}`);
    }
    getActivities(cityId) {
        return this.http.get(`${apiRoot}/activities/?cityId=${cityId}`);
    }
    getActivityById(activityId) {
        return this.http.get(`${apiRoot}/activities/${activityId}`);
    }
    getSightseeings(cityId) {
        return this.http.get(`${apiRoot}/sightseeings/?cityId=${cityId}`);
    }
    getSightseeingById(sightseeingId) {
        return this.http.get(`${apiRoot}/sightseeings/${sightseeingId}`);
    }
}
EntityService.ɵfac = function EntityService_Factory(t) { return new (t || EntityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
EntityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EntityService, factory: EntityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EntityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/filter.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/filter.service.ts ***!
  \********************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class FilterService {
    constructor(http) {
        this.http = http;
    }
    filterResults(filterObject) {
        const searchUrl = this.generateFilterUrl(filterObject);
        return this.http.get(('https://g3-advisor.herokuapp.com/filter/' + searchUrl));
    }
    generateFilterUrl(filterObject) {
        filterObject.searchUrl = this.addCityId(filterObject);
        filterObject.searchUrl = this.setFilterCategories(filterObject);
        filterObject.searchUrl = this.setSortingCategory(filterObject);
        filterObject.searchUrl = this.setSortingOrder(filterObject);
        return filterObject.searchUrl;
    }
    addCityId(filterObject) {
        return (filterObject.entryType + '?search=city.cityId==' + filterObject.cityId);
    }
    setFilterCategories(filterObject) {
        if (filterObject.ranking) {
            filterObject.searchUrl = this.addRanking(filterObject);
        }
        if (filterObject.averageRating) {
            filterObject.searchUrl = this.addRating(filterObject);
        }
        if (filterObject.priceLevel) {
            filterObject.searchUrl = this.addPriceLevel(filterObject);
        }
        return filterObject.searchUrl;
    }
    addRanking(filterObject) {
        return filterObject.searchUrl + ';ranking=le=' + filterObject.ranking;
    }
    addRating(filterObject) {
        return filterObject.searchUrl + ';averageRating=ge=' + filterObject.averageRating;
    }
    addPriceLevel(filterObject) {
        const priceLevelOrdinal = this.determineOrdinalPriceLevel(filterObject);
        return filterObject.searchUrl + ';priceLevel=le=' + priceLevelOrdinal;
    }
    determineOrdinalPriceLevel(filterObject) {
        if (filterObject.priceLevel === '€') {
            return 1;
        }
        else if (filterObject.priceLevel === '€-€€') {
            return 2;
        }
        else {
            return 3;
        }
    }
    setSortingCategory(filterObject) {
        filterObject.searchUrl = filterObject.searchUrl + '§';
        if (filterObject.categoryToSortBy === 'Rating') {
            filterObject.searchUrl = filterObject.searchUrl + 'rating;';
        }
        if (filterObject.categoryToSortBy === 'Price') {
            filterObject.searchUrl = filterObject.searchUrl + 'price;';
        }
        if (filterObject.categoryToSortBy === 'Name') {
            filterObject.searchUrl = filterObject.searchUrl + 'name;';
        }
        return filterObject.searchUrl;
    }
    setSortingOrder(filterObject) {
        if (filterObject.sortDirection === 'Descending') {
            filterObject.searchUrl = filterObject.searchUrl + 'des';
        }
        if (filterObject.sortDirection === 'Ascending') {
            filterObject.searchUrl = filterObject.searchUrl + 'asc';
        }
        return filterObject.searchUrl;
    }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/get-city.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/get-city.service.ts ***!
  \**********************************************/
/*! exports provided: GetCityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCityService", function() { return GetCityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_assets_cityImageUrls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/cityImageUrls */ "./src/assets/cityImageUrls.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const apiRoot = 'https://g3-advisor.herokuapp.com/cities/';
class GetCityService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.cities = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        const cityImageUrls = new src_assets_cityImageUrls__WEBPACK_IMPORTED_MODULE_2__["CityImageUrls"]();
        this.cityImageUrls = cityImageUrls.urlList;
        this.getCityData().subscribe(cities => {
            this.cities.next(cities);
        });
    }
    getCityData() {
        return this.http.get(apiRoot);
    }
    getCityNameById(cities, cityId) {
        try {
            return cities.filter(city => city.cityId === cityId)[0].name;
        }
        catch (_a) {
            this.router.navigate([`cities`]);
        }
    }
    getCityIdByName(cities, cityName) {
        return cities.filter(city => city.name === cityName)[0].cityId;
    }
}
GetCityService.ɵfac = function GetCityService_Factory(t) { return new (t || GetCityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
GetCityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetCityService, factory: GetCityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetCityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/review.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/review.service.ts ***!
  \********************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const apiRoot = 'https://g3-advisor.herokuapp.com';
class ReviewService {
    constructor(http) {
        this.http = http;
        this.reviewToEdit = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.refreshReviews = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    setReviewToEdit(review) {
        this.reviewToEdit.next(review);
    }
    getReviewToEdit() {
        return this.reviewToEdit.asObservable();
    }
    triggerRefreshReviews() {
        this.refreshReviews.next('refresh');
    }
    listenToTriggerRefreshReviews() {
        return this.refreshReviews.asObservable();
    }
    addHotelReview(hotelReview, id) {
        return this.http.post(`${apiRoot}/hotels/${id}/reviews`, hotelReview);
    }
    addActivityReview(activityReview, id) {
        return this.http.post(`${apiRoot}/activities/${id}/reviews`, activityReview);
    }
    addSightseeingReview(sightseeingReview, id) {
        return this.http.post(`${apiRoot}/sightseeings/${id}/reviews`, sightseeingReview);
    }
    addRestaurantReview(restaurantReview, id) {
        return this.http.post(`${apiRoot}/restaurants/${id}/reviews`, restaurantReview);
    }
    editHotelReview(hotelReview, id, hotelReviewId) {
        return this.http.put(`${apiRoot}/hotels/${id}/edit/reviews/?hotelReviewId=${hotelReviewId}`, hotelReview);
    }
    editRestaurantReview(restaurantReview, id, restaurantReviewId) {
        return this.http.put(`${apiRoot}/restaurants/${id}/edit/reviews/?restaurantReviewId=${restaurantReviewId}`, restaurantReview);
    }
    editActivityReview(activityReview, id, activityReviewId) {
        return this.http.put(`${apiRoot}/activities/${id}/edit/reviews/?activityReviewId=${activityReviewId}`, activityReview);
    }
    editSightSeeingReview(sightseeingReview, id, sightseeingReviewId) {
        return this.http.put(`${apiRoot}/sightseeings/${id}/edit/reviews/?sightseeingReviewId=${sightseeingReviewId}`, sightseeingReview);
    }
    getReviewsOfHotel(hotelId) {
        return this.http.get(`${apiRoot}/reviews/hotels/?hotelId=${hotelId}`);
    }
    getReviewsOfActivity(activityId) {
        return this.http.get(`${apiRoot}/reviews/activities/?activityId=${activityId}`);
    }
    getReviewsOfSightseeing(sightseeingId) {
        return this.http.get(`${apiRoot}/reviews/sightseeings/?sightseeingId=${sightseeingId}`);
    }
    getReviewsOfRestaurant(restaurantId) {
        return this.http.get(`${apiRoot}/reviews/restaurants/?restaurantId=${restaurantId}`);
    }
    deleteHotelReviewById(reviewId) {
        return this.http.delete(`${apiRoot}/reviews/hotels/delete/${reviewId}`);
    }
    deleteRestaurantReviewById(reviewId) {
        return this.http.delete(`${apiRoot}/reviews/restaurants/delete/${reviewId}`);
    }
    deleteActivityReviewById(reviewId) {
        return this.http.delete(`${apiRoot}/reviews/activities/delete/${reviewId}`);
    }
    deleteSightseeingReviewById(reviewId) {
        return this.http.delete(`${apiRoot}/reviews/sightseeings/delete/${reviewId}`);
    }
}
ReviewService.ɵfac = function ReviewService_Factory(t) { return new (t || ReviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ReviewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReviewService, factory: ReviewService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/cityImageUrls.ts":
/*!*************************************!*\
  !*** ./src/assets/cityImageUrls.ts ***!
  \*************************************/
/*! exports provided: CityImageUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityImageUrls", function() { return CityImageUrls; });
class CityImageUrls {
    constructor() {
        this.urlList = [
            'https://images.unsplash.com/photo-1540646794357-6cbbd6f3501e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            'https://images.unsplash.com/photo-1422360902398-0a91ff2c1a1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        ];
    }
}


/***/ }),

/***/ "./src/assets/entityImageUrls.ts":
/*!***************************************!*\
  !*** ./src/assets/entityImageUrls.ts ***!
  \***************************************/
/*! exports provided: EntityImageUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityImageUrls", function() { return EntityImageUrls; });
class EntityImageUrls {
    constructor() {
        this.hotelImageUrls = [
            'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
        ];
        this.restaurantImageUrls = [
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        ];
        this.activityImageUrls = [
            'https://images.unsplash.com/photo-1546707012-0c9f63ba29b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        ];
        this.sightseeingImageUrls = [
            'https://images.unsplash.com/photo-1534103704502-96e3a4ed093b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        ];
    }
}


/***/ }),

/***/ "./src/assets/entitySlideshowImageUrls.ts":
/*!************************************************!*\
  !*** ./src/assets/entitySlideshowImageUrls.ts ***!
  \************************************************/
/*! exports provided: EntitySlideShowImageUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitySlideShowImageUrls", function() { return EntitySlideShowImageUrls; });
class EntitySlideShowImageUrls {
    constructor() {
        this.hotelImageUrls = [
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
            'https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1573668200361-62e141908294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1552566626-2d907dab0dff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        ];
        this.restaurantImageUrls = [
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
            'https://images.unsplash.com/photo-1482275548304-a58859dc31b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80'
        ];
        this.activityImageUrls = [
            'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1527606432722-8b1422ce77a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        ];
        this.sightseeingImageUrls = [
            'https://images.unsplash.com/photo-1579896631264-65d5799552af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
            'https://images.unsplash.com/photo-1584789513261-ff38a6afc4c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
            'https://images.unsplash.com/photo-1522833090150-25498ff0ea2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1333&q=80',
            'https://images.unsplash.com/photo-1531037263926-3aac5f5e3dfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1343&q=80'
        ];
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\arask\GitProjects\g3-advisor\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map