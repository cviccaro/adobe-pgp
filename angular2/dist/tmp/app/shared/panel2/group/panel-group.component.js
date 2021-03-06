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
var panel2_component_1 = require('../panel2.component');
var PanelGroupComponent = (function () {
    function PanelGroupComponent() {
        this.childExpanded = false;
        this._subscriptions = [];
    }
    Object.defineProperty(PanelGroupComponent.prototype, "expandedClass", {
        get: function () { return this.childExpanded; },
        enumerable: true,
        configurable: true
    });
    PanelGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._panelChildren.forEach(function (panel) {
            var sub = panel.onToggle.subscribe(function (expanded) {
                _this.childExpanded = !!_this._panelChildren.filter(function (panel) { return panel.expanded; }).length;
            });
            _this._subscriptions.push(sub);
        });
    };
    PanelGroupComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.forEach(function (sub) {
            if (sub)
                sub.unsubscribe();
        });
    };
    __decorate([
        core_1.HostBinding('class.child-expanded'), 
        __metadata('design:type', Object)
    ], PanelGroupComponent.prototype, "expandedClass", null);
    __decorate([
        core_1.ContentChildren(panel2_component_1.PanelComponent), 
        __metadata('design:type', core_1.QueryList)
    ], PanelGroupComponent.prototype, "_panelChildren", void 0);
    PanelGroupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'jpa-panel2-group',
            template: '<ng-content></ng-content>',
            styles: [":host{display:block;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);will-change:box-shadow;transition:all .25s linear;position:relative}:host.child-expanded{box-shadow:none;-webkit-box-shadow:none}:host.child-expanded .jpa-panel{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}:host .jpa-panel{box-shadow:none}:host .jpa-panel.expanded{margin-bottom:24px}:host .jpa-panel.jpa-panel.expanded{margin-top:24px} /*# sourceMappingURL=panel-group.component.css.map */"],
            directives: [panel2_component_1.PanelComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PanelGroupComponent);
    return PanelGroupComponent;
}());
exports.PanelGroupComponent = PanelGroupComponent;
