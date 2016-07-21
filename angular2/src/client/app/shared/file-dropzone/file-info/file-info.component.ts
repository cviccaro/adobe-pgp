import {Component, Input, AfterViewInit } from "@angular/core";
import {ManagedFile} from "../file";
import {FileCardComponent} from "../file-card/file-card.component";

@Component({
  moduleId: module.id,
  selector: 'apgp-file-info',
  templateUrl: './file-info.component.html',
  styleUrls: [ './file-info.component.css' ],
  directives: [ FileCardComponent ]
})
export class FileInfoComponent implements AfterViewInit {
  @Input() file : ManagedFile;
  @Input() index: number = 0;

  ngAfterViewInit() {
    console.log('FileInfoComponent View Initialized. ', this);
  }
}
