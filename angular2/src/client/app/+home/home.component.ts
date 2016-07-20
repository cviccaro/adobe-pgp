import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { NameListService } from '../shared/index';
import {PgpService} from "../shared/pgp/pgp.service";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class HomeComponent implements OnInit {

  input: string;
  errorMessage: string;
  emails: any[] = [];
  encrypted: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * PgpService.
   *
   * @param {PgpService} pgp - The injected PgpService.
   */
  constructor(public pgp: PgpService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    console.log('HomeComponent initialized', this);
  }

  /**
   * Pushes a new name onto the arrays
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.pgp.encrypt(this.input)
      .subscribe(res => {
        console.log('response from encrypt: ', res);
        this.encrypted.push(res.encrypted);
      })

    this.emails.push(this.input);

    this.input = '';

    return false;
  }

  decrypt(encrypted: string) {
    this.pgp.decrypt(encrypted).subscribe(res => {
      console.log('Decrypted ' + encrypted + ' to ' + res);
    })
  }


}
