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
            templateUrl: './pager.component.html',
            styleUrls: ['./pager.component.css'],
            directives: [button_1.MdButton, icon_1.MdIcon]
        }), 
        __metadata('design:paramtypes', [])
    ], PagerComponent);
    return PagerComponent;
}());
exports.PagerComponent = PagerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGFnZXIvcGFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUYsZUFBZSxDQUFDLENBQUE7QUFHekcscUJBQXFCLDhCQUE4QixDQUFDLENBQUE7QUFDcEQsdUJBQXVCLGtDQUFrQyxDQUFDLENBQUE7QUFTMUQ7SUFBQTtRQUtjLGdCQUFXLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUEyQi9DLENBQUM7SUF6QkcsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsSUFBWTtRQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxDQUFDO0lBQ0wsQ0FBQztJQTVCRDtRQUFDLFlBQUssRUFBRTs7cURBQUE7SUFFUjtRQUFDLGFBQU0sRUFBRTs7dURBQUE7SUFaYjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxVQUFVLEVBQUUsQ0FBRSxpQkFBUSxFQUFFLGFBQU0sQ0FBRTtTQUNuQyxDQUFDOztzQkFBQTtJQWlDRixxQkFBQztBQUFELENBaENBLEFBZ0NDLElBQUE7QUFoQ1ksc0JBQWMsaUJBZ0MxQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvcGFnZXIvcGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQYWdlckRhdGEgfSBmcm9tICcuL3BhZ2VyLWRhdGEnO1xyXG5pbXBvcnQge01kSWNvbn0gZnJvbSBcIkBhbmd1bGFyMi1tYXRlcmlhbC9pY29uL2ljb25cIjtcclxuaW1wb3J0IHtNZEJ1dHRvbn0gZnJvbSBcIkBhbmd1bGFyMi1tYXRlcmlhbC9idXR0b24vYnV0dG9uXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2pwYS1wYWdlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFnZXIuY29tcG9uZW50LmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczogWyBNZEJ1dHRvbiwgTWRJY29uIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gICAgcGFnZXM6IGFueVtdO1xyXG5cclxuICAgIEBJbnB1dCgpIHBhZ2VyRGF0YTogUGFnZXJEYXRhO1xyXG5cclxuICAgIEBPdXRwdXQoKSBwYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhZ2VzID0gbmV3IEFycmF5KHRoaXMucGFnZXJEYXRhLmxhc3RfcGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXMoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMucGFnZXJEYXRhLmN1cnJlbnRfcGFnZSAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKHRoaXMucGFnZXJEYXRhLmN1cnJlbnRfcGFnZSArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVBhZ2UocGFnZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHBhZ2UgPT09IHRoaXMucGFnZXJEYXRhLmN1cnJlbnRfcGFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwYWdlckRhdGEnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VzID0gbmV3IEFycmF5KHRoaXMucGFnZXJEYXRhLmxhc3RfcGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
