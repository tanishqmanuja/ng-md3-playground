import { Component, ElementRef, Input, NgZone, inject } from "@angular/core";
import type {
	FabSize,
	MdFab as MdFabElement,
	Variant,
} from "@material/web/fab/fab.js";
import "@material/web/fab/fab.js";
import {
	BooleanInput,
	coerceBooleanProperty,
} from "src/app/shared/utils/coercion/boolean-property";

@Component({
	selector: "md-fab",
	standalone: true,
	template: ` <ng-content></ng-content>`,
	styleUrls: ["../icon/icon-fonts.scss"],
})
export class MdFabComponent {
	private el: MdFabElement = inject(ElementRef).nativeElement;
	private ngZone = inject(NgZone);

	@Input()
	set variant(v: Variant) {
		this.ngZone.runOutsideAngular(() => {
			this.el.variant = v;
		});
	}
	get variant() {
		return this.el.variant;
	}

	@Input()
	set size(v: FabSize) {
		this.ngZone.runOutsideAngular(() => {
			this.el.size = v;
		});
	}
	get size() {
		return this.el.size;
	}

	@Input()
	set label(v: string) {
		this.ngZone.runOutsideAngular(() => {
			this.el.label = v;
		});
	}
	get label() {
		return this.el.label;
	}

	@Input()
	set lowered(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.lowered = coerceBooleanProperty(v);
		});
	}
	get lowered() {
		return this.el.lowered;
	}
}
