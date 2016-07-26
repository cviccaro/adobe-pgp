import {Component, Input, ViewChild, OnChanges, SimpleChanges, HostBinding, OnInit} from '@angular/core';
import {FileCardComponent} from "../../file-dropzone/file-card/file-card.component";
import {MdCard} from "@angular2-material/card/card";
import {CopyContainerComponent} from "../../copy-container/copy-container.component";
import {PANEL2_DIRECTIVES} from "../../panel2/index";
import {PanelComponent} from "../../panel2/panel2.component";
import {MdIcon} from "@angular2-material/icon/icon";
import {MdButton} from "@angular2-material/button/button";
import {MD_TABS_DIRECTIVES} from "@angular2-material/tabs/tabs";
import {NgSwitchDefault, NgSwitchCase, NgSwitch} from "@angular/common";
import {ChipComponent} from "../../chip/chip.component";
import {MD_GRID_LIST_DIRECTIVES} from "@angular2-material/grid-list/grid-list";

@Component({
  moduleId: module.id,
  selector: 'apgp-list-info',
  templateUrl: './info.component.html',
  styleUrls: [ './info.component.css' ],
  directives: [
    FileCardComponent,
    MdCard,
    MdButton,
    MdIcon,
    CopyContainerComponent,
    PANEL2_DIRECTIVES,
    MD_TABS_DIRECTIVES,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    ChipComponent,
    MD_GRID_LIST_DIRECTIVES
  ]
})
export class ListInfoComponent implements OnInit, OnChanges {
  @Input() list: any;
  @Input() index: number;
  @Input() hasData: boolean = false;

  @ViewChild(PanelComponent) panel: PanelComponent;

  stage = 1;

  ngOnInit() {
    if (this.list && this.list.data && this.list.data.length) {
      this.list.data.sort((a,b) => {
        return a.email.localeCompare(b.email);
      });
    }
  }

  email(data: { [key: string] : string } ) {
    return data[Object.keys(data)[0]];
  }

  expandPanel() {
    //console.log('expand panel!');
    if ( !this.panel.expanded ) this.panel.expanded = true;
  }

  download(url: string, evt: Event) {
    evt.stopPropagation();
    evt.stopImmediatePropagation();
    evt.preventDefault();
    window.open(url, '_blank');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('hasData')) {
      if (changes['hasData'].currentValue) {
        if (this.list.data.length <= 50) {
          this.stage = 2;
        }
      }
    }
  }
}
