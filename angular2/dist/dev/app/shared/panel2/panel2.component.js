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
var index_1 = require('./content/index');
var index_2 = require('./bar/index');
var PanelComponent = (function () {
    function PanelComponent(el) {
        this.el = el;
        this.onToggle = new core_1.EventEmitter();
        this._expanded = false;
    }
    Object.defineProperty(PanelComponent.prototype, "expandedClass", {
        get: function () { return this.expanded; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelComponent.prototype, "jpapanelClass", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelComponent.prototype, "expanded", {
        get: function () { return this._expanded; },
        set: function (v) {
            this._expanded = v;
            this.content.hidden = !v;
        },
        enumerable: true,
        configurable: true
    });
    PanelComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._toggleSub = this.bar.onToggle.subscribe(function (e) {
            _this.expanded = !_this.expanded;
            _this.onToggle.emit(_this.expanded);
        });
    };
    PanelComponent.prototype.ngOnDestroy = function () {
        if (this._toggleSub)
            this._toggleSub.unsubscribe();
    };
    __decorate([
        core_1.ContentChild(index_1.PanelContentComponent), 
        __metadata('design:type', index_1.PanelContentComponent)
    ], PanelComponent.prototype, "content", void 0);
    __decorate([
        core_1.ContentChild(index_2.PanelBarComponent), 
        __metadata('design:type', index_2.PanelBarComponent)
    ], PanelComponent.prototype, "bar", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PanelComponent.prototype, "onToggle", void 0);
    __decorate([
        core_1.HostBinding('class.expanded'), 
        __metadata('design:type', Object)
    ], PanelComponent.prototype, "expandedClass", null);
    __decorate([
        core_1.HostBinding('class.jpa-panel'), 
        __metadata('design:type', Object)
    ], PanelComponent.prototype, "jpapanelClass", null);
    PanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'jpa-panel2',
            templateUrl: './panel2.component.html',
            styleUrls: ['./panel2.component.css'],
            directives: [
                index_1.PanelContentComponent
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], PanelComponent);
    return PanelComponent;
}());
exports.PanelComponent = PanelComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGFuZWwyL3BhbmVsMi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQVNPLGVBQWUsQ0FBQyxDQUFBO0FBRXZCLHNCQUFzQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3hELHNCQUFrQyxhQUFhLENBQUMsQ0FBQTtBQWVoRDtJQVlJLHdCQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQVJ2QixhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFXLENBQUM7UUFLekMsY0FBUyxHQUFZLEtBQUssQ0FBQztJQUdFLENBQUM7SUFOUCxzQkFBWSx5Q0FBYTthQUF6QixjQUE4QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3BELHNCQUFZLHlDQUFhO2FBQXpCLGNBQThCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQU81RSxzQkFBSSxvQ0FBUTthQUFaLGNBQWlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUN6QyxVQUFhLENBQVU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQzs7O09BSndDO0lBS3pDLDJDQUFrQixHQUFsQjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQzNDLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFNRCxvQ0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQS9CRDtRQUFDLG1CQUFZLENBQUMsNkJBQXFCLENBQUM7O21EQUFBO0lBQ3BDO1FBQUMsbUJBQVksQ0FBQyx5QkFBaUIsQ0FBQzs7K0NBQUE7SUFFaEM7UUFBQyxhQUFNLEVBQUU7O29EQUFBO0lBRVQ7UUFBQyxrQkFBVyxDQUFDLGdCQUFnQixDQUFDOzt1REFBQTtJQUM5QjtRQUFDLGtCQUFXLENBQUMsaUJBQWlCLENBQUM7O3VEQUFBO0lBaEJuQztRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxVQUFVLEVBQUU7Z0JBQ1IsNkJBQXFCO2FBQ3hCO1NBQ0osQ0FBQzs7c0JBQUE7SUFrQ0YscUJBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBakNZLHNCQUFjLGlCQWlDMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3BhbmVsMi9wYW5lbDIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIENvbnRlbnRDaGlsZCxcclxuICAgIEFmdGVyQ29udGVudEluaXQsXHJcbiAgICBIb3N0QmluZGluZyxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBQYW5lbENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvaW5kZXgnO1xyXG5pbXBvcnQgeyBQYW5lbEJhckNvbXBvbmVudCB9IGZyb20gJy4vYmFyL2luZGV4JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFuZWxUb2dnbGUge1xyXG4gICAgb25Ub2dnbGU6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdqcGEtcGFuZWwyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYW5lbDIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFuZWwyLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtcclxuICAgICAgICBQYW5lbENvbnRlbnRDb21wb25lbnRcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgUGFuZWxUb2dnbGUsIE9uRGVzdHJveSB7XHJcbiAgICBAQ29udGVudENoaWxkKFBhbmVsQ29udGVudENvbXBvbmVudCkgY29udGVudCA6IFBhbmVsQ29udGVudENvbXBvbmVudDtcclxuICAgIEBDb250ZW50Q2hpbGQoUGFuZWxCYXJDb21wb25lbnQpIGJhciA6IFBhbmVsQmFyQ29tcG9uZW50O1xyXG5cclxuICAgIEBPdXRwdXQoKSBvblRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmV4cGFuZGVkJykgcHJpdmF0ZSBnZXQgZXhwYW5kZWRDbGFzcygpIHsgcmV0dXJuIHRoaXMuZXhwYW5kZWQ7IH1cclxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuanBhLXBhbmVsJykgcHJpdmF0ZSBnZXQganBhcGFuZWxDbGFzcygpIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcbiAgICBwcml2YXRlIF9leHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfdG9nZ2xlU3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgICBnZXQgZXhwYW5kZWQoKSB7IHJldHVybiB0aGlzLl9leHBhbmRlZDsgfVxyXG4gICAgc2V0IGV4cGFuZGVkKHY6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9leHBhbmRlZCA9IHY7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LmhpZGRlbiA9ICF2O1xyXG4gICAgfVxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZVN1YiA9IHRoaXMuYmFyLm9uVG9nZ2xlLnN1YnNjcmliZShlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xyXG4gICAgICAgICAgICB0aGlzLm9uVG9nZ2xlLmVtaXQodGhpcy5leHBhbmRlZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhbnVwIGp1c3QgYmVmb3JlIEFuZ3VsYXIgZGVzdHJveXMgdGhlIGRpcmVjdGl2ZS9jb21wb25lbnQuIFVuc3Vic2NyaWJlIFxyXG4gICAgICogb2JzZXJ2YWJsZXMgYW5kIGRldGFjaCBldmVudCBoYW5kbGVycyB0byBhdm9pZCBtZW1vcnkgbGVha3MuXHJcbiAgICAgKi9cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl90b2dnbGVTdWIpIHRoaXMuX3RvZ2dsZVN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
