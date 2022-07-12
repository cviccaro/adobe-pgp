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
            template: "<jpa-panel2>     <jpa-panel2-bar>         <jpa-panel2-bar-title>             {{ list.managedFile.filename }}             <button md-icon-button color=\"accent\" *ngIf=\"list.signed\" (click)=\"download(list.signed.url, $event)\" title=\"Download Signed {{ list.managedFile.filename }}\">                 <md-icon>file_download</md-icon>             </button>         </jpa-panel2-bar-title>         <jpa-panel2-bar-subtitle>{{ list.data.length }} emails</jpa-panel2-bar-subtitle>     </jpa-panel2-bar>     <jpa-panel2-content class=\"row\" [ngSwitch]=\"stage\">         <template [ngSwitchCase]=\"1\">             <ul>                 <li *ngFor=\"let datum of list.data; let index = index\">{{email(datum)}}</li>             </ul>         </template>         <template [ngSwitchCase]=\"2\">             <div class=\"col-md-4\" *ngFor=\"let datum of list.data; let index = index;\">                 <h4>{{ email(datum) }}</h4>                 <md-tab-group *ngIf=\"list.signed\">                     <md-tab>                         <template md-tab-label>Armored</template>                         <template md-tab-content>                             <apgp-copy-container [text]=\"list.signed.data[index].signed.armored\"></apgp-copy-container>                         </template>                     </md-tab>                     <md-tab>                         <template md-tab-label>Base64</template>                         <template md-tab-content>                             <apgp-copy-container class=\"contain\" [text]=\"list.signed.data[index].signed.base64\"></apgp-copy-container>                         </template>                     </md-tab>                 </md-tab-group>             </div>         </template>     </jpa-panel2-content> </jpa-panel2>",
            styles: [":host{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}:host,:host .cards{display:-webkit-flex;display:-ms-flexbox;display:flex}:host .cards{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:0 38px}:host md-card.data md-card-title{font-size:16px}:host md-card.data ul{margin:0}:host md-card.encrypted{margin-left:60px;max-width:800px}:host md-card.encrypted md-card-title{font-size:16px}:host md-card.encrypted pre{border:none;font-size:12px}:host .info-header{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}:host .info-header jpa-file-card{-webkit-flex:1;-ms-flex:1;flex:1;margin-bottom:24px;margin-left:24px}:host jpa-panel2-bar-subtitle,:host jpa-panel2-bar-title{height:36px}:host jpa-panel2-bar jpa-panel2-bar-subtitle{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}:host jpa-panel2-content{display:block;padding-top:36px}:host table.table td{vertical-align:middle}:host table.table td.data-preview{padding:0}:host table.table td.data-preview apgp-copy-container{max-width:100%}:host table.table td.data-preview apgp-copy-container pre{border:none;background:inherit}:host table.table td.base64-preview apgp-copy-container pre{white-space:normal}:host ul{-webkit-column-count:6;-moz-column-count:6;column-count:6}:host ul li{font-size:14px;line-height:24px;list-style:disc inside none} /*# sourceMappingURL=info.component.css.map */"],
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
