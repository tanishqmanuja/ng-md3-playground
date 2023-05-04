import { Directive, inject, ElementRef, signal, effect } from "@angular/core";
import { MdIcon as MdIconElement } from "@material/web/icon/icon";
import {
	NumberInput,
	coerceNumberProperty,
} from "src/app/shared/utils/coercion/number-property";
import { OptionalStringInput } from "src/app/shared/utils/coercion/string-property";

const mdIconFontMap = {
	rounded: "Material Symbols Rounded",
	sharp: "Material Symbols Sharp",
	outlined: "Material Symbols Outlined",
} as const;
export type MdIconVariations = {
	fill?: number;
};

@Directive({
	standalone: true,
	selector: "md-icon[fill],md-icon[font]",
	inputs: ["fill", "font"],
})
export class MdIconVariationsDirective {
	private el: MdIconElement = inject(ElementRef).nativeElement;
	private readonly variations = signal<MdIconVariations>({});

	set fill(v: NumberInput) {
		this.variations.mutate(it => {
			it.fill = coerceNumberProperty(v, 1);
		});
	}

	set font(v: OptionalStringInput<keyof typeof mdIconFontMap>) {
		if (!v || !Object(mdIconFontMap).hasOwnProperty(v)) return;
		this.el.style.setProperty("--md-icon-font", mdIconFontMap[v]);
	}

	constructor() {
		effect(() => {
			let variationSettings = "";
			if (this.variations().fill) {
				variationSettings += `'FILL' ${this.variations().fill}`;
			}
			this.el.style.setProperty(
				"--md-icon-font-variation-settings",
				variationSettings
			);
		});
	}
}
