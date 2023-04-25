import { Component } from "@angular/core";
import "@material/web/button/filled-button.js";
import { provideValueAccessor } from "src/app/shared/utils/ng/provide-value-accessor";
import { MdButtonComponent } from "./button.component";

@Component({
	selector: "md-filled-button",
	standalone: true,
	template: ` <ng-content></ng-content>`,
	providers: [provideValueAccessor(MdFilledButtonComponent)],
})
export class MdFilledButtonComponent extends MdButtonComponent {}
