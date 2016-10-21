import { Component, ViewChild, OnDestroy } from '@angular/core';
import { FileDropzoneComponent } from '../shared/file-dropzone/file-dropzone';
import { PgpService } from '../shared/pgp/pgp.service';
import { ListService } from '../shared/list/list.service';
import { CacheService } from '../shared/cache/cache.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

/**
 * This class represents the lazy loaded BulkComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'apgp-bulk',
  templateUrl: './bulk.component.html',
  styleUrls: ['./bulk.component.css']
})
export class BulkComponent implements OnDestroy {
  @ViewChild(FileDropzoneComponent) dropzone : FileDropzoneComponent;
  listSub: Subscription;

  constructor(
    public pgp: PgpService,
    public list: ListService,
    public cache: CacheService,
    public router: Router
  ) { }

  preview() {
    //console.log('Preview! ', this.dropzone.files);
    this.listSub = this.list.uploadAndParse(this.dropzone.files)
      .subscribe((res: any) => {
        //console.log('Response: ', res);
        this.cache.store('lists', res.lists);
        this.cache.store('files', this.dropzone.files);
        this.router.navigate(['/bulk/preview']);
      });
  }

  ngOnDestroy() {
    if (this.listSub) this.listSub.unsubscribe();
  }
}
