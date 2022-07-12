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
var list_service_1 = require("../shared/list/list.service");
var index_1 = require("angular2-moment/index");
var list_1 = require("@angular2-material/list/list");
var icon_1 = require("@angular2-material/icon/icon");
var button_1 = require("@angular2-material/button/button");
var common_1 = require("@angular/common");
var pager_component_1 = require("../shared/pager/pager.component");
var QueueComponent = (function () {
    function QueueComponent(listService) {
        this.listService = listService;
        this.page = {
            current_page: 1,
            from: 0,
            to: 0,
            length: 15,
            last_page: 1,
            order_by: 'created_at',
            descending: true,
            total: 0
        };
        this.queue = [];
    }
    QueueComponent.prototype.ngOnInit = function () {
        this.fetch();
    };
    QueueComponent.prototype.clearTimer = function () {
        if (this.fetchTimer)
            clearInterval(this.fetchTimer);
    };
    QueueComponent.prototype.fetch = function () {
        var _this = this;
        this.clearTimer();
        this.listSub = this.listService.queued({
            current_page: this.page.current_page,
            length: this.page.length,
            order_by: this.page.order_by,
            descending: this.page.descending
        })
            .subscribe(function (res) {
            var page = Object.assign({}, _this.page);
            page.from = res.from;
            page.to = (res.total < res.to) ? res.total : res.to;
            page.last_page = res.last_page;
            page.length = res.per_page;
            page.total = res.total;
            _this.page = page;
            _this.queue = res.data;
            _this.fetchTimer = setInterval(function () { _this.fetch(); }, 5000);
        });
    };
    QueueComponent.prototype.perPageChanged = function () {
        var _this = this;
        if (this.page.current_page > (this.page.total / this.page.length))
            this.page.current_page = 1;
        setTimeout(function () { _this.fetch(); });
    };
    QueueComponent.prototype.download = function (list) {
        window.open(list.download_url, '_target');
    };
    QueueComponent.prototype.pageChanged = function (num) {
        this.page.current_page = num;
        this.fetch();
    };
    QueueComponent.prototype.ngOnDestroy = function () {
        this.clearTimer();
        if (this.listSub)
            this.listSub.unsubscribe();
    };
    QueueComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'apgp-queue',
            templateUrl: './queue.component.html',
            styleUrls: ['./queue.component.css'],
            directives: [list_1.MD_LIST_DIRECTIVES, button_1.MdButton, icon_1.MD_ICON_DIRECTIVES, pager_component_1.PagerComponent],
            pipes: [index_1.CalendarPipe, common_1.PercentPipe]
        }), 
        __metadata('design:paramtypes', [list_service_1.ListService])
    ], QueueComponent);
    return QueueComponent;
}());
exports.QueueComponent = QueueComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rcXVldWUvcXVldWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsNkJBQTBCLDZCQUE2QixDQUFDLENBQUE7QUFDeEQsc0JBQTJCLHVCQUF1QixDQUFDLENBQUE7QUFDbkQscUJBQWlDLDhCQUE4QixDQUFDLENBQUE7QUFDaEUscUJBQWlDLDhCQUE4QixDQUFDLENBQUE7QUFDaEUsdUJBQXVCLGtDQUFrQyxDQUFDLENBQUE7QUFDMUQsdUJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsZ0NBQTZCLGlDQUFpQyxDQUFDLENBQUE7QUFXL0Q7SUFlRSx3QkFBbUIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFaM0MsU0FBSSxHQUFHO1lBQ0wsWUFBWSxFQUFFLENBQUM7WUFDZixJQUFJLEVBQUUsQ0FBQztZQUNQLEVBQUUsRUFBRSxDQUFDO1lBQ0wsTUFBTSxFQUFFLEVBQUU7WUFDVixTQUFTLEVBQUUsQ0FBQztZQUNaLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQztRQUNGLFVBQUssR0FBVSxFQUFFLENBQUM7SUFFNkIsQ0FBQztJQUVoRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNyQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQ3BDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUM1QixVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1NBQ2pDLENBQUM7YUFDRCxTQUFTLENBQUMsVUFBQyxHQUFRO1lBQ2xCLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV4QyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUV2QixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUVqQixLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsY0FBUSxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdUNBQWMsR0FBZDtRQUFBLGlCQUdDO1FBRkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQzlGLFVBQVUsQ0FBQyxjQUFRLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsSUFBSTtRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLEdBQVc7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUEzRUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUUsdUJBQXVCLENBQUU7WUFDdEMsVUFBVSxFQUFFLENBQUMseUJBQWtCLEVBQUUsaUJBQVEsRUFBRSx5QkFBa0IsRUFBRSxnQ0FBYyxDQUFDO1lBQzlFLEtBQUssRUFBRSxDQUFFLG9CQUFZLEVBQUUsb0JBQVcsQ0FBRTtTQUNyQyxDQUFDOztzQkFBQTtJQXFFRixxQkFBQztBQUFELENBcEVBLEFBb0VDLElBQUE7QUFwRVksc0JBQWMsaUJBb0UxQixDQUFBIiwiZmlsZSI6ImFwcC8rcXVldWUvcXVldWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtMaXN0U2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9saXN0L2xpc3Quc2VydmljZVwiO1xyXG5pbXBvcnQge0NhbGVuZGFyUGlwZX0gZnJvbSBcImFuZ3VsYXIyLW1vbWVudC9pbmRleFwiO1xyXG5pbXBvcnQge01EX0xJU1RfRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyMi1tYXRlcmlhbC9saXN0L2xpc3RcIjtcclxuaW1wb3J0IHtNRF9JQ09OX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhcjItbWF0ZXJpYWwvaWNvbi9pY29uXCI7XHJcbmltcG9ydCB7TWRCdXR0b259IGZyb20gXCJAYW5ndWxhcjItbWF0ZXJpYWwvYnV0dG9uL2J1dHRvblwiO1xyXG5pbXBvcnQge1BlcmNlbnRQaXBlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7UGFnZXJDb21wb25lbnR9IGZyb20gXCIuLi9zaGFyZWQvcGFnZXIvcGFnZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2FwZ3AtcXVldWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9xdWV1ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbICcuL3F1ZXVlLmNvbXBvbmVudC5jc3MnIF0sXHJcbiAgZGlyZWN0aXZlczogW01EX0xJU1RfRElSRUNUSVZFUywgTWRCdXR0b24sIE1EX0lDT05fRElSRUNUSVZFUywgUGFnZXJDb21wb25lbnRdLFxyXG4gIHBpcGVzOiBbIENhbGVuZGFyUGlwZSwgUGVyY2VudFBpcGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVldWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgZmV0Y2hUaW1lcjogYW55O1xyXG4gIGxpc3RTdWI6IFN1YnNjcmlwdGlvbjtcclxuICBwYWdlID0ge1xyXG4gICAgY3VycmVudF9wYWdlOiAxLFxyXG4gICAgZnJvbTogMCxcclxuICAgIHRvOiAwLFxyXG4gICAgbGVuZ3RoOiAxNSxcclxuICAgIGxhc3RfcGFnZTogMSxcclxuICAgIG9yZGVyX2J5OiAnY3JlYXRlZF9hdCcsXHJcbiAgICBkZXNjZW5kaW5nOiB0cnVlLFxyXG4gICAgdG90YWw6IDBcclxuICB9O1xyXG4gIHF1ZXVlOiBhbnlbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGlzdFNlcnZpY2U6IExpc3RTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmZldGNoKCk7XHJcbiAgfVxyXG5cclxuICBjbGVhclRpbWVyKCkge1xyXG4gICAgaWYgKHRoaXMuZmV0Y2hUaW1lcikgY2xlYXJJbnRlcnZhbCh0aGlzLmZldGNoVGltZXIpO1xyXG4gIH1cclxuXHJcbiAgZmV0Y2goKSB7XHJcbiAgICB0aGlzLmNsZWFyVGltZXIoKTtcclxuICAgIHRoaXMubGlzdFN1YiA9IHRoaXMubGlzdFNlcnZpY2UucXVldWVkKHtcclxuICAgICAgY3VycmVudF9wYWdlOiB0aGlzLnBhZ2UuY3VycmVudF9wYWdlLFxyXG4gICAgICBsZW5ndGg6IHRoaXMucGFnZS5sZW5ndGgsXHJcbiAgICAgIG9yZGVyX2J5OiB0aGlzLnBhZ2Uub3JkZXJfYnksXHJcbiAgICAgIGRlc2NlbmRpbmc6IHRoaXMucGFnZS5kZXNjZW5kaW5nXHJcbiAgICB9KVxyXG4gICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHBhZ2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnBhZ2UpO1xyXG5cclxuICAgICAgcGFnZS5mcm9tID0gcmVzLmZyb207XHJcbiAgICAgIHBhZ2UudG8gPSAocmVzLnRvdGFsIDwgcmVzLnRvKSA/IHJlcy50b3RhbCA6IHJlcy50bztcclxuICAgICAgcGFnZS5sYXN0X3BhZ2UgPSByZXMubGFzdF9wYWdlO1xyXG4gICAgICBwYWdlLmxlbmd0aCA9IHJlcy5wZXJfcGFnZTtcclxuICAgICAgcGFnZS50b3RhbCA9IHJlcy50b3RhbDtcclxuXHJcbiAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XHJcblxyXG4gICAgICB0aGlzLnF1ZXVlID0gcmVzLmRhdGE7XHJcblxyXG4gICAgICB0aGlzLmZldGNoVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7IHRoaXMuZmV0Y2goKTsgfSwgNTAwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBlclBhZ2VDaGFuZ2VkKCkge1xyXG4gICAgaWYgKHRoaXMucGFnZS5jdXJyZW50X3BhZ2UgPiAodGhpcy5wYWdlLnRvdGFsIC8gdGhpcy5wYWdlLmxlbmd0aCkpIHRoaXMucGFnZS5jdXJyZW50X3BhZ2UgPSAxO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuZmV0Y2goKTsgfSk7XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZChsaXN0KSB7XHJcbiAgICB3aW5kb3cub3BlbihsaXN0LmRvd25sb2FkX3VybCwgJ190YXJnZXQnKTtcclxuICB9XHJcblxyXG4gIHBhZ2VDaGFuZ2VkKG51bTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnBhZ2UuY3VycmVudF9wYWdlID0gbnVtO1xyXG4gICAgdGhpcy5mZXRjaCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmNsZWFyVGltZXIoKTtcclxuICAgIGlmICh0aGlzLmxpc3RTdWIpIHRoaXMubGlzdFN1Yi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=
