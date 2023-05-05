import { Component } from "@angular/core";
import "@material/web/menu/menu-item-link";
import { MdMenuItemComponent } from "./menu-item.component";

@Component({
	selector: "md-menu-item-link",
	standalone: true,
	template: ` <ng-content></ng-content>`,
})
export class MdMenuItemLinkComponent extends MdMenuItemComponent {}
