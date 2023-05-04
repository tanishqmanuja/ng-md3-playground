import { Component, ElementRef, Input, NgZone, inject } from "@angular/core";
import "@material/web/navigationbar/navigation-bar.js";
import {
	BooleanInput,
	coerceBooleanProperty,
} from "src/app/shared/utils/coercion/boolean-property";

@Component({
	selector: "md-navigation-bar",
	standalone: true,
	template: ` <ng-content></ng-content>`,
})
export class MdNavigationBarComponent {
	private el = inject(ElementRef).nativeElement;
	private ngZone = inject(NgZone);

	@Input()
	set activeIndex(v: Number) {
		this.ngZone.runOutsideAngular(() => {
			this.el.activeIndex = coerceBooleanProperty(v);
		});
	}
	get activeIndex() {
		return this.el.activeIndex;
	}

	@Input()
	set hideInactiveLabels(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.hideInactiveLabels = coerceBooleanProperty(v);
		});
	}
	get hideInactiveLabels() {
		return this.el.hideInactiveLabels;
	}
}
