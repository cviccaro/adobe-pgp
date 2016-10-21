import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'apgp-copy-container',
  templateUrl: './copy-container.component.html',
  styleUrls: [ './copy-container.component.css' ]
})
export class CopyContainerComponent {
  @Input() text: string;

  copyToClipboard(str: string, el: HTMLTextAreaElement) {
    el.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      //console.log('Oops, unable to copy', err);
    }
  }
}
