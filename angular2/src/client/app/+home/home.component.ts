import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import {PgpService} from "../shared/pgp/pgp.service";
import {MdInput} from "@angular2-material/input/input";
import {MdButton} from "@angular2-material/button/button";
import {MdCard} from "@angular2-material/card/card";
import {MD_TABS_DIRECTIVES} from "@angular2-material/tabs/tabs";
import {CopyContainerComponent} from "../shared/copy-container/copy-container.component";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, MdInput, MdButton, MdCard, MD_TABS_DIRECTIVES, CopyContainerComponent]
})
export class HomeComponent implements OnInit {

  input: string;
  errorMessage: string;
  emails: any[] = [];
  result: { input: string, pgp: string, base64: string };

  /**
   * Creates an instance of the HomeComponent with the injected
   * PgpService.
   *
   * @param {PgpService} pgp - The injected PgpService.
   */
  constructor(public pgp: PgpService) {}

  /**
   * On Init
   */
  ngOnInit() {
    console.log('HomeComponent initialized', this);
  }

  /**
   * Signs the form value
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  sign(): boolean {
    let input = this.input;
    this.pgp.sign(this.input)
      .subscribe((res: any) => {
        this.result = {
          input: input,
          pgp: res.armored,
          base64: res.base64
        };
      });

    this.input = '';

    return false;
  }

  /**
   * Decrypt a value
   * @param encrypted string
   */
  decrypt(encrypted: string) {
    this.pgp.decrypt(encrypted).subscribe(res => {
      console.log('Decrypted ' + encrypted + ' to ' + res);
    });
  }
}
