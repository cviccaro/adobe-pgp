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
var panel_bar_title_component_1 = require('./panel-bar-title.component');
var icon_1 = require("@angular2-material/icon/icon");
var button_1 = require("@angular2-material/button/button");
var PanelBarComponent = (function () {
    function PanelBarComponent() {
        this._subscriptions = [];
        this.expandable = true;
        this.onToggle = new core_1.EventEmitter();
    }
    PanelBarComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        var titles = this.titleCmps.toArray().concat(this.subTitleCmps.toArray());
        titles.forEach(function (titleCmp) {
            var sub = titleCmp.onClick.subscribe(function (evt) {
                _this.toggle(evt);
            });
            _this._subscriptions.push(sub);
        });
    };
    PanelBarComponent.prototype.toggle = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.expandable) {
            this.onToggle.emit(evt);
        }
    };
    PanelBarComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.forEach(function (sub) {
            if (sub)
                sub.unsubscribe();
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelBarComponent.prototype, "expandable", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PanelBarComponent.prototype, "onToggle", void 0);
    __decorate([
        core_1.ContentChildren(panel_bar_title_component_1.PanelBarTitleComponent), 
        __metadata('design:type', core_1.QueryList)
    ], PanelBarComponent.prototype, "titleCmps", void 0);
    __decorate([
        core_1.ContentChildren(panel_bar_title_component_1.PanelBarSubtitleComponent), 
        __metadata('design:type', core_1.QueryList)
    ], PanelBarComponent.prototype, "subTitleCmps", void 0);
    PanelBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'jpa-panel2-bar',
            template: "<ng-content select=\"jpa-panel2-bar-title\"></ng-content> <ng-content select=\"jpa-panel2-bar-subtitle\"></ng-content> <button class=\"toggle md-24\" md-icon-button (click)=\"toggle($event)\">     <md-icon>keyboard_arrow_down</md-icon> </button>",
            styles: [":host{display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:0;max-height:24px}:host jpa-panel2-bar-title{color:#000;font-size:16px;font-weight:400;margin-bottom:0;width:25%;cursor:pointer;transition:all .25s linear}:host jpa-panel2-bar-title .required{margin-left:4px}:host jpa-panel2-bar-title .hint{font-size:11px;color:rgba(0,0,0,.54);padding-left:8px;margin-left:8px;border-left:1px solid rgba(0,0,0,.12)}:host jpa-panel2-bar-subtitle{color:rgba(0,0,0,.54);cursor:pointer;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:16px;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-left:0;margin-right:auto;width:75%;transition:all .25s linear} /*# sourceMappingURL=panel-bar.component.css.map */"],
            directives: [button_1.MdButton, icon_1.MdIcon, panel_bar_title_component_1.PanelBarTitleComponent, panel_bar_title_component_1.PanelBarSubtitleComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PanelBarComponent);
    return PanelBarComponent;
}());
exports.PanelBarComponent = PanelBarComponent;
