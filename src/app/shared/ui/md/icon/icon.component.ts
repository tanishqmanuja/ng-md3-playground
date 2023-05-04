import { Component } from "@angular/core";
import "@material/web/icon/icon.js";

@Component({
	selector: "md-icon",
	standalone: true,
	template: ` <ng-content></ng-content>`,
})
export class MdIconComponent {}
