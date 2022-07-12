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
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var xhr_service_1 = require("../xhr/xhr.service");
var PgpService = (function () {
    function PgpService(http, xhr) {
        this.http = http;
        this.xhr = xhr;
    }
    PgpService.prototype.decrypt = function (input) {
        var _this = this;
        this.xhr.started();
        return this.http.post('/api/decrypt', input)
            .map(function (res) {
            _this.xhr.finished();
            return res.json();
        });
    };
    PgpService.prototype.encrypt = function (input) {
        var _this = this;
        this.xhr.started();
        return this.http.post('/api/encrypt', input)
            .map(function (res) {
            _this.xhr.finished();
            return res.json();
        });
    };
    PgpService.prototype.encryptMany = function (lists) {
        var _this = this;
        this.xhr.started();
        return this.http.post('/api/encrypt-many', { lists: lists })
            .map(function (res) {
            _this.xhr.finished();
            return res.json();
        });
    };
    PgpService.prototype.sign = function (input) {
        var _this = this;
        this.xhr.started();
        return this.http.post('/api/sign', input)
            .map(function (res) {
            _this.xhr.finished();
            return res.json();
        });
    };
    PgpService.prototype.signMany = function (lists) {
        var _this = this;
        this.xhr.started();
        return this.http.post('/api/sign-many', { lists: lists })
            .map(function (res) {
            _this.xhr.finished();
            return res.json();
        });
    };
    PgpService.prototype.signManyQueued = function (lists) {
        var _this = this;
        this.xhr.started();
        return this.http.post('/api/sign-many/queue', { lists: lists })
            .map(function (res) {
            _this.xhr.finished();
            return res.json();
        });
    };
    PgpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, xhr_service_1.XhrService])
    ], PgpService);
    return PgpService;
}());
exports.PgpService = PgpService;
