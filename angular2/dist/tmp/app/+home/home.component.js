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
            template: "<md-card>     <md-card-header>         <md-card-title>             Sign with PGP         </md-card-title>     </md-card-header>     <form (submit)=\"sign()\" #singleForm=\"ngForm\">       <md-input [(ngModel)]=\"input\" name=\"input\" placeholder=\"Email Address\" required type=\"email\"></md-input>       <button md-button type=\"submit\" [disabled]=\"singleForm.invalid\">Sign</button>     </form> </md-card>  <md-card *ngIf=\"result\" class=\"result\">     <md-card-title>PGP Result</md-card-title>     <md-card-subtitle>{{ result.input }}</md-card-subtitle>     <md-tab-group>         <md-tab>             <template md-tab-label>Armored</template>             <template md-tab-content>                 <apgp-copy-container [text]=\"result.pgp\"></apgp-copy-container>             </template>         </md-tab>         <md-tab>             <template md-tab-label>Base64</template>             <template md-tab-content>                 <apgp-copy-container class=\"contain\" [text]=\"result.base64\"></apgp-copy-container>             </template>         </md-tab>     </md-tab-group> </md-card>",
            styles: [":host{display:block;padding:0 16px}:host md-input{-webkit-flex:1;-ms-flex:1;flex:1}:host form{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}:host md-card{max-width:600px;margin:24px 0}:host md-card.result{max-width:850px} /*# sourceMappingURL=home.component.css.map */"],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, input_1.MdInput, button_1.MdButton, card_1.MdCard, tabs_1.MD_TABS_DIRECTIVES, copy_container_component_1.CopyContainerComponent]
        }), 
        __metadata('design:paramtypes', [pgp_service_1.PgpService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
