import { Component, ElementRef, Input, NgZone, inject } from "@angular/core";
import type { MdFab as MdFabElement } from "@material/web/fab/fab.js";
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
	set icon(v: string) {
		this.ngZone.runOutsideAngular(() => {
			this.el.icon = v;
		});
	}
	get icon() {
		return this.el.icon;
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
	get icons() {
		return this.el.lowered;
	}
}
