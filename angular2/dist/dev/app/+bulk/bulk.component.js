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
var card_1 = require("@angular2-material/card/card");
var file_dropzone_1 = require("../shared/file-dropzone/file-dropzone");
var grid_list_1 = require("@angular2-material/grid-list/grid-list");
var file_card_component_1 = require("../shared/file-dropzone/file-card/file-card.component");
var button_1 = require("@angular2-material/button/button");
var pgp_service_1 = require("../shared/pgp/pgp.service");
var icon_1 = require("@angular2-material/icon/icon");
var list_service_1 = require("../shared/list/list.service");
var cache_service_1 = require("../shared/cache/cache.service");
var router_1 = require("@angular/router");
var BulkComponent = (function () {
    function BulkComponent(pgp, list, cache, router) {
        this.pgp = pgp;
        this.list = list;
        this.cache = cache;
        this.router = router;
    }
    BulkComponent.prototype.preview = function () {
        var _this = this;
        this.listSub = this.list.uploadAndParse(this.dropzone.files)
            .subscribe(function (res) {
            _this.cache.store('lists', res.lists);
            _this.cache.store('files', _this.dropzone.files);
            _this.router.navigate(['/bulk/preview']);
        });
    };
    BulkComponent.prototype.ngOnDestroy = function () {
        if (this.listSub)
            this.listSub.unsubscribe();
    };
    __decorate([
        core_1.ViewChild(file_dropzone_1.FileDropzoneComponent), 
        __metadata('design:type', file_dropzone_1.FileDropzoneComponent)
    ], BulkComponent.prototype, "dropzone", void 0);
    BulkComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'apgp-bulk',
            templateUrl: 'bulk.component.html',
            styleUrls: ['bulk.component.css'],
            directives: [
                card_1.MdCard,
                button_1.MD_BUTTON_DIRECTIVES,
                grid_list_1.MD_GRID_LIST_DIRECTIVES,
                icon_1.MD_ICON_DIRECTIVES,
                file_dropzone_1.FileDropzoneComponent,
                file_card_component_1.FileCardComponent,
            ]
        }), 
        __metadata('design:paramtypes', [pgp_service_1.PgpService, list_service_1.ListService, cache_service_1.CacheService, router_1.Router])
    ], BulkComponent);
    return BulkComponent;
}());
exports.BulkComponent = BulkComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYnVsay9idWxrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBQzlELHFCQUFxQiw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3BELDhCQUFvQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQzVFLDBCQUFzQyx3Q0FBd0MsQ0FBQyxDQUFBO0FBQy9FLG9DQUFnQyx1REFBdUQsQ0FBQyxDQUFBO0FBQ3hGLHVCQUFtQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3RFLDRCQUF5QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3JELHFCQUFpQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ2hFLDZCQUEwQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3hELDhCQUEyQiwrQkFBK0IsQ0FBQyxDQUFBO0FBQzNELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBb0J2QztJQUlFLHVCQUNTLEdBQWUsRUFDZixJQUFpQixFQUNqQixLQUFtQixFQUNuQixNQUFjO1FBSGQsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ25CLENBQUM7SUFFTCwrQkFBTyxHQUFQO1FBQUEsaUJBU0M7UUFQQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ3pELFNBQVMsQ0FBQyxVQUFDLEdBQVE7WUFFbEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUF2QkQ7UUFBQyxnQkFBUyxDQUFDLHFDQUFxQixDQUFDOzttREFBQTtJQWZuQztRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztZQUNqQyxVQUFVLEVBQUU7Z0JBQ1YsYUFBTTtnQkFDTiw2QkFBb0I7Z0JBQ3BCLG1DQUF1QjtnQkFDdkIseUJBQWtCO2dCQUNsQixxQ0FBcUI7Z0JBQ3JCLHVDQUFpQjthQUNsQjtTQUNGLENBQUM7O3FCQUFBO0lBMEJGLG9CQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSxxQkFBYSxnQkF5QnpCLENBQUEiLCJmaWxlIjoiYXBwLytidWxrL2J1bGsuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNZENhcmR9IGZyb20gXCJAYW5ndWxhcjItbWF0ZXJpYWwvY2FyZC9jYXJkXCI7XHJcbmltcG9ydCB7RmlsZURyb3B6b25lQ29tcG9uZW50fSBmcm9tIFwiLi4vc2hhcmVkL2ZpbGUtZHJvcHpvbmUvZmlsZS1kcm9wem9uZVwiO1xyXG5pbXBvcnQge01EX0dSSURfTElTVF9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIyLW1hdGVyaWFsL2dyaWQtbGlzdC9ncmlkLWxpc3RcIjtcclxuaW1wb3J0IHtGaWxlQ2FyZENvbXBvbmVudH0gZnJvbSBcIi4uL3NoYXJlZC9maWxlLWRyb3B6b25lL2ZpbGUtY2FyZC9maWxlLWNhcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TURfQlVUVE9OX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhcjItbWF0ZXJpYWwvYnV0dG9uL2J1dHRvblwiO1xyXG5pbXBvcnQge1BncFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvcGdwL3BncC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TURfSUNPTl9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIyLW1hdGVyaWFsL2ljb24vaWNvblwiO1xyXG5pbXBvcnQge0xpc3RTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2xpc3QvbGlzdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q2FjaGVTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL2NhY2hlL2NhY2hlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBCdWxrQ29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2FwZ3AtYnVsaycsXHJcbiAgdGVtcGxhdGVVcmw6ICdidWxrLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYnVsay5jb21wb25lbnQuY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW1xyXG4gICAgTWRDYXJkLFxyXG4gICAgTURfQlVUVE9OX0RJUkVDVElWRVMsXHJcbiAgICBNRF9HUklEX0xJU1RfRElSRUNUSVZFUyxcclxuICAgIE1EX0lDT05fRElSRUNUSVZFUyxcclxuICAgIEZpbGVEcm9wem9uZUNvbXBvbmVudCxcclxuICAgIEZpbGVDYXJkQ29tcG9uZW50LFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1bGtDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoRmlsZURyb3B6b25lQ29tcG9uZW50KSBkcm9wem9uZSA6IEZpbGVEcm9wem9uZUNvbXBvbmVudDtcclxuICBsaXN0U3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHBncDogUGdwU2VydmljZSxcclxuICAgIHB1YmxpYyBsaXN0OiBMaXN0U2VydmljZSxcclxuICAgIHB1YmxpYyBjYWNoZTogQ2FjaGVTZXJ2aWNlLFxyXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyXHJcbiAgKSB7IH1cclxuXHJcbiAgcHJldmlldygpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ1ByZXZpZXchICcsIHRoaXMuZHJvcHpvbmUuZmlsZXMpO1xyXG4gICAgdGhpcy5saXN0U3ViID0gdGhpcy5saXN0LnVwbG9hZEFuZFBhcnNlKHRoaXMuZHJvcHpvbmUuZmlsZXMpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnUmVzcG9uc2U6ICcsIHJlcyk7XHJcbiAgICAgICAgdGhpcy5jYWNoZS5zdG9yZSgnbGlzdHMnLCByZXMubGlzdHMpO1xyXG4gICAgICAgIHRoaXMuY2FjaGUuc3RvcmUoJ2ZpbGVzJywgdGhpcy5kcm9wem9uZS5maWxlcyk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYnVsay9wcmV2aWV3J10pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMubGlzdFN1YikgdGhpcy5saXN0U3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
