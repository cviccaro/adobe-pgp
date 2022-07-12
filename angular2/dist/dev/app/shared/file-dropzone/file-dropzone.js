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
            templateUrl: './file-dropzone.html',
            styleUrls: ['./file-dropzone.css'],
            directives: [file_card_component_1.FileCardComponent, grid_list_1.MD_GRID_LIST_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], FileDropzoneComponent);
    return FileDropzoneComponent;
}());
exports.FileDropzoneComponent = FileDropzoneComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZmlsZS1kcm9wem9uZS9maWxlLWRyb3B6b25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEUsZUFBZSxDQUFDLENBQUE7QUFDOUYscUJBQTBCLFFBQVEsQ0FBQyxDQUFBO0FBQ25DLG9DQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLDBCQUFzQyx3Q0FBd0MsQ0FBQyxDQUFBO0FBUy9FO0lBWUUsK0JBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBWDFCLFVBQUssR0FBa0IsRUFBRSxDQUFDO1FBQzFCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHWCxxQkFBZ0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFFaEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQix1QkFBa0IsR0FBRyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDckUsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFFUSxDQUFDO0lBRXRDLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFd0Msc0JBQUksK0NBQVk7YUFBaEIsY0FBcUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3ZDLHNCQUFJLG9EQUFpQjthQUFyQixjQUEwQixNQUFNLENBQUMsSUFBSSxD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UUFBQyxtQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzREQUFBO0lBUXRDO1FBQUMsbUJBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OzsyREFBQTtJQXpEbkM7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNsQyxVQUFVLEVBQUUsQ0FBRSx1Q0FBaUIsRUFBRSxtQ0FBdUIsQ0FBRTtTQUMzRCxDQUFDOzs2QkFBQTtJQThGRiw0QkFBQztBQUFELENBN0ZBLEFBNkZDLElBQUE7QUE3RlksNkJBQXFCLHdCQTZGakMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2ZpbGUtZHJvcHpvbmUvZmlsZS1kcm9wem9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYW5hZ2VkRmlsZX0gZnJvbSBcIi4vZmlsZVwiO1xyXG5pbXBvcnQge0ZpbGVDYXJkQ29tcG9uZW50fSBmcm9tIFwiLi9maWxlLWNhcmQvZmlsZS1jYXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge01EX0dSSURfTElTVF9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIyLW1hdGVyaWFsL2dyaWQtbGlzdC9ncmlkLWxpc3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdhcGdwLWZpbGUtZHJvcHpvbmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLWRyb3B6b25lLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtZHJvcHpvbmUuY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogWyBGaWxlQ2FyZENvbXBvbmVudCwgTURfR1JJRF9MSVNUX0RJUkVDVElWRVMgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZURyb3B6b25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgZmlsZXM6IE1hbmFnZWRGaWxlW10gPSBbXTtcclxuICBwdWJsaWMgc3VtbWFyeSA9ICcnO1xyXG5cclxuICBASW5wdXQoKSBncmlkQ29uZmlnO1xyXG4gIEBJbnB1dCgpIGFjY2VwdEV4dGVuc2lvbnMgPSBbJyonXTtcclxuICBASW5wdXQoKSBkaXNwbGF5ID0gdHJ1ZTtcclxuXHJcbiAgcHJpdmF0ZSBhY2NlcHRBbGwgPSB0cnVlO1xyXG4gIHByaXZhdGUgZ3JpZENvbmZpZ0RlZmF1bHRzID0ge2NvbHM6IDQsIHJvd0hlaWdodDogJzE2OjknLCBndXR0ZXJTaXplOiAnOHB4J307XHJcbiAgcHJpdmF0ZSBkcmFnZ2luZ092ZXIgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmdyaWRDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdyaWRDb25maWdEZWZhdWx0cywgdGhpcy5ncmlkQ29uZmlnKTtcclxuICAgIGlmICh0aGlzLmFjY2VwdEV4dGVuc2lvbnNbMF0gIT09ICcqJykge1xyXG4gICAgICB0aGlzLmFjY2VwdEFsbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hcGdwLWZpbGUtZHJvcHpvbmUnKSBnZXQgZGVmYXVsdENsYXNzKCkgeyByZXR1cm4gdHJ1ZTsgfVxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZmlsZS1kcmFnLW92ZXInKSBnZXQgZmlsZURyYWdPdmVyQ2xhc3MoKSB7IHJldHVybiB0aGlzLmRyYWdnaW5nT3ZlcjsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXHJcbiAgb25EcmFnT3ZlcihldnQpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ29uRHJhZ092ZXInLCBldnQpO1xyXG4gICAgdGhpcy5kcmFnZ2luZ092ZXIgPSB0cnVlO1xyXG4gICAgbGV0IHRyYW5zZmVyID0gZXZ0LmRhdGFUcmFuc2ZlciA/IGV2dC5kYXRhVHJhbnNmZXIgOiBldnQub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXI7XHJcbiAgICB0cmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdlbmQnLCBbJyRldmVudCddKVxyXG4gIG9uRHJhZ0VuZChldnQpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ29uRHJhZ0VuZCcsIGV2dCk7XHJcbiAgICB0aGlzLmRyYWdnaW5nT3ZlciA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pXHJcbiAgb25EcmFnTGVhdmUoZXZ0KSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdvbkRyYWdMZWF2ZScsIGV2dCk7XHJcbiAgICB0aGlzLmRyYWdnaW5nT3ZlciA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxyXG4gIG9uRmlsZURyb3AoZXZ0KSB7XHJcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0aGlzLmRyYWdnaW5nT3ZlciA9IGZhbHNlO1xyXG4gICAgbGV0IGZpbGVzID0gZXZ0LnRhcmdldFsnZmlsZXMnXSB8fCBldnRbJ2RhdGFUcmFuc2ZlciddWydmaWxlcyddO1xyXG5cclxuICAgIHRoaXMucmVhZEZpbGVzKGZpbGVzKTtcclxuICAgIC8vY29uc29sZS5sb2coJ29uRmlsZURyb3AnLCBmaWxlcyk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVhZCBkcm9wcGVkIGluIGZpbGVzXHJcbiAgICogQHBhcmFtIGZpbGVzXHJcbiAgICovXHJcbiAgcmVhZEZpbGVzKGZpbGVzOiBhbnlbXSA9IFtdKSB7XHJcbiAgICBpZiAoIWZpbGVzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgZmlsZSA9IGZpbGVzW2ldO1xyXG4gICAgICBsZXQgZXh0ZW5zaW9uID0gZmlsZS5uYW1lLnNwbGl0KCcuJykucG9wKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hY2NlcHRBbGwgfHwgKHRoaXMuYWNjZXB0RXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgIT09IC0xKSkge1xyXG4gICAgICAgIHRoaXMuYWRkRmlsZShmaWxlLCBpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGEgZmlsZVxyXG4gICAqIEBwYXJhbSBmaWxlXHJcbiAgICogQHBhcmFtIGlkeFxyXG4gICAqL1xyXG4gIGFkZEZpbGUoZmlsZTogRmlsZSwgaWR4ID0gMCkge1xyXG4gICAgbGV0IG1hbmFnZWRGaWxlID0gbmV3IE1hbmFnZWRGaWxlKHsgX2ZpbGU6IGZpbGUgfSwgaWR4KTtcclxuICAgIHRoaXMuZmlsZXMucHVzaChtYW5hZ2VkRmlsZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
