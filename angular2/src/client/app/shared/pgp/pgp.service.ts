import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PgpService {
  constructor(public http: Http) { }

  decrypt(input: string) {
    return this.http.post('/api/decrypt', input)
      .map(res => res.json());
  }

  encrypt(input: string) {
    return this.http.post('/api/encrypt', input)
      .map(res => res.json());
  }

  encryptMany(lists: any[]) {
    return this.http.post('/api/encrypt-many', {lists: lists})
      .map(res => res.json());
  }

  sign(input: string) {
    return this.http.post('/api/sign', input)
      .map(res => res.json());
  }

  signMany(lists: any[]) {
    return this.http.post('/api/sign-many', {lists: lists})
      .map(res => res.json());
  }
}
