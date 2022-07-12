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
var CacheService = (function () {
    function CacheService() {
        this._cache = {};
    }
    Object.defineProperty(CacheService.prototype, "cache", {
        get: function () { return this._cache; },
        enumerable: true,
        configurable: true
    });
    CacheService.prototype.get = function (name) { return this.has(name) ? this.cache[name] : null; };
    CacheService.prototype.store = function (name, data) {
        this._cache[name] = data;
        return this;
    };
    CacheService.prototype.has = function (name) {
        return this._cache.hasOwnProperty(name);
    };
    CacheService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CacheService);
    return CacheService;
}());
exports.CacheService = CacheService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY2FjaGUvY2FjaGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRzNDO0lBQUE7UUFDVSxXQUFNLEdBQTRCLEVBQUUsQ0FBQztJQWUvQyxDQUFDO0lBYkMsc0JBQVcsK0JBQUs7YUFBaEIsY0FBcUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUVuQywwQkFBRyxHQUFWLFVBQVcsSUFBWSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUV0RSw0QkFBSyxHQUFaLFVBQWEsSUFBWSxFQUFFLElBQVM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFekIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSwwQkFBRyxHQUFWLFVBQVcsSUFBWTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQWhCSDtRQUFDLGlCQUFVLEVBQUU7O29CQUFBO0lBaUJiLG1CQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxvQkFBWSxlQWdCeEIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2NhY2hlL2NhY2hlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYWNoZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2NhY2hlOiB7IFtrZXk6IHN0cmluZ10gOiBhbnkgfSA9IHt9O1xyXG5cclxuICBwdWJsaWMgZ2V0IGNhY2hlKCkgeyByZXR1cm4gdGhpcy5fY2FjaGU7IH1cclxuXHJcbiAgcHVibGljIGdldChuYW1lOiBzdHJpbmcpIHsgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5jYWNoZVtuYW1lXSA6IG51bGw7IH1cclxuXHJcbiAgcHVibGljIHN0b3JlKG5hbWU6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLl9jYWNoZVtuYW1lXSA9IGRhdGE7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFzKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlLmhhc093blByb3BlcnR5KG5hbWUpO1xyXG4gIH1cclxufVxyXG4iXX0=
