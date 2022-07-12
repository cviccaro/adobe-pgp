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
var file_1 = require("../file");
var file_card_component_1 = require("../file-card/file-card.component");
var FileInfoComponent = (function () {
    function FileInfoComponent() {
        this.index = 0;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', file_1.ManagedFile)
    ], FileInfoComponent.prototype, "file", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], FileInfoComponent.prototype, "index", void 0);
    FileInfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'apgp-file-info',
            templateUrl: './file-info.component.html',
            styleUrls: ['./file-info.component.css'],
            directives: [file_card_component_1.FileCardComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], FileInfoComponent);
    return FileInfoComponent;
}());
exports.FileInfoComponent = FileInfoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZmlsZS1kcm9wem9uZS9maWxlLWluZm8vZmlsZS1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHFCQUEwQixTQUFTLENBQUMsQ0FBQTtBQUNwQyxvQ0FBZ0Msa0NBQWtDLENBQUMsQ0FBQTtBQVNuRTtJQUFBO1FBRVcsVUFBSyxHQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRkM7UUFBQyxZQUFLLEVBQUU7O21EQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O29EQUFBO0lBVFY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBRSwyQkFBMkIsQ0FBRTtZQUMxQyxVQUFVLEVBQUUsQ0FBRSx1Q0FBaUIsQ0FBRTtTQUNsQyxDQUFDOzt5QkFBQTtJQUlGLHdCQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSx5QkFBaUIsb0JBRzdCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9maWxlLWRyb3B6b25lL2ZpbGUtaW5mby9maWxlLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtNYW5hZ2VkRmlsZX0gZnJvbSBcIi4uL2ZpbGVcIjtcclxuaW1wb3J0IHtGaWxlQ2FyZENvbXBvbmVudH0gZnJvbSBcIi4uL2ZpbGUtY2FyZC9maWxlLWNhcmQuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYXBncC1maWxlLWluZm8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLWluZm8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyAnLi9maWxlLWluZm8uY29tcG9uZW50LmNzcycgXSxcclxuICBkaXJlY3RpdmVzOiBbIEZpbGVDYXJkQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVJbmZvQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBmaWxlIDogTWFuYWdlZEZpbGU7XHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlciA9IDA7XHJcbn1cclxuIl19
