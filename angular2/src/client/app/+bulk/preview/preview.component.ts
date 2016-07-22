import { Component } from '@angular/core';
import {CacheService} from "../../shared/cache/cache.service";
import {ListInfoComponent} from "../../shared/list/list-info/info.component";
import {ManagedFile} from "../../shared/file-dropzone/file";
import {MdIcon} from "@angular2-material/icon/icon";
import {MdButton} from "@angular2-material/button/button";
import {PgpService} from "../../shared/pgp/pgp.service";

@Component({
  moduleId: module.id,
  selector: 'apgp-bulk-preview',
  templateUrl: './preview.component.html',
  styleUrls: [ './preview.component.css' ],
  directives: [ ListInfoComponent, MdButton, MdIcon ]
})
export class BulkPreviewComponent {
  lists: any[] = [];
  files: ManagedFile[] = [];
  encrypted = false;

  constructor(public cache: CacheService, public pgp: PgpService) {
    this.lists = cache.get('lists');
    this.files = cache.get('files');

    this.lists.map(list => {
      list.managedFile = this.files.find(file => file.filename === list.file);
    });
  }

  ngAfterViewInit() {
    console.log('BulkPreviewComponent View Initialized', this);
  }

  submit() {
    console.log('Submit! ', { lists: this.lists });
    this.pgp.encryptMany(this.lists)
      .subscribe(res => {
        console.log('Response from EncryptMany: ', res);
        for (let file in res) {
          let list = this.lists.find(list => list.file === file);
          let encrypted = res[file];
          let encryptedData = [];
          for (let key in encrypted) {
            encryptedData.push({ email: key, encrypted: encrypted[key] });
          }

          list.encrypted = encryptedData;
          console.log(list);
        }
        this.encrypted = true;
      })
  }

  downloadAll() {
    console.log('Download all!!!!');
  }
}
