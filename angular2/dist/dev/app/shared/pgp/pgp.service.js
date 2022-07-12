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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGdwL3BncC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBQ25DLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQiw0QkFBeUIsb0JBQW9CLENBQUMsQ0FBQTtBQUc5QztJQUNFLG9CQUFtQixJQUFVLEVBQVMsR0FBZTtRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFJLENBQUM7SUFFMUQsNEJBQU8sR0FBUCxVQUFRLEtBQWE7UUFBckIsaUJBT0M7UUFOQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDO2FBQ3pDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDTixLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNEJBQU8sR0FBUCxVQUFRLEtBQWE7UUFBckIsaUJBT0M7UUFOQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDO2FBQ3pDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDTixLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLEtBQVk7UUFBeEIsaUJBT0M7UUFOQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQzthQUN2RCxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ04sS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlCQUFJLEdBQUosVUFBSyxLQUFhO1FBQWxCLGlCQU9DO1FBTkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQzthQUN0QyxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ04sS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDZCQUFRLEdBQVIsVUFBUyxLQUFZO1FBQXJCLGlCQU9DO1FBTkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7YUFDcEQsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNOLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQ0FBYyxHQUFkLFVBQWUsS0FBWTtRQUEzQixpQkFPQztRQU5DLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDO2FBQzFELEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDTixLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBeERIO1FBQUMsaUJBQVUsRUFBRTs7a0JBQUE7SUF5RGIsaUJBQUM7QUFBRCxDQXhEQSxBQXdEQyxJQUFBO0FBeERZLGtCQUFVLGFBd0R0QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvcGdwL3BncC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IHtYaHJTZXJ2aWNlfSBmcm9tIFwiLi4veGhyL3hoci5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQZ3BTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCwgcHVibGljIHhocjogWGhyU2VydmljZSkgeyB9XHJcblxyXG4gIGRlY3J5cHQoaW5wdXQ6IHN0cmluZykge1xyXG4gICAgdGhpcy54aHIuc3RhcnRlZCgpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL2RlY3J5cHQnLCBpbnB1dClcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMueGhyLmZpbmlzaGVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZW5jcnlwdChpbnB1dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnhoci5zdGFydGVkKCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvZW5jcnlwdCcsIGlucHV0KVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy54aHIuZmluaXNoZWQoKTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBlbmNyeXB0TWFueShsaXN0czogYW55W10pIHtcclxuICAgIHRoaXMueGhyLnN0YXJ0ZWQoKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9lbmNyeXB0LW1hbnknLCB7bGlzdHM6IGxpc3RzfSlcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMueGhyLmZpbmlzaGVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2lnbihpbnB1dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnhoci5zdGFydGVkKCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvc2lnbicsIGlucHV0KVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy54aHIuZmluaXNoZWQoKTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaWduTWFueShsaXN0czogYW55W10pIHtcclxuICAgIHRoaXMueGhyLnN0YXJ0ZWQoKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9zaWduLW1hbnknLCB7bGlzdHM6IGxpc3RzfSlcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMueGhyLmZpbmlzaGVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2lnbk1hbnlRdWV1ZWQobGlzdHM6IGFueVtdKSB7XHJcbiAgICB0aGlzLnhoci5zdGFydGVkKCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvc2lnbi1tYW55L3F1ZXVlJywge2xpc3RzOiBsaXN0c30pXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICB0aGlzLnhoci5maW5pc2hlZCgpO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
