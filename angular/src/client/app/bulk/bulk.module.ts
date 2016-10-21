import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BulkComponent } from './bulk.component';
import { BulkPreviewComponent } from './preview/preview.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		BulkComponent,
		BulkPreviewComponent
	],
	exports: [
		BulkComponent,
		BulkPreviewComponent
	]
})
export class BulkModule { }
