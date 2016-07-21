import { provideRouter, RouterConfig } from '@angular/router';

import { BulkRoutes } from './+bulk/index';
import { HomeRoutes } from './+home/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...BulkRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
