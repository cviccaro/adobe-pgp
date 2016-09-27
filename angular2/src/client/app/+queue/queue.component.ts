import {Component, OnInit, OnDestroy} from '@angular/core';
import {ListService} from "../shared/list/list.service";
import {CalendarPipe} from "angular2-moment/index";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list/list";
import {MD_ICON_DIRECTIVES} from "@angular2-material/icon/icon";
import {MD_SLIDE_TOGGLE_DIRECTIVES} from "@angular2-material/slide-toggle/slide-toggle";
import {MdButton} from "@angular2-material/button/button";
import {PercentPipe} from "@angular/common";
import {PagerComponent} from "../shared/pager/pager.component";
import {Subscription} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'apgp-queue',
  templateUrl: './queue.component.html',
  styleUrls: [ './queue.component.css' ],
  directives: [MD_LIST_DIRECTIVES, MdButton, MD_ICON_DIRECTIVES, PagerComponent, MD_SLIDE_TOGGLE_DIRECTIVES],
  pipes: [ CalendarPipe, PercentPipe ]
})
export class QueueComponent implements OnInit, OnDestroy {
  autorefresh: boolean = false;
  autorefreshInterval: number = 15;
  fetchTimer: any;
  hasLocalStorage: boolean = false;
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
  sortDescending: any = '1';
  queue: any[] = [];

  constructor(public listService: ListService) {
    this.hasLocalStorage = typeof localStorage !== "undefined";
  }

  ngOnInit() {
    if (this.hasLocalStorage) {
      let autorefresh = localStorage.getItem('jp_pgp_autorefresh_enabled');
      let interval = localStorage.getItem('jp_pgp_autorefresh_interval');
      let perPage = localStorage.getItem('jp_pgp_queue_length');
      let descending = localStorage.getItem('jp_pgp_queue_sort_descending');

      if (autorefresh !== null) {
        this.autorefresh = !!autorefresh;
      }
      if (interval !== null) {
        this.autorefreshInterval = +interval;
      }
      if (perPage !== null) {
        this.page.length = +perPage;
      }

      if (descending !== null) {
        this.page.descending = !!+descending;
      }
    }

    this.fetch();
  }

  fetch() {
    this.stopPolling();
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

      if (this.autorefresh) {
        this.startPolling();
      }
    });
  }

  startPolling() {
    this.stopPolling();
    this.fetchTimer = setInterval(() => { this.fetch(); }, this.autorefreshInterval * 1000);
  }

  stopPolling() {
    clearInterval(this.fetchTimer);
  }

  autorefreshChanged() {
    if (this.autorefresh) {
      this.startPolling();
    } else {
      this.stopPolling();
    }

    if (this.hasLocalStorage) {
      localStorage.setItem('jp_pgp_autorefresh_enabled', this.autorefresh ? '1' : '0');
    }
  }

  intervalChanged() {
    setTimeout(() => {
      if (this.hasLocalStorage) {
        localStorage.setItem('jp_pgp_autorefresh_interval', this.autorefreshInterval.toString());
      }

      this.stopPolling();
      if (this.autorefresh) {
        this.startPolling();
      }
    });
  }

  perPageChanged() {
    setTimeout(() => {
      if (this.page.current_page > (this.page.total / this.page.length)) this.page.current_page = 1;
      setTimeout(() => { this.fetch(); });

      if (this.hasLocalStorage) {
        localStorage.setItem('jp_pgp_queue_length', this.page.length.toString());
      }
    });
  }

  sortChanged() {
    setTimeout(() => {
      this.page.descending = !!+this.sortDescending;

      if (this.hasLocalStorage) {
        localStorage.setItem('jp_pgp_queue_sort_descending', this.page.descending ? '1' : '0');
      }

      this.fetch();
    });
  }

  download(list) {
    window.open(list.download_url, '_target');
  }

  pageChanged(num: number) {
    this.page.current_page = num;
    this.fetch();
  }

  ngOnDestroy() {
    this.stopPolling();
    if (this.listSub) this.listSub.unsubscribe();
  }
}
