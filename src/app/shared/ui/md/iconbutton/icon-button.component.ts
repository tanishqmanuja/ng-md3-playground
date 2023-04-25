import {
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter,
	Input,
	NgZone,
	Output,
	inject,
} from "@angular/core";
import type { IconButton as MdIconButtonElement } from "@material/web/iconbutton/lib/icon-button";
import { fromEvent, map, tap, merge, takeUntil } from "rxjs";
import {
	BooleanInput,
	coerceBooleanProperty,
} from "src/app/shared/utils/coercion/boolean-property";
import { provideValueAccessor } from "src/app/shared/utils/ng/provide-value-accessor";
import { useOnDestroy } from "src/app/shared/utils/ng/use-on-destroy";

@Component({
	template: ` <ng-content></ng-content> `,
	providers: [provideValueAccessor(MdIconButtonComponent)],
})
export class MdIconButtonComponent {
	private el: MdIconButtonElement = inject(ElementRef).nativeElement;
	private ngZone = inject(NgZone);
	private cdRef = inject(ChangeDetectorRef);
	private readonly onDestroy$ = useOnDestroy();

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
	set selected(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.selected = coerceBooleanProperty(v);
		});
	}
	get selected() {
		return this.el.selected;
	}

	@Input()
	set toggle(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.toggle = coerceBooleanProperty(v);
		});
	}
	get toggle() {
		return this.el.toggle;
	}

	@Input()
	set href(v: string) {
		this.ngZone.runOutsideAngular(() => {
			this.el.href = v;
		});
	}
	get href() {
		return this.el.href;
	}

	@Input()
	set target(v: string) {
		this.ngZone.runOutsideAngular(() => {
			this.el.target = v;
		});
	}
	get target() {
		return this.el.target;
	}

	@Output() toggleEvent = new EventEmitter<boolean>();

	constructor() {
		this.ngZone.runOutsideAngular(() => {
			const handleChange$ = fromEvent(this.el, "change").pipe(
				map((ev: Event) => ev.target as MdIconButtonElement),
				tap(e => this.toggleEvent.emit(e.selected)),
				tap(e => {
					this.onTouch();
					this.onChange(e.selected);
					this.cdRef.markForCheck();
				})
			);

			merge(handleChange$).pipe(takeUntil(this.onDestroy$)).subscribe();
		});
	}

	onChange = (v: boolean) => {};
	onTouch = () => {};

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouch = fn;
	}

	writeValue(checked: boolean) {
		this.selected = checked;
	}

	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}
}
