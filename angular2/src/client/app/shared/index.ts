/**
 * This barrel file provides the exports for the shared resources (services, components).
 */
import {PgpService} from "./pgp/pgp.service";
import {CacheService} from "./cache/cache.service";
import {ListService} from "./list/list.service";

export * from './name-list/index';
export * from './navbar/index';
export * from './toolbar/index';
export * from './config/env.config';
export * from './pgp/index';
export * from './cache/index';
export * from './chip/index';
export * from './list/index';
export * from './copy-container/index';
export * from './file-dropzone/index';
export * from './panel2/index';

export const APP_SERVICES = [
  PgpService, ListService, CacheService
];
