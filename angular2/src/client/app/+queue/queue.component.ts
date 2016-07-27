import {Component, OnInit, OnDestroy} from '@angular/core';
import {ListService} from "../shared/list/list.service";
import {CalendarPipe} from "angular2-moment/index";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list/list";
import {MD_ICON_DIRECTIVES} from "@angular2-material/icon/icon";
import {MdButton} from "@angular2-material/button/button";
import {PercentPipe} from "@angular/common";
import {PagerComponent} from "../shared/pager/pager.component";
import {Subscription} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'apgp-queue',
  templateUrl: './queue.component.html',
  styleUrls: [ './queue.component.css' ],
  directives: [MD_LIST_DIRECTIVES, MdButton, MD_ICON_DIRECTIVES, PagerComponent],
  pipes: [ CalendarPipe, PercentPipe ]
})
export class QueueComponent implements OnInit, OnDestroy {
  fetchTimer: any;
  listSub: Subscription;
  page = {
    current_page: 1,
    from: 0,
    to: 0,
    length: 15,
    last_page: 1,
    order_by: 'created_at',
    descending: true,
    total: 0
  };
  queue: any[] = [];

  constructor(public listService: ListService) { }

  ngOnInit() {
    this.fetch();
  }

  clearTimer() {
    if (this.fetchTimer) clearInterval(this.fetchTimer);
  }

  fetch() {
    this.clearTimer();
    this.listSub = this.listService.queued({
      current_page: this.page.current_page,
      length: this.page.length,
      order_by: this.page.order_by,
      descending: this.page.descending
    })
    .subscribe((res: any) => {
      let page = Object.assign({}, this.page);

      page.from = res.from;
      page.to = (res.total < res.to) ? res.total : res.to;
      page.last_page = res.last_page;
      page.length = res.per_page;
      page.total = res.total;

      this.page = page;

      this.queue = res.data;

      this.fetchTimer = setInterval(() => { this.fetch(); }, 5000);
    });
  }

  perPageChanged() {
    if (this.page.current_page > (this.page.total / this.page.length)) this.page.current_page = 1;
    setTimeout(() => { this.fetch(); });
  }

  download(list) {
    window.open(list.download_url, '_target');
  }

  pageChanged(num: number) {
    this.page.current_page = num;
    this.fetch();
  }

  ngOnDestroy() {
    this.clearTimer();
    if (this.listSub) this.listSub.unsubscribe();
  }
}
