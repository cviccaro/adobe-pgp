"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var index_1 = require('./shared/index');
var icon_registry_1 = require("@angular2-material/icon/icon-registry");
var xhr_service_1 = require("./shared/xhr/xhr.service");
var progress_bar_1 = require("@angular2-material/progress-bar/progress-bar");
var angular2_toaster_1 = require("angular2-toaster/angular2-toaster");
var AppComponent = (function () {
    function AppComponent(xhr, router) {
        this.xhr = xhr;
        this.router = router;
        this.ajaxing = false;
        this.toasterConfig = new angular2_toaster_1.ToasterConfig({
            showCloseButton: true
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerSub = this.router.events.subscribe(function (evt) {
            if (evt.toString().match('^NavigationEnd')) {
                _this.ajaxing = false;
            }
            else if (evt.toString().match('^NavigationStart')) {
                _this.ajaxing = true;
            }
        });
        this.xhrStartSub = this.xhr.start.subscribe(function (e) { return _this.ajaxing = true; });
        this.xhrDoneSub = this.xhr.done.subscribe(function (e) { return _this.ajaxing = false; });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.routerSub)
            this.xhrStartSub.unsubscribe();
        if (this.xhrStartSub)
            this.xhrStartSub.unsubscribe();
        if (this.xhrDoneSub)
            this.xhrDoneSub.unsubscribe();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            viewProviders: [icon_registry_1.MdIconRegistry, angular2_toaster_1.ToasterService],
            template: "<sd-toolbar></sd-toolbar> <sd-navbar></sd-navbar> <md-progress-bar [hidden]=\"!ajaxing\" mode=\"indeterminate\" class=\"app-progress\" color=\"primary\"></md-progress-bar> <router-outlet></router-outlet> <toaster-container [toasterconfig]=\"toasterConfig\"> </toaster-container>",
            directives: [router_1.ROUTER_DIRECTIVES, index_1.NavbarComponent, index_1.ToolbarComponent, progress_bar_1.MD_PROGRESS_BAR_DIRECTIVES, angular2_toaster_1.ToasterContainerComponent]
        }), 
        __metadata('design:paramtypes', [xhr_service_1.XhrService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
