import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PgpService {
  constructor(public http: Http) { }

  decrypt(input: string) {
    console.log('Decrypt this string: ', input);
    return this.http.post('/api/decrypt', input)
      .map(res => res.json());
  }

  encrypt(input: string) {
    console.log('Encrypt this string: ', input);
    return this.http.post('/api/encrypt', input)
      .map(res => res.json());
  }
}
