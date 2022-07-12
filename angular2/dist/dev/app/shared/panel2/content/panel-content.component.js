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
            templateUrl: './panel-content.component.html',
            styleUrls: ['./panel-content.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PanelContentComponent);
    return PanelContentComponent;
}());
exports.PanelContentComponent = PanelContentComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGFuZWwyL2NvbnRlbnQvcGFuZWwtY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQVF2RDtJQUFBO1FBQ0ksV0FBTSxHQUFZLElBQUksQ0FBQztJQUczQixDQUFDO0lBRGdDLHNCQUFJLDZDQUFVO2FBQWQsY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUFyRTtRQUFDLGtCQUFXLENBQUMsY0FBYyxDQUFDOzsyREFBQTtJQVRoQztRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQy9DLENBQUM7OzZCQUFBO0lBS0YsNEJBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLDZCQUFxQix3QkFJakMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3BhbmVsMi9jb250ZW50L3BhbmVsLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdqcGEtcGFuZWwyLWNvbnRlbnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhbmVsLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFuZWwtY29udGVudC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhbmVsQ29udGVudENvbXBvbmVudCB7XHJcbiAgICBoaWRkZW46IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaGlkZGVuJykgZ2V0IGhpZGRlbkF0dHIoKSB7IHJldHVybiB0aGlzLmhpZGRlbjsgfVxyXG59XHJcbiJdfQ==
