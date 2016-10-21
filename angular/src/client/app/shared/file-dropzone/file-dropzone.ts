import { Component, OnInit, HostListener, HostBinding, ElementRef, Input } from '@angular/core';
import { ManagedFile } from './file';

@Component({
  moduleId: module.id,
  selector: 'apgp-file-dropzone',
  templateUrl: './file-dropzone.html',
  styleUrls: ['./file-dropzone.css']
})
export class FileDropzoneComponent implements OnInit {
  public files: ManagedFile[] = [];
  public summary = '';

  @Input() gridConfig: any;
  @Input() acceptExtensions = ['*'];
  @Input() display = true;

  private acceptAll = true;
  private gridConfigDefaults = {cols: 4, rowHeight: '16:9', gutterSize: '8px'};
  private draggingOver = false;

  constructor(public el: ElementRef) { }

  ngOnInit() {
    this.gridConfig = Object.assign({}, this.gridConfigDefaults, this.gridConfig);
    if (this.acceptExtensions[0] !== '*') {
      this.acceptAll = false;
    }
  }

  @HostBinding('class.apgp-file-dropzone') get defaultClass() { return true; }
  @HostBinding('class.file-drag-over') get fileDragOverClass() { return this.draggingOver; }

  @HostListener('dragover', ['$event'])
  onDragOver(evt: any) {
    //console.log('onDragOver', evt);
    this.draggingOver = true;
    let transfer = evt.dataTransfer ? evt.dataTransfer : evt.originalEvent.dataTransfer;
    transfer.dropEffect = 'copy';

    return false;
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(evt: any) {
    //console.log('onDragEnd', evt);
    this.draggingOver = false;

    return false;
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(evt: any) {
    //console.log('onDragLeave', evt);
    this.draggingOver = false;

    return false;
  }

  @HostListener('drop', ['$event'])
  onFileDrop(evt: any) {
    evt.stopPropagation();
    evt.preventDefault();

    this.draggingOver = false;
    let files = evt.target['files'] || evt['dataTransfer']['files'];

    this.readFiles(files);
    //console.log('onFileDrop', files);

    return false;
  }

  /**
   * Read dropped in files
   * @param files
   */
  readFiles(files: any[] = []) {
    if (!files.length) {
      return;
    }

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      let extension = file.name.split('.').pop();

      if (this.acceptAll || (this.acceptExtensions.indexOf(extension) !== -1)) {
        this.addFile(file, i);
      }
    }
  }

  /**
   * Add a file
   * @param file
   * @param idx
   */
  addFile(file: File, idx = 0) {
    let managedFile = new ManagedFile({ _file: file }, idx);
    this.files.push(managedFile);
  }

}
