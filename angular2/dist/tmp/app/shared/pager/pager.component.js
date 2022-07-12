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
var button_1 = require("@angular2-material/button/button");
var PagerComponent = (function () {
    function PagerComponent() {
        this.pageChanged = new core_1.EventEmitter();
    }
    PagerComponent.prototype.ngOnInit = function () {
        this.pages = new Array(this.pagerData.last_page);
    };
    PagerComponent.prototype.previous = function () {
        this.changePage(this.pagerData.current_page - 1);
    };
    PagerComponent.prototype.next = function () {
        this.changePage(this.pagerData.current_page + 1);
    };
    PagerComponent.prototype.changePage = function (page) {
        if (page === this.pagerData.current_page) {
            return;
        }
        this.pageChanged.emit(page);
    };
    PagerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('pagerData')) {
            this.pages = new Array(this.pagerData.last_page);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PagerComponent.prototype, "pagerData", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PagerComponent.prototype, "pageChanged", void 0);
    PagerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'jpa-pager',
            template: "<button md-icon-button class=\"previous\" (click)=\"previous()\" [hidden]=\"pagerData.current_page === 1\">     <md-icon>arrow_back</md-icon> </button> <ul class=\"pagination\">     <li class=\"pager-page\"         *ngFor=\"let page of pages; let index = index;\"         [class.active]=\"pagerData.current_page === (index + 1)\">         <a (click)=\"changePage(index+1)\">{{ index+1 }}</a>     </li> </ul> <button md-icon-button class=\"next\" (click)=\"next()\" [hidden]=\"pagerData.current_page === pagerData.last_page\">     <md-icon>arrow_forward</md-icon> </button>",
            styles: [":host{padding:60px 0 40px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}:host .previous{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}:host .previous[hidden]{display:none}:host .next{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end}:host .next[hidden]{display:none}:host ul{margin:0 auto;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}:host ul li a{cursor:pointer;color:#212121}:host ul .active>a,:host ul .active>a:focus,:host ul .active>a:hover,:host ul .active>a>span,:host ul .active>a>span:focus,:host ul .active>a>span:hover{background-color:#106cc8;border-color:#106cc8;color:#fff} /*# sourceMappingURL=pager.component.css.map */"],
            directives: [button_1.MdButton, icon_1.MdIcon]
        }), 
        __metadata('design:paramtypes', [])
    ], PagerComponent);
    return PagerComponent;
}());
exports.PagerComponent = PagerComponent;
