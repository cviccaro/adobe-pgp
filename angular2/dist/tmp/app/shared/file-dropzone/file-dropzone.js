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
var file_1 = require("./file");
var file_card_component_1 = require("./file-card/file-card.component");
var grid_list_1 = require("@angular2-material/grid-list/grid-list");
var FileDropzoneComponent = (function () {
    function FileDropzoneComponent(el) {
        this.el = el;
        this.files = [];
        this.summary = '';
        this.acceptExtensions = ['*'];
        this.display = true;
        this.acceptAll = true;
        this.gridConfigDefaults = { cols: 4, rowHeight: '16:9', gutterSize: '8px' };
        this.draggingOver = false;
    }
    FileDropzoneComponent.prototype.ngOnInit = function () {
        this.gridConfig = Object.assign({}, this.gridConfigDefaults, this.gridConfig);
        if (this.acceptExtensions[0] !== '*') {
            this.acceptAll = false;
        }
    };
    Object.defineProperty(FileDropzoneComponent.prototype, "defaultClass", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileDropzoneComponent.prototype, "fileDragOverClass", {
        get: function () { return this.draggingOver; },
        enumerable: true,
        configurable: true
    });
    FileDropzoneComponent.prototype.onDragOver = function (evt) {
        this.draggingOver = true;
        var transfer = evt.dataTransfer ? evt.dataTransfer : evt.originalEvent.dataTransfer;
        transfer.dropEffect = 'copy';
        return false;
    };
    FileDropzoneComponent.prototype.onDragEnd = function (evt) {
        this.draggingOver = false;
        return false;
    };
    FileDropzoneComponent.prototype.onDragLeave = function (evt) {
        this.draggingOver = false;
        return false;
    };
    FileDropzoneComponent.prototype.onFileDrop = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        this.draggingOver = false;
        var files = evt.target['files'] || evt['dataTransfer']['files'];
        this.readFiles(files);
        return false;
    };
    FileDropzoneComponent.prototype.readFiles = function (files) {
        if (files === void 0) { files = []; }
        if (!files.length) {
            return;
        }
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var extension = file.name.split('.').pop();
            if (this.acceptAll || (this.acceptExtensions.indexOf(extension) !== -1)) {
                this.addFile(file, i);
            }
        }
    };
    FileDropzoneComponent.prototype.addFile = function (file, idx) {
        if (idx === void 0) { idx = 0; }
        var managedFile = new file_1.ManagedFile({ _file: file }, idx);
        this.files.push(managedFile);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FileDropzoneComponent.prototype, "gridConfig", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FileDropzoneComponent.prototype, "acceptExtensions", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FileDropzoneComponent.prototype, "display", void 0);
    __decorate([
        core_1.HostBinding('class.apgp-file-dropzone'), 
        __metadata('design:type', Object)
    ], FileDropzoneComponent.prototype, "defaultClass", null);
    __decorate([
        core_1.HostBinding('class.file-drag-over'), 
        __metadata('design:type', Object)
    ], FileDropzoneComponent.prototype, "fileDragOverClass", null);
    __decorate([
        core_1.HostListener('dragover', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FileDropzoneComponent.prototype, "onDragOver", null);
    __decorate([
        core_1.HostListener('dragend', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FileDropzoneComponent.prototype, "onDragEnd", null);
    __decorate([
        core_1.HostListener('dragleave', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FileDropzoneComponent.prototype, "onDragLeave", null);
    __decorate([
        core_1.HostListener('drop', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FileDropzoneComponent.prototype, "onFileDrop", null);
    FileDropzoneComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'apgp-file-dropzone',
            template: "<div class=\"well\"><span>Drop files here</span></div> <md-grid-list *ngIf=\"display && files.length\" [cols]=\"gridConfig.cols\" [rowHeight]=\"gridConfig.rowHeight\" [gutterSize]=\"gridConfig.gutterSize\" >     <md-grid-tile *ngFor=\"let file of files; let index = index;\">         <jpa-file-card             [file]=\"file\"             [index]=\"index\"             (clickedRemove)=\"handleClickedRemove($event)\">         </jpa-file-card>     </md-grid-tile> </md-grid-list>",
            styles: [":host{display:block}:host .well{width:100%;height:100%;will-change:border;transition:all .25s linear}:host.file-drag-over .well{border:2px dashed #106cc8}:host jpa-file-card{width:100%} /*# sourceMappingURL=file-dropzone.css.map */"],
            directives: [file_card_component_1.FileCardComponent, grid_list_1.MD_GRID_LIST_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], FileDropzoneComponent);
    return FileDropzoneComponent;
}());
exports.FileDropzoneComponent = FileDropzoneComponent;
