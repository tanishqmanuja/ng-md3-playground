import { Component } from "@angular/core";
import "@material/web/button/elevated-button.js";
import { provideValueAccessor } from "src/app/shared/utils/ng/provide-value-accessor";
import { MdButtonComponent } from "./button.component";

@Component({
	selector: "md-elevated-button",
	standalone: true,
	template: ` <ng-content></ng-content>`,
	providers: [provideValueAccessor(MdElevatedButtonComponent)],
})
export class MdElevatedButtonComponent extends MdButtonComponent {}
