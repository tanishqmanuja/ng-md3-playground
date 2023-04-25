import { Component } from "@angular/core";
import "@material/web/button/text-button.js";
import { provideValueAccessor } from "src/app/shared/utils/ng/provide-value-accessor";
import { MdButtonComponent } from "./button.component";

@Component({
	selector: "md-text-button",
	standalone: true,
	template: ` <ng-content></ng-content>`,
	providers: [provideValueAccessor(MdTextButtonComponent)],
})
export class MdTextButtonComponent extends MdButtonComponent {}
