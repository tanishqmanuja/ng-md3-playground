import { Component } from "@angular/core";
import "@material/web/iconbutton/standard-icon-button.js";
import { MdIconButtonComponent } from "./icon-button.component";
import { provideValueAccessor } from "src/app/shared/utils/ng/provide-value-accessor";

@Component({
	selector: "md-standard-icon-button",
	standalone: true,
	template: ` <ng-content></ng-content>`,
	styleUrls: ["../icon/icon-fonts.scss"],
	providers: [provideValueAccessor(MdStandardIconButtonComponent)],
})
export class MdStandardIconButtonComponent extends MdIconButtonComponent {}
