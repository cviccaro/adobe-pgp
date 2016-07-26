import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ListService} from "../shared/list/list.service";
import {CalendarPipe} from "angular2-moment/index";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list/list";
import {MD_ICON_DIRECTIVES} from "@angular2-material/icon/icon";
import {MdButton} from "@angular2-material/button/button";
import {PercentPipe} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'apgp-queue',
  templateUrl: './queue.component.html',
  styleUrls: [ './queue.component.css' ],
  directives: [MD_LIST_DIRECTIVES, MdButton, MD_ICON_DIRECTIVES],
  pipes: [ CalendarPipe, PercentPipe ]
})
export class QueueComponent implements OnInit, AfterViewInit {
  queue: any[] = [];

  constructor(public listService: ListService) { }

  ngOnInit() {
    this.listService.queued().subscribe(res => this.queue = res);
  }

  ngAfterViewInit() {
    console.log('QueueComponent view initialized', this);
  }

  download(list) {
    console.log('download this list!', list);
    window.open(list.download_url, '_target');
  }
}
