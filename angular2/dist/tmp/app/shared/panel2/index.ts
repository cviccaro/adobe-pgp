export * from './bar/index';
export * from './content/index';
export * from './panel2.component';

import { PanelComponent } from './panel2.component';
import { PanelBarComponent, PanelBarTitleComponent, PanelBarSubtitleComponent } from './bar/index';
import { PanelContentComponent } from './content/index';
import { PanelGroupComponent } from './group/index';

export const PANEL2_DIRECTIVES: any[] = [
    PanelBarComponent,
    PanelBarTitleComponent,
    PanelBarSubtitleComponent,
    PanelContentComponent,
    PanelComponent,
    PanelGroupComponent
];
