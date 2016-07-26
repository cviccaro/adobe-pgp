import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {XhrService} from "../xhr/xhr.service";

@Injectable()
export class PgpService {
  constructor(public http: Http, public xhr: XhrService) { }

  decrypt(input: string) {
    this.xhr.started();
    return this.http.post('/api/decrypt', input)
      .map(res => {
        this.xhr.finished();
        return res.json()
      });
  }

  encrypt(input: string) {
    this.xhr.started();
    return this.http.post('/api/encrypt', input)
      .map(res => {
        this.xhr.finished();
        return res.json()
      });
  }

  encryptMany(lists: any[]) {
    this.xhr.started();
    return this.http.post('/api/encrypt-many', {lists: lists})
      .map(res => {
        this.xhr.finished();
        return res.json()
      });
  }

  sign(input: string) {
    this.xhr.started();
    return this.http.post('/api/sign', input)
      .map(res => {
        this.xhr.finished();
        return res.json()
      });
  }

  signMany(lists: any[]) {
    this.xhr.started();
    return this.http.post('/api/sign-many', {lists: lists})
      .map(res => {
        this.xhr.finished();
        return res.json()
      });
  }

  signManyQueued(lists: any[]) {
    this.xhr.started();
    return this.http.post('/api/sign-many/queue', {lists: lists})
      .map(res => {
        this.xhr.finished();
        return res.json()
      });
  }
}
