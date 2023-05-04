import { Component, ElementRef, Input, NgZone, inject } from "@angular/core";
import { NavigationTab as NavigationTabElement } from "@material/web/navigationtab/lib/navigation-tab";
import "@material/web/navigationtab/navigation-tab.js";
import {
	BooleanInput,
	coerceBooleanProperty,
} from "src/app/shared/utils/coercion/boolean-property";

@Component({
	selector: "md-navigation-tab",
	standalone: true,
	template: ` <ng-content></ng-content>`,
})
export class MdNavigationTabComponent {
	private el: NavigationTabElement = inject(ElementRef).nativeElement;
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
	set active(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.active = coerceBooleanProperty(v);
		});
	}
	get active() {
		return this.el.active;
	}

	@Input()
	set hideInactiveLabel(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.hideInactiveLabel = coerceBooleanProperty(v);
		});
	}
	get hideInactiveLabel() {
		return this.el.hideInactiveLabel;
	}

	@Input()
	set showBadge(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.showBadge = coerceBooleanProperty(v);
		});
	}
	get showBadge() {
		return this.el.showBadge;
	}

	@Input()
	set label(v: string | undefined) {
		this.ngZone.runOutsideAngular(() => {
			this.el.label = v;
		});
	}
	get label() {
		return this.el.label;
	}

	@Input()
	set badgeValue(v: string) {
		this.ngZone.runOutsideAngular(() => {
			this.el.badgeValue = v;
		});
	}
	get badgeValue() {
		return this.el.badgeValue;
	}
}
