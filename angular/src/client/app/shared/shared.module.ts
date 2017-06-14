import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule, MdIconRegistry, OVERLAY_PROVIDERS } from '@angular/material';
import { MomentModule } from 'angular2-moment';
import { ToasterModule } from 'angular2-toaster';

import { CacheService } from './cache/index';
import { CopyContainerComponent } from './copy-container/index';
import { FileDropzoneComponent, FileIconComponent, FileCardComponent, FileInfoComponent, ActionDelegateDirective } from './file-dropzone/index';
import { ListInfoComponent, ListService, ListsGuard } from './list/index';
import { NavbarComponent } from './navbar/index';
import { PagerComponent } from './pager/index';
import {
  PanelComponent,
  PanelBarComponent,
  PanelContentComponent,
  PanelBarSubtitleComponent,
  PanelBarTitleComponent,
  PanelGroupComponent
} from './panel2/index';
import { PgpService } from './pgp/pgp.service';
import { ToolbarComponent } from './toolbar/index';
import { XhrService } from './xhr/xhr.service';

export const APP_SERVICES = [
  PgpService, ListService, CacheService, XhrService
];

export const APP_MIDDLEWARE = [ ListsGuard ];

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MomentModule,
    ToasterModule
  ],
  declarations: [
    CopyContainerComponent,
    FileDropzoneComponent,
    FileIconComponent,
    FileCardComponent,
    FileInfoComponent,
    ListInfoComponent,
    NavbarComponent,
    PagerComponent,
    PanelComponent,
    PanelBarComponent,
    PanelContentComponent,
    PanelBarSubtitleComponent,
    PanelBarTitleComponent,
    PanelGroupComponent,
    ToolbarComponent,
    ActionDelegateDirective
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MomentModule,
    ToasterModule,
    CopyContainerComponent,
    FileDropzoneComponent,
    FileIconComponent,
    FileCardComponent,
    FileInfoComponent,
    ListInfoComponent,
    NavbarComponent,
    PagerComponent,
    PanelComponent,
    PanelBarComponent,
    PanelContentComponent,
    PanelBarSubtitleComponent,
    PanelBarTitleComponent,
    PanelGroupComponent,
    ToolbarComponent,
    ActionDelegateDirective
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        OVERLAY_PROVIDERS,
        MdIconRegistry,
        APP_SERVICES,
        APP_MIDDLEWARE
      ]
    };
  }
}
