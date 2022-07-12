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
var XhrService = (function () {
    function XhrService() {
        this.requests = [];
        this.count = 0;
        this.start = new core_1.EventEmitter();
        this.done = new core_1.EventEmitter();
    }
    XhrService.prototype.started = function (config) {
        this.count++;
        this.start.emit(config);
    };
    XhrService.prototype.finished = function (config) {
        if (--this.count === 0) {
            this.done.emit(config);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], XhrService.prototype, "start", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], XhrService.prototype, "done", void 0);
    XhrService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], XhrService);
    return XhrService;
}());
exports.XhrService = XhrService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQveGhyL3hoci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUQsZUFBZSxDQUFDLENBQUE7QUFHakU7SUFBQTtRQUNFLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRUEsVUFBSyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzNCLFNBQUksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQWF0QyxDQUFDO0lBWEMsNEJBQU8sR0FBUCxVQUFRLE1BQU87UUFFYixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsNkJBQVEsR0FBUixVQUFTLE1BQU87UUFDZCxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQWJEO1FBQUMsYUFBTSxFQUFFOzs2Q0FBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOzs0Q0FBQTtJQU5YO1FBQUMsaUJBQVUsRUFBRTs7a0JBQUE7SUFtQmIsaUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLGtCQUFVLGFBa0J0QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQveGhyL3hoci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFhoclNlcnZpY2Uge1xyXG4gIHJlcXVlc3RzID0gW107XHJcbiAgY291bnQgPSAwO1xyXG5cclxuICBAT3V0cHV0KCkgc3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGRvbmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHN0YXJ0ZWQoY29uZmlnPykge1xyXG4gICAgLy90aGlzLnJlcXVlc3RzLnB1c2goY29uZmlnKTtcclxuICAgIHRoaXMuY291bnQrKztcclxuICAgIHRoaXMuc3RhcnQuZW1pdChjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgZmluaXNoZWQoY29uZmlnPykge1xyXG4gICAgaWYgKC0tdGhpcy5jb3VudCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmRvbmUuZW1pdChjb25maWcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
