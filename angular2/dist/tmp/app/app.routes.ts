import { provideRouter, RouterConfig } from '@angular/router';

import { BulkRoutes } from './+bulk/index';
import { HomeRoutes } from './+home/index';
import {QueueRoutes} from './+queue/index';
import {ListsGuard} from './shared/list/lists.guard';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...BulkRoutes,
  ...QueueRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  ListsGuard
];
