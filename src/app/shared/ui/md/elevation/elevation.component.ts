import { Component } from "@angular/core";
import "@material/web/elevation/elevation.js";

@Component({
	selector: "md-elevation",
	standalone: true,
	template: ` <ng-content></ng-content>`,
})
export class MdElevationComponent {}
