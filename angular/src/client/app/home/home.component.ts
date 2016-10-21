import { Component } from '@angular/core';

import { PgpService } from '../shared/pgp/pgp.service';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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
  // decrypt(encrypted: string) {
  //   this.pgp.decrypt(encrypted).subscribe(res => {
  //     console.log('Decrypted ' + encrypted + ' to ' + res);
  //   });
  // }
}
