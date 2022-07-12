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
var icon_1 = require("@angular2-material/icon/icon");
var CopyContainerComponent = (function () {
    function CopyContainerComponent() {
    }
    CopyContainerComponent.prototype.copyToClipboard = function (str, el) {
        el.select();
        try {
            document.execCommand('copy');
        }
        catch (err) {
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CopyContainerComponent.prototype, "text", void 0);
    CopyContainerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'apgp-copy-container',
            templateUrl: './copy-container.component.html',
            styleUrls: ['./copy-container.component.css'],
            directives: [icon_1.MD_ICON_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], CopyContainerComponent);
    return CopyContainerComponent;
}());
exports.CopyContainerComponent = CopyContainerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29weS1jb250YWluZXIvY29weS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFDakQscUJBQW1DLDhCQUE4QixDQUFDLENBQUE7QUFTbEU7SUFBQTtJQVdBLENBQUM7SUFSQyxnREFBZSxHQUFmLFVBQWdCLEdBQVcsRUFBRSxFQUF1QjtRQUNsRCxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUM7WUFDSCxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLENBQUU7UUFBQSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWYsQ0FBQztJQUNILENBQUM7SUFURDtRQUFDLFlBQUssRUFBRTs7d0RBQUE7SUFSVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFFLGdDQUFnQyxDQUFFO1lBQy9DLFVBQVUsRUFBRSxDQUFFLHlCQUFrQixDQUFFO1NBQ25DLENBQUM7OzhCQUFBO0lBWUYsNkJBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLDhCQUFzQix5QkFXbEMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcHktY29udGFpbmVyL2NvcHktY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTURfSUNPTl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyMi1tYXRlcmlhbC9pY29uL2ljb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdhcGdwLWNvcHktY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29weS1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyAnLi9jb3B5LWNvbnRhaW5lci5jb21wb25lbnQuY3NzJyBdLFxyXG4gIGRpcmVjdGl2ZXM6IFsgTURfSUNPTl9ESVJFQ1RJVkVTIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvcHlDb250YWluZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcclxuXHJcbiAgY29weVRvQ2xpcGJvYXJkKHN0cjogc3RyaW5nLCBlbDogSFRNTFRleHRBcmVhRWxlbWVudCkge1xyXG4gICAgZWwuc2VsZWN0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJ09vcHMsIHVuYWJsZSB0byBjb3B5JywgZXJyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
