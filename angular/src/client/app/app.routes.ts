import { Routes } from '@angular/router';

import { BulkRoutes } from './bulk/index';
import { HomeRoutes } from './home/index';
import { QueueRoutes } from './queue/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...BulkRoutes,
  ...QueueRoutes
];
