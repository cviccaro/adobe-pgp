import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {ManagedFile} from "../file-dropzone/file";
import 'rxjs/add/operator/map';
import {XhrService} from "../xhr/xhr.service";

@Injectable()
export class ListService {
  constructor(public http: Http, public xhr: XhrService) { }

  uploadAndParse(files: ManagedFile[]) {
    this.xhr.started();

    let form = new FormData();

    files.forEach((file: ManagedFile, i: number) => {
      form.append(`file[${i}]`, file._file);
    });

    return this.http.post('/api/upload-list', form)
      .map(res => {
        this.xhr.finished();
        return res.json()
      });
  }

  get(id: number) {
    this.xhr.started();
    return this.http.get(`/api/list/${id}`)
      .map(res => {
        this.xhr.finished();
        return res.json()
      });
  }

  queued() {
    this.xhr.started();
    return this.http.get('/api/list-queue')
      .map(res => {
        this.xhr.finished();
        return res.json()
      });
  }
}
