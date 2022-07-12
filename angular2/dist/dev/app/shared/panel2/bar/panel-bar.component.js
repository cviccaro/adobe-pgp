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
            templateUrl: './panel-bar.component.html',
            styleUrls: ['./panel-bar.component.css'],
            directives: [button_1.MdButton, icon_1.MdIcon, panel_bar_title_component_1.PanelBarTitleComponent, panel_bar_title_component_1.PanelBarSubtitleComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PanelBarComponent);
    return PanelBarComponent;
}());
exports.PanelBarComponent = PanelBarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGFuZWwyL2Jhci9wYW5lbC1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFTTyxlQUFlLENBQUMsQ0FBQTtBQUd2QiwwQ0FBa0UsNkJBQTZCLENBQUMsQ0FBQTtBQUNoRyxxQkFBcUIsOEJBQThCLENBQUMsQ0FBQTtBQUNwRCx1QkFBdUIsa0NBQWtDLENBQUMsQ0FBQTtBQVMxRDtJQUFBO1FBQ1csbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBRWxDLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFFakIsYUFBUSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBeUM1QyxDQUFDO0lBakNHLDhDQUFrQixHQUFsQjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBRTFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO1lBQ25CLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztnQkFDcEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQU1ELGtDQUFNLEdBQU4sVUFBTyxHQUFVO1FBQ2IsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDO0lBQ0wsQ0FBQztJQU1ELHVDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDM0IsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUExQ0Q7UUFBQyxZQUFLLEVBQUU7O3lEQUFBO0lBRVI7UUFBQyxhQUFNLEVBQUU7O3VEQUFBO0lBRVQ7UUFBQyxzQkFBZSxDQUFDLGtEQUFzQixDQUFDOzt3REFBQTtJQUN4QztRQUFDLHNCQUFlLENBQUMscURBQXlCLENBQUM7OzJEQUFBO0lBZi9DO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDeEMsVUFBVSxFQUFFLENBQUUsaUJBQVEsRUFBRSxhQUFNLEVBQUUsa0RBQXNCLEVBQUUscURBQXlCLENBQUU7U0FDdEYsQ0FBQzs7eUJBQUE7SUErQ0Ysd0JBQUM7QUFBRCxDQTlDQSxBQThDQyxJQUFBO0FBOUNZLHlCQUFpQixvQkE4QzdCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9wYW5lbDIvYmFyL3BhbmVsLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBRdWVyeUxpc3QsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5cclxuaW1wb3J0IHsgUGFuZWxCYXJUaXRsZUNvbXBvbmVudCwgUGFuZWxCYXJTdWJ0aXRsZUNvbXBvbmVudCB9IGZyb20gJy4vcGFuZWwtYmFyLXRpdGxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWRJY29ufSBmcm9tIFwiQGFuZ3VsYXIyLW1hdGVyaWFsL2ljb24vaWNvblwiO1xyXG5pbXBvcnQge01kQnV0dG9ufSBmcm9tIFwiQGFuZ3VsYXIyLW1hdGVyaWFsL2J1dHRvbi9idXR0b25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnanBhLXBhbmVsMi1iYXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhbmVsLWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wYW5lbC1iYXIuY29tcG9uZW50LmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczogWyBNZEJ1dHRvbiwgTWRJY29uLCBQYW5lbEJhclRpdGxlQ29tcG9uZW50LCBQYW5lbEJhclN1YnRpdGxlQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhbmVsQmFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICAgIHB1YmxpYyBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgICBASW5wdXQoKSBleHBhbmRhYmxlID0gdHJ1ZTtcclxuXHJcbiAgICBAT3V0cHV0KCkgb25Ub2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihQYW5lbEJhclRpdGxlQ29tcG9uZW50KSB0aXRsZUNtcHMgOiBRdWVyeUxpc3Q8UGFuZWxCYXJUaXRsZUNvbXBvbmVudD47XHJcbiAgICBAQ29udGVudENoaWxkcmVuKFBhbmVsQmFyU3VidGl0bGVDb21wb25lbnQpIHN1YlRpdGxlQ21wcyA6IFF1ZXJ5TGlzdDxQYW5lbEJhclN1YnRpdGxlQ29tcG9uZW50PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIEFuZ3VsYXIgY2hlY2tzIHRoZSBiaW5kaW5ncyBvZiB0aGUgZXh0ZXJuYWwgY29udGVudCB0aGF0IGl0IHByb2plY3RlZCBpbnRvIGl0cyB2aWV3XHJcbiAgICAgKi9cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdGl0bGVzID0gdGhpcy50aXRsZUNtcHMudG9BcnJheSgpLmNvbmNhdCh0aGlzLnN1YlRpdGxlQ21wcy50b0FycmF5KCkpO1xyXG5cclxuICAgICAgICB0aXRsZXMuZm9yRWFjaCh0aXRsZUNtcCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdWIgPSB0aXRsZUNtcC5vbkNsaWNrLnN1YnNjcmliZShldnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoZXZ0KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goc3ViKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRvZ2dsZSB0aGUgcGFuZWxcclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2dFxyXG4gICAgICovXHJcbiAgICB0b2dnbGUoZXZ0OiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Ub2dnbGUuZW1pdChldnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFudXAganVzdCBiZWZvcmUgQW5ndWxhciBkZXN0cm95cyB0aGUgZGlyZWN0aXZlL2NvbXBvbmVudC4gVW5zdWJzY3JpYmVcclxuICAgICAqIG9ic2VydmFibGVzIGFuZCBkZXRhY2ggZXZlbnQgaGFuZGxlcnMgdG8gYXZvaWQgbWVtb3J5IGxlYWtzLlxyXG4gICAgICovXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2goc3ViID0+IHtcclxuICAgICAgICAgICAgaWYgKHN1Yikgc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
