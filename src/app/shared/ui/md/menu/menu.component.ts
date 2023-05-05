import { Component, ElementRef, Input, NgZone, inject } from "@angular/core";
import "@material/web/menu/menu.js";
import { MdMenu as MdMenuElement } from "@material/web/menu/menu.js";
import {
	BooleanInput,
	coerceBooleanProperty,
} from "src/app/shared/utils/coercion/boolean-property";

@Component({
	selector: "md-menu",
	standalone: true,
	template: ` <ng-content></ng-content>`,
})
export class MdMenuComponent {
	private el: MdMenuElement = inject(ElementRef).nativeElement;
	private ngZone = inject(NgZone);

	@Input()
	set anchor(v: HTMLElement | null) {
		this.ngZone.runOutsideAngular(() => {
			this.el.anchor = v;
		});
	}
	get anchor() {
		return this.el.anchor;
	}

	@Input()
	set fixed(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.fixed = coerceBooleanProperty(v);
		});
	}
	get fixed() {
		return this.el.fixed;
	}

	@Input()
	set quick(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.quick = coerceBooleanProperty(v);
		});
	}
	get quick() {
		return this.el.quick;
	}

	@Input()
	set open(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.open = coerceBooleanProperty(v);
		});
	}
	get open() {
		return this.el.open;
	}

	public show() {
		this.el.show();
	}

	public close() {
		this.el.close();
	}

	constructor() {
		this.anchor = this.el;
	}
}
