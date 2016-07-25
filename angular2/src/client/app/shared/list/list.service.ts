import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {ManagedFile} from "../file-dropzone/file";
import 'rxjs/add/operator/map';

@Injectable()
export class ListService {
  constructor(public http: Http) { }

  uploadAndParse(files: ManagedFile[]) {
    //console.log('upload and parse! ', files);
    let form = new FormData();

    files.forEach((file: ManagedFile, i: number) => {
      form.append(`file[${i}]`, file._file);
    });

    return this.http.post('/api/upload-list', form)
      .map(res => res.json());
  }
}
