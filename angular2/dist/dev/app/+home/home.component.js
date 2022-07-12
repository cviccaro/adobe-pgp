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
var forms_1 = require('@angular/forms');
var pgp_service_1 = require("../shared/pgp/pgp.service");
var input_1 = require("@angular2-material/input/input");
var button_1 = require("@angular2-material/button/button");
var card_1 = require("@angular2-material/card/card");
var tabs_1 = require("@angular2-material/tabs/tabs");
var copy_container_component_1 = require("../shared/copy-container/copy-container.component");
var HomeComponent = (function () {
    function HomeComponent(pgp) {
        this.pgp = pgp;
        this.emails = [];
    }
    HomeComponent.prototype.sign = function () {
        var _this = this;
        var input = this.input;
        this.pgp.sign(this.input)
            .subscribe(function (res) {
            _this.result = {
                input: input,
                pgp: res.armored,
                base64: res.base64
            };
        });
        this.input = '';
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, input_1.MdInput, button_1.MdButton, card_1.MdCard, tabs_1.MD_TABS_DIRECTIVES, copy_container_component_1.CopyContainerComponent]
        }), 
        __metadata('design:paramtypes', [pgp_service_1.PgpService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUF5QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBRTFELDRCQUF5QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3JELHNCQUFzQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3ZELHVCQUF1QixrQ0FBa0MsQ0FBQyxDQUFBO0FBQzFELHFCQUFxQiw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3BELHFCQUFpQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ2hFLHlDQUFxQyxtREFBbUQsQ0FBQyxDQUFBO0FBWXpGO0lBYUUsdUJBQW1CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBVGxDLFdBQU0sR0FBVSxFQUFFLENBQUM7SUFTa0IsQ0FBQztJQU10Qyw0QkFBSSxHQUFKO1FBQUEsaUJBY0M7UUFiQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDdEIsU0FBUyxDQUFDLFVBQUMsR0FBUTtZQUNsQixLQUFJLENBQUMsTUFBTSxHQUFHO2dCQUNaLEtBQUssRUFBRSxLQUFLO2dCQUNaLEdBQUcsRUFBRSxHQUFHLENBQUMsT0FBTztnQkFDaEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO2FBQ25CLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWhCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBeENIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQ2pDLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixFQUFFLGVBQU8sRUFBRSxpQkFBUSxFQUFFLGFBQU0sRUFBRSx5QkFBa0IsRUFBRSxpREFBc0IsQ0FBQztTQUM5RyxDQUFDOztxQkFBQTtJQTZDRixvQkFBQztBQUFELENBNUNBLEFBNENDLElBQUE7QUE1Q1kscUJBQWEsZ0JBNEN6QixDQUFBIiwiZmlsZSI6ImFwcC8raG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQge1BncFNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvcGdwL3BncC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TWRJbnB1dH0gZnJvbSBcIkBhbmd1bGFyMi1tYXRlcmlhbC9pbnB1dC9pbnB1dFwiO1xyXG5pbXBvcnQge01kQnV0dG9ufSBmcm9tIFwiQGFuZ3VsYXIyLW1hdGVyaWFsL2J1dHRvbi9idXR0b25cIjtcclxuaW1wb3J0IHtNZENhcmR9IGZyb20gXCJAYW5ndWxhcjItbWF0ZXJpYWwvY2FyZC9jYXJkXCI7XHJcbmltcG9ydCB7TURfVEFCU19ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIyLW1hdGVyaWFsL3RhYnMvdGFic1wiO1xyXG5pbXBvcnQge0NvcHlDb250YWluZXJDb21wb25lbnR9IGZyb20gXCIuLi9zaGFyZWQvY29weS1jb250YWluZXIvY29weS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2hvbWUuY29tcG9uZW50LmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIE1kSW5wdXQsIE1kQnV0dG9uLCBNZENhcmQsIE1EX1RBQlNfRElSRUNUSVZFUywgQ29weUNvbnRhaW5lckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xyXG5cclxuICBpbnB1dDogc3RyaW5nO1xyXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gIGVtYWlsczogYW55W10gPSBbXTtcclxuICByZXN1bHQ6IHsgaW5wdXQ6IHN0cmluZywgcGdwOiBzdHJpbmcsIGJhc2U2NDogc3RyaW5nIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIEhvbWVDb21wb25lbnQgd2l0aCB0aGUgaW5qZWN0ZWRcclxuICAgKiBQZ3BTZXJ2aWNlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtQZ3BTZXJ2aWNlfSBwZ3AgLSBUaGUgaW5qZWN0ZWQgUGdwU2VydmljZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGdwOiBQZ3BTZXJ2aWNlKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBTaWducyB0aGUgZm9ybSB2YWx1ZVxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGZhbHNlIHRvIHByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pdCBiZWhhdmlvciB0byByZWZyZXNoIHRoZSBwYWdlLlxyXG4gICAqL1xyXG4gIHNpZ24oKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaW5wdXQgPSB0aGlzLmlucHV0O1xyXG4gICAgdGhpcy5wZ3Auc2lnbih0aGlzLmlucHV0KVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0ge1xyXG4gICAgICAgICAgaW5wdXQ6IGlucHV0LFxyXG4gICAgICAgICAgcGdwOiByZXMuYXJtb3JlZCxcclxuICAgICAgICAgIGJhc2U2NDogcmVzLmJhc2U2NFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXQgPSAnJztcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWNyeXB0IGEgdmFsdWVcclxuICAgKiBAcGFyYW0gZW5jcnlwdGVkIHN0cmluZ1xyXG4gICAqL1xyXG4gIC8vIGRlY3J5cHQoZW5jcnlwdGVkOiBzdHJpbmcpIHtcclxuICAvLyAgIHRoaXMucGdwLmRlY3J5cHQoZW5jcnlwdGVkKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2coJ0RlY3J5cHRlZCAnICsgZW5jcnlwdGVkICsgJyB0byAnICsgcmVzKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxufVxyXG4iXX0=
