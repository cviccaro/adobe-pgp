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
var PanelContentComponent = (function () {
    function PanelContentComponent() {
        this.hidden = true;
    }
    Object.defineProperty(PanelContentComponent.prototype, "hiddenAttr", {
        get: function () { return this.hidden; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.HostBinding('class.hidden'), 
        __metadata('design:type', Object)
    ], PanelContentComponent.prototype, "hiddenAttr", null);
    PanelContentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'jpa-panel2-content',
            template: "<ng-content></ng-content>",
            styles: [":host{height:auto;padding-top:16px}:host .hidden{padding-top:0;height:0} /*# sourceMappingURL=panel-content.component.css.map */"]
        }), 
        __metadata('design:paramtypes', [])
    ], PanelContentComponent);
    return PanelContentComponent;
}());
exports.PanelContentComponent = PanelContentComponent;
