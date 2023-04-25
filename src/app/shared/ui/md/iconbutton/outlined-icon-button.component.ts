import { Component } from "@angular/core";
import "@material/web/iconbutton/outlined-icon-button.js";
import { MdIconButtonComponent } from "./icon-button.component";
import { provideValueAccessor } from "src/app/shared/utils/ng/provide-value-accessor";

@Component({
	selector: "md-outlined-icon-button",
	standalone: true,
	template: ` <ng-content></ng-content>`,
	styleUrls: ["../icon/icon-fonts.scss"],
	providers: [provideValueAccessor(MdOutlinedIconButtonComponent)],
})
export class MdOutlinedIconButtonComponent extends MdIconButtonComponent {}
