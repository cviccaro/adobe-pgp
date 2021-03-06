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
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-navbar',
            template: "<nav>   <a [routerLink]=\"['/']\">Single</a>   <a [routerLink]=\"['/bulk']\">Bulk</a>   <a [routerLink]=\"['/queue']\">Queue</a> </nav>",
            styles: [":host{border-color:#e1e1e1;border-style:solid;border-width:0 0 1px;display:block;height:48px;padding:0 16px}:host nav a{color:#8f8f8f;font-size:14px;font-weight:500;line-height:48px;margin-right:20px;text-decoration:none;vertical-align:middle}:host nav a:hover{color:#106cc8} /*# sourceMappingURL=navbar.component.css.map */"],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
