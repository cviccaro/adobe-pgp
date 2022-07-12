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
var button_1 = require("@angular2-material/button/button");
var icon_1 = require("@angular2-material/icon/icon");
var ChipComponent = (function () {
    function ChipComponent() {
        this.removeEnabled = false;
        this.onRemove = new core_1.EventEmitter();
    }
    ChipComponent.prototype.remove = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.onRemove.emit(this.id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ChipComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ChipComponent.prototype, "removeEnabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ChipComponent.prototype, "onRemove", void 0);
    ChipComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'jpa-chip',
            templateUrl: './chip.component.html',
            styleUrls: ['./chip.component.css'],
            directives: [button_1.MdButton, icon_1.MdIcon]
        }), 
        __metadata('design:paramtypes', [])
    ], ChipComponent);
    return ChipComponent;
}());
exports.ChipComponent = ChipComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY2hpcC9jaGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBQ3ZFLHVCQUF1QixrQ0FBa0MsQ0FBQyxDQUFBO0FBQzFELHFCQUFxQiw4QkFBOEIsQ0FBQyxDQUFBO0FBU3BEO0lBQUE7UUFFVSxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUU5QixhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFRekMsQ0FBQztJQU5BLDhCQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUVwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQVZEO1FBQUMsWUFBSyxFQUFFOzs2Q0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzt3REFBQTtJQUVSO1FBQUMsYUFBTSxFQUFFOzttREFBQTtJQVhWO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFVBQVUsRUFBRSxDQUFFLGlCQUFRLEVBQUUsYUFBTSxDQUFFO1NBQ2hDLENBQUM7O3FCQUFBO0lBYUYsb0JBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLHFCQUFhLGdCQVl6QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY2hpcC9jaGlwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWRCdXR0b259IGZyb20gXCJAYW5ndWxhcjItbWF0ZXJpYWwvYnV0dG9uL2J1dHRvblwiO1xyXG5pbXBvcnQge01kSWNvbn0gZnJvbSBcIkBhbmd1bGFyMi1tYXRlcmlhbC9pY29uL2ljb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdqcGEtY2hpcCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2NoaXAuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2NoaXAuY29tcG9uZW50LmNzcyddLFxyXG5cdGRpcmVjdGl2ZXM6IFsgTWRCdXR0b24sIE1kSWNvbiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGlwQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBpZDogYW55O1xyXG5cdEBJbnB1dCgpIHJlbW92ZUVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0QE91dHB1dCgpIG9uUmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRyZW1vdmUoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHR0aGlzLm9uUmVtb3ZlLmVtaXQodGhpcy5pZCk7XHJcblx0fVxyXG59XHJcbiJdfQ==
