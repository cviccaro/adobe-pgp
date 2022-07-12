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
            template: "<h3 class=\"page-title\">Bulk Upload</h3> <h4 class=\"light page-subtitle\">{{ lists.length }} Lists</h4> <div class=\"form-actions\">     <md-slide-toggle color=\"accent\" [(ngModel)]=\"useQueue\" [disabled]=\"lockQueue\">Queue</md-slide-toggle>     <button md-raised-button color=\"primary\" class=\"submit\" (click)=\"submit()\" [ngSwitch]=\"working\" [disabled]=\"working\">         <template [ngSwitchCase]=\"true\">             <md-icon class=\"spin\">update</md-icon>&nbsp;{{ useQueue ? 'Queueing...' : 'Signing...' }}         </template>         <template ngSwitchDefault>             <md-icon>import_export</md-icon>&nbsp;&nbsp;{{ useQueue ? 'Queue All Lists' : 'Sign All Lists' }}         </template>     </button>     <button *ngIf=\"submitted\" md-raised-button color=\"accent\" class=\"submit\" (click)=\"downloadAll()\">         <md-icon>file_download</md-icon>&nbsp;&nbsp;Download Bulk Encrypted     </button> </div> <jpa2-panel-group>     <apgp-list-info *ngFor=\"let list of lists; let index = index;\" [list]=\"list\" [index]=\"index\" [hasData]=\"list.hasData\"></apgp-list-info> </jpa2-panel-group>",
            styles: [":host{display:block;padding:0 24px}:host .page-title{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;max-height:24px}:host md-slide-toggle{display:inline-block;margin:0 16px 0 0;position:relative;top:8px} /*# sourceMappingURL=preview.component.css.map */"],
            directives: [info_component_1.ListInfoComponent, button_1.MdButton, icon_1.MdIcon, slide_toggle_1.MdSlideToggle, panel_group_component_1.PanelGroupComponent, panel2_component_1.PanelComponent]
        }), 
        __metadata('design:paramtypes', [cache_service_1.CacheService, pgp_service_1.PgpService, router_1.Router, angular2_toaster_1.ToasterService])
    ], BulkPreviewComponent);
    return BulkPreviewComponent;
}());
exports.BulkPreviewComponent = BulkPreviewComponent;
