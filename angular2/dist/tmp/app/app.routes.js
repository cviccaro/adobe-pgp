"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./+bulk/index');
var index_2 = require('./+home/index');
var index_3 = require('./+queue/index');
var lists_guard_1 = require('./shared/list/lists.guard');
var routes = index_2.HomeRoutes.concat(index_1.BulkRoutes, index_3.QueueRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes),
    lists_guard_1.ListsGuard
];
