"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Rx_1 = require('rxjs/Rx');
var ManagedFile = (function () {
    function ManagedFile(attributes, idx) {
        Object.assign(this, attributes);
        this.idx = idx;
        if (attributes._file) {
            var file = attributes._file;
            this.filename = file.name;
            this.size = file.size;
            this.mimetype = file.type;
            this.extension = file.name.split('.').pop();
            this.created_at = this.last_modified = file['lastModified'];
            if (file['webkitRelativePath']) {
                this.webkitRelativePath = file['webkitRelativePath'];
            }
        }
    }
    Object.defineProperty(ManagedFile.prototype, "date", {
        get: function () {
            return this.last_modified || this.created_at;
        },
        enumerable: true,
        configurable: true
    });
    ManagedFile.prototype.filesize = function (units) {
        if (units === void 0) { units = 'kb'; }
        var divisor = 10;
        switch (units) {
            case 'mb':
                divisor = 100;
                break;
        }
        return Math.round(this.size / divisor) / 100;
    };
    ManagedFile.prototype.map = function (mapFn) {
        var _this = this;
        var keys = Object.keys(this);
        keys.forEach(function (key) { return mapFn.apply(_this, [key, _this[key]]); });
    };
    ManagedFile.prototype.injectIntoForm = function (form_key, form) {
        var managedFile = Object.assign({}, this);
        var upload;
        if (this._file) {
            upload = this._file;
            delete managedFile._file;
            delete managedFile.url;
            form.append(form_key + "[_file]", upload);
        }
        for (var k in managedFile) {
            form.append(form_key + "[" + k + "]", managedFile[k]);
        }
    };
    return ManagedFile;
}());
exports.ManagedFile = ManagedFile;
var ManagedImage = (function (_super) {
    __extends(ManagedImage, _super);
    function ManagedImage(attributes, idx) {
        _super.call(this, attributes, idx);
        this.imageLoaded = new core_1.EventEmitter();
    }
    ManagedImage.prototype.read = function () {
        var file = this._file;
        return Rx_1.Observable.create(function (observer) {
            var reader = new FileReader();
            reader.onload = function (readerEvt) { return observer.next(reader.result); };
            setTimeout(function () { return reader.readAsDataURL(file); }, 50);
        });
    };
    ManagedImage.prototype.load = function (imageEl) {
        return Rx_1.Observable.create(function (observer) {
            imageEl.onload = function (e) { return observer.next({
                width: imageEl.naturalWidth,
                height: imageEl.naturalHeight
            }); };
        });
    };
    ManagedImage.prototype.watchForDimensions = function (imageEl) {
        var _this = this;
        this._dimensionSub = this.load(imageEl).subscribe(function (e) {
            _this.width = e.width;
            _this.height = e.height;
            _this.imageLoaded.emit(_this);
        });
    };
    ManagedImage.prototype.megapixels = function () {
        return Math.round((this.width * this.height) / 10000) / 100;
    };
    ManagedImage.prototype.ngOnDestroy = function () {
        if (this._dimensionSub)
            this._dimensionSub.unsubscribe();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ManagedImage.prototype, "imageLoaded", void 0);
    return ManagedImage;
}(ManagedFile));
exports.ManagedImage = ManagedImage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZmlsZS1kcm9wem9uZS9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUFnRCxlQUFlLENBQUMsQ0FBQTtBQUVoRSxtQkFBeUMsU0FBUyxDQUFDLENBQUE7QUErQm5EO0lBa0JJLHFCQUFZLFVBQWtCLEVBQUUsR0FBVztRQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUVmLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRW5CLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3pELENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUtELHNCQUFJLDZCQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2pELENBQUM7OztPQUFB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Q0FHdEIsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQU1ELHlDQUFrQixHQUFsQixVQUFtQixPQUF5QjtRQUE1QyxpQkFNQztRQUxHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQy9DLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDdkIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBTUQsaUNBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2hFLENBQUM7SUFLRCxrQ0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0QsQ0FBQztJQS9ERDtRQUFDLGFBQU0sRUFBRTs7cURBQUE7SUFnRWIsbUJBQUM7QUFBRCxDQXBFQSxBQW9FQyxDQXBFaUMsV0FBVyxHQW9FNUM7QUFwRVksb0JBQVksZUFvRXhCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9maWxlLWRyb3B6b25lL2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmljIG1hbmFnZWQgZmlsZSBjb25maWd1cmF0aW9uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEpwRmlsZSB7XHJcbiAgICBhbGlhcz86IHN0cmluZztcclxuICAgIGNyZWF0ZWRfYXQ/OiBhbnk7XHJcbiAgICBkYXRlPzogbnVtYmVyO1xyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICBleHRlbnNpb24/OiBzdHJpbmc7XHJcbiAgICBmaWxlbmFtZT86IHN0cmluZztcclxuICAgIGlkPzogYW55O1xyXG4gICAgaWR4PzogbnVtYmVyO1xyXG4gICAgbGFzdF9tb2RpZmllZD86IGFueTtcclxuICAgIG1pbWV0eXBlPzogc3RyaW5nO1xyXG4gICAgcGF0aD86IHN0cmluZztcclxuICAgIHNpemU/OiBudW1iZXI7XHJcbiAgICB1cGRhdGVkX2F0PzogYW55O1xyXG4gICAgdXJsPzogc3RyaW5nO1xyXG4gICAgd2Via2l0UmVsYXRpdmVQYXRoPzogc3RyaW5nO1xyXG5cclxuICAgIF9maWxlPzogRmlsZTtcclxuXHJcbiAgICBsb2FkPyhpbWFnZUVsPzogSFRNTEltYWdlRWxlbWVudCkgOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBtYXA/KG1hcEZuOiAoa2V5OiBzdHJpbmcsIHZhbDogYW55KSA9PiBhbnkpOiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIG1hbmFnZWQgZmlsZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1hbmFnZWRGaWxlIGltcGxlbWVudHMgSnBGaWxlIHtcclxuICAgIGFsaWFzOiBzdHJpbmc7XHJcbiAgICBjcmVhdGVkX2F0OiBhbnk7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgZXh0ZW5zaW9uOiBzdHJpbmc7XHJcbiAgICBmaWxlbmFtZTogc3RyaW5nO1xyXG4gICAgaWQ6IGFueTtcclxuICAgIGlkeDogbnVtYmVyO1xyXG4gICAgbGFzdF9tb2RpZmllZDogYW55O1xyXG4gICAgbWltZXR5cGU6IHN0cmluZztcclxuICAgIHBhdGg6IHN0cmluZztcclxuICAgIHNpemU6IG51bWJlcjtcclxuICAgIHVwZGF0ZWRfYXQ6IGFueTtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgd2Via2l0UmVsYXRpdmVQYXRoOiBzdHJpbmc7XHJcblxyXG4gICAgX2ZpbGU6IEZpbGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlczogSnBGaWxlLCBpZHg6IG51bWJlcikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgYXR0cmlidXRlcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaWR4ID0gaWR4O1xyXG5cclxuICAgICAgICBpZiAoYXR0cmlidXRlcy5fZmlsZSkge1xyXG4gICAgICAgICAgICAvLyBGaWxsIGluIG1hbmFnZWQgZmlsZSBmcm9tIEZpbGUgb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBmaWxlID0gYXR0cmlidXRlcy5fZmlsZTtcclxuICAgICAgICAgICAgdGhpcy5maWxlbmFtZSA9IGZpbGUubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5zaXplID0gZmlsZS5zaXplO1xyXG4gICAgICAgICAgICB0aGlzLm1pbWV0eXBlID0gZmlsZS50eXBlO1xyXG4gICAgICAgICAgICB0aGlzLmV4dGVuc2lvbiA9IGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZWRfYXQgPSB0aGlzLmxhc3RfbW9kaWZpZWQgPSBmaWxlWydsYXN0TW9kaWZpZWQnXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmaWxlWyd3ZWJraXRSZWxhdGl2ZVBhdGgnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJraXRSZWxhdGl2ZVBhdGggPSBmaWxlWyd3ZWJraXRSZWxhdGl2ZVBhdGgnXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgYXZhaWxhYmxlIGRhdGUgcHJvcGVydHlcclxuICAgICAqL1xyXG4gICAgZ2V0IGRhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0X21vZGlmaWVkIHx8IHRoaXMuY3JlYXRlZF9hdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSBhbmQgcmV0dXJuIGEgZm9ybWF0dGVkIGZpbGVzaXplXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmcgPSAna2InfVxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBmaWxlc2l6ZSh1bml0czogc3RyaW5nID0gJ2tiJyk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGRpdmlzb3IgPSAxMDtcclxuXHJcbiAgICAgICAgc3dpdGNoKHVuaXRzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ21iJzpcclxuICAgICAgICAgICAgICAgIGRpdmlzb3IgPSAxMDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuc2l6ZSAvIGRpdmlzb3IpIC8gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUnVuIGEgbWFwIGZ1bmN0aW9uIG9uIHRoZSBpbnRlcm5hbCBwcm9wZXJ0aWVzIG9mIHRoaXMgY2xhc3NcclxuICAgICAqIEBwYXJhbSB7YW55KSA9PiBhbnl9IG1hcEZuIFtkZXNjcmlwdGlvbl1cclxuICAgICAqL1xyXG4gICAgbWFwKG1hcEZuOiAoa2V5OiBzdHJpbmcsIHZhbDogYW55KSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xyXG5cclxuICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IG1hcEZuLmFwcGx5KHRoaXMsIFtrZXksIHRoaXNba2V5XV0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluamVjdCBpbnRvIEZvcm1EYXRhXHJcbiAgICAgKi9cclxuICAgIGluamVjdEludG9Gb3JtKGZvcm1fa2V5OiBzdHJpbmcsIGZvcm06IEZvcm1EYXRhKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1hbmFnZWRGaWxlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcyk7XHJcbiAgICAgICAgbGV0IHVwbG9hZDogRmlsZTtcclxuXHJcbiAgICAgICAgLy8gRmlsZSB1cGxvYWQ/XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZpbGUpIHtcclxuICAgICAgICAgICAgdXBsb2FkID0gdGhpcy5fZmlsZTtcclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSBtYW5hZ2VkRmlsZS5fZmlsZTtcclxuICAgICAgICAgICAgZGVsZXRlIG1hbmFnZWRGaWxlLnVybDtcclxuXHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kKGAke2Zvcm1fa2V5fVtfZmlsZV1gLCB1cGxvYWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXR0cmlidXRlIHVwZGF0ZVxyXG4gICAgICAgIGZvciAobGV0IGsgaW4gbWFuYWdlZEZpbGUpIHtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmQoYCR7Zm9ybV9rZXl9WyR7a31dYCwgbWFuYWdlZEZpbGVba10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEEgbWFuYWdlZCBpbWFnZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1hbmFnZWRJbWFnZSBleHRlbmRzIE1hbmFnZWRGaWxlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICBAT3V0cHV0KCkgaW1hZ2VMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGltZW5zaW9uU3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlczogSnBGaWxlLCBpZHg6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGF0dHJpYnV0ZXMsIGlkeCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFkIGEgRmlsZVxyXG4gICAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBbZGVzY3JpcHRpb25dXHJcbiAgICAgKi9cclxuICAgIHJlYWQoKSA6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgbGV0IGZpbGUgPSB0aGlzLl9maWxlO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSByZWFkZXJFdnQgPT4gb2JzZXJ2ZXIubmV4dChyZWFkZXIucmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSksIDUwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYWNrIHRoZSBwcm9ncmVzcyBvZiBhbiBIVE1MIEltYWdlIExvYWRcclxuICAgICAqIEBwYXJhbSAge0hUTUxJbWFnZUVsZW1lbnR9IGltYWdlRWxcclxuICAgICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cclxuICAgICAqL1xyXG4gICAgbG9hZChpbWFnZUVsOiBIVE1MSW1hZ2VFbGVtZW50KSA6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcclxuICAgICAgICAgICAgaW1hZ2VFbC5vbmxvYWQgPSAoZSkgPT4gb2JzZXJ2ZXIubmV4dCh7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogaW1hZ2VFbC5uYXR1cmFsV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGltYWdlRWwubmF0dXJhbEhlaWdodFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRlbGwgdGhlIE1hbmFnZWRJbWFnZSB0byB3YXRjaCBhbiBpbWFnZSBsb2FkXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IGltYWdlRWwgW2Rlc2NyaXB0aW9uXVxyXG4gICAgICovXHJcbiAgICB3YXRjaEZvckRpbWVuc2lvbnMoaW1hZ2VFbDogSFRNTEltYWdlRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RpbWVuc2lvblN1YiA9IHRoaXMubG9hZChpbWFnZUVsKS5zdWJzY3JpYmUoZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBlLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGUuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlTG9hZGVkLmVtaXQodGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgdGhlIG1lZ2FwaXhlbHMgZm9yIHRoaXMgaW1hZ2VcclxuICAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgbWVnYXBpeGVscygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCh0aGlzLndpZHRoICogdGhpcy5oZWlnaHQpIC8gMTAwMDApIC8gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYW4gdXBcclxuICAgICAqL1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RpbWVuc2lvblN1YikgdGhpcy5fZGltZW5zaW9uU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
