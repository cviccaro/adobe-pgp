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
            template: "<div class=\"container-fluid\">     <div class=\"section-header\">         <div class=\"section-titles\">             <h2 class=\"section-title\">Bulk Queue</h2>             <h4 class=\"section-subtitle\" *ngIf=\"queue.length\">Showing {{ page.from }} - {{ page.to }} of {{ page.total }}</h4>         </div>         <span class=\"filler\"></span>         <div class=\"section-pagination\">             <div class=\"pagination-option\">                 <label for=\"length\">Per Page</label>                 <select id=\"length\" [(ngModel)]=\"page.length\" name=\"length\" (change)=\"perPageChanged()\">                     <option *ngFor=\"let i of [5,10,15,25,50,100]\" [value]=\"i\">{{ i }}</option>                 </select>             </div>         </div>     </div>     <md-list dense *ngIf=\"queue.length\">         <md-list-item *ngFor=\"let list of queue\">             <md-icon *ngIf=\"!list.complete && list.progress === 0\" md-list-avatar>hourglass_empty</md-icon>             <md-icon *ngIf=\"!list.complete && list.progress > 0\" md-list-avatar class=\"spin pending\">update</md-icon>             <md-icon *ngIf=\"list.complete\" class=\"success\" md-list-avatar>check_circle</md-icon>             <h3 md-line>{{ list.filename }}</h3>             <p md-line>{{ list.rows }} rows</p>             <p md-line>{{ list.created_at | amCalendar }}</p>             <div class=\"list-status\">                 <div class=\"list-percent\">{{ list.progress / list.rows | percent:'1.0-2' }}</div>                 <div class=\"list-progress-wrapper\">                     <span class=\"list-progress\">{{ list.progress }} completed</span>                     <span class=\"list-total\">/ {{ list.rows }} total</span>                 </div>             </div>             <span class=\"filler\"></span>             <div class=\"list-actions\" *ngIf=\"list.complete\">                 <button md-icon-button color=\"accent\" title=\"Download {{ list.filename }} Signed\" (click)=\"download(list)\">                     <md-icon>file_download</md-icon>                 </button>             </div>         </md-list-item>     </md-list>     <div class=\"empty\" *ngIf=\"queue.length === 0\">         There are no items in the queue.     </div>     <jpa-pager         [pagerData]=\"page\"         (pageChanged)=\"pageChanged($event)\">     </jpa-pager> </div>",
            styles: [":host .section-subtitle{color:#3a3a3a}:host .section-header{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-right:20px}:host .section-header .section-titles{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}:host jpa-pager{padding-right:20px;padding-left:20px}:host md-list[dense] md-list-item h3[md-line],:host md-list md-list-item h3[md-line]{font-size:14px;margin-bottom:4px}:host md-list[dense] md-list-item p[md-line],:host md-list md-list-item p[md-line]{color:#999}:host md-list[dense] md-list-item .md-list-text,:host md-list md-list-item .md-list-text{width:15%}:host md-list[dense] md-list-item .md-list-text [md-line],:host md-list md-list-item .md-list-text [md-line]{overflow:visible}:host md-list[dense] md-list-item .list-status,:host md-list md-list-item .list-status{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;margin-left:64px}:host md-list[dense] md-list-item .list-status .list-percent,:host md-list md-list-item .list-status .list-percent{font-size:40px;font-weight:300;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin-right:16px;min-width:135px}:host md-list[dense] md-list-item .list-status .list-progress-wrapper,:host md-list md-list-item .list-status .list-progress-wrapper{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}:host md-list[dense] md-list-item .list-status .list-progress-wrapper .list-progress,:host md-list[dense] md-list-item .list-status .list-progress-wrapper .list-total,:host md-list md-list-item .list-status .list-progress-wrapper .list-progress,:host md-list md-list-item .list-status .list-progress-wrapper .list-total{width:100%;text-align:left}:host md-list[dense] md-list-item .list-status .list-progress-wrapper .list-progress,:host md-list md-list-item .list-status .list-progress-wrapper .list-progress{font-size:18px}:host md-list[dense] md-list-item .list-status .list-progress-wrapper .list-total,:host md-list md-list-item .list-status .list-progress-wrapper .list-total{color:#999;font-size:13px}:host md-list .success,:host md-list[dense] .success{color:#009688}:host md-list .pending,:host md-list[dense] .pending{color:#9c27b0;width:24px;height:24px;margin-right:16px} /*# sourceMappingURL=queue.component.css.map */"],
            directives: [list_1.MD_LIST_DIRECTIVES, button_1.MdButton, icon_1.MD_ICON_DIRECTIVES, pager_component_1.PagerComponent],
            pipes: [index_1.CalendarPipe, common_1.PercentPipe]
        }), 
        __metadata('design:paramtypes', [list_service_1.ListService])
    ], QueueComponent);
    return QueueComponent;
}());
exports.QueueComponent = QueueComponent;
