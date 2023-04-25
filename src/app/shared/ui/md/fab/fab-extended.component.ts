import { Component } from "@angular/core";
import "@material/web/fab/fab-extended.js";

import { MdFabComponent } from "./fab.component";

@Component({
	selector: "md-fab-extended",
	standalone: true,
	template: ` <ng-content></ng-content>`,
	styleUrls: ["../icon/icon-fonts.scss"],
})
export class MdFabExtendedComponent extends MdFabComponent {}
