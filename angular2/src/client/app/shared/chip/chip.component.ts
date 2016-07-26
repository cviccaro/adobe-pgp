import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MdButton} from "@angular2-material/button/button";
import {MdIcon} from "@angular2-material/icon/icon";

@Component({
	moduleId: module.id,
	selector: 'jpa-chip',
	templateUrl: './chip.component.html',
	styleUrls: ['./chip.component.css'],
	directives: [ MdButton, MdIcon ]
})
export class ChipComponent {
	@Input() id: any;
	@Input() removeEnabled: boolean = false;

	@Output() onRemove = new EventEmitter();

	remove(e) {
		e.preventDefault();
		e.stopPropagation();

		this.onRemove.emit(this.id);
	}
}
