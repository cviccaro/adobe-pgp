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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbGlzdC9saXN0cy5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHVCQUFvQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3RELDhCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBR3BEO0lBQ0Usb0JBQW9CLEtBQW1CLEVBQVUsTUFBYztRQUEzQyxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFcEUsZ0NBQVcsR0FBWCxVQUFZLElBQUksRUFBRSxLQUFLO1FBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTlELEVBQUUsQ0FBQyxDQUFFLENBQUMsSUFBSyxDQUFDO1lBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRTdDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBVkg7UUFBQyxpQkFBVSxFQUFFOztrQkFBQTtJQVdiLGlCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSxrQkFBVSxhQVV0QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvbGlzdC9saXN0cy5ndWFyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7Q2FjaGVTZXJ2aWNlfSBmcm9tIFwiLi4vY2FjaGUvY2FjaGUuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGlzdHNHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhY2hlOiBDYWNoZVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICBjYW5BY3RpdmF0ZShuZXh0LCBzdGF0ZSkge1xyXG4gICAgbGV0IGJvb2wgPSB0aGlzLmNhY2hlLmhhcygnbGlzdHMnKSAmJiB0aGlzLmNhY2hlLmhhcygnZmlsZXMnKTtcclxuXHJcbiAgICBpZiAoICFib29sICkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYnVsayddKTtcclxuXHJcbiAgICByZXR1cm4gYm9vbDtcclxuICB9XHJcbn1cclxuIl19
