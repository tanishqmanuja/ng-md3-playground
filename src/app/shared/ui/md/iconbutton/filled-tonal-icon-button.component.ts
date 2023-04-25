import { Component } from "@angular/core";
import "@material/web/iconbutton/filled-tonal-icon-button.js";
import {
	MdIconButtonComponent,
	provideIconButtonValueAccessor,
} from "./icon-button.component";

@Component({
	selector: "md-filled-tonal-icon-button",
	standalone: true,
	template: ` <ng-content></ng-content>`,
	styleUrls: ["../icon/icon-fonts.scss"],
	providers: [provideIconButtonValueAccessor(MdFilledTonalIconButtonComponent)],
})
export class MdFilledTonalIconButtonComponent extends MdIconButtonComponent {}
