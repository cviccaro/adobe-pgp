import { Component, Input, ViewChild, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { PanelComponent } from '../../panel2/panel2.component';

@Component({
  moduleId: module.id,
  selector: 'apgp-list-info',
  templateUrl: './info.component.html',
  styleUrls: [ './info.component.css' ]
})
export class ListInfoComponent implements OnInit, OnChanges {
  @Input() list: any;
  @Input() index: number;
  @Input() hasData: boolean = false;

  @ViewChild(PanelComponent) panel: PanelComponent;

  stage = 1;

  ngOnInit() {
    if (this.list && this.list.data && this.list.data.length) {
      this.list.data.sort((a: any, b: any) => {
        let key = 'email';
        if (Object.keys(a).length === 1) key = Object.keys(a)[0];
        return a[key].localeCompare(b[key]);
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
