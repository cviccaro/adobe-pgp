import {Component, ViewChildren, QueryList} from '@angular/core';
import {CacheService} from "../../shared/cache/cache.service";
import {ListInfoComponent} from "../../shared/list/list-info/info.component";
import {ManagedFile} from "../../shared/file-dropzone/file";
import {MdIcon} from "@angular2-material/icon/icon";
import {MdButton} from "@angular2-material/button/button";
import {PgpService} from "../../shared/pgp/pgp.service";
import {PanelGroupComponent} from "../../shared/panel2/group/panel-group.component";
import {PanelComponent} from "../../shared/panel2/panel2.component";
import {MdSlideToggle} from "@angular2-material/slide-toggle/slide-toggle";
import {Router} from "@angular/router";
import {ToasterService} from "angular2-toaster/angular2-toaster";

@Component({
  moduleId: module.id,
  selector: 'apgp-bulk-preview',
  templateUrl: './preview.component.html',
  styleUrls: [ './preview.component.css' ],
  directives: [ ListInfoComponent, MdButton, MdIcon, MdSlideToggle, PanelGroupComponent, PanelComponent ]
})
export class BulkPreviewComponent {
  lists: any[] = [];
  files: ManagedFile[] = [];
  submitted = false;
  bulkDownloadUrl: string;

  useQueue: boolean = false;
  lockQueue: boolean = false;
  working: boolean = false;

  @ViewChildren(ListInfoComponent) listCmps: QueryList<ListInfoComponent>;

  constructor(public cache: CacheService, public pgp: PgpService, public router: Router, public toaster: ToasterService) {
    this.lists = cache.get('lists');
    this.files = cache.get('files');

    let total = 0;
    this.lists.map(list => {
      list.managedFile = this.files.find(file => file.filename === list.file);
      total = total + list.data.length;
    });

    console.log('Total Rows: ', total);

    if (total > 500) {
      this.useQueue = true;
      this.lockQueue = true;
    }

    console.log('Preview constructed ', this);
  }

  submit() {
    //console.log('Submit! ', { lists: this.lists });
    //this.listCmps.forEach(cmp => cmp.expandPanel());
    let count = this.lists.length;
    this.working = true;
    if (this.useQueue) {
      this.pgp.signManyQueued(this.lists)
        .subscribe(res => {
          console.log('SignManyQueued response: ', res);
          this.working = false;
          this.toaster.pop('success', 'Success!', count + ' lists have been queued.  Routing you to the Queue in 5 seconds...');
          setTimeout(() => { this.router.navigate(['/queue']); }, 5000);
        })
    } else {
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
          this.working = false;
          this.toaster.pop('success', 'Success!', count + ' lists have been signed.  Use the buttons to download individually, or download all lists bundled as a ZIP file.');
        });
    }
  }

  downloadAll() {
    window.open(this.bulkDownloadUrl, '_blank');
  }
}
