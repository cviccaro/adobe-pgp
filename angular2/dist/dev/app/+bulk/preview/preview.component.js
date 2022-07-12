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
var cache_service_1 = require("../../shared/cache/cache.service");
var info_component_1 = require("../../shared/list/list-info/info.component");
var icon_1 = require("@angular2-material/icon/icon");
var button_1 = require("@angular2-material/button/button");
var pgp_service_1 = require("../../shared/pgp/pgp.service");
var panel_group_component_1 = require("../../shared/panel2/group/panel-group.component");
var panel2_component_1 = require("../../shared/panel2/panel2.component");
var slide_toggle_1 = require("@angular2-material/slide-toggle/slide-toggle");
var router_1 = require("@angular/router");
var angular2_toaster_1 = require("angular2-toaster/angular2-toaster");
var BulkPreviewComponent = (function () {
    function BulkPreviewComponent(cache, pgp, router, toaster) {
        var _this = this;
        this.cache = cache;
        this.pgp = pgp;
        this.router = router;
        this.toaster = toaster;
        this.files = [];
        this.lists = [];
        this.lockQueue = false;
        this.submitted = false;
        this.useQueue = false;
        this.working = false;
        this.lists = cache.get('lists');
        this.files = cache.get('files');
        var total = 0;
        this.lists.map(function (list) {
            list.managedFile = _this.files.find(function (file) { return file.filename === list.file; });
            total = total + list.data.length;
        });
        if (total > 500) {
            this.useQueue = true;
            this.lockQueue = true;
        }
    }
    BulkPreviewComponent.prototype.submit = function () {
        var _this = this;
        var count = this.lists.length;
        this.working = true;
        if (this.useQueue) {
            this.submitSub = this.pgp.signManyQueued(this.lists)
                .subscribe(function (res) {
                _this.working = false;
                _this.toaster.pop('success', 'Success!', count + ' lists have been queued.  Routing you to the Queue in 3 seconds...');
                setTimeout(function () { _this.router.navigate(['/queue']); }, 3000);
            });
        }
        else {
            this.submitSub = this.pgp.signMany(this.lists)
                .subscribe(function (res) {
                var _loop_1 = function(file) {
                    var list = _this.lists.find(function (list) { return list.file === file; });
                    var signed = res.lists[file].data;
                    var url = res.lists[file].url;
                    var signedData = [];
                    for (var email in signed) {
                        signedData.push({ email: email, signed: signed[email] });
                    }
                    list.signed = { data: signedData, url: url };
                    list.hasData = true;
                };
                for (var file in res.lists) {
                    _loop_1(file);
                }
                _this.bulkDownloadUrl = res.url;
                _this.submitted = true;
                _this.working = false;
                var msg = count + " lists have been signed.  Use the buttons to download \n            individually, or download all lists bundled as a ZIP file.";
                _this.toaster.pop('success', 'Success!', msg);
            });
        }
    };
    BulkPreviewComponent.prototype.downloadAll = function () {
        window.open(this.bulkDownloadUrl, '_blank');
    };
    BulkPreviewComponent.prototype.ngOnDestroy = function () {
        if (this.submitSub)
            this.submitSub.unsubscribe();
    };
    __decorate([
        core_1.ViewChildren(info_component_1.ListInfoComponent), 
        __metadata('design:type', core_1.QueryList)
    ], BulkPreviewComponent.prototype, "listCmps", void 0);
    BulkPreviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'apgp-bulk-preview',
            templateUrl: './preview.component.html',
            styleUrls: ['./preview.component.css'],
            directives: [info_component_1.ListInfoComponent, button_1.MdButton, icon_1.MdIcon, slide_toggle_1.MdSlideToggle, panel_group_component_1.PanelGroupComponent, panel2_component_1.PanelComponent]
        }), 
        __metadata('design:paramtypes', [cache_service_1.CacheService, pgp_service_1.PgpService, router_1.Router, angular2_toaster_1.ToasterService])
    ], BulkPreviewComponent);
    return BulkPreviewComponent;
}());
exports.BulkPreviewComponent = BulkPreviewComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYnVsay9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEQsZUFBZSxDQUFDLENBQUE7QUFDNUUsOEJBQTJCLGtDQUFrQyxDQUFDLENBQUE7QUFDOUQsK0JBQWdDLDRDQUE0QyxDQUFDLENBQUE7QUFFN0UscUJBQXFCLDhCQUE4QixDQUFDLENBQUE7QUFDcEQsdUJBQXVCLGtDQUFrQyxDQUFDLENBQUE7QUFDMUQsNEJBQXlCLDhCQUE4QixDQUFDLENBQUE7QUFDeEQsc0NBQWtDLGlEQUFpRCxDQUFDLENBQUE7QUFDcEYsaUNBQTZCLHNDQUFzQyxDQUFDLENBQUE7QUFDcEUsNkJBQTRCLDhDQUE4QyxDQUFDLENBQUE7QUFDM0UsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsaUNBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFVakU7SUFZRSw4QkFBbUIsS0FBbUIsRUFBUyxHQUFlLEVBQVMsTUFBYyxFQUFTLE9BQXVCO1FBWnZILGlCQTZFQztRQWpFb0IsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFTLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFWckgsVUFBSyxHQUFrQixFQUFFLENBQUM7UUFDMUIsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBS3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFaEMsSUFBSSxLQUFLLEdBQUcsQ0FB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QUFLLENBQUM7Z0JBRXJCLElBQUksR0FBRyxHQUFNLEtBQUssbUlBQzJDLENBQUM7Z0JBRTlELEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0gsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBbEVEO1FBQUMsbUJBQVksQ0FBQyxrQ0FBaUIsQ0FBQzs7MERBQUE7SUFqQmxDO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUUseUJBQXlCLENBQUU7WUFDeEMsVUFBVSxFQUFFLENBQUUsa0NBQWlCLEVBQUUsaUJBQVEsRUFBRSxhQUFNLEVBQUUsNEJBQWEsRUFBRSwyQ0FBbUIsRUFBRSxpQ0FBYyxDQUFFO1NBQ3hHLENBQUM7OzRCQUFBO0lBOEVGLDJCQUFDO0FBQUQsQ0E3RUEsQUE2RUMsSUFBQTtBQTdFWSw0QkFBb0IsdUJBNkVoQyxDQUFBIiwiZmlsZSI6ImFwcC8rYnVsay9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NhY2hlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jYWNoZS9jYWNoZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TGlzdEluZm9Db21wb25lbnR9IGZyb20gXCIuLi8uLi9zaGFyZWQvbGlzdC9saXN0LWluZm8vaW5mby5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtNYW5hZ2VkRmlsZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9maWxlLWRyb3B6b25lL2ZpbGVcIjtcclxuaW1wb3J0IHtNZEljb259IGZyb20gXCJAYW5ndWxhcjItbWF0ZXJpYWwvaWNvbi9pY29uXCI7XHJcbmltcG9ydCB7TWRCdXR0b259IGZyb20gXCJAYW5ndWxhcjItbWF0ZXJpYWwvYnV0dG9uL2J1dHRvblwiO1xyXG5pbXBvcnQge1BncFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGdwL3BncC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UGFuZWxHcm91cENvbXBvbmVudH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wYW5lbDIvZ3JvdXAvcGFuZWwtZ3JvdXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UGFuZWxDb21wb25lbnR9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGFuZWwyL3BhbmVsMi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtNZFNsaWRlVG9nZ2xlfSBmcm9tIFwiQGFuZ3VsYXIyLW1hdGVyaWFsL3NsaWRlLXRvZ2dsZS9zbGlkZS10b2dnbGVcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtUb2FzdGVyU2VydmljZX0gZnJvbSBcImFuZ3VsYXIyLXRvYXN0ZXIvYW5ndWxhcjItdG9hc3RlclwiO1xyXG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdhcGdwLWJ1bGstcHJldmlldycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3ByZXZpZXcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyAnLi9wcmV2aWV3LmNvbXBvbmVudC5jc3MnIF0sXHJcbiAgZGlyZWN0aXZlczogWyBMaXN0SW5mb0NvbXBvbmVudCwgTWRCdXR0b24sIE1kSWNvbiwgTWRTbGlkZVRvZ2dsZSwgUGFuZWxHcm91cENvbXBvbmVudCwgUGFuZWxDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnVsa1ByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIGJ1bGtEb3dubG9hZFVybDogc3RyaW5nO1xyXG4gIGZpbGVzOiBNYW5hZ2VkRmlsZVtdID0gW107XHJcbiAgbGlzdHM6IGFueVtdID0gW107XHJcbiAgbG9ja1F1ZXVlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgc3VibWl0U3ViOiBTdWJzY3JpcHRpb247XHJcbiAgdXNlUXVldWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICB3b3JraW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBWaWV3Q2hpbGRyZW4oTGlzdEluZm9Db21wb25lbnQpIGxpc3RDbXBzOiBRdWVyeUxpc3Q8TGlzdEluZm9Db21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2FjaGU6IENhY2hlU2VydmljZSwgcHVibGljIHBncDogUGdwU2VydmljZSwgcHVibGljIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgdG9hc3RlcjogVG9hc3RlclNlcnZpY2UpIHtcclxuICAgIHRoaXMubGlzdHMgPSBjYWNoZS5nZXQoJ2xpc3RzJyk7XHJcbiAgICB0aGlzLmZpbGVzID0gY2FjaGUuZ2V0KCdmaWxlcycpO1xyXG5cclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICB0aGlzLmxpc3RzLm1hcChsaXN0ID0+IHtcclxuICAgICAgbGlzdC5tYW5hZ2VkRmlsZSA9IHRoaXMuZmlsZXMuZmluZChmaWxlID0+IGZpbGUuZmlsZW5hbWUgPT09IGxpc3QuZmlsZSk7XHJcbiAgICAgIHRvdGFsID0gdG90YWwgKyBsaXN0LmRhdGEubGVuZ3RoO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRvdGFsID4gNTAwKSB7XHJcbiAgICAgIHRoaXMudXNlUXVldWUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmxvY2tRdWV1ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdTdWJtaXQhICcsIHsgbGlzdHM6IHRoaXMubGlzdHMgfSk7XHJcbiAgICAvL3RoaXMubGlzdENtcHMuZm9yRWFjaChjbXAgPT4gY21wLmV4cGFuZFBhbmVsKCkpO1xyXG4gICAgbGV0IGNvdW50ID0gdGhpcy5saXN0cy5sZW5ndGg7XHJcbiAgICB0aGlzLndvcmtpbmcgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMudXNlUXVldWUpIHtcclxuICAgICAgdGhpcy5zdWJtaXRTdWIgPSB0aGlzLnBncC5zaWduTWFueVF1ZXVlZCh0aGlzLmxpc3RzKVxyXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMud29ya2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy50b2FzdGVyLnBvcCgnc3VjY2VzcycsICdTdWNjZXNzIScsIGNvdW50ICsgJyBsaXN0cyBoYXZlIGJlZW4gcXVldWVkLiAgUm91dGluZyB5b3UgdG8gdGhlIFF1ZXVlIGluIDMgc2Vjb25kcy4uLicpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3F1ZXVlJ10pOyB9LCAzMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3VibWl0U3ViID0gdGhpcy5wZ3Auc2lnbk1hbnkodGhpcy5saXN0cylcclxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICBmb3IgKGxldCBmaWxlIGluIHJlcy5saXN0cykge1xyXG4gICAgICAgICAgICBsZXQgbGlzdCA9IHRoaXMubGlzdHMuZmluZChsaXN0ID0+IGxpc3QuZmlsZSA9PT0gZmlsZSk7XHJcbiAgICAgICAgICAgIGxldCBzaWduZWQgPSByZXMubGlzdHNbZmlsZV0uZGF0YTtcclxuICAgICAgICAgICAgbGV0IHVybCA9IHJlcy5saXN0c1tmaWxlXS51cmw7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2lnbmVkRGF0YSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgZW1haWwgaW4gc2lnbmVkKSB7XHJcbiAgICAgICAgICAgICAgc2lnbmVkRGF0YS5wdXNoKHsgZW1haWw6IGVtYWlsLCBzaWduZWQ6IHNpZ25lZFtlbWFpbF0gfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpc3Quc2lnbmVkID0geyBkYXRhOiBzaWduZWREYXRhLCB1cmw6IHVybCB9O1xyXG4gICAgICAgICAgICBsaXN0Lmhhc0RhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuYnVsa0Rvd25sb2FkVXJsID0gcmVzLnVybDtcclxuICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMud29ya2luZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIGxldCBtc2cgPSBgJHtjb3VudH0gbGlzdHMgaGF2ZSBiZWVuIHNpZ25lZC4gIFVzZSB0aGUgYnV0dG9ucyB0byBkb3dubG9hZCBcclxuICAgICAgICAgICAgaW5kaXZpZHVhbGx5LCBvciBkb3dubG9hZCBhbGwgbGlzdHMgYnVuZGxlZCBhcyBhIFpJUCBmaWxlLmA7XHJcblxyXG4gICAgICAgICAgdGhpcy50b2FzdGVyLnBvcCgnc3VjY2VzcycsICdTdWNjZXNzIScsIG1zZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZEFsbCgpIHtcclxuICAgIHdpbmRvdy5vcGVuKHRoaXMuYnVsa0Rvd25sb2FkVXJsLCAnX2JsYW5rJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLnN1Ym1pdFN1YikgdGhpcy5zdWJtaXRTdWIudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19
