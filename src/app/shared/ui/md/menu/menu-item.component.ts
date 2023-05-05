import { Component, ElementRef, Input, NgZone, inject } from "@angular/core";
import "@material/web/menu/menu-item.js";
import { MdMenuItem as MdMenuItemElement } from "@material/web/menu/menu-item.js";
import {
	BooleanInput,
	coerceBooleanProperty,
} from "src/app/shared/utils/coercion/boolean-property";

@Component({
	selector: "md-menu-item",
	standalone: true,
	template: ` <ng-content></ng-content>`,
})
export class MdMenuItemComponent {
	private el: MdMenuItemElement = inject(ElementRef).nativeElement;
	private ngZone = inject(NgZone);

	@Input()
	set headline(v: string) {
		this.ngZone.runOutsideAngular(() => {
			this.el.headline = v;
		});
	}
	get headline() {
		return this.el.headline;
	}

	@Input()
	set keepOpen(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.keepOpen = coerceBooleanProperty(v);
		});
	}
	get keepOpen() {
		return this.el.keepOpen;
	}
}
