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
var cache_service_1 = require("../cache/cache.service");
var ListsGuard = (function () {
    function ListsGuard(cache, router) {
        this.cache = cache;
        this.router = router;
    }
    ListsGuard.prototype.canActivate = function (next, state) {
        var bool = this.cache.has('lists') && this.cache.has('files');
        if (!bool)
            this.router.navigate(['/bulk']);
        return bool;
    };
    ListsGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [cache_service_1.CacheService, router_1.Router])
    ], ListsGuard);
    return ListsGuard;
}());
exports.ListsGuard = ListsGuard;
