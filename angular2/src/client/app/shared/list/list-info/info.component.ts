import {Component, Input, AfterViewInit, ViewChild} from '@angular/core';
import {FileCardComponent} from "../../file-dropzone/file-card/file-card.component";
import {MdCard} from "@angular2-material/card/card";
import {CopyContainerComponent} from "../../copy-container/copy-container.component";
import {PANEL2_DIRECTIVES} from "../../panel2/index";
import {PanelComponent} from "../../panel2/panel2.component";
import {MdIcon} from "@angular2-material/icon/icon";
import {MdButton} from "@angular2-material/button/button";
import {MD_TABS_DIRECTIVES} from "@angular2-material/tabs/tabs";

@Component({
  moduleId: module.id,
  selector: 'apgp-list-info',
  templateUrl: './info.component.html',
  styleUrls: [ './info.component.css' ],
  directives: [ FileCardComponent, MdCard, MdButton, MdIcon, CopyContainerComponent, PANEL2_DIRECTIVES, MD_TABS_DIRECTIVES ]
})
export class ListInfoComponent implements AfterViewInit {
  @Input() list: any;
  @Input() index: number;

  @ViewChild(PanelComponent) panel: PanelComponent;

  ngAfterViewInit() {
    console.log('ListInfoComponent view initialized', this);
  }

  getData(data: { [key: string] : string } ) {
    return data[Object.keys(data)[0]];
  }

  expandPanel() {
    console.log('expand panel!');
    if ( !this.panel.expanded ) this.panel.expanded = true;
  }

  download(url: string, evt: Event) {
    evt.stopPropagation();
    evt.stopImmediatePropagation();
    evt.preventDefault();
    window.open(url, '_blank');
  }
}
