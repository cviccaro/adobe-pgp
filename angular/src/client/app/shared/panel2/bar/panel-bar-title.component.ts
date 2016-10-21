import {
    Component,
    Output,
    EventEmitter,
    HostListener
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jpa-panel2-bar-title',
    templateUrl: './panel-bar-title.component.html'
})
export class PanelBarTitleComponent {
    @Output() onClick = new EventEmitter();

    @HostListener('click', ['$event'])
    _onClick(evt: Event) {
        this.onClick.emit(evt);
    }
}

@Component({
    moduleId: module.id,
    selector: 'jpa-panel2-bar-subtitle',
    templateUrl: './panel-bar-title.component.html'
})
export class PanelBarSubtitleComponent {
    @Output() onClick = new EventEmitter();

    @HostListener('click', ['$event'])
    _onClick(evt: Event) {
        this.onClick.emit(evt);
    }
}
