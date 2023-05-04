import {
	ChangeDetectionStrategy,
	Component,
	Directive,
	ElementRef,
	effect,
	inject,
	signal,
} from "@angular/core";
import { JsonPipe } from "@angular/common";
import { MdSwitchComponent } from "../shared/ui/md/switch/switch.component";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MdIconComponent } from "../shared/ui/md/icon/icon.component";
import { MdIconButtonModule } from "../shared/ui/md/iconbutton/icon-button.module";
import { MdFabComponent } from "../shared/ui/md/fab/fab.component";
import { MdBrandedFabComponent } from "../shared/ui/md/fab/branded-fab.component";
import { MdButtonModule } from "../shared/ui/md/button/button.module";
import { MdCheckboxComponent } from "../shared/ui/md/checkbox/checkbox.component";
import { MdDividerComponent } from "../shared/ui/md/divider/divider.component";
import { MdNavigationTabComponent } from "../shared/ui/md/navigationtab/navigationtab.component";
import { MdNavigationBarComponent } from "../shared/ui/md/navigationbar/navigationbar.component";

@Component({
	standalone: true,
	template: `
		<h1>MD Test</h1>
		<md-divider />

		<h2>Form</h2>
		<form [formGroup]="testForm">
			<md-switch showOnlySelectedIcon formControlName="switch1"></md-switch>
			<md-switch icons formControlName="switch2"></md-switch>
			<md-standard-icon-button toggle formControlName="settings"
				>settings</md-standard-icon-button
			>
			<md-checkbox formControlName="check"></md-checkbox>
		</form>
		<h2>Form Value</h2>
		<pre>{{ testForm.value | json }}</pre>

		<h2>Icon</h2>
		<md-icon fill [style.--md-icon-font]="'Material Symbols Rounded'"
			>settings</md-icon
		>
		<md-icon fill="0.25" font>signal_wifi_bad</md-icon>

		<md-icon [style.--md-icon-font]="'Material Symbols Sharp'"
			>settings</md-icon
		>

		<h2>Icon Button</h2>
		<md-outlined-icon-button>settings</md-outlined-icon-button>
		<md-filled-icon-button>settings</md-filled-icon-button>
		<md-filled-tonal-icon-button>settings</md-filled-tonal-icon-button>
		<md-standard-icon-button toggle>settings</md-standard-icon-button>

		<h2>Fab</h2>
		<md-fab size="small" variant="surface">
			<md-icon slot="icon">settings</md-icon>
		</md-fab>
		<md-fab variant="primary" size="medium">
			<md-icon slot="icon">settings</md-icon>
		</md-fab>
		<md-fab label="primary" variant="primary"></md-fab>
		<md-fab label="secondary" variant="secondary"></md-fab>
		<md-fab label="tertiary" variant="tertiary"></md-fab>
		<md-branded-fab>
			<md-icon slot="icon">settings</md-icon>
		</md-branded-fab>

		<h2>Button</h2>
		<md-text-button>Text</md-text-button>
		<md-filled-button>Filled</md-filled-button>
		<md-outlined-button>Outlined</md-outlined-button>
		<md-tonal-button>Tonal</md-tonal-button>
		<md-elevated-button>Elevated</md-elevated-button>

		<h2>Nav</h2>
		<md-navigation-bar>
			<md-navigation-tab label="settings">
				<md-icon slot="inactiveIcon">settings</md-icon>
				<md-icon slot="activeIcon">settings</md-icon>
			</md-navigation-tab>
			<md-navigation-tab label="wifi">
				<md-icon slot="inactiveIcon">star</md-icon>
				<md-icon slot="activeIcon">star</md-icon>
			</md-navigation-tab>
		</md-navigation-bar>
	`,
	styles: [
		`
			md-icon[filled] {
				--md-icon-font-variation-settings: "FILL" 1;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		JsonPipe,
		MdSwitchComponent,
		ReactiveFormsModule,
		MdIconComponent,
		MdButtonModule,
		MdIconButtonModule,
		MdFabComponent,
		MdBrandedFabComponent,
		MdCheckboxComponent,
		MdDividerComponent,
		MdNavigationTabComponent,
		MdNavigationBarComponent,
	],
})
export default class TestComponent {
	variations = {
		fill: 0.25,
	};

	testForm = new FormGroup({
		switch1: new FormControl(true),
		switch2: new FormControl(false),
		settings: new FormControl(true),
		check: new FormControl(true),
	});

	log(ev: any) {
		console.dir(ev);
	}
}
