/**
 * This barrel file provides the exports for the shared resources (services, components).
 */
import {PgpService} from "./pgp/pgp.service";
import {CacheService} from "./cache/cache.service";
import {ListService} from "./list/list.service";
import {XhrService} from "./xhr/xhr.service";

export * from './cache/index';
export * from './chip/index';
export * from './config/env.config';
export * from './copy-container/index';
export * from './file-dropzone/index';
export * from './list/index';
export * from './navbar/index';
export * from './panel2/index';
export * from './pgp/index';
export * from './toolbar/index';
export * from './xhr/index';

export const APP_SERVICES = [
  PgpService, ListService, CacheService, XhrService
];
