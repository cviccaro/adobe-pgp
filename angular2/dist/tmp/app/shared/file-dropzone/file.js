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
