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
var icon_1 = require("@angular2-material/icon/icon");
var CopyContainerComponent = (function () {
    function CopyContainerComponent() {
    }
    CopyContainerComponent.prototype.copyToClipboard = function (str, el) {
        el.select();
        try {
            document.execCommand('copy');
        }
        catch (err) {
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CopyContainerComponent.prototype, "text", void 0);
    CopyContainerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'apgp-copy-container',
            template: "<button class=\"copy\" md-icon-button title=\"Copy to Clipboard\" (click)=\"copyToClipboard(text, textarea)\">     <md-icon>content_copy</md-icon> </button> <pre #pre>{{ text }}<textarea #textarea>{{ text }}</textarea></pre>",
            styles: [":host{position:relative;display:block}:host .copy{position:absolute;top:10px;right:10px}:host .copy md-icon{vertical-align:bottom}:host pre{padding-right:96px}:host.contain pre{white-space:normal}:host textarea{position:absolute;bottom:3px;right:3px;height:1px;padding:0;line-height:0;border:1px solid transparent;outline:none;outline-width:0;outline-color:transparent} /*# sourceMappingURL=copy-container.component.css.map */"],
            directives: [icon_1.MD_ICON_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], CopyContainerComponent);
    return CopyContainerComponent;
}());
exports.CopyContainerComponent = CopyContainerComponent;
