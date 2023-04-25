import { NgModule } from "@angular/core";
import { MdStandardIconButtonComponent } from "./standard-icon-button.component";
import { MdOutlinedIconButtonComponent } from "./outlined-icon-button.component";
import { MdFilledIconButtonComponent } from "./filled-icon-button.component";
import { MdFilledTonalIconButtonComponent } from "./filled-tonal-icon-button.component";

export const MdIconButtonComponents = [
	MdStandardIconButtonComponent,
	MdOutlinedIconButtonComponent,
	MdFilledIconButtonComponent,
	MdFilledTonalIconButtonComponent,
];

@NgModule({
	imports: MdIconButtonComponents,
	exports: MdIconButtonComponents,
})
export class MdIconButtonModule {}
