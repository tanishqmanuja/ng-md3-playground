import { NgModule } from "@angular/core";
import { MdFabComponent } from "./fab.component";
import { MdFabExtendedComponent } from "./fab-extended.component";

export const MdFabComponents = [MdFabComponent, MdFabExtendedComponent];

@NgModule({
	imports: MdFabComponents,
	exports: MdFabComponents,
})
export class MdFabModule {}
