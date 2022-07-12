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
            templateUrl: './file-card.component.html',
            styleUrls: ['./file-card.component.css'],
            directives: [card_1.MdCard, icon_1.MdIcon, button_1.MdButton, index_1.FileIconComponent, ActionDelegateDirective],
        }), 
        __metadata('design:paramtypes', [])
    ], FileCardComponent);
    return FileCardComponent;
}());
exports.FileCardComponent = FileCardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZmlsZS1kcm9wem9uZS9maWxlLWNhcmQvZmlsZS1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBWU8sZUFBZSxDQUFDLENBQUE7QUFHdkIsc0JBQWtDLG9CQUFvQixDQUFDLENBQUE7QUFDdkQscUJBQXFCLDhCQUE4QixDQUFDLENBQUE7QUFDcEQscUJBQXFCLDhCQUE4QixDQUFDLENBQUE7QUFDcEQsdUJBQXVCLGtDQUFrQyxDQUFDLENBQUE7QUFDMUQscUJBQTBCLFNBQVMsQ0FBQyxDQUFBO0FBS3BDO0lBS0ksaUNBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBSnZCLFlBQU8sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUM3QixVQUFLLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDM0IsYUFBUSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBRUgsQ0FBQztJQUd0Qyx5Q0FBTyxHQUFQLFVBQVEsQ0FBUTtRQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCw4Q0FBWSxHQUFaLFVBQWEsQ0FBUTtRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBR0QsK0NBQWEsR0FBYixVQUFjLENBQVE7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQWxCRDtRQUFDLGFBQU0sRUFBRTs7NERBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7MERBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7NkRBQUE7SUFJVDtRQUFDLG1CQUFZLENBQUMsT0FBTyxDQUFDOzs7OzBEQUFBO0lBSXRCO1FBQUMsbUJBQVksQ0FBQyxZQUFZLENBQUM7Ozs7K0RBQUE7SUFLM0I7UUFBQyxtQkFBWSxDQUFDLFlBQVksQ0FBQzs7OztnRUFBQTtJQW5CL0I7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDhCQUE4QjtTQUMzQyxDQUFDOzsrQkFBQTtJQXFCRiw4QkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksK0JBQXVCLDBCQW9CbkMsQ0FBQTtBQVVEO0lBQUE7UUFDVyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2YsWUFBTyxHQUFZLElBQUksQ0FBQztRQUV2QixrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBd0JqRCxDQUFDO0lBcEIwQyxzQkFBSSxtREFBb0I7YUFBeEIsY0FBNkIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUszRixrQ0FBTSxHQUFOLFVBQU8sQ0FBUTtRQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCwyQ0FBZSxHQUFmO1FBQUEsaUJBS0M7UUFKRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFwQixDQUFvQixDQUFDLENBQUM7WUFDL0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO1FBQzFGLENBQUM7SUFDTCxDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pELENBQUM7SUExQkQ7UUFBQyxZQUFLLEVBQUU7O21EQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3NEQUFBO0lBRVI7UUFBQyxhQUFNLEVBQUU7OzREQUFBO0lBRVQ7UUFBQyxnQkFBUyxDQUFDLHVCQUF1QixDQUFDOzs2REFBQTtJQUVuQztRQUFDLGtCQUFXLENBQUMsd0JBQXdCLENBQUM7O2lFQUFBO0lBbEIxQztRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBRSwyQkFBMkIsQ0FBRTtZQUMxQyxVQUFVLEVBQUUsQ0FBRSxhQUFNLEVBQUUsYUFBTSxFQUFFLGlCQUFRLEVBQUUseUJBQWlCLEVBQUUsdUJBQXVCLENBQUU7U0FFdkYsQ0FBQzs7eUJBQUE7SUErQkYsd0JBQUM7QUFBRCxDQTlCQSxBQThCQyxJQUFBO0FBOUJZLHlCQUFpQixvQkE4QjdCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9maWxlLWRyb3B6b25lL2ZpbGUtY2FyZC9maWxlLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIElucHV0LFxyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBIb3N0QmluZGluZyxcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIE9uRGVzdHJveVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcclxuLy9pbXBvcnQgeyBEYXRlRm9ybWF0UGlwZSB9IGZyb20gJ2FuZ3VsYXIyLW1vbWVudCc7XHJcbmltcG9ydCB7IEZpbGVJY29uQ29tcG9uZW50IH0gZnJvbSAnLi4vZmlsZS1pY29uL2luZGV4JztcclxuaW1wb3J0IHtNZENhcmR9IGZyb20gXCJAYW5ndWxhcjItbWF0ZXJpYWwvY2FyZC9jYXJkXCI7XHJcbmltcG9ydCB7TWRJY29ufSBmcm9tIFwiQGFuZ3VsYXIyLW1hdGVyaWFsL2ljb24vaWNvblwiO1xyXG5pbXBvcnQge01kQnV0dG9ufSBmcm9tIFwiQGFuZ3VsYXIyLW1hdGVyaWFsL2J1dHRvbi9idXR0b25cIjtcclxuaW1wb3J0IHtNYW5hZ2VkRmlsZX0gZnJvbSBcIi4uL2ZpbGVcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbanBhQWN0aW9uRGVsZWdhdGVEaXJlY3RpdmVdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjdGlvbkRlbGVnYXRlRGlyZWN0aXZlIHtcclxuICAgIEBPdXRwdXQoKSBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIGhvdmVyT3V0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gICAgb25DbGljayhlOiBFdmVudCkge1xyXG4gICAgICAgIHRoaXMuY2xpY2tlZC5lbWl0KGUpO1xyXG4gICAgfVxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXHJcbiAgICBvbk1vdXNlRW50ZXIoZTogRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmhvdmVyLmVtaXQoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXHJcbiAgICBvbk1vdXNlTGVhdmVyKGU6IEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5ob3Zlck91dC5lbWl0KGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2pwYS1maWxlLWNhcmQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsgJy4vZmlsZS1jYXJkLmNvbXBvbmVudC5jc3MnIF0sXHJcbiAgICBkaXJlY3RpdmVzOiBbIE1kQ2FyZCwgTWRJY29uLCBNZEJ1dHRvbiwgRmlsZUljb25Db21wb25lbnQsIEFjdGlvbkRlbGVnYXRlRGlyZWN0aXZlIF0sXHJcbiAgIC8vIHBpcGVzOiBbIERhdGVGb3JtYXRQaXBlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICAgIHB1YmxpYyBob3ZlcmluZyA9IGZhbHNlO1xyXG5cclxuICAgIEBJbnB1dCgpIGZpbGU6IE1hbmFnZWRGaWxlO1xyXG4gICAgQElucHV0KCkgYWN0aW9uczogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQE91dHB1dCgpIGNsaWNrZWRSZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgQFZpZXdDaGlsZChBY3Rpb25EZWxlZ2F0ZURpcmVjdGl2ZSkgYWN0aW9uRGVsZWdhdGUgOiBBY3Rpb25EZWxlZ2F0ZURpcmVjdGl2ZTtcclxuXHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGlvbnMtaG92ZXJpbmcnKSBnZXQgYWN0aW9uc0hvdmVyaW5nQ2xhc3MoKSB7IHJldHVybiB0aGlzLmhvdmVyaW5nOyB9XHJcblxyXG4gICAgcHJpdmF0ZSBob3ZlclN1YjogU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBob3Zlck91dFN1YjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIHJlbW92ZShlOiBFdmVudCkge1xyXG4gICAgICAgIHRoaXMuY2xpY2tlZFJlbW92ZS5lbWl0KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hY3Rpb25EZWxlZ2F0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhvdmVyU3ViID0gdGhpcy5hY3Rpb25EZWxlZ2F0ZS5ob3Zlci5zdWJzY3JpYmUoZSA9PiB0aGlzLmhvdmVyaW5nID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaG92ZXJPdXRTdWIgPSB0aGlzLmFjdGlvbkRlbGVnYXRlLmhvdmVyT3V0LnN1YnNjcmliZShlID0+IHRoaXMuaG92ZXJpbmcgPSBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhvdmVyU3ViKSB0aGlzLmhvdmVyU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaG92ZXJPdXRTdWIpIHRoaXMuaG92ZXJPdXRTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
