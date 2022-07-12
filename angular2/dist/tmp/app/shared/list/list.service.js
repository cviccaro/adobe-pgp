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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var xhr_service_1 = require("../xhr/xhr.service");
var ListService = (function () {
    function ListService(http, xhr) {
        this.http = http;
        this.xhr = xhr;
    }
    ListService.prototype.uploadAndParse = function (files) {
        var _this = this;
        this.xhr.started();
        var form = new FormData();
        files.forEach(function (file, i) {
            form.append("file[" + i + "]", file._file);
        });
        return this.http.post('/api/upload-list', form)
            .map(function (res) {
            _this.xhr.finished();
            return res.json();
        });
    };
    ListService.prototype.get = function (id) {
        var _this = this;
        this.xhr.started();
        return this.http.get("/api/list/" + id)
            .map(function (res) {
            _this.xhr.finished();
            return res.json();
        });
    };
    ListService.prototype.queued = function (search) {
        var _this = this;
        this.xhr.started();
        var options = new http_1.RequestOptions();
        if (search) {
            var s = new http_1.URLSearchParams();
            for (var key in search) {
                s.append(key, search[key]);
            }
            options.search = s;
        }
        return this.http.get('/api/list-queue', options)
            .map(function (res) {
            _this.xhr.finished();
            return res.json();
        });
    };
    ListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, xhr_service_1.XhrService])
    ], ListService);
    return ListService;
}());
exports.ListService = ListService;
