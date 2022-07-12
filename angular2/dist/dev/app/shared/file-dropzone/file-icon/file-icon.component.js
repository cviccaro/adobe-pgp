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
var FileIconComponent = (function () {
    function FileIconComponent() {
        this.size = 48;
    }
    Object.defineProperty(FileIconComponent.prototype, "iconUrl", {
        get: function () {
            return this.extension ?
                "/assets/Free-file-icons-master/" + this.size + "px/" + this.extension + ".png"
                : '';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FileIconComponent.prototype, "extension", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], FileIconComponent.prototype, "size", void 0);
    FileIconComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'jpa-file-icon',
            templateUrl: './file-icon.component.html',
            styleUrls: ['./file-icon.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], FileIconComponent);
    return FileIconComponent;
}());
exports.FileIconComponent = FileIconComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZmlsZS1kcm9wem9uZS9maWxlLWljb24vZmlsZS1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlDLGVBQWUsQ0FBQyxDQUFBO0FBUWpEO0lBQUE7UUFFVSxTQUFJLEdBQVcsRUFBRSxDQUFDO0lBTzVCLENBQUM7SUFMQSxzQkFBSSxzQ0FBTzthQUFYO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTO2dCQUNwQixvQ0FBa0MsSUFBSSxDQUFDLElBQUksV0FBTSxJQUFJLENBQUMsU0FBUyxTQUFNO2tCQUNuRSxFQUFFLENBQUM7UUFDUCxDQUFDOzs7T0FBQTtJQVBEO1FBQUMsWUFBSyxFQUFFOzt3REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzttREFBQTtJQVJUO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFFO1NBQ3pDLENBQUM7O3lCQUFBO0lBVUYsd0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHlCQUFpQixvQkFTN0IsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2ZpbGUtZHJvcHpvbmUvZmlsZS1pY29uL2ZpbGUtaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnanBhLWZpbGUtaWNvbicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2ZpbGUtaWNvbi5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vZmlsZS1pY29uLmNvbXBvbmVudC5jc3MnIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVJY29uQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBleHRlbnNpb246IHN0cmluZztcclxuXHRASW5wdXQoKSBzaXplOiBudW1iZXIgPSA0ODtcclxuXHJcblx0Z2V0IGljb25VcmwoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5leHRlbnNpb24gP1xyXG5cdFx0XHRgL2Fzc2V0cy9GcmVlLWZpbGUtaWNvbnMtbWFzdGVyLyR7dGhpcy5zaXplfXB4LyR7dGhpcy5leHRlbnNpb259LnBuZ2BcclxuXHRcdFx0OiAnJztcclxuXHR9XHJcbn1cclxuIl19
