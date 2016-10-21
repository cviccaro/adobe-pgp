import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { Subscription } from 'rxjs/Rx';

import { XhrService } from './shared/index';
/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, BulkComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: './app.component.html',
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
    this.routerSub = this.router.events.subscribe((evt: any) => {
      if (evt.toString().match('^NavigationEnd')) {
        this.ajaxing = false;
      } else if (evt.toString().match('^NavigationStart')) {
        this.ajaxing = true;
      }
    });
    this.xhrStartSub = this.xhr.start.subscribe(() => this.ajaxing = true);
    this.xhrDoneSub = this.xhr.done.subscribe(() => this.ajaxing = false);
  }

  ngOnDestroy() {
    if (this.routerSub) this.xhrStartSub.unsubscribe();
    if (this.xhrStartSub) this.xhrStartSub.unsubscribe();
    if (this.xhrDoneSub) this.xhrDoneSub.unsubscribe();
  }
}
