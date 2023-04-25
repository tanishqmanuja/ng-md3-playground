import { ChangeDetectionStrategy, Component } from "@angular/core";
import { JsonPipe } from "@angular/common";
import { MdSwitchComponent } from "../shared/ui/md/switch/switch.component";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MdIconComponent } from "../shared/ui/md/icon/icon.component";
import { MdIconButtonModule } from "../shared/ui/md/iconbutton/icon-button.module";
import { MdFabComponent } from "../shared/ui/md/fab/fab.component";
import { MdFabExtendedComponent } from "../shared/ui/md/fab/fab-extended.component";

@Component({
	standalone: true,
	template: `
		<h1>MD Test</h1>
		<form [formGroup]="testForm">
			<md-switch showOnlySelectedIcon formControlName="switch1"></md-switch>
			<md-switch icons formControlName="switch2"></md-switch>
			<md-standard-icon-button toggle formControlName="settings"
				>settings</md-standard-icon-button
			>
		</form>

		<md-icon>settings</md-icon>
		<md-outlined-icon-button>settings</md-outlined-icon-button>
		<md-filled-icon-button>settings</md-filled-icon-button>
		<md-filled-tonal-icon-button>settings</md-filled-tonal-icon-button>

		<md-fab icon="wifi" label="secondary"></md-fab>
		<md-fab-extended icon="wifi" label="secondary"></md-fab-extended>

		<h2>Form Value</h2>
		<pre>{{ testForm.value | json }}</pre>
	`,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		JsonPipe,
		MdSwitchComponent,
		ReactiveFormsModule,
		MdIconComponent,
		MdIconButtonModule,
		MdFabComponent,
		MdFabExtendedComponent,
	],
})
export default class TestComponent {
	testForm = new FormGroup({
		switch1: new FormControl(true),
		switch2: new FormControl(false),
		settings: new FormControl(true),
	});

	log(ev: any) {
		console.dir(ev);
	}
}
