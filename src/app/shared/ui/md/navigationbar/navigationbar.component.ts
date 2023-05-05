import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	EventEmitter,
	Input,
	NgZone,
	Output,
	inject,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import "@material/web/navigationbar/navigation-bar.js";
import { MdNavigationBar as MdNavigationBarElement } from "@material/web/navigationbar/navigation-bar.js";
import {
	distinctUntilChanged,
	fromEvent,
	map,
	merge,
	startWith,
	tap,
} from "rxjs";
import {
	BooleanInput,
	coerceBooleanProperty,
} from "src/app/shared/utils/coercion/boolean-property";
import {
	NumberInput,
	coerceNumberProperty,
} from "src/app/shared/utils/coercion/number-property";

@Component({
	selector: "md-navigation-bar",
	standalone: true,
	template: ` <ng-content></ng-content>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdNavigationBarComponent {
	private el: MdNavigationBarElement = inject(ElementRef).nativeElement;
	private ngZone = inject(NgZone);

	@Input()
	set activeIndex(v: NumberInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.activeIndex = coerceNumberProperty(v);
		});
	}
	get activeIndex() {
		return this.el.activeIndex;
	}

	@Output() activeIndexChange = new EventEmitter<number>();

	@Input()
	set hideInactiveLabels(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.hideInactiveLabels = coerceBooleanProperty(v);
		});
	}
	get hideInactiveLabels() {
		return this.el.hideInactiveLabels;
	}

	constructor() {
		this.ngZone.runOutsideAngular(() => {
			const handleChange$ = fromEvent(this.el, "click").pipe(
				startWith(this.el.activeIndex),
				map(() => coerceNumberProperty(this.activeIndex)),
				distinctUntilChanged(),
				tap(v => this.activeIndexChange.emit(v))
			);

			merge(handleChange$).pipe(takeUntilDestroyed()).subscribe();
		});
	}
}
