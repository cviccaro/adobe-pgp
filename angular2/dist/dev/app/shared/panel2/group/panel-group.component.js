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
            styleUrls: ['./panel-group.component.css'],
            directives: [panel2_component_1.PanelComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PanelGroupComponent);
    return PanelGroupComponent;
}());
exports.PanelGroupComponent = PanelGroupComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGFuZWwyL2dyb3VwL3BhbmVsLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBT08sZUFBZSxDQUFDLENBQUE7QUFFdkIsaUNBQStCLHFCQUFxQixDQUFDLENBQUE7QUFTckQ7SUFBQTtRQUNXLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLG1CQUFjLEdBQW1CLEVBQUUsQ0FBQztJQXdCL0MsQ0FBQztJQXRCd0Msc0JBQUksOENBQWE7YUFBakIsY0FBc0IsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUl2RixnREFBa0IsR0FBbEI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztZQUM3QixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQWlCO2dCQUNqRCxLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQWQsQ0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3RGLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBTUQseUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUMzQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXJCRDtRQUFDLGtCQUFXLENBQUMsc0JBQXNCLENBQUM7OzREQUFBO0lBRXBDO1FBQUMsc0JBQWUsQ0FBQyxpQ0FBYyxDQUFDOzsrREFBQTtJQWJwQztRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1lBQzFDLFVBQVUsRUFBRSxDQUFDLGlDQUFjLENBQUM7U0FDL0IsQ0FBQzs7MkJBQUE7SUEyQkYsMEJBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLDJCQUFtQixzQkEwQi9CLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9wYW5lbDIvZ3JvdXAvcGFuZWwtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIEFmdGVyQ29udGVudEluaXQsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBRdWVyeUxpc3QsXHJcbiAgICBIb3N0QmluZGluZyxcclxuICAgIE9uRGVzdHJveVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vcGFuZWwyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2pwYS1wYW5lbDItZ3JvdXAnLFxyXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcclxuICAgIHN0eWxlVXJsczogWycuL3BhbmVsLWdyb3VwLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtQYW5lbENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhbmVsR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcHVibGljIGNoaWxkRXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNoaWxkLWV4cGFuZGVkJykgZ2V0IGV4cGFuZGVkQ2xhc3MoKSB7IHJldHVybiB0aGlzLmNoaWxkRXhwYW5kZWQ7IH1cclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKFBhbmVsQ29tcG9uZW50KSBwcml2YXRlIF9wYW5lbENoaWxkcmVuIDogUXVlcnlMaXN0PFBhbmVsQ29tcG9uZW50PjtcclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fcGFuZWxDaGlsZHJlbi5mb3JFYWNoKHBhbmVsID0+IHtcclxuICAgICAgICAgICAgbGV0IHN1YiA9IHBhbmVsLm9uVG9nZ2xlLnN1YnNjcmliZSgoZXhwYW5kZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRFeHBhbmRlZCA9ICEhdGhpcy5fcGFuZWxDaGlsZHJlbi5maWx0ZXIocGFuZWwgPT4gcGFuZWwuZXhwYW5kZWQpLmxlbmd0aDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChzdWIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYW51cCBqdXN0IGJlZm9yZSBBbmd1bGFyIGRlc3Ryb3lzIHRoZSBkaXJlY3RpdmUvY29tcG9uZW50LiBVbnN1YnNjcmliZSBcclxuICAgICAqIG9ic2VydmFibGVzIGFuZCBkZXRhY2ggZXZlbnQgaGFuZGxlcnMgdG8gYXZvaWQgbWVtb3J5IGxlYWtzLlxyXG4gICAgICovXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2goc3ViID0+IHtcclxuICAgICAgICAgICAgaWYgKHN1Yikgc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
