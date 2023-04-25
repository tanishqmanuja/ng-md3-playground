import { Component, ElementRef, Input, NgZone, inject } from "@angular/core";
import type { MdDivider as MdDividerElement } from "@material/web/divider/divider.js";
import "@material/web/divider/divider.js";
import {
	BooleanInput,
	coerceBooleanProperty,
} from "src/app/shared/utils/coercion/boolean-property";

@Component({
	selector: "md-divider",
	standalone: true,
	template: ` <ng-content></ng-content>`,
})
export class MdDividerComponent {
	private el: MdDividerElement = inject(ElementRef).nativeElement;
	private ngZone = inject(NgZone);

	@Input()
	set inset(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.inset = coerceBooleanProperty(v);
		});
	}
	get inset() {
		return this.el.inset;
	}

	@Input()
	set insetStart(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.insetStart = coerceBooleanProperty(v);
		});
	}
	get insetStart() {
		return this.el.insetStart;
	}

	@Input()
	set insetEnd(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.insetEnd = coerceBooleanProperty(v);
		});
	}
	get insetEnd() {
		return this.el.insetEnd;
	}
}
