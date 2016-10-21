import { Routes } from '@angular/router';

import { BulkComponent } from './index';
import { ListsGuard } from '../shared/list/lists.guard';
import { BulkPreviewComponent } from './preview/preview.component';

export const BulkRoutes: Routes = [
  {
    path: 'bulk',
    component: BulkComponent
  },
  {
    path: 'bulk/preview',
    component: BulkPreviewComponent,
    canActivate: [ ListsGuard ]
  }
];
