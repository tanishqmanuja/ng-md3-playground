import { Component } from "@angular/core";
import "@material/web/iconbutton/filled-tonal-icon-button.js";
import { MdIconButtonComponent } from "./icon-button.component";
import { provideValueAccessor } from "src/app/shared/utils/ng/provide-value-accessor";

@Component({
	selector: "md-filled-tonal-icon-button",
	standalone: true,
	template: ` <ng-content></ng-content>`,
	providers: [provideValueAccessor(MdFilledTonalIconButtonComponent)],
})
export class MdFilledTonalIconButtonComponent extends MdIconButtonComponent {}
