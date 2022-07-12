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
var router_1 = require('@angular/router');
var index_1 = require('./shared/index');
var icon_registry_1 = require("@angular2-material/icon/icon-registry");
var xhr_service_1 = require("./shared/xhr/xhr.service");
var progress_bar_1 = require("@angular2-material/progress-bar/progress-bar");
var angular2_toaster_1 = require("angular2-toaster/angular2-toaster");
var AppComponent = (function () {
    function AppComponent(xhr, router) {
        this.xhr = xhr;
        this.router = router;
        this.ajaxing = false;
        this.toasterConfig = new angular2_toaster_1.ToasterConfig({
            showCloseButton: true
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerSub = this.router.events.subscribe(function (evt) {
            if (evt.toString().match('^NavigationEnd')) {
                _this.ajaxing = false;
            }
            else if (evt.toString().match('^NavigationStart')) {
                _this.ajaxing = true;
            }
        });
        this.xhrStartSub = this.xhr.start.subscribe(function (e) { return _this.ajaxing = true; });
        this.xhrDoneSub = this.xhr.done.subscribe(function (e) { return _this.ajaxing = false; });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.routerSub)
            this.xhrStartSub.unsubscribe();
        if (this.xhrStartSub)
            this.xhrStartSub.unsubscribe();
        if (this.xhrDoneSub)
            this.xhrDoneSub.unsubscribe();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            viewProviders: [icon_registry_1.MdIconRegistry, angular2_toaster_1.ToasterService],
            templateUrl: 'app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, index_1.NavbarComponent, index_1.ToolbarComponent, progress_bar_1.MD_PROGRESS_BAR_DIRECTIVES, angular2_toaster_1.ToasterContainerComponent]
        }), 
        __metadata('design:paramtypes', [xhr_service_1.XhrService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQXdDLGlCQUFpQixDQUFDLENBQUE7QUFFMUQsc0JBQWtELGdCQUFnQixDQUFDLENBQUE7QUFDbkUsOEJBQTZCLHVDQUF1QyxDQUFDLENBQUE7QUFFckUsNEJBQXlCLDBCQUEwQixDQUFDLENBQUE7QUFDcEQsNkJBQXlDLDhDQUE4QyxDQUFDLENBQUE7QUFDeEYsaUNBQXVFLG1DQUFtQyxDQUFDLENBQUE7QUFhM0c7SUFPRSxzQkFBbUIsR0FBZSxFQUFTLE1BQWM7UUFBdEMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFOekQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQU9kLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxnQ0FBYSxDQUFDO1lBQ3JDLGVBQWUsRUFBRSxJQUFJO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDL0MsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0MsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDdkIsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN0QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFuQixDQUFtQixDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckQsQ0FBQztJQXBDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsYUFBYSxFQUFFLENBQUMsOEJBQWMsRUFBRSxpQ0FBYyxDQUFDO1lBQy9DLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsdUJBQWUsRUFBRSx3QkFBZ0IsRUFBRSx5Q0FBMEIsRUFBRSw0Q0FBeUIsQ0FBQztTQUMxSCxDQUFDOztvQkFBQTtJQStCRixtQkFBQztBQUFELENBOUJBLEFBOEJDLElBQUE7QUE5Qlksb0JBQVksZUE4QnhCLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQsIFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9pbmRleCc7XHJcbmltcG9ydCB7TWRJY29uUmVnaXN0cnl9IGZyb20gXCJAYW5ndWxhcjItbWF0ZXJpYWwvaWNvbi9pY29uLXJlZ2lzdHJ5XCI7XHJcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQge1hoclNlcnZpY2V9IGZyb20gXCIuL3NoYXJlZC94aHIveGhyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtNRF9QUk9HUkVTU19CQVJfRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyMi1tYXRlcmlhbC9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyXCI7XHJcbmltcG9ydCB7VG9hc3RlclNlcnZpY2UsIFRvYXN0ZXJDb25maWcsIFRvYXN0ZXJDb250YWluZXJDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi10b2FzdGVyL2FuZ3VsYXIyLXRvYXN0ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50LiBXaXRoaW4gdGhlIEBSb3V0ZXMgYW5ub3RhdGlvbiBpcyB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGVcclxuICogYXBwbGljYXRpb25zIHJvdXRlcywgY29uZmlndXJpbmcgdGhlIHBhdGhzIGZvciB0aGUgbGF6eSBsb2FkZWQgY29tcG9uZW50cyAoSG9tZUNvbXBvbmVudCwgQnVsa0NvbXBvbmVudCkuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2QtYXBwJyxcclxuICB2aWV3UHJvdmlkZXJzOiBbTWRJY29uUmVnaXN0cnksIFRvYXN0ZXJTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBOYXZiYXJDb21wb25lbnQsIFRvb2xiYXJDb21wb25lbnQsIE1EX1BST0dSRVNTX0JBUl9ESVJFQ1RJVkVTLCBUb2FzdGVyQ29udGFpbmVyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGFqYXhpbmcgPSBmYWxzZTtcclxuICByb3V0ZXJTdWI6IFN1YnNjcmlwdGlvbjtcclxuICB4aHJTdGFydFN1YjogU3Vic2NyaXB0aW9uO1xyXG4gIHhockRvbmVTdWI6IFN1YnNjcmlwdGlvbjtcclxuICB0b2FzdGVyQ29uZmlnOiBUb2FzdGVyQ29uZmlnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgeGhyOiBYaHJTZXJ2aWNlLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMudG9hc3RlckNvbmZpZyA9IG5ldyBUb2FzdGVyQ29uZmlnKHtcclxuICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yb3V0ZXJTdWIgPSB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2dCA9PiB7XHJcbiAgICAgIGlmIChldnQudG9TdHJpbmcoKS5tYXRjaCgnXk5hdmlnYXRpb25FbmQnKSkge1xyXG4gICAgICAgIHRoaXMuYWpheGluZyA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2dC50b1N0cmluZygpLm1hdGNoKCdeTmF2aWdhdGlvblN0YXJ0JykpIHtcclxuICAgICAgICB0aGlzLmFqYXhpbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMueGhyU3RhcnRTdWIgPSB0aGlzLnhoci5zdGFydC5zdWJzY3JpYmUoZSA9PiB0aGlzLmFqYXhpbmcgPSB0cnVlKTtcclxuICAgIHRoaXMueGhyRG9uZVN1YiA9IHRoaXMueGhyLmRvbmUuc3Vic2NyaWJlKGUgPT4gdGhpcy5hamF4aW5nID0gZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5yb3V0ZXJTdWIpIHRoaXMueGhyU3RhcnRTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIGlmICh0aGlzLnhoclN0YXJ0U3ViKSB0aGlzLnhoclN0YXJ0U3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICBpZiAodGhpcy54aHJEb25lU3ViKSB0aGlzLnhockRvbmVTdWIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19
