import {Component, OnInit, OnDestroy} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

import { NavbarComponent, ToolbarComponent } from './shared/index';
import {MdIconRegistry} from "@angular2-material/icon/icon-registry";
import {Subscription} from "rxjs/Rx";
import {XhrService} from "./shared/xhr/xhr.service";
import {MD_PROGRESS_BAR_DIRECTIVES} from "@angular2-material/progress-bar/progress-bar";
import {ToasterService, ToasterConfig, ToasterContainerComponent} from "angular2-toaster/angular2-toaster";

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, BulkComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [MdIconRegistry, ToasterService],
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent, MD_PROGRESS_BAR_DIRECTIVES, ToasterContainerComponent]
})
export class AppComponent implements OnInit, OnDestroy {
  ajaxing = false;
  routerSub: Subscription;
  xhrStartSub: Subscription;
  xhrDoneSub: Subscription;
  toasterConfig: ToasterConfig;

  constructor(public xhr: XhrService, public router: Router) {
    this.toasterConfig = new ToasterConfig({
      showCloseButton: true
    });
  }

  ngOnInit() {
    this.routerSub = this.router.events.subscribe(evt => {
      if (evt.toString().match('^NavigationEnd')) {
        this.ajaxing = false;
      } else if (evt.toString().match('^NavigationStart')) {
        this.ajaxing = true;
      }
    });
    this.xhrStartSub = this.xhr.start.subscribe(e => this.ajaxing = true);
    this.xhrDoneSub = this.xhr.done.subscribe(e => this.ajaxing = false);
  }

  ngOnDestroy() {
    if (this.routerSub) this.xhrStartSub.unsubscribe();
    if (this.xhrStartSub) this.xhrStartSub.unsubscribe();
    if (this.xhrDoneSub) this.xhrDoneSub.unsubscribe();
  }
}
