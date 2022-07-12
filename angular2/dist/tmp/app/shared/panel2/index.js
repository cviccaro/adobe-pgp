"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./bar/index'));
__export(require('./content/index'));
__export(require('./panel2.component'));
var panel2_component_2 = require('./panel2.component');
var index_3 = require('./bar/index');
var index_4 = require('./content/index');
var index_5 = require('./group/index');
exports.PANEL2_DIRECTIVES = [
    index_3.PanelBarComponent,
    index_3.PanelBarTitleComponent,
    index_3.PanelBarSubtitleComponent,
    index_4.PanelContentComponent,
    panel2_component_2.PanelComponent,
    index_5.PanelGroupComponent
];
