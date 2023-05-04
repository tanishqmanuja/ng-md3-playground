import { Component, Input } from "@angular/core";
import "@material/web/fab/branded-fab.js";

import { MdFabComponent } from "./fab.component";
import { Variant } from "@material/web/fab/fab";

@Component({
	selector: "md-branded-fab",
	standalone: true,
	template: ` <ng-content></ng-content>`,
})
export class MdBrandedFabComponent extends MdFabComponent {}
