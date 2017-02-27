import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { HomeModule } from './home/home.module';
import { BulkModule } from './bulk/bulk.module';
import { QueueModule } from './queue/queue.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
  	BrowserModule,
  	HttpModule,
  	RouterModule.forRoot(routes),
  	HomeModule,
  	BulkModule,
  	QueueModule,
  	SharedModule.forRoot()
	],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
})

export class AppModule { }
