import {
    Component,
    Directive,
    Input,
    AfterViewInit,
    ViewChild,
    ElementRef,
    EventEmitter,
    Output,
    HostBinding,
    HostListener,
    OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/Rx';
//import { DateFormatPipe } from 'angular2-moment';
import { ManagedFile } from '../file';

@Directive({
    selector: '[jpaActionDelegateDirective]',
})
export class ActionDelegateDirective {
    @Output() clicked = new EventEmitter<Event>();
    @Output() hover = new EventEmitter<Event>();
    @Output() hoverOut = new EventEmitter<Event>();

    constructor(public el: ElementRef) { }

    @HostListener('click', ['$event'])
    onClick(e: Event) {
        this.clicked.emit(e);
    }
    @HostListener('mouseenter', ['$event'])
    onMouseEnter(e: Event) {
        this.hover.emit(e);
    }

    @HostListener('mouseleave', ['$event'])
    onMouseLeaver(e: Event) {
        this.hoverOut.emit(e);
    }
}

@Component({
    moduleId: module.id,
    selector: 'jpa-file-card',
    templateUrl: './file-card.component.html',
    styleUrls: [ './file-card.component.css' ]
})
export class FileCardComponent implements AfterViewInit, OnDestroy {
    public hovering = false;

    @Input() file: ManagedFile;
    @Input() actions: boolean = true;
    @Input() index: number;

    @Output() clickedRemove = new EventEmitter();

    @ViewChild(ActionDelegateDirective) actionDelegate : ActionDelegateDirective;

    @HostBinding('class.actions-hovering') get actionsHoveringClass() { return this.hovering; }

    private hoverSub: Subscription;
    private hoverOutSub: Subscription;

    remove(e: Event) {
        this.clickedRemove.emit(e);
    }

    ngAfterViewInit() {
        if (this.actionDelegate) {
            this.hoverSub = this.actionDelegate.hover.subscribe(() => this.hovering = true);
            this.hoverOutSub = this.actionDelegate.hoverOut.subscribe(() => this.hovering = false);
        }
    }

    ngOnDestroy() {
        if (this.hoverSub) this.hoverSub.unsubscribe();
        if (this.hoverOutSub) this.hoverOutSub.unsubscribe();
    }
}
