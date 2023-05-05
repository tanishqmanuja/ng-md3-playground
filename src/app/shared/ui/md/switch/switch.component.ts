import {
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter,
	Input,
	NgZone,
	Output,
	forwardRef,
	inject,
} from "@angular/core";
import { fromEvent, map, merge, takeUntil, tap } from "rxjs";

import type { MdSwitch as MdSwitchElement } from "@material/web/switch/switch.js";
import "@material/web/switch/switch.js";
import {
	BooleanInput,
	coerceBooleanProperty,
} from "../../../utils/coercion/boolean-property";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
	selector: "md-switch",
	standalone: true,
	template: ` <ng-content></ng-content> `,
	styles: [],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => MdSwitchComponent),
			multi: true,
		},
	],
})
export class MdSwitchComponent implements ControlValueAccessor {
	private el: MdSwitchElement = inject(ElementRef).nativeElement;
	private ngZone = inject(NgZone);
	private cdRef = inject(ChangeDetectorRef);

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
	set icons(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.icons = coerceBooleanProperty(v);
		});
	}
	get icons() {
		return this.el.icons;
	}

	@Input()
	set showOnlySelectedIcon(v: BooleanInput) {
		this.ngZone.runOutsideAngular(() => {
			this.el.showOnlySelectedIcon = coerceBooleanProperty(v);
		});
	}
	get showOnlySelectedIcon() {
		return this.el.showOnlySelectedIcon;
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
				map((ev: Event) => ev.target as MdSwitchElement),
				tap(e => this.changeEvent.emit(e.selected)),
				tap(e => {
					this.onTouch();
					this.onChange(e.selected);
					this.cdRef.markForCheck();
				})
			);

			merge(handleChange$).pipe(takeUntilDestroyed()).subscribe();
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
