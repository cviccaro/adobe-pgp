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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbGlzdC9saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBb0QsZUFBZSxDQUFDLENBQUE7QUFFcEUsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLDRCQUF5QixvQkFBb0IsQ0FBQyxDQUFBO0FBRzlDO0lBQ0UscUJBQW1CLElBQVUsRUFBUyxHQUFlO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQUksQ0FBQztJQUUxRCxvQ0FBYyxHQUFkLFVBQWUsS0FBb0I7UUFBbkMsaUJBY0M7UUFiQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRW5CLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFFMUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQWlCLEVBQUUsQ0FBUztZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVEsQ0FBQyxNQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQzthQUM1QyxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ04sS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlCQUFHLEdBQUgsVUFBSSxFQUFVO1FBQWQsaUJBT0M7UUFOQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFhLEVBQUksQ0FBQzthQUNwQyxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ04sS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxNQUFZO1FBQW5CLGlCQWVDO1FBZEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLEVBQUUsQ0FBQztRQUNuQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7WUFDOUIsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0IsQ0FBQztZQUNELE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDO2FBQzdDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDTixLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBNUNIO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUE2Q2Isa0JBQUM7QUFBRCxDQTVDQSxBQTRDQyxJQUFBO0FBNUNZLG1CQUFXLGNBNEN2QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvbGlzdC9saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgUmVxdWVzdE9wdGlvbnMsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtNYW5hZ2VkRmlsZX0gZnJvbSBcIi4uL2ZpbGUtZHJvcHpvbmUvZmlsZVwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7WGhyU2VydmljZX0gZnJvbSBcIi4uL3hoci94aHIuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGlzdFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwLCBwdWJsaWMgeGhyOiBYaHJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgdXBsb2FkQW5kUGFyc2UoZmlsZXM6IE1hbmFnZWRGaWxlW10pIHtcclxuICAgIHRoaXMueGhyLnN0YXJ0ZWQoKTtcclxuXHJcbiAgICBsZXQgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIGZpbGVzLmZvckVhY2goKGZpbGU6IE1hbmFnZWRGaWxlLCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgZm9ybS5hcHBlbmQoYGZpbGVbJHtpfV1gLCBmaWxlLl9maWxlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS91cGxvYWQtbGlzdCcsIGZvcm0pXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICB0aGlzLnhoci5maW5pc2hlZCgpO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldChpZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnhoci5zdGFydGVkKCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgL2FwaS9saXN0LyR7aWR9YClcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMueGhyLmZpbmlzaGVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcXVldWVkKHNlYXJjaD86IGFueSkge1xyXG4gICAgdGhpcy54aHIuc3RhcnRlZCgpO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoKTtcclxuICAgIGlmIChzZWFyY2gpIHtcclxuICAgICAgbGV0IHMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgIGZvciAobGV0IGtleSBpbiBzZWFyY2gpIHtcclxuICAgICAgICBzLmFwcGVuZChrZXksIHNlYXJjaFtrZXldKTtcclxuICAgICAgfVxyXG4gICAgICBvcHRpb25zLnNlYXJjaCA9IHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2FwaS9saXN0LXF1ZXVlJywgb3B0aW9ucylcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMueGhyLmZpbmlzaGVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
