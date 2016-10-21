import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { QueueComponent } from './queue.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		QueueComponent,
	],
	exports: [ QueueComponent ]
})
export class QueueModule { }
