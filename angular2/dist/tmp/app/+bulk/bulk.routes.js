"use strict";
var index_1 = require('./index');
var lists_guard_1 = require("../shared/list/lists.guard");
var preview_component_1 = require("./preview/preview.component");
exports.BulkRoutes = [
    {
        path: 'bulk',
        component: index_1.BulkComponent
    },
    {
        path: 'bulk/preview',
        component: preview_component_1.BulkPreviewComponent,
        canActivate: [lists_guard_1.ListsGuard]
    }
];
