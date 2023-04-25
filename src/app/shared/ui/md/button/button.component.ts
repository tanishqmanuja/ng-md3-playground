import { Component, ElementRef, Input, NgZone, inject } from "@angular/core";

import type { Button as MdButtonElement } from "@material/web/button/lib/button.js";
import "@material/web/button/lib/button.js";
import {
	BooleanInput,
	coerceBooleanProperty,
} from "src/app/shared/utils/coercion/boolean-property";

import { provideValueAccessor } from "src/app/shared/utils/ng/provide-value-accessor";

@Component({
	template: ` <ng-content></ng-content>`,
	providers: [provideValueAccessor(MdButtonComponent)],
})
export class MdButtonComponent {
	private el: MdButtonElement = inject(ElementRef).nativeElement;
	private ngZone = inject(NgZone);

	@Input()
	set disabled(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.disabled = coerceBooleanProperty(v);
		});
	}
	get disabled() {
		return this.el.disabled;
	}

	@Input()
	set trailingIcon(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.trailingIcon = coerceBooleanProperty(v);
		});
	}
	get trailingIcon() {
		return this.el.trailingIcon;
	}

	@Input()
	set hasIcon(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.hasIcon = coerceBooleanProperty(v);
		});
	}
	get hasIcon() {
		return this.el.hasIcon;
	}

	@Input()
	set preventClickDefault(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.preventClickDefault = coerceBooleanProperty(v);
		});
	}
	get preventClickDefault() {
		return this.el.preventClickDefault;
	}

	@Input()
	set href(v: string | undefined) {
		this.ngZone.runOutsideAngular(() => {
			this.el.href = v;
		});
	}
	get href() {
		return this.el.href;
	}

	@Input()
	set target(v: string | undefined) {
		this.ngZone.runOutsideAngular(() => {
			this.el.target = v;
		});
	}
	get target() {
		return this.el.target;
	}
}
