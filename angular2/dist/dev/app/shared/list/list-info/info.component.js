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
var file_card_component_1 = require("../../file-dropzone/file-card/file-card.component");
var card_1 = require("@angular2-material/card/card");
var copy_container_component_1 = require("../../copy-container/copy-container.component");
var index_1 = require("../../panel2/index");
var panel2_component_1 = require("../../panel2/panel2.component");
var icon_1 = require("@angular2-material/icon/icon");
var button_1 = require("@angular2-material/button/button");
var tabs_1 = require("@angular2-material/tabs/tabs");
var common_1 = require("@angular/common");
var grid_list_1 = require("@angular2-material/grid-list/grid-list");
var ListInfoComponent = (function () {
    function ListInfoComponent() {
        this.hasData = false;
        this.stage = 1;
    }
    ListInfoComponent.prototype.ngOnInit = function () {
        if (this.list && this.list.data && this.list.data.length) {
            this.list.data.sort(function (a, b) {
                return a.email.localeCompare(b.email);
            });
        }
    };
    ListInfoComponent.prototype.email = function (data) {
        return data[Object.keys(data)[0]];
    };
    ListInfoComponent.prototype.expandPanel = function () {
        if (!this.panel.expanded)
            this.panel.expanded = true;
    };
    ListInfoComponent.prototype.download = function (url, evt) {
        evt.stopPropagation();
        evt.stopImmediatePropagation();
        evt.preventDefault();
        window.open(url, '_blank');
    };
    ListInfoComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('hasData')) {
            if (changes['hasData'].currentValue) {
                if (this.list.data.length <= 50) {
                    this.stage = 2;
                }
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListInfoComponent.prototype, "list", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ListInfoComponent.prototype, "index", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ListInfoComponent.prototype, "hasData", void 0);
    __decorate([
        core_1.ViewChild(panel2_component_1.PanelComponent), 
        __metadata('design:type', panel2_component_1.PanelComponent)
    ], ListInfoComponent.prototype, "panel", void 0);
    ListInfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'apgp-list-info',
            templateUrl: './info.component.html',
            styleUrls: ['./info.component.css'],
            directives: [
                file_card_component_1.FileCardComponent,
                card_1.MdCard,
                button_1.MdButton,
                icon_1.MdIcon,
                copy_container_component_1.CopyContainerComponent,
                index_1.PANEL2_DIRECTIVES,
                tabs_1.MD_TABS_DIRECTIVES,
                common_1.NgSwitch,
                common_1.NgSwitchCase,
                common_1.NgSwitchDefault,
                grid_list_1.MD_GRID_LIST_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ListInfoComponent);
    return ListInfoComponent;
}());
exports.ListInfoComponent = ListInfoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbGlzdC9saXN0LWluZm8vaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE0RSxlQUFlLENBQUMsQ0FBQTtBQUM1RixvQ0FBZ0MsbURBQW1ELENBQUMsQ0FBQTtBQUNwRixxQkFBcUIsOEJBQThCLENBQUMsQ0FBQTtBQUNwRCx5Q0FBcUMsK0NBQStDLENBQUMsQ0FBQTtBQUNyRixzQkFBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCxpQ0FBNkIsK0JBQStCLENBQUMsQ0FBQTtBQUM3RCxxQkFBcUIsOEJBQThCLENBQUMsQ0FBQTtBQUNwRCx1QkFBdUIsa0NBQWtDLENBQUMsQ0FBQTtBQUMxRCxxQkFBaUMsOEJBQThCLENBQUMsQ0FBQTtBQUNoRSx1QkFBc0QsaUJBQWlCLENBQUMsQ0FBQTtBQUN4RSwwQkFBc0Msd0NBQXdDLENBQUMsQ0FBQTtBQXFCL0U7SUFBQTtRQUdXLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFJbEMsVUFBSyxHQUFHLENBQUMsQ0FBQztJQW1DWixDQUFDO0lBakNDLG9DQUFRLEdBQVI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFDLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELGlDQUFLLEdBQUwsVUFBTSxJQUFnQztRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUVFLEVBQUUsQ0FBQyxDQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFTLENBQUM7WUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekQsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxHQUFXLEVBQUUsR0FBVTtRQUM5QixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsR0FBRyxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDL0IsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDakIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQXhDRDtRQUFDLFlBQUssRUFBRTs7bURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7b0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFFUjtRQUFDLGdCQUFTLENBQUMsaUNBQWMsQ0FBQzs7b0RBQUE7SUF4QjVCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUUsc0JBQXNCLENBQUU7WUFDckMsVUFBVSxFQUFFO2dCQUNWLHVDQUFpQjtnQkFDakIsYUFBTTtnQkFDTixpQkFBUTtnQkFDUixhQUFNO2dCQUNOLGlEQUFzQjtnQkFDdEIseUJBQWlCO2dCQUNqQix5QkFBa0I7Z0JBQ2xCLGlCQUFRO2dCQUNSLHFCQUFZO2dCQUNaLHdCQUFlO2dCQUNmLG1DQUF1QjthQUN4QjtTQUNGLENBQUM7O3lCQUFBO0lBMkNGLHdCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtBQTFDWSx5QkFBaUIsb0JBMEM3QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvbGlzdC9saXN0LWluZm8vaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0ZpbGVDYXJkQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vZmlsZS1kcm9wem9uZS9maWxlLWNhcmQvZmlsZS1jYXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge01kQ2FyZH0gZnJvbSBcIkBhbmd1bGFyMi1tYXRlcmlhbC9jYXJkL2NhcmRcIjtcclxuaW1wb3J0IHtDb3B5Q29udGFpbmVyQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vY29weS1jb250YWluZXIvY29weS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UEFORUwyX0RJUkVDVElWRVN9IGZyb20gXCIuLi8uLi9wYW5lbDIvaW5kZXhcIjtcclxuaW1wb3J0IHtQYW5lbENvbXBvbmVudH0gZnJvbSBcIi4uLy4uL3BhbmVsMi9wYW5lbDIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TWRJY29ufSBmcm9tIFwiQGFuZ3VsYXIyLW1hdGVyaWFsL2ljb24vaWNvblwiO1xyXG5pbXBvcnQge01kQnV0dG9ufSBmcm9tIFwiQGFuZ3VsYXIyLW1hdGVyaWFsL2J1dHRvbi9idXR0b25cIjtcclxuaW1wb3J0IHtNRF9UQUJTX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhcjItbWF0ZXJpYWwvdGFicy90YWJzXCI7XHJcbmltcG9ydCB7TmdTd2l0Y2hEZWZhdWx0LCBOZ1N3aXRjaENhc2UsIE5nU3dpdGNofSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7TURfR1JJRF9MSVNUX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhcjItbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2FwZ3AtbGlzdC1pbmZvJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW5mby5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbICcuL2luZm8uY29tcG9uZW50LmNzcycgXSxcclxuICBkaXJlY3RpdmVzOiBbXHJcbiAgICBGaWxlQ2FyZENvbXBvbmVudCxcclxuICAgIE1kQ2FyZCxcclxuICAgIE1kQnV0dG9uLFxyXG4gICAgTWRJY29uLFxyXG4gICAgQ29weUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFBBTkVMMl9ESVJFQ1RJVkVTLFxyXG4gICAgTURfVEFCU19ESVJFQ1RJVkVTLFxyXG4gICAgTmdTd2l0Y2gsXHJcbiAgICBOZ1N3aXRjaENhc2UsXHJcbiAgICBOZ1N3aXRjaERlZmF1bHQsXHJcbiAgICBNRF9HUklEX0xJU1RfRElSRUNUSVZFU1xyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGxpc3Q6IGFueTtcclxuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGhhc0RhdGE6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQFZpZXdDaGlsZChQYW5lbENvbXBvbmVudCkgcGFuZWw6IFBhbmVsQ29tcG9uZW50O1xyXG5cclxuICBzdGFnZSA9IDE7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMubGlzdCAmJiB0aGlzLmxpc3QuZGF0YSAmJiB0aGlzLmxpc3QuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5saXN0LmRhdGEuc29ydCgoYSxiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGEuZW1haWwubG9jYWxlQ29tcGFyZShiLmVtYWlsKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbWFpbChkYXRhOiB7IFtrZXk6IHN0cmluZ10gOiBzdHJpbmcgfSApIHtcclxuICAgIHJldHVybiBkYXRhW09iamVjdC5rZXlzKGRhdGEpWzBdXTtcclxuICB9XHJcblxyXG4gIGV4cGFuZFBhbmVsKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnZXhwYW5kIHBhbmVsIScpO1xyXG4gICAgaWYgKCAhdGhpcy5wYW5lbC5leHBhbmRlZCApIHRoaXMucGFuZWwuZXhwYW5kZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZG93bmxvYWQodXJsOiBzdHJpbmcsIGV2dDogRXZlbnQpIHtcclxuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnaGFzRGF0YScpKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzWydoYXNEYXRhJ10uY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdC5kYXRhLmxlbmd0aCA8PSA1MCkge1xyXG4gICAgICAgICAgdGhpcy5zdGFnZSA9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
