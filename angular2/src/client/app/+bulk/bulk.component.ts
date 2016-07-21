import {Component, ViewChild} from '@angular/core';
import {MdCard} from "@angular2-material/card/card";
import {FileDropzoneComponent} from "../shared/file-dropzone/file-dropzone";
import {MD_GRID_LIST_DIRECTIVES} from "@angular2-material/grid-list/grid-list";
import {FileCardComponent} from "../shared/file-dropzone/file-card/file-card.component";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";
import {PgpService} from "../shared/pgp/pgp.service";
import {MD_ICON_DIRECTIVES} from "@angular2-material/icon/icon";

/**
 * This class represents the lazy loaded BulkComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'apgp-bulk',
  templateUrl: 'bulk.component.html',
  styleUrls: ['bulk.component.css'],
  directives: [
    MdCard,
    MD_BUTTON_DIRECTIVES,
    MD_GRID_LIST_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    FileDropzoneComponent,
    FileCardComponent,
  ]
})
export class BulkComponent {
  constructor(public pgp: PgpService) { }

  @ViewChild(FileDropzoneComponent) dropzone : FileDropzoneComponent;

  preview() {
    console.log('Preview! ', this.dropzone.files);
  }
}
