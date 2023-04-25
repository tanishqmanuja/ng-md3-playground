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
import type { MdCheckbox as MdCheckboxElement } from "@material/web/checkbox/checkbox.js";
import "@material/web/checkbox/checkbox.js";
import { fromEvent, map, tap, merge, takeUntil } from "rxjs";
import {
	BooleanInput,
	coerceBooleanProperty,
} from "src/app/shared/utils/coercion/boolean-property";
import { provideValueAccessor } from "src/app/shared/utils/ng/provide-value-accessor";
import { useOnDestroy } from "src/app/shared/utils/ng/use-on-destroy";

@Component({
	selector: "md-checkbox",
	standalone: true,
	template: ` <ng-content></ng-content>`,
	providers: [provideValueAccessor(MdCheckboxComponent)],
})
export class MdCheckboxComponent {
	private el: MdCheckboxElement = inject(ElementRef).nativeElement;
	private ngZone = inject(NgZone);
	private cdRef = inject(ChangeDetectorRef);
	private readonly onDestroy$ = useOnDestroy();

	@Input()
	set checked(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.checked = coerceBooleanProperty(v);
		});
	}
	get checked() {
		return this.el.checked;
	}

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
	set error(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.error = coerceBooleanProperty(v);
		});
	}
	get error() {
		return this.el.error;
	}

	@Input()
	set indeterminate(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.indeterminate = coerceBooleanProperty(v);
		});
	}
	get indeterminate() {
		return this.el.indeterminate;
	}

	@Input()
	set value(v: string) {
		this.ngZone.runOutsideAngular(() => {
			this.el.value = v;
		});
	}
	get value() {
		return this.el.value;
	}

	@Input()
	set name(v: string) {
		this.ngZone.runOutsideAngular(() => {
			this.el.name = v;
		});
	}
	get name() {
		return this.el.name;
	}

	@Output() changeEvent = new EventEmitter<boolean>();

	constructor() {
		this.ngZone.runOutsideAngular(() => {
			const handleChange$ = fromEvent(this.el, "change").pipe(
				map((ev: Event) => ev.target as MdCheckboxElement),
				tap(e => this.changeEvent.emit(e.checked)),
				tap(e => {
					this.onTouch();
					this.onChange(e.checked);
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
		this.checked = checked;
	}

	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}
}
