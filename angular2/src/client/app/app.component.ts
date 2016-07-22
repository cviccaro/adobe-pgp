import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Config, NameListService, NavbarComponent, ToolbarComponent } from './shared/index';
import {MdIconRegistry} from "@angular2-material/icon/icon-registry";

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, BulkComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [NameListService, MdIconRegistry],
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
