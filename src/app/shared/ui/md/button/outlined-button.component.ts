import { Component } from "@angular/core";
import "@material/web/button/outlined-button.js";
import { provideValueAccessor } from "src/app/shared/utils/ng/provide-value-accessor";
import { MdButtonComponent } from "./button.component";

@Component({
	selector: "md-outlined-button",
	standalone: true,
	template: ` <ng-content></ng-content>`,
	providers: [provideValueAccessor(MdOutlinedButtonComponent)],
})
export class MdOutlinedButtonComponent extends MdButtonComponent {}
