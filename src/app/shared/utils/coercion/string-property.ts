export type OptionalStringInput<T extends string = string> = string extends T
	? string | null | undefined
	: T | "" | null | undefined;

export function coerceOptionalStringProperty<T extends string = string>(
	str: OptionalStringInput<T>
) {
	if (typeof str !== "string" || str.length === 0) {
		return undefined;
	}

	return str;
}
