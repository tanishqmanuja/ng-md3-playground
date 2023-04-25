import { forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

export const provideValueAccessor = <T>(c: T) => ({
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => c),
	multi: true,
});
