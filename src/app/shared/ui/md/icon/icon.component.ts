import { Component } from "@angular/core";
import "@material/web/icon/icon.js";
import { MdIconVariationsDirective } from "./icon-variations.directive";

@Component({
	selector: "md-icon",
	standalone: true,
	hostDirectives: [
		{
			directive: MdIconVariationsDirective,
			inputs: ["fill", "font"],
		},
	],
	template: ` <ng-content></ng-content>`,
})
export class MdIconComponent {}
