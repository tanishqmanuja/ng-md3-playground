import { Component } from "@angular/core";
import "@material/web/iconbutton/filled-icon-button.js";
import {
	MdIconButtonComponent,
	provideIconButtonValueAccessor,
} from "./icon-button.component";

@Component({
	selector: "md-filled-icon-button",
	standalone: true,
	template: ` <ng-content></ng-content>`,
	styleUrls: ["../icon/icon-fonts.scss"],
	providers: [provideIconButtonValueAccessor(MdFilledIconButtonComponent)],
})
export class MdFilledIconButtonComponent extends MdIconButtonComponent {}
