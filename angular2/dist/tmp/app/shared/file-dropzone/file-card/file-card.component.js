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
var index_1 = require('../file-icon/index');
var card_1 = require("@angular2-material/card/card");
var icon_1 = require("@angular2-material/icon/icon");
var button_1 = require("@angular2-material/button/button");
var file_1 = require("../file");
var ActionDelegateDirective = (function () {
    function ActionDelegateDirective(el) {
        this.el = el;
        this.clicked = new core_1.EventEmitter();
        this.hover = new core_1.EventEmitter();
        this.hoverOut = new core_1.EventEmitter();
    }
    ActionDelegateDirective.prototype.onClick = function (e) {
        this.clicked.emit(e);
    };
    ActionDelegateDirective.prototype.onMouseEnter = function (e) {
        this.hover.emit(e);
    };
    ActionDelegateDirective.prototype.onMouseLeaver = function (e) {
        this.hoverOut.emit(e);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ActionDelegateDirective.prototype, "clicked", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ActionDelegateDirective.prototype, "hover", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ActionDelegateDirective.prototype, "hoverOut", void 0);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Event]), 
        __metadata('design:returntype', void 0)
    ], ActionDelegateDirective.prototype, "onClick", null);
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Event]), 
        __metadata('design:returntype', void 0)
    ], ActionDelegateDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Event]), 
        __metadata('design:returntype', void 0)
    ], ActionDelegateDirective.prototype, "onMouseLeaver", null);
    ActionDelegateDirective = __decorate([
        core_1.Directive({
            selector: '[jpaActionDelegateDirective]',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ActionDelegateDirective);
    return ActionDelegateDirective;
}());
exports.ActionDelegateDirective = ActionDelegateDirective;
var FileCardComponent = (function () {
    function FileCardComponent() {
        this.hovering = false;
        this.actions = true;
        this.clickedRemove = new core_1.EventEmitter();
    }
    Object.defineProperty(FileCardComponent.prototype, "actionsHoveringClass", {
        get: function () { return this.hovering; },
        enumerable: true,
        configurable: true
    });
    FileCardComponent.prototype.remove = function (e) {
        this.clickedRemove.emit(e);
    };
    FileCardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.actionDelegate) {
            this.hoverSub = this.actionDelegate.hover.subscribe(function (e) { return _this.hovering = true; });
            this.hoverOutSub = this.actionDelegate.hoverOut.subscribe(function (e) { return _this.hovering = false; });
        }
    };
    FileCardComponent.prototype.ngOnDestroy = function () {
        if (this.hoverSub)
            this.hoverSub.unsubscribe();
        if (this.hoverOutSub)
            this.hoverOutSub.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', file_1.ManagedFile)
    ], FileCardComponent.prototype, "file", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], FileCardComponent.prototype, "actions", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FileCardComponent.prototype, "clickedRemove", void 0);
    __decorate([
        core_1.ViewChild(ActionDelegateDirective), 
        __metadata('design:type', ActionDelegateDirective)
    ], FileCardComponent.prototype, "actionDelegate", void 0);
    __decorate([
        core_1.HostBinding('class.actions-hovering'), 
        __metadata('design:type', Object)
    ], FileCardComponent.prototype, "actionsHoveringClass", null);
    FileCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'jpa-file-card',
            template: "<md-card>     <md-card-header>         <jpa-file-icon [extension]=\"file.extension\"></jpa-file-icon>         <div class=\"md-card-header-text\">             <md-card-title>{{ file.filename }}</md-card-title>             <md-card-subtitle>                 <span class=\"date\">{{ file.date}}</span>                 <span class=\"filesize\">{{ file.filesize() }} KB</span>             </md-card-subtitle>         </div>     </md-card-header>     <md-icon *ngIf=\"!file.id\" class=\"new md-18\">star</md-icon>     <div class=\"shade\" *ngIf=\"actions\">         <span class=\"remove\" jpaActionDelegateDirective (click)=\"remove($event)\">         <md-icon>delete_forever</md-icon>         </span>     </div>     <ng-content></ng-content> </md-card>",
            styles: [":host{display:block;z-index:10}:host .md-card-header-text{-webkit-order:2;-ms-flex-order:2;order:2}:host .md-card-header-text md-card-subtitle{-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}:host .md-card-header-text md-card-subtitle span{float:left}:host .shade{transition:all .25s linear;display:block;background:transparent;position:absolute;top:0;left:0;right:0;bottom:0}:host .new{position:absolute;top:5px;right:5px;color:#106cc8}:host .remove{position:absolute;top:10px;left:10px;cursor:pointer}:host .remove md-icon{color:#fff}:host.actions-hovering .shade{background:rgba(0,0,0,.54)}:host img{max-width:100%}:host.dnd-drag-start{border:2px dashed rgba(0,0,0,.54)} /*# sourceMappingURL=file-card.component.css.map */"],
            directives: [card_1.MdCard, icon_1.MdIcon, button_1.MdButton, index_1.FileIconComponent, ActionDelegateDirective],
        }), 
        __metadata('design:paramtypes', [])
    ], FileCardComponent);
    return FileCardComponent;
}());
exports.FileCardComponent = FileCardComponent;
