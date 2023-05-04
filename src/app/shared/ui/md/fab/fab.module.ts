import { NgModule } from "@angular/core";
import { MdFabComponent } from "./fab.component";
import { MdBrandedFabComponent } from "./branded-fab.component";

export const MdFabComponents = [MdFabComponent, MdBrandedFabComponent];

@NgModule({
	imports: MdFabComponents,
	exports: MdFabComponents,
})
export class MdFabModule {}
