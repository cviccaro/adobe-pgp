import {Component, ViewChildren, QueryList} from '@angular/core';
import {CacheService} from "../../shared/cache/cache.service";
import {ListInfoComponent} from "../../shared/list/list-info/info.component";
import {ManagedFile} from "../../shared/file-dropzone/file";
import {MdIcon} from "@angular2-material/icon/icon";
import {MdButton} from "@angular2-material/button/button";
import {PgpService} from "../../shared/pgp/pgp.service";
import {PanelGroupComponent} from "../../shared/panel2/group/panel-group.component";
import {PanelComponent} from "../../shared/panel2/panel2.component";

@Component({
  moduleId: module.id,
  selector: 'apgp-bulk-preview',
  templateUrl: './preview.component.html',
  styleUrls: [ './preview.component.css' ],
  directives: [ ListInfoComponent, MdButton, MdIcon, PanelGroupComponent, PanelComponent ]
})
export class BulkPreviewComponent {
  lists: any[] = [];
  files: ManagedFile[] = [];
  submitted = false;
  bulkDownloadUrl: string;

  @ViewChildren(ListInfoComponent) listCmps: QueryList<ListInfoComponent>;

  constructor(public cache: CacheService, public pgp: PgpService) {
    this.lists = cache.get('lists');
    this.files = cache.get('files');

    this.lists.map(list => {
      list.managedFile = this.files.find(file => file.filename === list.file);
    });
  }

  submit() {
    //console.log('Submit! ', { lists: this.lists });
    //this.listCmps.forEach(cmp => cmp.expandPanel());
    this.pgp.signMany(this.lists)
      .subscribe(res => {
       // console.log('Response from signMany: ', res);
        for (let file in res.lists) {
          let list = this.lists.find(list => list.file === file);
          let signed = res.lists[file].data;
          let url = res.lists[file].url;

          //console.log({signed: signed, url: url});

          let signedData = [];

          for (let email in signed) {
            signedData.push({ email: email, signed: signed[email] });
          }

          list.signed = { data: signedData, url: url };
          list.hasData = true;
          //console.log(list);
        }
        this.bulkDownloadUrl = res.url;
        this.submitted = true;
      });
  }

  downloadAll() {
    window.open(this.bulkDownloadUrl, '_blank');
  }
}
