import { NgModule } from "@angular/core";
import { MdTextButtonComponent } from "./text-button.component";
import { MdFilledButtonComponent } from "./filled-button.component";
import { MdElevatedButtonComponent } from "./elevated-button.component";
import { MdOutlinedButtonComponent } from "./outlined-button.component";
import { MdTonalButtonComponent } from "./tonal-button.component";

export const MdButtonComponents = [
	MdTextButtonComponent,
	MdFilledButtonComponent,
	MdElevatedButtonComponent,
	MdOutlinedButtonComponent,
	MdTonalButtonComponent,
];

@NgModule({
	imports: MdButtonComponents,
	exports: MdButtonComponents,
})
export class MdButtonModule {}
