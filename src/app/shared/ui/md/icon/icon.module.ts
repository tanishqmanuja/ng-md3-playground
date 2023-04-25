import { NgModule } from "@angular/core";
import { MdIconComponent } from "./icon.component";

export const MdIconComponents = [MdIconComponent];

@NgModule({
	imports: MdIconComponents,
	exports: MdIconComponents,
})
export class MdIconModule {}
