import { NgModule } from "@angular/core";
import { MdMenuComponent } from "./menu.component";
import { MdMenuItemComponent } from "./menu-item.component";
import { MdMenuItemLinkComponent } from "./menu-item-link.component";
import { MdSubMenuItemComponent } from "./sub-menu-item.component";

export const MdMenuComponents = [
	MdMenuComponent,
	MdMenuItemComponent,
	MdMenuItemLinkComponent,
	MdSubMenuItemComponent,
];

@NgModule({
	imports: MdMenuComponents,
	exports: MdMenuComponents,
})
export class MdMenuModule {}
