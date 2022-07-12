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
            template: "<md-card class=\"upload-card\">     <md-card-title>Upload</md-card-title>     <md-card-subtitle>1-Column CSV or XLS</md-card-subtitle>     <apgp-file-dropzone #dropzone [acceptExtensions]=\"['xlsx', 'xls', 'csv']\" [display]=\"false\"></apgp-file-dropzone> </md-card> <md-card *ngIf=\"dropzone.files.length\">     <md-card-title>{{ dropzone.files.length }} files</md-card-title>     <md-card-subtitle>XLS or CSV</md-card-subtitle>     <md-grid-list cols=\"4\" rowHeight=\"104px\" gutterSize=\"8px\">         <md-grid-tile *ngFor=\"let file of dropzone.files; let index = index;\">             <jpa-file-card                     [file]=\"file\"                     [index]=\"index\"                     (clickedRemove)=\"handleClickedRemove($event)\">             </jpa-file-card>         </md-grid-tile>     </md-grid-list>     <div class=\"form-actions\">         <button md-raised-button class=\"submit\" (click)=\"preview()\" color=\"primary\"><md-icon>pageview</md-icon>&nbsp;&nbsp;Preview</button>     </div> </md-card>",
            styles: [":host{display:block;padding:0 16px}:host md-card{margin-bottom:36px}:host .upload-card{max-width:660px}:host .apgp-file-dropzone{max-width:600px}:host jpa-file-card{width:100%} /*# sourceMappingURL=bulk.component.css.map */"],
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
