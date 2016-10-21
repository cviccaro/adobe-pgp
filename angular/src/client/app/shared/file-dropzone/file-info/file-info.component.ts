import { Component, Input } from '@angular/core';
import { ManagedFile } from '../file';

@Component({
  moduleId: module.id,
  selector: 'apgp-file-info',
  templateUrl: './file-info.component.html',
  styleUrls: [ './file-info.component.css' ]
})
export class FileInfoComponent {
  @Input() file : ManagedFile;
  @Input() index: number = 0;
}
