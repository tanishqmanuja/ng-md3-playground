import { Component } from "@angular/core";
import "@material/web/menu/sub-menu-item.js";

@Component({
	selector: "md-sub-menu-item",
	standalone: true,
	template: ` <ng-content></ng-content>`,
})
export class MdSubMenuItemComponent {}
