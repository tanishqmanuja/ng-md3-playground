import { Component } from "@angular/core";
import "@material/web/iconbutton/outlined-icon-button.js";
import {
	MdIconButtonComponent,
	provideIconButtonValueAccessor,
} from "./icon-button.component";

@Component({
	selector: "md-outlined-icon-button",
	standalone: true,
	template: ` <ng-content></ng-content>`,
	styleUrls: ["../icon/icon-fonts.scss"],
	providers: [provideIconButtonValueAccessor(MdOutlinedIconButtonComponent)],
})
export class MdOutlinedIconButtonComponent extends MdIconButtonComponent {}
