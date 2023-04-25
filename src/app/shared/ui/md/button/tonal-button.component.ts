import { Component } from "@angular/core";
import "@material/web/button/tonal-button.js";
import { provideValueAccessor } from "src/app/shared/utils/ng/provide-value-accessor";
import { MdButtonComponent } from "./button.component";

@Component({
	selector: "md-tonal-button",
	standalone: true,
	template: ` <ng-content></ng-content>`,
	providers: [provideValueAccessor(MdTonalButtonComponent)],
})
export class MdTonalButtonComponent extends MdButtonComponent {}
