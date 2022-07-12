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
var PanelBarTitleComponent = (function () {
    function PanelBarTitleComponent() {
        this.onClick = new core_1.EventEmitter();
    }
    PanelBarTitleComponent.prototype._onClick = function (evt) {
        this.onClick.emit(evt);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PanelBarTitleComponent.prototype, "onClick", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Event]), 
        __metadata('design:returntype', void 0)
    ], PanelBarTitleComponent.prototype, "_onClick", null);
    PanelBarTitleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'jpa-panel2-bar-title',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [])
    ], PanelBarTitleComponent);
    return PanelBarTitleComponent;
}());
exports.PanelBarTitleComponent = PanelBarTitleComponent;
var PanelBarSubtitleComponent = (function () {
    function PanelBarSubtitleComponent() {
        this.onClick = new core_1.EventEmitter();
    }
    PanelBarSubtitleComponent.prototype._onClick = function (evt) {
        this.onClick.emit(evt);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PanelBarSubtitleComponent.prototype, "onClick", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Event]), 
        __metadata('design:returntype', void 0)
    ], PanelBarSubtitleComponent.prototype, "_onClick", null);
    PanelBarSubtitleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'jpa-panel2-bar-subtitle',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [])
    ], PanelBarSubtitleComponent);
    return PanelBarSubtitleComponent;
}());
exports.PanelBarSubtitleComponent = PanelBarSubtitleComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGFuZWwyL2Jhci9wYW5lbC1iYXItdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFLTyxlQUFlLENBQUMsQ0FBQTtBQU92QjtJQUFBO1FBQ2MsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBTTNDLENBQUM7SUFIRyx5Q0FBUSxHQUFSLFVBQVMsR0FBVTtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFMRDtRQUFDLGFBQU0sRUFBRTs7MkRBQUE7SUFFVDtRQUFDLG1CQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7MERBQUE7SUFSdEM7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLDJCQUEyQjtTQUN4QyxDQUFDOzs4QkFBQTtJQVFGLDZCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSw4QkFBc0IseUJBT2xDLENBQUE7QUFPRDtJQUFBO1FBQ2MsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBTTNDLENBQUM7SUFIRyw0Q0FBUSxHQUFSLFVBQVMsR0FBVTtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFMRDtRQUFDLGFBQU0sRUFBRTs7OERBQUE7SUFFVDtRQUFDLG1CQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7NkRBQUE7SUFSdEM7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsUUFBUSxFQUFFLDJCQUEyQjtTQUN4QyxDQUFDOztpQ0FBQTtJQVFGLGdDQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxpQ0FBeUIsNEJBT3JDLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9wYW5lbDIvYmFyL3BhbmVsLWJhci10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSG9zdExpc3RlbmVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2pwYS1wYW5lbDItYmFyLXRpdGxlJyxcclxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PidcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhbmVsQmFyVGl0bGVDb21wb25lbnQge1xyXG4gICAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gICAgX29uQ2xpY2soZXZ0OiBFdmVudCkge1xyXG4gICAgICAgIHRoaXMub25DbGljay5lbWl0KGV2dCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnanBhLXBhbmVsMi1iYXItc3VidGl0bGUnLFxyXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFuZWxCYXJTdWJ0aXRsZUNvbXBvbmVudCB7XHJcbiAgICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgICBfb25DbGljayhldnQ6IEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrLmVtaXQoZXZ0KTtcclxuICAgIH1cclxufVxyXG4iXX0=
