import { Component, Input, AfterViewInit } from '@angular/core';
import {FileCardComponent} from "../../file-dropzone/file-card/file-card.component";
import {MdCard} from "@angular2-material/card/card";
import {CopyContainerComponent} from "../../copy-container/copy-container.component";

@Component({
  moduleId: module.id,
  selector: 'apgp-list-info',
  templateUrl: './info.component.html',
  styleUrls: [ './info.component.css' ],
  directives: [ FileCardComponent, MdCard, CopyContainerComponent ]
})
export class ListInfoComponent implements AfterViewInit {
  @Input() list: any;
  @Input() index: number;

  ngAfterViewInit() {
    console.log('ListInfoComponent view initialized', this);
  }

  getData(data: { [key: string] : string } ) {
    return data[Object.keys(data)[0]];
  }
}
